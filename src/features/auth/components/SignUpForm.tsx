import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import FormInput from "@/components/form/FormInput";

import useSignUp from "@/features/auth/hooks/useSignUp";

export default function SignUpForm() {
  const { form, signUp, isPending } = useSignUp();

  return (
    <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(signUp)}>
      <FormInput
        type="email"
        name="email"
        control={form.control}
        label="Email"
        placeholder="Email"
      />

      <FormInput
        type="password"
        name="password"
        control={form.control}
        label="Password"
        placeholder="Password"
      />

      <FormInput
        type="password"
        name="confirmPassword"
        control={form.control}
        label="Confirm Password"
        placeholder="Confirm Password"
      />

      <Button disabled={isPending}>
        {isPending && <Spinner data-icon="inline-start" />}
        Sign Up
      </Button>
    </form>
  );
}
