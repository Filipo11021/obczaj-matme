import { NextApiRequest, NextApiResponse } from "next";
import { sendMail } from "lib/sendMail";
import Joi from "joi";

type Message = {
  email: string;
  text: string;
};
const bodySchema = Joi.object({
  email: Joi.string().email({}),
  text: Joi.string(),
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
    res.status(404).json({ error: "validation error" });
    return
  }
  const { email, text }: Message = JSON.parse(req.body);

  try {
    await sendMail({
      to: process.env.GOOGLE_EMAIL as string,
      subject: "contact message",
      text: text,
    });
    await sendMail({
      to: email,
      subject: "potwierdzenie wyslania wiadomosci",
      text: "twoja wiadomosc kontaktowa zostala wyslana",
    });

    res.json({ sent: "true" });
    return
  } catch (error) {
    res.status(404).json({ error: "error" });
    return
  }
}
