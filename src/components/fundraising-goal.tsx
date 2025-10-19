import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { DollarSignIcon, UsersIcon, TargetIcon } from "@/components/icons";
import { GET } from "@/app/api/readEmails/route";

export async function FundraisingGoal() {
  const response = await GET();
  const { emails } = await response.json();
  const raised = emails.total ?? 0;
  const goal = 12000;
  const percentage = (raised / goal) * 100;
  const totalDonors = emails.data?.length ?? 0;
  const teamMembers = 45;
  const startDate = new Date("10/13/2025");
  const endDate = new Date("11/21/2025");
  const daysRemaining = (
    (endDate.getTime() - startDate.getTime()) /
    (1000 * 60 * 60 * 24)
  ).toFixed(0);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Our Fundraising Goal
            </h2>
            <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
              Together, we're building a championship program
            </p>
          </div>

          <Card className="overflow-hidden border-2 p-8 md:p-12">
            <div className="mb-8 flex flex-col gap-2">
              <div className="flex items-baseline justify-between">
                <span className="text-5xl font-bold text-primary">
                  ${raised?.toLocaleString()}
                </span>
                <span className="text-2xl font-semibold text-muted-foreground">
                  of ${goal.toLocaleString()}
                </span>
              </div>
              <Progress value={percentage} className="h-4" />
              <p className="text-sm text-muted-foreground">
                {percentage.toFixed(0)}% funded •{" "}
                {Math.round((goal - raised) / 100)} donations to go
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <DollarSignIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{totalDonors}</p>
                  <p className="text-sm text-muted-foreground">Total Donors</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <UsersIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{teamMembers}</p>
                  <p className="text-sm text-muted-foreground">Team Members</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <TargetIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{daysRemaining}</p>
                  <p className="text-sm text-muted-foreground">
                    Days Remaining
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
