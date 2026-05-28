"use server";

import { headers } from "next/headers";

import type { SignInFormData } from "@/features/auth/hooks/useSignIn";
import signInSchema from "@/features/auth/schemas/signInSchema";
import { auth } from "@/lib/auth";
import { renderError } from "@/utils/helpers";

const signInAction = async (formData: SignInFormData) => {
  try {
    const validatedData = signInSchema.parse(formData);

    await auth.api.signInEmail({
      body: validatedData,
      headers: await headers(),
    });

    return { success: true, message: "User signed in" };
  } catch (error) {
    return renderError(error);
  }
};

export default signInAction;
