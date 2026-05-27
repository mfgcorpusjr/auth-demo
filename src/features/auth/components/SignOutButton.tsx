"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

import useSignOut from "@/features/auth/hooks/useSignOut";

export default function SignOutButton() {
  const { signOut, isPending } = useSignOut();

  return (
    <Button disabled={isPending} onClick={signOut}>
      {isPending && <Spinner data-icon="inline-start" />}
      Sign Out
    </Button>
  );
}
