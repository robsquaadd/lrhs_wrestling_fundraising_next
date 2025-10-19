import { Card } from "@/components/ui/card";
import {
  AwardIcon,
  GraduationCapIcon,
  HeartIcon,
  SparklesIcon,
} from "@/components/icons";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";

const reasons = [
  {
    icon: AwardIcon,
    title: "Championship Equipment",
    description:
      "Provide our athletes with top-quality mats, uniforms, and training gear to compete at the highest level.",
  },
  {
    icon: GraduationCapIcon,
    title: "Academic Support",
    description:
      "Fund tutoring programs and study resources to help our wrestlers excel in the classroom.",
  },
  {
    icon: HeartIcon,
    title: "Team Development",
    description:
      "Support team-building activities, leadership workshops, and character development programs.",
  },
  {
    icon: SparklesIcon,
    title: "Tournament Travel",
    description:
      "Enable our team to compete in regional and state tournaments, gaining valuable experience.",
  },
];

export function WhySupport() {
  return (
    <section id="about" className="bg-muted py-16 md:py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Why Support Our Team?
            </h2>
            <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
              Your contribution makes a direct impact on our student-athletes
            </p>
          </div>
          <div className="container mx-auto">
            <div className="w-[295px] mx-auto mb-8 overflow-hidden rounded-lg">
              <AspectRatio.Root ratio={9 / 16}>
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/23H1UX-RQI4"
                  title="LRHS Wrestling 2025 - 2026 fundraising video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </AspectRatio.Root>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card
                  key={index}
                  className="p-6 transition-all hover:shadow-lg"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}