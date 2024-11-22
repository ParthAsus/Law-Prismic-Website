"use server"

import { z } from "zod"
import { careerFormSchema, formSchema } from "./schema"
import { Resend } from 'resend';
import { EmailTemplate } from "@/app/components/email-template";
import { CareerFormEmailTemplate } from "@/app/components/career/careerFormEmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (formData : z.infer<typeof formSchema>) => {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: [formData.email],
    subject: 'Query',
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

export const careerFormDataSend = async (careerFormData: z.infer<typeof careerFormSchema>, jobTitle: string) => {

  try{
    const emailOptions: any = {
      from: 'Acme <onboarding@resend.dev>',
      to: [careerFormData.email],
      subject: 'Application Received',
      react: CareerFormEmailTemplate({
        jobTitle: jobTitle,
        firstName: careerFormData.firstName,
        phoneNumber: careerFormData.phoneNumber,
        email: careerFormData.email,
      }),
    };

    if (careerFormData.resume) {
      emailOptions.attachments = [
        {
          filename: "Resume.pdf",
          content: careerFormData.resume,
          encoding: "base64",
        },
      ];
    }

    const { data, error } = await resend.emails.send(emailOptions);
    if(error){
      throw new Error("Email sending failed.");
    }
  }
  catch (error) {
    console.error("An error occurred while sending the career form data:", error);
    throw error;
  }
}