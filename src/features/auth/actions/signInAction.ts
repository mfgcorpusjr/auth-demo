"use server";

import type { SignInFormData } from "@/features/auth/hooks/useSignIn";
import signInSchema from "@/features/auth/schemas/signInSchema";
import { toActionError } from "@/utils/helpers";

const signInAction = async (formData: SignInFormData) => {
  try {
    const validatedData = signInSchema.parse(formData);
  } catch (error) {
    return toActionError(error);
  }
};

export default signInAction;
