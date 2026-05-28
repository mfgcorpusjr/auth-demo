import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import signInSchema from "@/features/auth/schemas/signInSchema";
import signInAction from "@/features/auth/actions/signInAction";

export type SignInFormData = z.infer<typeof signInSchema>;

const useSignIn = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signIn = (formData: SignInFormData) => {
    startTransition(async () => {
      const result = await signInAction(formData);

      if (!result.success) {
        toast.error(result.message);
      }
    });
  };

  return {
    form,
    signIn,
    isPending,
  };
};

export default useSignIn;
