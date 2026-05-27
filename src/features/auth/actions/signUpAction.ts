"use server";

import type { SignUpFormData } from "@/features/auth/hooks/useSignUp";
import { toActionError } from "@/utils/helpers";

const signUpAction = async (formData: SignUpFormData) => {
  try {
  } catch (error) {
    return toActionError(error);
  }
};

export default signUpAction;
