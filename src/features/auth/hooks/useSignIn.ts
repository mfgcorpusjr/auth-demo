import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import signInSchema from "@/features/auth/schemas/signInSchema";
import { authClient } from "@/lib/auth-client";

export type SignInFormData = z.infer<typeof signInSchema>;

const useSignIn = () => {
  const router = useRouter();

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
      await authClient.signIn.email({
        ...formData,
        fetchOptions: {
          onSuccess: () => {
            router.replace("/dashboard");
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
    form,
    signIn,
    isPending,
  };
};

export default useSignIn;
