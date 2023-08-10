import { createTransport, getTestMessageUrl } from 'nodemailer';
import validator from 'validator';
import { useMailSender } from '../../composables/useMailSender';


const config = useRuntimeConfig();

const { transporter } = useMailSender();

interface DataEmail {
    name: string;
    email: string;
    subject: string;
    message: string;
};

interface FieldError {
    field: string;
    error: string
};

export default defineEventHandler( async(event) => {

    try {
        const body = await readBody<DataEmail>(event);

        await isValid(body)
            .then(async () => {

                await transporter.sendMail({
                    from: config.MAILUSER,
                    to: config.CONTACTMAIL,
                    subject: `Mensaje de: <${body.email}> Asunto: ${body.subject}`,
                    text: body.message,
                });

                await transporter.sendMail({
                    from: config.MAILUSER,
                    to: body.email,
                    subject: 'Respuesta Automática - Gracias por ponerte en contacto conmigo!',
                    html: `<p>Estimado/a <b>${body.name}</b>,</p>
                    <p>He recibido su mensaje y le agradesco su interés en mi servicios.</p>
                    <p>Revisare su mensaje y me pondre en contacto con usted lo antes posible.</p>
                    <p>¡Gracias nuevamente por su interés en mí!</p>
                    <p>Saludos cordiales,</p>
                    <p>Juan Ignacio Sarmiento</p>`,
                });

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

function isValid(body: DataEmail): Promise<DataEmail | FieldError[]> {
    
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
        return Promise.resolve<DataEmail>({
            name: validator.escape(body.name),
            email: validator.normalizeEmail(body.email) as string,
            subject: validator.escape(body.name),
            message: validator.escape(body.message),
        });
    };
} 

