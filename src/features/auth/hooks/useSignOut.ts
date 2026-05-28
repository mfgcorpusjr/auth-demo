import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import signOutAction from "@/features/auth/actions/signOutAction";

const useSignOut = () => {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const signOut = () => {
    startTransition(async () => {
      const result = await signOutAction();

      if (result.success) {
        router.replace("/");
        router.refresh();
      } else {
        toast.error(result.message);
      }
    });
  };

  return {
    signOut,
    isPending,
  };
};

export default useSignOut;
