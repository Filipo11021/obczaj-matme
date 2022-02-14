import Joi from "joi";
import { sendMail } from "lib/sendMail";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }
  const { email } = req.body;
  console.log(email)
  const { value, error } = Joi.string().email().validate(email);
  if (error) {
    res.status(404).json({ "error": "validation error" });
    return;
  }
console.log('ok')
  try {
    await sendMail({
      to: email,
      subject: "potwierdzenie zapsiu",
      text: "twoje zgloszenie zostalo wyslane",
    });
    res.json({"sent": "true"})
    return
  } catch (error) {
    res.json({"error": "error"})
  }
}
