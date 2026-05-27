import { FaGoogle, FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";

import { authClient } from "@/lib/auth-client";

export default function OAuthForm() {
  const handleSignIn = async (provider: string) => {
    await authClient.signIn.social({
      provider,
      callbackURL: "/dashboard",
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <Button variant="outline" onClick={() => handleSignIn("google")}>
        <FaGoogle />
        Continue with Google
      </Button>

      <Button variant="outline" onClick={() => handleSignIn("github")}>
        <FaGithub />
        Continue with Github
      </Button>
    </div>
  );
}
