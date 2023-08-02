import { createTransport, getTestMessageUrl } from 'nodemailer';
import validator from 'validator';


const config = useRuntimeConfig();

interface Data {
    name: string;
    email: string;
    subject: string;
    message: string;
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

export default defineEventHandler(async(event) => {
        
        const body = await readBody<Data>(event);

        const resultIsValid = isValid(body);

        if ( resultIsValid == true ){
            const mail = await transporter.sendMail({
                from: `"${body.name}" <${body.email}>`,
                to: config.CONTACTMAIL,
                subject: body.subject,
                text: body.message,
                html: body.message,
            });
        } else {
            throw createError({
                statusCode: 400,
                statusMessage: String(resultIsValid)
            })
        }

        return setResponseStatus(event, 200);
});

interface FieldError {
    field: string;
    error: string
};

function isValid(body: Data): boolean | FieldError[] {
    const errors: FieldError[] = [];

    if (validator.isEmpty(body.email || '')){
        errors.push({
            field: 'email',
            error: 'Field is required.'
        });
    };
        

    if (errors.length > 0){
        return errors
    } else {
        return true;
    };
} 

