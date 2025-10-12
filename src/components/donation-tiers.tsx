import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckIcon } from "@/components/icons"

const tiers = [
  {
    name: "Supporter",
    amount: 25,
    description: "Every contribution helps",
    benefits: ["Recognition on team website", "Season schedule card", "Thank you letter"],
  },
  {
    name: "Champion",
    amount: 100,
    description: "Make a significant impact",
    benefits: [
      "All Supporter benefits",
      "Team photo",
      "Invitation to end-of-season celebration",
      "Social media recognition",
    ],
    featured: true,
  },
  {
    name: "Elite",
    amount: 250,
    description: "Lead the way",
    benefits: [
      "All Champion benefits",
      "Name on team banner",
      "Reserved seating at home matches",
      "Personal team update from coaches",
    ],
  },
]

export function DonationTiers() {
  return (
    <section id="donate" className="bg-muted py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Choose Your Support Level
            </h2>
            <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
              Select a donation tier that works for you
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((tier, index) => (
              <Card key={index} className={`relative p-8 ${tier.featured ? "border-2 border-primary shadow-lg" : ""}`}>
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="mb-2 text-2xl font-bold">{tier.name}</h3>
                  <div className="mb-2 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-primary">${tier.amount}</span>
                    <span className="text-muted-foreground">+</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>

                <ul className="mb-8 space-y-3">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full" variant={tier.featured ? "default" : "outline"}>
                  Donate ${tier.amount}
                </Button>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Want to donate a different amount?{" "}
              <Button variant="link" className="h-auto p-0 text-sm">
                Choose custom amount
              </Button>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
