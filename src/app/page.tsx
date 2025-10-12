import { Hero } from "@/components/hero";
import { FundraisingGoal } from "@/components/fundraising-goal";
import { WhySupport } from "@/components/why-support";
import { ImpactStats } from "@/components/impact-stats";
import { NewsletterSignup } from "@/components/newsletter-signup";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FundraisingGoal />
      <WhySupport />
      <ImpactStats />
      <NewsletterSignup />
    </main>
  );
}
