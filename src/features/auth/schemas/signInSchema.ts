import { z } from "zod";

const signInSchema = z.object({
  email: z.email({ error: "Email is required" }).trim(),
  password: z.string().trim().min(1, { error: "Password is required" }),
});

export default signInSchema;
