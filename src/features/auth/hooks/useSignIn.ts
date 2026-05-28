import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import signInSchema from "@/features/auth/schemas/signInSchema";
import signInAction from "@/features/auth/actions/signInAction";

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
      const result = await signInAction(formData);

      if (result.success) {
        router.replace("/dashboard");
        router.refresh();
      } else {
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
