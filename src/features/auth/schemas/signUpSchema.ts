import { z } from "zod";

const signUpSchema = z
  .object({
    email: z.email({ error: "Email is required" }).trim(),
    password: z
      .string()
      .trim()
      .min(5, { error: "Password must be at least 5 characters" }),
    confirmPassword: z
      .string()
      .trim()
      .min(5, { error: "Please confirm your password" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default signUpSchema;
