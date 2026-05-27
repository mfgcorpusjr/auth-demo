import { FaGoogle, FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";

export default function OAuthForm() {
  return (
    <div className="flex flex-col gap-2">
      <Button variant="outline">
        <FaGoogle />
        Continue with Google
      </Button>

      <Button variant="outline">
        <FaGithub />
        Continue with Github
      </Button>
    </div>
  );
}
