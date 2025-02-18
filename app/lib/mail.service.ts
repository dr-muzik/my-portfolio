import { createTransport } from "nodemailer";

export const mailSender = async (
  email: string,
  title: string,
  body: string
) => {
  // console.log("env: ", process.env.MAIL_PASS);
  try {
    const transporter = createTransport({
      host: process.env.MAIL_HOST,
      port: 465,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      secure: true,
      connectionTimeout: 10000,
    });
    // console.log(`host: ${process.env.MAIL_HOST}`);

    const info = await transporter.sendMail({
      from: `"TechGeniusApplications Team" <${process.env.MAIL_USER}>`, // sender address
      to: `${email}`, // list of receivers
      subject: `${title}`, // Subject line
      html: `${body}`, // html body
    });
    console.log(info.response);
    return info;
  } catch (error) {
    console.log(`mailError:`, error);
    return error;
  }
};
