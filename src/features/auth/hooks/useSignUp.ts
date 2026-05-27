import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import signUpSchema from "@/features/auth/schemas/signUpSchema";
import { authClient } from "@/lib/auth-client";

export type SignUpFormData = z.infer<typeof signUpSchema>;

const useSignUp = () => {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const signUp = (formData: SignUpFormData) => {
    startTransition(async () => {
      await authClient.signUp.email({
        ...formData,
        name: formData.email,
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
    signUp,
    isPending,
  };
};

export default useSignUp;
