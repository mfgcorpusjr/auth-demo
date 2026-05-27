import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import signUpSchema from "@/features/auth/schemas/signUpSchema";
import signUpAction from "@/features/auth/actions/signUpAction";

export type SignUpFormData = z.infer<typeof signUpSchema>;

const useSignUp = () => {
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
      const result = await signUpAction(formData);

      if (!result?.success) {
        toast.error(result?.message);
      }
    });
  };

  return {
    form,
    signUp,
    isPending,
  };
};

export default useSignUp;
