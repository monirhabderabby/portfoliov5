"use client";

import { Button } from "@/components/ui/button";
import { ScaleUpLogo } from "@/components/ui/scaleup-logo";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  Building2,
  Cog,
  Layers,
  Network,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.25, 0.25, 0.75] },
  },
};

const facts = [
  { icon: Users, value: "300+", label: "people" },
  { icon: Building2, value: "3", label: "departments" },
  { icon: Layers, value: "6", label: "core systems" },
];

const NODES = [
  {
    label: "Sales",
    icon: Briefcase,
    pos: "left-[15%] top-[22%]",
    from: { l: "15%", t: "22%" },
    hex: "#34D399",
    cls: "border-emerald-400/30 text-emerald-300",
  },
  {
    label: "Operations",
    icon: Cog,
    pos: "left-[85%] top-[22%]",
    from: { l: "85%", t: "22%" },
    hex: "#FBBF24",
    cls: "border-amber-400/30 text-amber-300",
  },
  {
    label: "Biz Dev",
    icon: TrendingUp,
    pos: "left-[50%] top-[85%]",
    from: { l: "50%", t: "85%" },
    hex: "#38BDF8",
    cls: "border-sky-400/30 text-sky-300",
  },
];

const LINES = [
  { d: "M50 50 L15 22", hex: "#34D399" },
  { d: "M50 50 L85 22", hex: "#FBBF24" },
  { d: "M50 50 L50 85", hex: "#38BDF8" },
];

function ConnectionMotif() {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/12 blur-[70px]" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        {LINES.map((line, i) => (
          <motion.path
            key={line.d}
            d={line.d}
            stroke={line.hex}
            strokeWidth={1.4}
            strokeOpacity={0.4}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            initial={reduce ? false : { pathLength: 0, opacity: 0 }}
            whileInView={reduce ? undefined : { pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.15 * i, ease: "easeInOut" }}
          />
        ))}
      </svg>

      {!reduce &&
        NODES.map((node, i) => (
          <motion.span
            key={`packet-${node.label}`}
            className="absolute z-20 h-1.5 w-1.5 rounded-full"
            style={{
              backgroundColor: node.hex,
              boxShadow: `0 0 8px ${node.hex}`,
              marginLeft: -3,
              marginTop: -3,
            }}
            initial={{ left: node.from.l, top: node.from.t, opacity: 0 }}
            animate={{
              left: [node.from.l, "50%"],
              top: [node.from.t, "50%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              delay: i * 0.7,
              ease: "easeInOut",
            }}
          />
        ))}

      {/* hub */}
      <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={reduce ? undefined : { scale: [1, 1.05, 1] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-2xl border border-emerald-400/30 bg-[#0a1524]/95 text-emerald-300 shadow-[0_0_40px_rgba(52,211,153,0.18)] backdrop-blur-sm"
        >
          <Network className="h-5 w-5" />
          <span className="font-aldrich text-[8px] font-bold tracking-tight text-white">
            SAA
          </span>
        </motion.div>
      </div>

      {/* department nodes */}
      {NODES.map((node) => {
        const Icon = node.icon;
        return (
          <div
            key={node.label}
            className={`absolute z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 ${node.pos}`}
          >
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-full border bg-[#080f1b]/95 backdrop-blur-sm ${node.cls}`}
            >
              <Icon className="h-4 w-4" />
            </span>
            <span className="whitespace-nowrap text-[10px] font-medium text-white/70">
              {node.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default function SaaPortalSpotlight() {
  return (
    <section
      id="saa-portal-spotlight"
      className="relative py-16 text-white md:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_35%,rgba(52,211,153,0.12),transparent_42%)] [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_85%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-0 dotPattern opacity-20 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />

      <div className="container relative px-4 md:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="mb-5 flex flex-wrap items-center gap-3 sm:gap-4">
              <ScaleUpLogo className="w-fit" />
              <span
                className="hidden h-8 w-px bg-white/10 sm:block"
                aria-hidden="true"
              />
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-emerald-200">
                <Sparkles className="h-3.5 w-3.5" /> Internal product
              </span>
            </div>

            <h2 className="max-w-2xl font-aldrich text-[26px] font-bold leading-[1.3] tracking-tight sm:text-[28px] md:text-[30px]">
              I built the internal portal that runs a 300-person agency.
            </h2>
            <p className="mt-5 max-w-xl text-sm font-light leading-7 text-white/65 md:text-base">
              SAA Portal is the operations system I designed and built for
              ScaleUp Ads Agency. It connects Sales, Operations, and Business
              Development so every client request has a clear owner, a clear
              status, and one place it lives — instead of scattered chats.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
              {facts.map((fact) => (
                <span
                  key={fact.label}
                  className="flex items-center gap-2 text-sm text-white/70"
                >
                  <fact.icon className="h-4 w-4 text-emerald-300/80" />
                  <span className="font-aldrich font-bold text-white">
                    {fact.value}
                  </span>
                  {fact.label}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="bg-emerald-500 text-black hover:bg-emerald-400"
              >
                <Link href="/case-study/saa-portal">
                  Read Case Study <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <span className="flex items-center gap-1.5 text-xs text-white/40">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-300/70" />
                Internal tool · staff access only
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: [0.25, 0.25, 0.25, 0.75] }}
            className="relative"
          >
            <ConnectionMotif />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
