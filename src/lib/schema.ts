import { z } from "zod";

export const formSchema = z.object({
  firstname: z.string().min(2).max(50),
  lastname: z.string().min(2).max(50),
  email: z.string().email(),
  phoneno: z.string().min(10).max(10),
  message: z.string().min(2),
});