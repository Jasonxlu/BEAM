import Link from "next/link";
import { ChevronRight, Scale } from "lucide-react";

import { Button } from "@/components/ui/button";
import HeroSection from "@/components/hero-section";
import FeatureSection from "@/components/feature-section";
import HowItWorksSection from "@/components/how-it-works-section";
import BenefitsSection from "@/components/benefits-section";
import TeamSection from "@/components/team-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Scale className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl font-bold">BEAM</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#how-it-works"
          >
            How It Works
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#benefits"
          >
            Benefits
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#team"
          >
            Team
          </Link>
        </nav>
        {/* <Button size="sm" className="hidden md:flex">
          Request Demo
        </Button> */}
        <Button variant="outline" size="icon" className="md:hidden">
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Menu</span>
        </Button>
      </header>
      <main className="flex-1">
        <HeroSection />
        <FeatureSection />
        <HowItWorksSection />
        <BenefitsSection />
        <TeamSection />
      </main>
      <footer className="border-t bg-muted">
        <div className="px-4 md:px-6 py-8 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Scale className="h-5 w-5 text-primary" />
                <span className="text-lg font-bold">BEAM</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Revolutionizing strength training through advanced motion
                sensing technology.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    className="text-muted-foreground hover:underline"
                    href="#features"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-muted-foreground hover:underline"
                    href="#how-it-works"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-muted-foreground hover:underline"
                    href="#benefits"
                  >
                    Benefits
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    className="text-muted-foreground hover:underline"
                    href="#team"
                  >
                    Team
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center w-full">
            <p className="text-xs text-muted-foreground mb-4 md:mb-0 mx-auto">
              © 2025 BEAM. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
