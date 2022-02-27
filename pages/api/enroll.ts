import { formConfig } from "./../../config/googleForm";
import Joi from "joi";
import { sendMail } from "lib/sendMail";
import { NextApiRequest, NextApiResponse } from "next";
import { confirmation } from "config/confirmationTemplate";
const bodySchema = Joi.object({
  email: Joi.string().email().required(),
  firstName: Joi.string().min(1).required(),
  lastName: Joi.string().min(1).required(),
  option: Joi.string().valid("kurs", "lekcje").required(),
  questions: Joi.string().allow('').optional()
});
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
 
  
  if (req.method !== "POST") {
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const { error, value } = bodySchema.validate(JSON.parse(req.body));
 console.log(error)
  if (error) {
    res.status(404).json({ error: "wprowadź prawidłowe dane" });
    return;
  }
  
  const {
    email,
    lastName,
    firstName,
    option,
    questions
  }: { email: string; lastName: string; firstName: string; option: string, questions?:string } =
    JSON.parse(req.body);

  const submitHandler = async () => {
    let url = `${formConfig.url}?`

    Object.keys(value).forEach((key) => {
   
      url += `&${formConfig[key]}=${value[key]}`
    })

  console.log(url)

    await fetch(url, {
      method: 'POST'
    })
  };

  try {
    await submitHandler();
    await sendMail({
      to: email,
      subject: "Dziękujemy za kontakt",
      text: confirmation,
    });
    res.json({ sent: "true" });
    return;
  } catch (error) {
    console.log(error);
    res.json({ error: "error" });
  }
}
