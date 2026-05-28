"use server";

import type { SignUpFormData } from "@/features/auth/hooks/useSignUp";
import signUpSchema from "@/features/auth/schemas/signUpSchema";
import { auth } from "@/lib/auth";
import { renderError } from "@/utils/helpers";

const signUpAction = async (formData: SignUpFormData) => {
  try {
    const validatedData = signUpSchema.parse(formData);

    await auth.api.signUpEmail({
      body: {
        ...validatedData,
        name: validatedData.email,
      },
    });

    return { success: true, message: "User signed up" };
  } catch (error) {
    return renderError(error);
  }
};

export default signUpAction;
