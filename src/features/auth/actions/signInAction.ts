"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

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
  } catch (error) {
    return renderError(error);
  }

  redirect("/dashboard");
};

export default signInAction;
