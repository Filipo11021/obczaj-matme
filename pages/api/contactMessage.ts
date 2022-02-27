import { NextApiRequest, NextApiResponse } from "next";
import { sendMail } from "lib/sendMail";
import Joi from "joi";
import { confirmation } from "config/confirmationTemplate";

type Message = {
  email: string;
  text: string;
};
const bodySchema = Joi.object({
  email: Joi.string().email({}).required(),
  text: Joi.string().required(),
});
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if(req.method !== 'POST'){
        res.status(405).end(`Method ${req.method} Not Allowed`)
        return
    }

  const {value, error} = bodySchema.validate(JSON.parse(req.body));

  if(error){
    res.status(404).json({ error: "Wprowadź prawidłowe dane" });
    return
  }
  const { email, text }: Message = JSON.parse(req.body);

  try {
  
    await sendMail({
      to: process.env.EMAIL_USER as string,
      subject: `kontakt ${email}`,
      text: text,
    });
  
    await sendMail({
      to: email,
      subject: "Dziękujemy za kontakt",
      html: confirmation,
    });

    res.json({ sent: "true" });
    return
  } catch (error) {
    console.log(error)
    res.status(404).json({ error: `Podczas wysyłania nastąpił nieznany błąd, spróbuj ponownie lub napisz maila na adres ${process.env.EMAIL_USER}` });
    return
  }
}
