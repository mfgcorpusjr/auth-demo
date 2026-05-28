import { useTransition } from "react";
import { toast } from "sonner";

import signOutAction from "@/features/auth/actions/signOutAction";

const useSignOut = () => {
  const [isPending, startTransition] = useTransition();

  const signOut = () => {
    startTransition(async () => {
      const result = await signOutAction();

      if (!result.success) {
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
