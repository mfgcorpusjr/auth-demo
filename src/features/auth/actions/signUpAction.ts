"use server";

import { redirect } from "next/navigation";

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
  } catch (error) {
    return renderError(error);
  }

  redirect("/dashboard");
};

export default signUpAction;
