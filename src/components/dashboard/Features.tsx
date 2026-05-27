import { cloneElement } from "react";
import { LucideUser, LucideChartNoAxesCombined, LucideCog } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type Feature = {
  icon: React.ReactElement<{ className: string }>;
  bgColor: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: <LucideUser />,
    bgColor: "bg-blue-500",
    title: "Profile",
    description: "Manage your account settings",
  },
  {
    icon: <LucideChartNoAxesCombined />,
    bgColor: "bg-green-500",
    title: "Analytics",
    description: "View your activity data",
  },
  {
    icon: <LucideCog />,
    bgColor: "bg-purple-500",
    title: "Settings",
    description: "Configure your preferences",
  },
];

export default function Features() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {features.map((feature) => (
        <Card key={feature.title}>
          <CardContent className="flex items-center gap-4">
            <div className={`p-2 rounded-full ${feature.bgColor}`}>
              {cloneElement(feature.icon, {
                className: "size-5 text-white",
              })}
            </div>

            <div>
              <h4 className="font-semibold">{feature.title}</h4>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
