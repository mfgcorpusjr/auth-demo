import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type Feature = {
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    title: "Email & Password",
    description:
      "Traditional authentication with email and password validation.",
  },
  {
    title: "Github OAuth",
    description:
      "Sign in with your Github account for quick and secure access.",
  },
  {
    title: "Google OAuth",
    description: "One-click authentication using your Google account.",
  },
];

export default function Features() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {features.map((feature) => (
        <Card key={feature.title}>
          <CardHeader>
            <CardTitle>{feature.title}</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
