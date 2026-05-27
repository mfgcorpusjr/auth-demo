import { Metadata } from "next";

import AuthCard from "@/features/auth/components/AuthCard";

export const metadata: Metadata = {
  title: "Auth",
};

export default function AuthPage() {
  return (
    <main className="flex-1 flex flex-col justify-center items-center">
      <AuthCard />
    </main>
  );
}
