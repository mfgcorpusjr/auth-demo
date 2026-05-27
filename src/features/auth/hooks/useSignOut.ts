import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";

const useSignOut = () => {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const signOut = () => {
    startTransition(async () => {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.replace("/");
            router.refresh();
          },
          onError(context) {
            toast.error(context.error.message);
          },
        },
      });
    });
  };

  return {
    signOut,
    isPending,
  };
};

export default useSignOut;
