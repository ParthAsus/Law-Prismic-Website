import { z } from "zod";

export const formSchema = z.object({
  firstname: z.string().min(2).max(50),
  lastname: z.string().min(2).max(50),
  email: z.string().email(),
  phoneno: z.string().min(10).max(10),
  message: z.string().min(2),
});



export const careerFormSchema = z.object({
  firstName: z.string().min(2).max(20, {
    message: "First name must be at most 20 characters.",
  }),
  phoneNumber: z.string().min(10).max(10, {
    message: "PhoneNumber must be at least 10 numbers.",
  }),
  email: z.string().email( {
    message: "Email format is not correct.",
  }),
  resume: z
    .string()
    .nonempty({ message: "Resume must be uploaded as a valid Base64 string." }),
})