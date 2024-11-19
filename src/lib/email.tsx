"use server"

import { z } from "zod"
import { formSchema } from "./schema"
import { Resend } from 'resend';
import { EmailTemplate } from "@/app/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (formData : z.infer<typeof formSchema>) => {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: [formData.email],
    subject: 'Hello world',
    react: EmailTemplate({ 
      firstName: formData.firstname, 
      lastName: formData.lastname,
      phoneno: formData.phoneno,
      email: formData.email,
      message: formData.message
    }),
  });

  if(error){
    throw(error);
  }
}