import { Button } from "@/components/ui/button";
import { MenuIcon } from "@/components/icons";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="font-mono text-lg font-bold text-primary-foreground">
              LR
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold leading-none">
              Lakewood Ranch
            </span>
            <span className="text-xs text-muted-foreground leading-none mt-0.5">
              Wrestling
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#home"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </a>
          <Link
            href="https://manateeschools.revtrak.net/high-schools/lakewood-ranch-hs/lrhs-athletics/lrhs-wrestling"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Donate
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="https://manateeschools.revtrak.net/high-schools/lakewood-ranch-hs/lrhs-athletics/lrhs-wrestling"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="inline-flex">Support Now</Button>
          </Link>
          <Button variant="ghost" size="icon" className="hidden">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
