"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { renderError } from "@/utils/helpers";

const signOutAction = async () => {
  try {
    await auth.api.signOut({
      headers: await headers(),
    });
  } catch (error) {
    return renderError(error);
  }

  redirect("/");
};

export default signOutAction;
