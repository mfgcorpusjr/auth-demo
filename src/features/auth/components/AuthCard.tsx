"use client";

import { useState } from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { FieldSeparator } from "@/components/ui/field";
import SignInForm from "@/features/auth/components/SignInForm";
import SignUpForm from "@/features/auth/components/SignUpForm";
import OAuthForm from "@/features/auth/components/OAuthForm";

const option = {
  "sign-in": {
    title: "Sign In",
    description: "Welcome back! Please sign in to your account.",
    form: <SignInForm />,
    footerQuestion: "Don't have an account?",
    footerActionText: "Sign Up",
  },
  "sign-up": {
    title: "Sign Up",
    description: "Join us today! Create your account to get started.",
    form: <SignUpForm />,
    footerQuestion: "Already have an account?",
    footerActionText: "Sign In",
  },
};

export default function AuthCard() {
  const [action, setAction] = useState<"sign-in" | "sign-up">("sign-in");

  const handleToggleAction = () =>
    setAction((currentAction) =>
      currentAction === "sign-in" ? "sign-up" : "sign-in",
    );

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-bold">
          {option[action].title}
        </CardTitle>

        <CardDescription className="text-muted-foreground">
          {option[action].description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-8">
        {option[action].form}

        <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card text-xs">
          Or continue with
        </FieldSeparator>

        <OAuthForm />

        <p className="text-xs text-muted-foreground text-center">
          {option[action].footerQuestion}{" "}
          <span
            className="underline underline-offset-4 cursor-pointer hover:text-foreground"
            onClick={handleToggleAction}
          >
            {option[action].footerActionText}
          </span>
        </p>
      </CardContent>
    </Card>
  );
}
