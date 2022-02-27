import nodemailer from "nodemailer";

type Mail = {
  from?: string | undefined;
  to: string;
  subject: string;
  text?: string;
  html?: string;
};

export async function sendMail({
  from = process.env.EMAIL_USER,
  to,
  subject,
  text,
  html,
}: Mail) {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from,
    to,
    subject,
    [html ? "html" : "text"]: html ? html : text,
  };
  const result = await transport.sendMail(mailOptions);
  return result;
}
