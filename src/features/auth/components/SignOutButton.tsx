"use client";

import { Button } from "@/components/ui/button";

import useSignOut from "@/features/auth/hooks/useSignOut";

export default function SignOutButton() {
  const { signOut, isPending } = useSignOut();

  return (
    <Button disabled={isPending} onClick={signOut}>
      Sign Out
    </Button>
  );
}
