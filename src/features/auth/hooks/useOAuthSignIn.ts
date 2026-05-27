import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";

const useOAuthSignIn = () => {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const signIn = async (provider: string) => {
    startTransition(async () => {
      await authClient.signIn.social({
        provider,
        callbackURL: "/dashboard",
        fetchOptions: {
          onError(context) {
            toast.error(context.error.message);
          },
        },
      });
    });
  };

  return {
    signIn,
    isPending,
  };
};

export default useOAuthSignIn;
