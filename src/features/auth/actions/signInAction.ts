"use server";

import type { SignInFormData } from "@/features/auth/hooks/useSignIn";
import { toActionError } from "@/utils/helpers";

const signInAction = async (formData: SignInFormData) => {
  try {
  } catch (error) {
    return toActionError(error);
  }
};

export default signInAction;
