import Link from "next/link";
import { headers } from "next/headers";

import { Button } from "@/components/ui/button";
import Container from "@/components/commons/Container";
import SignOutButton from "@/features/auth/components/SignOutButton";

import { auth } from "@/lib/auth";

export default async function Navbar() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <nav className="bg-white border-b">
      <Container className="flex justify-between items-center py-4">
        <Link href="/">
          <h1 className="text-lg font-bold tracking-tight">Auth Demo</h1>
        </Link>

        {session ? (
          <SignOutButton />
        ) : (
          <Button asChild>
            <Link href="/auth">Sign In</Link>
          </Button>
        )}
      </Container>
    </nav>
  );
}
