import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/trust-check-bd-logo";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  FileText,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TrustCheck BD Case Study — Coming Soon",
  description:
    "The founder case study behind TrustCheck BD is currently being prepared.",
};

const plannedTopics = [
  "From problem discovery to product strategy",
  "UX decisions and full-stack architecture",
  "Building trust, community, and organic growth",
];

export default function TrustCheckBDCaseStudyPage() {
  return (
    <main className="relative flex min-h-screen items-center overflow-hidden py-24 text-white">
      <div className="pointer-events-none absolute inset-0 dotPattern opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[130px]" />

      <section className="relative mx-auto w-full max-w-[1200px] px-4">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-5 pb-7">
            <Logo
              locale="en"
              brand="TrustCheck BD"
              tagline="Check before you pay"
              showTagline
              href="https://trustcheckbd.com/en?utm_source=https%3A%2F%2Fmonirhrabby.com%2F&utm_medium=referral&utm_campaign=portfolio&utm_content=case_study_logo"
              target="_blank"
              rel="noopener noreferrer"
              brandClassName="text-white"
              taglineClassName="text-white/45"
            />
            <span className="inline-flex items-center gap-2 rounded-md bg-amber-400/10 px-3 py-1.5 text-xs font-medium text-amber-200">
              <Clock3 className="h-3.5 w-3.5" /> In progress
            </span>
          </div>

          <div className="max-w-3xl py-10 md:py-12">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-blue-300">
              <FileText className="h-5 w-5" />
            </div>
            <p className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-blue-300">
              <Sparkles className="h-3.5 w-3.5" /> Founder case study
            </p>
            <h1 className="max-w-2xl font-aldrich text-[28px] font-bold leading-tight tracking-tight sm:text-[32px] md:text-[36px]">
              The TrustCheck BD story is coming soon.
            </h1>
            <p className="mt-5 max-w-2xl text-sm font-light leading-7 text-white/60 md:text-base">
              I’m documenting how I identified the problem, designed the product,
              built the full-stack platform, and continue growing it for real users.
              The complete founder case study is currently being prepared.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {plannedTopics.map((topic) => (
                <div key={topic} className="rounded-md bg-white/[0.035] p-4">
                  <CheckCircle2 className="mb-3 h-4 w-4 text-primary" />
                  <p className="text-xs leading-5 text-white/65">{topic}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-7">
            <Button asChild variant="ghost" className="bg-white/[0.04] text-white hover:bg-white/10 hover:text-white">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://trustcheckbd.com/en?utm_source=https%3A%2F%2Fmonirhrabby.com%2F&utm_medium=referral&utm_campaign=portfolio&utm_content=case_study_cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Live Product <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
