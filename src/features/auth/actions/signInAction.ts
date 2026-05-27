"use server";

import type { SignInFormData } from "@/features/auth/hooks/useSignIn";

const signInAction = async (formData: SignInFormData) => {
  try {
  } catch (error) {
    return { success: false, message: "Invalid credentials" };
  }
};

export default signInAction;
