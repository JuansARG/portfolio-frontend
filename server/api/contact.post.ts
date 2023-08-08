import { createTransport, getTestMessageUrl } from 'nodemailer';
import validator from 'validator';


const config = useRuntimeConfig();

interface Data {
    name: string;
    email: string;
    subject: string;
    message: string;
};

interface FieldError {
    field: string;
    error: string
};

const transporter = createTransport({
    host: config.MAILHOST,
    port: +config.MAILPORT,
    secure: false,
    auth: {
        user: config.MAILUSER,
        pass: config.MAILPASSWORD
    },
});

export default defineEventHandler( async(event) => {

    try {
        const body = await readBody<Data>(event);

        await isValid(body)
            .then(async (data) => {

                const mail = await transporter.sendMail({
                    from: `"${body.name}" <${body.email}>`,
                    to: config.CONTACTMAIL,
                    subject: body.subject,
                    text: body.message,
                    html: body.message,
                });

                console.log('Message sent: %s', mail.messageId);
				console.log('Preview URL: %s', getTestMessageUrl(mail));
				return Promise.resolve();
            })
            .catch((errors) => {
                return Promise.reject(errors);
            });

        return 'Email enviado!';
    } catch (error) {
        sendError(event, createError({
            statusCode: 400,
            statusMessage: JSON.stringify(error)
        }));
    }
});

function isValid(body: Data): Promise<Data | FieldError[]> {
    
    const errors: FieldError[] = [];

    if (validator.isEmpty(body.email || ''))
        errors.push({
            field: 'email',
            error: 'Field is required.'
        });

    if (validator.isEmpty(body.name || ''))
		errors.push({ field: 'name', error: 'Field is required.' });

	if (validator.isEmpty(body.subject || ''))
		errors.push({ field: 'subject', error: 'Field is required.' });

	if (validator.isEmpty(body.message || ''))
		errors.push({ field: 'message', error: 'Field is required.' });

	if (!validator.isEmail(body.email || ''))
		errors.push({ field: 'email', error: 'Field should be a valid email.' });
        
    if (errors.length > 0){
        return Promise.reject<FieldError[]>(errors);
    } else {
        return Promise.resolve<Data>({
            name: validator.escape(body.name),
            email: validator.normalizeEmail(body.email) as string,
            subject: validator.escape(body.name),
            message: validator.escape(body.message),
        });
    };
} 

