import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
const sendEmail = async (Html: string, sender: string, receiver: string) => {
  const host = process.env.EMAIL_HOST
  const port = Number(process.env.EMAIL_PORT)
  const user = process.env.EMAIL_USER
  const pass = process.env.EMAIL_PASS

  const transporter = nodemailer.createTransport({
    host: host || "sandbox.smtp.mailtrap.io",
    port: port || 587,
    secure: false,
    auth: {
      user: user || "c0e514469aa9bf",
      pass: pass || "9fc3976e36589d",
    },
  });
  try {
    await transporter.sendMail({
      from: sender || "weekend_knocks@email.com",
      to: receiver,
      subject: "Verify Email",
      html: Html,
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export default sendEmail ;
