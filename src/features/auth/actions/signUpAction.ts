"use server";

import type { SignUpFormData } from "@/features/auth/hooks/useSignUp";
import signUpSchema from "@/features/auth/schemas/signUpSchema";
import { toActionError } from "@/utils/helpers";

const signUpAction = async (formData: SignUpFormData) => {
  try {
    const validatedData = signUpSchema.parse(formData);
  } catch (error) {
    return toActionError(error);
  }
};

export default signUpAction;
