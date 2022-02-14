import { google } from "googleapis";
import nodemailer from "nodemailer";

type Mail = {
  from?: string | undefined;
  to: string;
  subject: string;
  text: string;
};

export async function sendMail({
  from = process.env.GOOGLE_EMAIL,
  to,
  subject,
  text,
}: Mail) {
  const credentials = {
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    redirectUri: process.env.GOOGLE_REDIRECT,
    refreshToken: process.env.GOOGLE_REFRESH,
    email: process.env.GOOGLE_EMAIL,
  };

  const oAuth2Client = new google.auth.OAuth2(
    credentials.clientId,
    credentials.clientSecret,
    credentials.redirectUri
  );
  
  oAuth2Client.setCredentials({ refresh_token: credentials.refreshToken });

  const res = await nodemailerSend();
  return res;

  async function nodemailerSend() {
    const accessToken = await oAuth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "oauth2",
        user: credentials.email,
        clientId: credentials.clientId,
        clientSecret: credentials.clientSecret,
        refreshToken: credentials.refreshToken,
        accessToken: accessToken as string,
      },
    });

    const mailOptions = {
      from,
      to,
      subject,
      text,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  }
}
