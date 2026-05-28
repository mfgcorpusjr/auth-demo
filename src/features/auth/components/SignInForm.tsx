import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import FormInput from "@/components/form/FormInput";

import useSignIn from "@/features/auth/hooks/useSignIn";

export default function SignInForm() {
  const { form, signIn, isPending } = useSignIn();

  return (
    <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(signIn)}>
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

      <Button disabled={isPending}>
        {isPending && <Spinner data-icon="inline-start" />}
        Sign In
      </Button>
    </form>
  );
}
