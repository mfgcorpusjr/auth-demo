import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Welcome() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dashboard</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground">
          Welcome to your protected dashboard
        </p>
      </CardContent>
    </Card>
  );
}
