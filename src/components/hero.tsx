import { Button } from "@/components/ui/button";
import { ArrowRightIcon, TrophyIcon } from "@/components/icons";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-secondary py-20 md:py-32"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-background">
            <TrophyIcon className="h-4 w-4" />
            <span className="font-medium">
              2025-2026 Season Fundraising Campaign
            </span>
          </div>

          <h1 className="mb-6 text-balance font-sans text-4xl font-bold tracking-tight text-background sm:text-5xl md:text-6xl lg:text-7xl">
            Support Lakewood Ranch Wrestling
          </h1>

          <p className="mb-8 text-pretty text-lg text-background/80 sm:text-xl md:text-2xl leading-relaxed">
            Help our student-athletes achieve excellence on the mat and in the
            classroom. Every donation builds champions and strengthens our
            community.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="https://manateeschools.revtrak.net/high-schools/lakewood-ranch-hs/lrhs-athletics/lrhs-wrestling"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="text-base">
                Make a Donation
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#about">
              <Button
                size="lg"
                variant="outline"
                className="text-base bg-background/10 border-background/20 text-background hover:bg-background/20 hover:text-background"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
