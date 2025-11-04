"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { DollarSignIcon, UsersIcon, TargetIcon } from "@/components/icons";
import React, { useEffect, useState } from "react";

export function FundraisingGoal() {
  const [emails, setEmails] = useState<{ total: number; data: any[] } | null>(
    null
  );
  const [raised, setRaised] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0.0);
  const [totalDonors, setTotalDonors] = useState<number>(0);
  const [teamMembers] = useState<number>(45);
  const [goal] = useState<number>(12000);
  const [startDate] = useState<Date>(new Date("10/13/2025"));
  const [endDate] = useState<Date>(new Date("11/21/2025"));
  const [daysRemaining] = useState<string>(
    ((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)).toFixed(
      0
    )
  );

  useEffect(() => {
    fetch(`/api/readEmails`)
      .then((response) => response.json())
      .then((emailObject) => {
        const emailsData = emailObject.emails;
        setEmails(emailsData);
        setRaised(emailsData.total ?? 0);
        setTotalDonors(emailsData.data?.length ?? 0);
      });
  }, []);

  useEffect(() => {
    if (goal > 0) {
      setPercentage((raised / goal) * 100);
    }
  }, [raised, goal]);

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
