import { createTransport } from "nodemailer";

export const useMailSender = () => {
  const config = useRuntimeConfig();

  const transporter = createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: config.EMAIL,
      pass: config.EMAIL_PASSWORD,
    },
  });

  return {
    transporter,
  };
};
