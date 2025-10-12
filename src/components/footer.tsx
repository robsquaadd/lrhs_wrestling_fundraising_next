import { MapPinIcon, PhoneIcon } from "@/components/icons";
import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="border-t bg-secondary py-12 md:py-16">
      <div className="container mx-auto">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <span className="font-mono text-lg font-bold text-primary-foreground">
                    LR
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold leading-none text-background">
                    Lakewood Ranch
                  </span>
                  <span className="text-xs text-background/70 leading-none mt-0.5">
                    Wrestling
                  </span>
                </div>
              </div>
              <p className="text-sm text-background/70 leading-relaxed">
                Supporting our student-athletes in their pursuit of excellence
                on the mat and in the classroom.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-bold text-background">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <a
                    href="#home"
                    className="transition-colors hover:text-background"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="transition-colors hover:text-background"
                  >
                    About the Team
                  </a>
                </li>
                <li>
                  <Link
                    href="https://manateeschools.revtrak.net/high-schools/lakewood-ranch-hs/lrhs-athletics/lrhs-wrestling"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-background"
                  >
                    Make a Donation
                  </Link>
                </li>
                <li>
                  <a
                    href="#schedule"
                    className="transition-colors hover:text-background"
                  >
                    Season Schedule
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-bold text-background">
                Connect With Us
              </h3>
              <ul className="space-y-3 text-sm text-background/70">
                <li className="flex items-start gap-2">
                  <MapPinIcon className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>
                    5500 Lakewood Ranch Blvd
                    <br />
                    Bradenton, FL 34211
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <PhoneIcon className="h-4 w-4 shrink-0" />
                  <span>(941) 727-6100</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-background/20 pt-8 text-center text-sm text-background/70">
            <p>
              © {new Date().getFullYear()} Lakewood Ranch High School
              Wrestling. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
