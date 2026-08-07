"use client";

import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/trust-check-bd-logo";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Code2,
  Flag,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const roles = ["Founder", "Full Stack Engineer", "Product Designer"];

const featureCards = [
  {
    icon: Flag,
    title: "Founded with a Mission",
    description:
      "Created to reduce online scams and build a stronger culture of digital trust across World.",
  },
  {
    icon: Code2,
    title: "Built End-to-End",
    description:
      "I own the UX, frontend, backend, deployment, SEO, analytics, and the platform’s ongoing maintenance.",
  },
  {
    icon: Users,
    title: "3,588+ Searches Completed",
    description:
      "Real people use TrustCheck BD to verify suspicious numbers, pages, and websites before they trust or pay.",
  },
  {
    icon: TrendingUp,
    title: "Growing Every Month",
    description:
      "Continuous product releases, community contributions, SEO improvements, and a long-term vision.",
  },
];

const highlights = [
  "Founder-Led Product",
  "Production Ready",
  "Community Driven",
  "SEO Optimized",
  "Full Stack Architecture",
  "Continuously Improving",
];

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.25, 0.25, 0.75] },
  },
};

export default function FeaturedProduct() {
  const [liveStats, setLiveStats] = useState({
    approvedReports: 119,
    searchDone: 3588,
  });

  useEffect(() => {
    let isMounted = true;

    const refreshStats = async () => {
      try {
        const response = await fetch("/api/trustcheck-stats", {
          cache: "no-store",
        });
        if (!response.ok) return;

        const data = (await response.json()) as {
          approvedReports: number;
          searchDone: number;
        };

        if (isMounted) setLiveStats(data);
      } catch {
        // Keep the last verified values when Redis is temporarily unavailable.
      }
    };

    void refreshStats();
    const interval = window.setInterval(refreshStats, 60_000);

    return () => {
      isMounted = false;
      window.clearInterval(interval);
    };
  }, []);

  const formattedSearches = liveStats.searchDone.toLocaleString("en-US");
  const stats = [
    {
      label: `${liveStats.approvedReports.toLocaleString("en-US")}+`,
      detail: "Scam reports",
      showFlag: false,
      className: "-left-3 top-[8%] md:-left-12",
    },
    {
      label: `${formattedSearches}+`,
      detail: "searches done",
      showFlag: false,
      className: "-right-3 top-[20%] md:-right-10",
    },
    {
      label: "Community",
      detail: "driven",
      showFlag: false,
      className: "-left-2 bottom-[14%] md:-left-9",
    },
    {
      label: "Made in",
      detail: "Bangladesh",
      showFlag: true,
      className: "-right-2 bottom-[5%] md:-right-7",
    },
  ];

  return (
    <section
      id="featured-product"
      className="relative mt-8 py-16 text-white md:mt-12 md:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,rgba(0,75,224,0.14),transparent_42%)] [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_85%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-0 dotPattern opacity-20 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />

      <div className="container relative px-4 md:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="mb-5 flex flex-wrap items-center gap-3 sm:gap-4">
              <Logo
                locale="en"
                brand="TrustCheck BD"
                showTagline
                tagline="Check before you pay"
                href="https://trustcheckbd.com/en?utm_source=https%3A%2F%2Fmonirhrabby.com%2F&utm_medium=referral&utm_campaign=portfolio&utm_content=trustcheckbd_logo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit"
                brandClassName="text-white"
                taglineClassName="text-white/45"
              />
              <span
                className="hidden h-8 w-px bg-white/10 sm:block"
                aria-hidden="true"
              />
              <div className="group relative grid overflow-hidden rounded-full bg-gradient-to-tr from-primary/40 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                <span className="absolute inset-x-0 bottom-0 h-full w-full bg-gradient-to-tr from-primary/40 blur-md" />
                <AnimatedGradientText className="bg-neutral-950">
                  ✨{" "}
                  <span
                    className="mx-2 h-4 w-px shrink-0 bg-gray-300"
                    aria-hidden="true"
                  />
                  <span className="inline animate-gradient bg-gradient-to-r from-[#FFAA40] via-[#9C40FF] to-[#FFAA40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
                    Featured Product
                  </span>
                </AnimatedGradientText>
              </div>
            </div>
            <h2 className="max-w-2xl font-aldrich text-[26px] font-bold leading-[1.3] tracking-tight sm:text-[28px] md:text-[30px]">
              I founded Trust Check BD for a safer internet.
            </h2>
            <p className="mt-5 max-w-xl text-sm font-light leading-7 text-white/65 md:text-base">
              After seeing how easily people lose money to online scams, I built
              Trust Check BD—a community-driven platform for checking suspicious
              numbers, websites, Facebook pages, and businesses. People can also
              report scams to protect others. The goal is simple: verify before
              you trust.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {roles.map((role) => (
                <span
                  key={role}
                  className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/75"
                >
                  {role}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/case-study/trust-check-bd">
                  Read Case Study <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/15 bg-white/[0.03] text-white hover:bg-white/10 hover:text-white"
              >
                <Link
                  href="https://trustcheckbd.com/en?utm_source=https%3A%2F%2Fmonirhrabby.com%2F&utm_medium=referral&utm_campaign=portfolio&utm_content=visit_cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore Now
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: [0.25, 0.25, 0.25, 0.75] }}
            className="relative mx-auto w-full max-w-[650px] px-5 py-12 sm:px-10"
          >
            <div className="absolute -inset-x-[8%] inset-y-[4%] rounded-full bg-primary/[0.18] blur-[120px]" />
            <div className="relative overflow-hidden rounded-lg border border-white/15 bg-[#07101f]/90 p-2 shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur-xl">
              <div className="mb-2 flex items-center gap-1.5 px-1 py-1">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                <div className="mx-auto flex h-6 w-1/2 items-center justify-center rounded-sm bg-white/[0.06] text-[8px] text-white/40">
                  trustcheckbd.com
                </div>
              </div>

              <div className="overflow-hidden rounded-md bg-[#f8faff]">
                <Image
                  src="/images/trust-check-bd-homepage.png"
                  alt="TrustCheck BD homepage showing Bangladesh's scam and fraud checker"
                  width={1404}
                  height={873}
                  sizes="(max-width: 1024px) 90vw, 620px"
                  className="h-auto w-full"
                  priority={false}
                />
              </div>
            </div>
            <div className="relative mx-auto h-2 w-[82%] rounded-b-full bg-gradient-to-b from-slate-500 to-slate-800" />
            <div className="relative mx-auto h-1 w-[95%] rounded-b-full bg-slate-900 shadow-xl" />

            {stats.map((stat, index) => (
              <motion.div
                key={stat.detail}
                className={`absolute ${stat.className} rounded-md border border-white/10 bg-[#07101f]/85 px-3 py-2 shadow-xl backdrop-blur-md sm:px-4 sm:py-3`}
                animate={{ y: [0, index % 2 ? 6 : -6, 0] }}
                transition={{
                  duration: 5 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <p className="flex items-center gap-1.5 text-xs font-bold text-white sm:text-sm">
                  {stat.label}
                  {stat.showFlag ? (
                    <Image
                      src="/images/bangladesh-flag.webp"
                      alt="Bangladesh flag"
                      width={24}
                      height={24}
                      className="h-4 w-4 object-contain sm:h-[18px] sm:w-[18px]"
                    />
                  ) : null}
                </p>
                <p className="mt-0.5 text-[9px] text-white/50 sm:text-[10px]">
                  {stat.detail}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {featureCards.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-md border border-white/10 bg-card/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-card"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md border border-primary/20 bg-primary/10 text-blue-300 transition-colors group-hover:bg-primary group-hover:text-white">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="font-aldrich text-sm font-semibold md:text-base">
                {feature.title === "3,588+ Searches Completed"
                  ? `${formattedSearches}+ Searches Completed`
                  : feature.title}
              </h3>
              <p className="mt-3 text-sm font-light leading-6 text-white/55">
                {feature.description}
              </p>
            </article>
          ))}
        </motion.div>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 rounded-md border border-white/10 bg-white/[0.025] px-5 py-5"
        >
          {highlights.map((highlight) => (
            <span
              key={highlight}
              className="flex items-center gap-2 text-xs text-white/60"
            >
              <Check className="h-3.5 w-3.5 text-primary" /> {highlight}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
