import { FaGoogle, FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";

import useOAuthSignIn from "@/features/auth/hooks/useOAuthSignIn";

export default function OAuthForm() {
  const { signIn, isPending } = useOAuthSignIn();

  return (
    <div className="flex flex-col gap-2">
      <Button
        variant="outline"
        disabled={isPending}
        onClick={() => signIn("google")}
      >
        <FaGoogle />
        Continue with Google
      </Button>

      <Button
        variant="outline"
        disabled={isPending}
        onClick={() => signIn("github")}
      >
        <FaGithub />
        Continue with Github
      </Button>
    </div>
  );
}
