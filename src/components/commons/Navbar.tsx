import Link from "next/link";

import { Button } from "@/components/ui/button";
import Container from "@/components/commons/Container";

export default function Navbar() {
  return (
    <nav className="bg-white border-b">
      <Container className="flex justify-between items-center py-4">
        <Link href="/">
          <h1 className="text-lg font-bold tracking-tight">Auth Demo</h1>
        </Link>

        <Button asChild>
          <Link href="/auth">Sign In</Link>
        </Button>
      </Container>
    </nav>
  );
}
