"use server";

import { headers } from "next/headers";

import { auth } from "@/lib/auth";
import { renderError } from "@/utils/helpers";

const signOutAction = async () => {
  try {
    await auth.api.signOut({
      headers: await headers(),
    });

    return { success: true, message: "User signed out" };
  } catch (error) {
    return renderError(error);
  }
};

export default signOutAction;
