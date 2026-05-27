import Link from "next/link";
import { LucideArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-4 max-w-2xl mx-auto py-8">
      <h2 className="text-3xl text-center font-black tracking-tight">
        Welcome to Auth Demo
      </h2>

      <p className="text-muted-foreground text-center">
        A comprehensive authentication demo showcasing various login methods
        including{" "}
        <span className="text-foreground font-medium italic">
          email/password
        </span>
        , <span className="text-foreground font-medium italic"> Github</span>{" "}
        and <span className="text-foreground font-medium italic">Google</span>{" "}
        authentication using{" "}
        <a
          href="https://better-auth.com/"
          target="_blank"
          className="text-foreground font-medium"
        >
          BetterAuth
        </a>
        .
      </p>

      <Button asChild size="lg" className="max-w-50 w-full mt-4">
        <Link href="/auth">
          Get Started
          <LucideArrowRight />
        </Link>
      </Button>
    </section>
  );
}
