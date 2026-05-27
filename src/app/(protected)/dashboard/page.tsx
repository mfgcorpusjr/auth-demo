import Welcome from "@/components/dashboard/Welcome";
import Features from "@/components/dashboard/Features";
import AuthenticationStatus from "@/components/dashboard/AuthenticationStatus";

export default function DashboardPage() {
  return (
    <main className="space-y-8">
      <Welcome />

      <Features />

      <AuthenticationStatus />
    </main>
  );
}
