import { LucideCircleCheck } from "lucide-react";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AuthenticationStatus() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Authentication Status</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex items-center gap-2">
          <LucideCircleCheck className="text-green-500 size-4" />

          <p className="text-muted-foreground">
            You are successfully authenticated
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
