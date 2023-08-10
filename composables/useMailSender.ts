import { createTransport } from "nodemailer";

export const useMailSender = () => {
  const config = useRuntimeConfig();

  const transporter = createTransport({
    host: config.MAILHOST,
    port: config.MAILPORT,
    secure: false,
    auth: {
      user: config.MAILUSER,
      pass: config.MAILPASSWORD,
    },
  });

  return {
    transporter,
  };
};
