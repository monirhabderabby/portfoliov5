"use client";

import { Button } from "@/components/ui/button";
import { ScaleUpLogo } from "@/components/ui/scaleup-logo";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  Bell,
  Boxes,
  Briefcase,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock,
  Cog,
  FileText,
  Inbox,
  Layers,
  LayoutDashboard,
  Link2,
  MapPin,
  MessageCircle,
  Network,
  Paperclip,
  Plus,
  Quote,
  Route,
  Search,
  Send,
  Settings2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserCheck,
  Users,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type ReactNode,
} from "react";
import {
  SiMongodb,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiWhatsapp,
} from "react-icons/si";

/* -------------------------------------------------------------------------- */
/*  Department identity — used consistently across every diagram and legend.  */
/* -------------------------------------------------------------------------- */

type DeptKey = "sales" | "ops" | "biz";

const DEPT: Record<
  DeptKey,
  {
    name: string;
    short: string;
    icon: ComponentType<{ className?: string }>;
    hex: string;
    text: string;
    bg: string;
    border: string;
    dot: string;
    ring: string;
  }
> = {
  sales: {
    name: "Sales",
    short: "Sales",
    icon: Briefcase,
    hex: "#34D399",
    text: "text-emerald-300",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/25",
    dot: "bg-emerald-400",
    ring: "shadow-[0_0_0_6px_rgba(52,211,153,0.08)]",
  },
  ops: {
    name: "Operations",
    short: "Operations",
    icon: Cog,
    hex: "#FBBF24",
    text: "text-amber-300",
    bg: "bg-amber-400/10",
    border: "border-amber-400/25",
    dot: "bg-amber-400",
    ring: "shadow-[0_0_0_6px_rgba(251,191,36,0.08)]",
  },
  biz: {
    name: "Business Development",
    short: "Biz Dev",
    icon: TrendingUp,
    hex: "#38BDF8",
    text: "text-sky-300",
    bg: "bg-sky-400/10",
    border: "border-sky-400/25",
    dot: "bg-sky-400",
    ring: "shadow-[0_0_0_6px_rgba(56,189,248,0.08)]",
  },
};

/* -------------------------------------------------------------------------- */
/*  Shared motion + layout helpers (themed emerald/gold for this case study).  */
/* -------------------------------------------------------------------------- */

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 28, filter: "blur(8px)" }}
      whileInView={
        reduce ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.25, 0.25, 0.75] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }
    >
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
        {eyebrow}
      </p>
      <h2 className="font-aldrich text-[26px] font-bold leading-tight tracking-tight sm:text-[30px] md:text-[36px]">
        {title}
      </h2>
      {text ? (
        <p
          className={cn(
            "mt-5 text-sm font-light leading-7 text-white/60 md:text-base",
            align === "center" ? "mx-auto" : "",
          )}
        >
          {text}
        </p>
      ) : null}
    </Reveal>
  );
}

function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!visible) return;
    if (reduce) {
      setCurrent(value);
      return;
    }
    let frame = 0;
    const started = performance.now();
    const duration = 1100;
    const tick = (now: number) => {
      const progress = Math.min((now - started) / duration, 1);
      setCurrent(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reduce, value, visible]);

  return <span ref={ref}>{current.toLocaleString("en-US")}</span>;
}

/** A lightweight app-window chrome for the product mockups. */
function PortalFrame({
  children,
  path = "portal",
  className = "",
}: {
  children: ReactNode;
  path?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-white/12 bg-[#070c15] shadow-[0_30px_90px_rgba(0,0,0,0.5)]",
        className,
      )}
    >
      <div
        className="flex items-center gap-2 border-b border-white/[0.08] bg-white/[0.02] px-3 py-2.5 sm:px-4"
        aria-hidden="true"
      >
        <span className="flex shrink-0 items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </span>
        <span className="mx-auto flex items-center gap-1.5 rounded-md border border-white/[0.05] bg-[#0a1120] px-3 py-1 text-[9px] text-white/40 sm:text-[10px]">
          <ShieldCheck className="h-2.5 w-2.5 text-emerald-400/70" />
          saa.scaleupads<span className="text-white/25">/</span>
          <span className="text-white/55">{path}</span>
        </span>
        <span className="hidden w-8 shrink-0 sm:block" />
      </div>
      <div className="p-3 sm:p-5">{children}</div>
    </div>
  );
}

/** A small pill that names a department, with its color dot. */
function DeptTag({
  dept,
  className = "",
}: {
  dept: DeptKey;
  className?: string;
}) {
  const d = DEPT[dept];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-medium",
        d.bg,
        d.border,
        d.text,
        className,
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", d.dot)} />
      {d.name}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero visual — the department connection map.                              */
/* -------------------------------------------------------------------------- */

const MAP_NODES: {
  key: DeptKey;
  pos: string;
  from: { l: string; t: string };
}[] = [
  { key: "sales", pos: "left-[16%] top-[26%]", from: { l: "16%", t: "26%" } },
  { key: "ops", pos: "left-[84%] top-[26%]", from: { l: "84%", t: "26%" } },
  { key: "biz", pos: "left-[50%] top-[86%]", from: { l: "50%", t: "86%" } },
];

const MAP_LINES: { d: string; hex: string }[] = [
  { d: "M50 52 L16 26", hex: "#34D399" },
  { d: "M50 52 L84 26", hex: "#FBBF24" },
  { d: "M50 52 L50 86", hex: "#38BDF8" },
];

function DepartmentMap() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-[560px] sm:aspect-[16/11]">
      {/* soft glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/15 blur-[70px]" />
      <div className="pointer-events-none absolute left-[78%] top-[24%] h-24 w-24 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="pointer-events-none absolute left-[16%] top-[70%] h-24 w-24 rounded-full bg-sky-400/10 blur-3xl" />

      {/* connector lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        {MAP_LINES.map((line, i) => (
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
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 1.1,
              delay: 0.2 + i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* traveling request packets */}
      {!reduce &&
        MAP_LINES.map((line, i) => (
          <motion.span
            key={`packet-${line.d}`}
            className="absolute z-20 h-2 w-2 rounded-full"
            style={{
              backgroundColor: line.hex,
              boxShadow: `0 0 10px ${line.hex}`,
              marginLeft: -4,
              marginTop: -4,
            }}
            initial={{
              left: MAP_NODES[i].from.l,
              top: MAP_NODES[i].from.t,
              opacity: 0,
            }}
            animate={{
              left: [MAP_NODES[i].from.l, "50%"],
              top: [MAP_NODES[i].from.t, "52%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}

      {/* central hub */}
      <div className="absolute left-1/2 top-[52%] z-30 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={reduce ? undefined : { scale: [1, 1.04, 1] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex flex-col items-center gap-1.5 rounded-2xl border border-emerald-400/30 bg-[#0a1524]/95 px-4 py-3 shadow-[0_0_50px_rgba(52,211,153,0.18)] backdrop-blur-sm"
        >
          <span className="absolute -inset-1 -z-10 rounded-2xl bg-emerald-400/10 blur-md" />
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/20 to-amber-300/20 text-emerald-300">
            <Network className="h-4 w-4" />
          </span>
          <span className="font-aldrich text-[11px] font-bold tracking-tight text-white">
            SAA Portal
          </span>
        </motion.div>
      </div>

      {/* department nodes */}
      {MAP_NODES.map((node) => {
        const d = DEPT[node.key];
        const Icon = d.icon;
        return (
          <div
            key={node.key}
            className={cn(
              "absolute z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5",
              node.pos,
            )}
          >
            <span
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border bg-[#080f1b]/95 backdrop-blur-sm sm:h-12 sm:w-12",
                d.border,
                d.text,
                d.ring,
              )}
            >
              <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
            </span>
            <span className="whitespace-nowrap text-[10px] font-medium text-white/70 sm:text-[11px]">
              {d.name}
            </span>
          </div>
        );
      })}

      {/* floating status chips */}
      <motion.div
        className="absolute left-[2%] top-[58%] hidden items-center gap-2 rounded-lg border border-white/10 bg-[#080f1b]/90 px-2.5 py-1.5 shadow-xl backdrop-blur sm:flex"
        animate={reduce ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <FileText className="h-3.5 w-3.5 text-emerald-300" />
        <span className="text-[10px] text-white/60">New issue opened</span>
      </motion.div>
      <motion.div
        className="absolute right-[2%] top-[62%] hidden items-center gap-2 rounded-lg border border-white/10 bg-[#080f1b]/90 px-2.5 py-1.5 shadow-xl backdrop-blur sm:flex"
        animate={reduce ? undefined : { y: [0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <CheckCircle2 className="h-3.5 w-3.5 text-amber-300" />
        <span className="text-[10px] text-white/60">Update delivered</span>
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Before / After — the interactive centerpiece.                             */
/* -------------------------------------------------------------------------- */

const AFTER_STEPS = [
  { label: "Client", icon: Users, dept: null as DeptKey | null },
  { label: "Sales", icon: Briefcase, dept: "sales" as DeptKey },
  { label: "Issue", icon: FileText, dept: "sales" as DeptKey },
  { label: "Operations", icon: Cog, dept: "ops" as DeptKey },
  { label: "Work", icon: Workflow, dept: "ops" as DeptKey },
  { label: "Update", icon: Send, dept: "ops" as DeptKey },
  { label: "Sales", icon: CheckCircle2, dept: "sales" as DeptKey },
];

const BEFORE_TAGS = [
  "Who owns this profile?",
  "Which station is it at?",
  "Did Operations see this?",
  "Who replies to the client?",
  "Where was that screenshot?",
  "Is this done yet?",
];

function BeforeAfter() {
  const reduce = useReducedMotion();
  const [mode, setMode] = useState<"before" | "after">("after");

  return (
    <div className="mt-12">
      {/* toggle */}
      <div className="mx-auto mb-10 flex w-fit items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
        {(["before", "after"] as const).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            aria-pressed={mode === m}
            className="relative rounded-full px-5 py-2 text-xs font-medium capitalize transition-colors sm:text-sm"
          >
            {mode === m && (
              <motion.span
                layoutId="ba-toggle"
                className={cn(
                  "absolute inset-0 rounded-full",
                  m === "after" ? "bg-emerald-400/15" : "bg-white/[0.06]",
                )}
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span
              className={cn(
                "relative z-10",
                mode === m
                  ? m === "after"
                    ? "text-emerald-300"
                    : "text-white"
                  : "text-white/45",
              )}
            >
              {m === "before" ? "Before the portal" : "With SAA Portal"}
            </span>
          </button>
        ))}
      </div>

      <div className="relative min-h-[360px] overflow-hidden rounded-2xl border border-white/10 bg-[#070c15] p-5 sm:min-h-[340px] sm:p-8 md:p-12">
        <div className="pointer-events-none absolute inset-0 dotPattern opacity-[0.05]" />
        <AnimatePresence mode="wait">
          {mode === "before" ? (
            <motion.div
              key="before"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -14 }}
              transition={{ duration: 0.35 }}
              className="relative"
            >
              <div className="mb-6 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-red-300/70">
                <MessageCircle className="h-4 w-4" />
                Scattered across chats
              </div>
              <div className="flex flex-wrap gap-3">
                {BEFORE_TAGS.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={reduce ? false : { opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: reduce ? 0 : 0.05 * i, duration: 0.3 }}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-xl border border-red-400/15 bg-red-500/[0.06] px-3.5 py-2.5 text-xs text-white/60 sm:text-sm",
                      i % 3 === 0 && "rotate-[-1.5deg]",
                      i % 3 === 2 && "rotate-[1.5deg]",
                    )}
                  >
                    <span className="text-red-300/60">?</span>
                    {tag}
                  </motion.span>
                ))}
              </div>
              <p className="mt-8 max-w-xl text-sm font-light leading-7 text-white/45">
                Requests lived in message threads. Ownership was implied, not
                recorded. A question could bounce between people for hours
                before it reached whoever could actually answer it.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="after"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -14 }}
              transition={{ duration: 0.35 }}
              className="relative"
            >
              <div className="mb-8 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-emerald-300/80">
                <Route className="h-4 w-4" />
                One tracked path
              </div>

              {/* the pipeline */}
              <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-stretch">
                {AFTER_STEPS.map((step, i) => {
                  const Icon = step.icon;
                  const accent = step.dept ? DEPT[step.dept] : null;
                  return (
                    <motion.div
                      key={`${step.label}-${i}`}
                      initial={reduce ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: reduce ? 0 : 0.09 * i,
                        duration: 0.4,
                      }}
                      className="flex items-center gap-3 md:flex-col md:gap-2"
                    >
                      <div
                        className={cn(
                          "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border bg-[#0a1120]",
                          accent ? accent.border : "border-white/12",
                          accent ? accent.text : "text-white/70",
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="md:text-center">
                        <p className="text-xs font-semibold text-white/85 sm:text-sm">
                          {step.label}
                        </p>
                        {accent ? (
                          <p className={cn("text-[10px]", accent.text)}>
                            {accent.short}
                          </p>
                        ) : (
                          <p className="text-[10px] text-white/35">External</p>
                        )}
                      </div>
                      {i < AFTER_STEPS.length - 1 && (
                        <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-white/20 md:hidden" />
                      )}
                    </motion.div>
                  );
                })}
              </div>

              <p className="mt-8 max-w-2xl text-sm font-light leading-7 text-white/55">
                A client need becomes an Issue that Sales owns. Operations picks
                it up, does the work, and sends an Update that closes the loop —
                every step visible, every handoff recorded.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Feature section wrapper.                                                  */
/* -------------------------------------------------------------------------- */

function FeatureSection({
  index,
  icon: Icon,
  dept,
  eyebrow,
  title,
  text,
  points,
  visual,
  layout = "right",
}: {
  index: string;
  icon: ComponentType<{ className?: string }>;
  dept: DeptKey | "admin";
  eyebrow: string;
  title: string;
  text: string;
  points: string[];
  visual: ReactNode;
  layout?: "left" | "right" | "full";
}) {
  const accentText = dept === "admin" ? "text-emerald-300" : DEPT[dept].text;
  const accentBg = dept === "admin" ? "bg-emerald-400/10" : DEPT[dept].bg;
  const accentBorder =
    dept === "admin" ? "border-emerald-400/25" : DEPT[dept].border;

  const copy = (
    <div>
      <div className="flex items-center gap-3">
        <span
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-xl border",
            accentBg,
            accentBorder,
            accentText,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span className="font-aldrich text-4xl font-bold text-white/[0.08]">
          {index}
        </span>
      </div>
      <p
        className={cn(
          "mt-6 text-xs font-medium uppercase tracking-[0.2em]",
          accentText,
        )}
      >
        {eyebrow}
      </p>
      <h3 className="mt-3 font-aldrich text-2xl font-bold leading-tight tracking-tight md:text-[28px]">
        {title}
      </h3>
      <p className="mt-4 text-sm font-light leading-7 text-white/60 md:text-base">
        {text}
      </p>
      <ul className="mt-6 space-y-3">
        {points.map((point) => (
          <li key={point} className="flex gap-3 text-sm text-white/65">
            <ChevronRight
              className={cn("mt-0.5 h-4 w-4 shrink-0", accentText)}
            />
            <span className="font-light leading-6">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  if (layout === "full") {
    return (
      <Reveal className="mt-16 first:mt-0">
        <div className="mx-auto max-w-2xl text-center">{copy}</div>
        <div className="mt-12">{visual}</div>
      </Reveal>
    );
  }

  return (
    <Reveal className="mt-16 first:mt-0">
      <div className={cn("grid items-center gap-10 lg:grid-cols-2 lg:gap-16")}>
        <div className={layout === "left" ? "lg:order-2" : ""}>{copy}</div>
        <div className={layout === "left" ? "lg:order-1" : ""}>{visual}</div>
      </div>
    </Reveal>
  );
}

/* -------------------------------------------------------------------------- */
/*  Product mockups (pure CSS/JSX — no screenshots).                          */
/* -------------------------------------------------------------------------- */

function IssueSheetMock() {
  return (
    <PortalFrame path="issues/2481">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-emerald-300" />
          <span className="text-sm font-semibold text-white">Issue #2481</span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/25 bg-amber-400/10 px-2.5 py-1 text-[10px] font-medium text-amber-300">
          <Clock className="h-3 w-3" /> In progress
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2.5">
        {[
          { k: "Client", v: "Acme Co." },
          { k: "Order ID", v: "#SA-2481" },
          { k: "Profile", v: "Acme · Meta Ads" },
          { k: "Raised by", v: "Sales · Nadia" },
        ].map((f) => (
          <div
            key={f.k}
            className="rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 py-2"
          >
            <p className="text-[9px] uppercase tracking-wider text-white/35">
              {f.k}
            </p>
            <p className="mt-1 text-xs font-medium text-white/80">{f.v}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 py-2.5">
        <p className="text-[9px] uppercase tracking-wider text-white/35">
          Description
        </p>
        <p className="mt-1.5 text-xs font-light leading-5 text-white/65">
          Pause the running Meta Ads set and move the remaining budget to the
          new creative. Client approved the copy in the thread below.
        </p>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.07] bg-white/[0.02] px-2.5 py-1.5 text-[10px] text-white/55">
          <Paperclip className="h-3 w-3 text-white/40" /> creative-v2.png
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.07] bg-white/[0.02] px-2.5 py-1.5 text-[10px] text-white/55">
          <Paperclip className="h-3 w-3 text-white/40" /> budget.pdf
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.07] bg-white/[0.02] px-2.5 py-1.5 text-[10px] text-white/55">
          <Link2 className="h-3 w-3 text-white/40" /> ad-manager link
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3">
        <span className="flex items-center gap-2 text-[10px] text-white/40">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Sent to Operations
        </span>
        <span className="flex items-center gap-1 text-[10px] font-medium text-emerald-300">
          Open sheet <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </PortalFrame>
  );
}

function UpdateSheetMock() {
  const reduce = useReducedMotion();
  return (
    <div className="relative">
      <PortalFrame path="updates">
        <div className="flex items-center gap-2">
          <Send className="h-4 w-4 text-amber-300" />
          <span className="text-sm font-semibold text-white">
            Update on #2481
          </span>
          <span className="ml-auto text-[10px] text-white/35">Operations</span>
        </div>

        <div className="mt-4 rounded-lg border border-amber-400/20 bg-amber-400/[0.05] px-3 py-3">
          <p className="text-xs font-light leading-5 text-white/75">
            Old set paused and budget moved to the new creative. It is live now
            — first results should show by tomorrow.
          </p>
          <div className="mt-3 flex items-center gap-2 text-[10px] text-white/40">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
            Delivered to Sales · Nadia
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.14em] text-white/30">
          <DeptTag dept="ops" />
          <ArrowRight className="h-3.5 w-3.5 text-white/25" />
          <DeptTag dept="sales" />
        </div>
      </PortalFrame>

      {/* floating "lands on Sales dashboard" card */}
      <motion.div
        className="absolute -bottom-6 -right-3 w-[190px] rounded-xl border border-emerald-400/25 bg-[#0a1524]/95 p-3 shadow-2xl backdrop-blur sm:-right-6"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex items-center gap-1.5 text-[10px] font-medium text-emerald-300">
          <Bell className="h-3 w-3" /> Sales dashboard
        </div>
        <p className="mt-1.5 text-[10px] leading-4 text-white/55">
          1 new update on a profile you own
        </p>
      </motion.div>
    </div>
  );
}

function StationMock() {
  const stations = [
    {
      station: "Station A2",
      person: "Nadia",
      profiles: ["Acme · Meta", "Nova · SEO"],
      active: true,
    },
    {
      station: "Station B1",
      person: "Arif",
      profiles: ["Lumen · Google Ads"],
      active: true,
    },
    {
      station: "Station B4",
      person: "Rima",
      profiles: ["Orbit · Website", "Zen · Apps"],
      active: false,
    },
    {
      station: "Station C3",
      person: "Sabbir",
      profiles: ["Peak · Meta"],
      active: true,
    },
  ];
  return (
    <PortalFrame path="stations">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-emerald-300" />
          <span className="text-sm font-semibold text-white">
            Sales stations
          </span>
        </div>
        <span className="text-[10px] text-white/40">Live · 4 active</span>
      </div>

      <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
        {stations.map((s) => (
          <div
            key={s.station}
            className={cn(
              "rounded-lg border p-3",
              s.active
                ? "border-emerald-400/20 bg-emerald-400/[0.04]"
                : "border-white/[0.07] bg-white/[0.02]",
            )}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.06] text-[11px] font-semibold text-white/70">
                  {s.person[0]}
                </span>
                <div>
                  <p className="text-xs font-semibold text-white/85">
                    {s.person}
                  </p>
                  <p className="text-[9px] text-white/40">{s.station}</p>
                </div>
              </div>
              <span
                className={cn(
                  "h-2 w-2 rounded-full",
                  s.active ? "bg-emerald-400" : "bg-white/20",
                )}
              />
            </div>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {s.profiles.map((p) => (
                <span
                  key={p}
                  className="rounded-md bg-white/[0.05] px-2 py-1 text-[9px] text-white/55"
                >
                  {p}
                </span>
              ))}
            </div>
            <div className="mt-2.5 flex items-center gap-1.5 text-[10px] font-medium text-emerald-400/80">
              <SiWhatsapp className="h-3 w-3" /> WhatsApp
            </div>
          </div>
        ))}
      </div>
    </PortalFrame>
  );
}

function QueueMock() {
  const reduce = useReducedMotion();
  return (
    <PortalFrame path="queue">
      <div className="grid items-center gap-3 md:grid-cols-[1fr_auto_1fr]">
        {/* request */}
        <div className="rounded-lg border border-amber-400/20 bg-amber-400/[0.05] p-3">
          <div className="flex items-center gap-2">
            <Inbox className="h-3.5 w-3.5 text-amber-300" />
            <span className="text-[11px] font-semibold text-white/85">
              Queue request
            </span>
            <span className="ml-auto text-[9px] text-amber-300/70">
              Operations
            </span>
          </div>
          <div className="mt-2.5 space-y-1.5 text-[10px] text-white/55">
            <p>
              <span className="text-white/35">Client:</span> Acme Co.
            </p>
            <p>
              <span className="text-white/35">Order:</span> #SA-2481
            </p>
            <p>
              <span className="text-white/35">Profile:</span> Acme · Meta Ads
            </p>
          </div>
          <p className="mt-2 rounded-md bg-black/20 px-2 py-1.5 text-[10px] leading-4 text-white/70">
            Need updated ad-account access to launch the new set.
          </p>
        </div>

        {/* routing arrow */}
        <div className="flex flex-col items-center justify-center gap-1 py-1 md:py-0">
          <motion.div
            animate={reduce ? undefined : { x: [-3, 3, -3] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-1 text-white/30"
          >
            <Route className="h-4 w-4 rotate-90 text-emerald-300/70 md:rotate-0" />
          </motion.div>
          <span className="max-w-[90px] text-center text-[8px] leading-3 text-white/35">
            routed to profile owner
          </span>
        </div>

        {/* response */}
        <div className="rounded-lg border border-emerald-400/20 bg-emerald-400/[0.05] p-3">
          <div className="flex items-center gap-2">
            <UserCheck className="h-3.5 w-3.5 text-emerald-300" />
            <span className="text-[11px] font-semibold text-white/85">
              Response
            </span>
            <span className="ml-auto text-[9px] text-emerald-300/70">
              Sales · Nadia
            </span>
          </div>
          <p className="mt-2.5 rounded-md bg-black/20 px-2 py-1.5 text-[10px] leading-4 text-white/70">
            Access shared with Operations. Also added a backup manager just in
            case.
          </p>
          <div className="mt-2.5 flex items-center gap-1.5 text-[10px] font-medium text-emerald-300">
            <CheckCircle2 className="h-3.5 w-3.5" /> Answered in portal
          </div>
        </div>
      </div>
    </PortalFrame>
  );
}

function AdminMock() {
  const nav = [
    { label: "Employees", icon: Users, active: true },
    { label: "Teams", icon: Building2, active: false },
    { label: "Profiles", icon: Boxes, active: false },
    { label: "Assignments", icon: Route, active: false },
  ];
  const rows = [
    { name: "Nadia I.", dept: "Sales", role: "Executive" },
    { name: "Arif H.", dept: "Operations", role: "Specialist" },
    { name: "Rima K.", dept: "Sales", role: "Executive" },
    { name: "Tanvir A.", dept: "Biz Dev", role: "Manager" },
  ];
  return (
    <PortalFrame path="admin/employees">
      <div className="grid gap-3 sm:grid-cols-[130px_1fr]">
        {/* side nav */}
        <div className="flex gap-2 overflow-x-auto sm:flex-col sm:overflow-visible">
          {nav.map((n) => {
            const Icon = n.icon;
            return (
              <div
                key={n.label}
                className={cn(
                  "flex shrink-0 items-center gap-2 rounded-lg px-2.5 py-2 text-[11px] font-medium",
                  n.active
                    ? "bg-emerald-400/10 text-emerald-300"
                    : "text-white/45",
                )}
              >
                <Icon className="h-3.5 w-3.5" /> {n.label}
              </div>
            );
          })}
        </div>

        {/* table */}
        <div className="min-w-0">
          <div className="mb-2.5 flex items-center gap-2">
            <span className="flex flex-1 items-center gap-1.5 rounded-md border border-white/[0.07] bg-white/[0.02] px-2.5 py-1.5 text-[10px] text-white/35">
              <Search className="h-3 w-3" /> Search employees
            </span>
            <span className="flex items-center gap-1 rounded-md bg-emerald-400/15 px-2.5 py-1.5 text-[10px] font-medium text-emerald-300">
              <Plus className="h-3 w-3" /> Add
            </span>
          </div>
          <div className="overflow-hidden rounded-lg border border-white/[0.07]">
            <div className="grid grid-cols-[1.3fr_1fr_1fr] gap-2 border-b border-white/[0.06] bg-white/[0.02] px-3 py-2 text-[9px] uppercase tracking-wider text-white/35">
              <span>Name</span>
              <span>Department</span>
              <span>Role</span>
            </div>
            {rows.map((r) => (
              <div
                key={r.name}
                className="grid grid-cols-[1.3fr_1fr_1fr] items-center gap-2 border-b border-white/[0.04] px-3 py-2.5 text-[11px] text-white/70 last:border-b-0"
              >
                <span className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/[0.06] text-[9px] text-white/60">
                    {r.name[0]}
                  </span>
                  {r.name}
                </span>
                <span className="text-white/50">{r.dept}</span>
                <span className="text-white/50">{r.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PortalFrame>
  );
}

const DASH = {
  sales: {
    tiles: [
      { label: "Pending updates", value: "4", icon: Bell },
      { label: "Open issues", value: "7", icon: FileText },
      { label: "My profiles", value: "12", icon: Boxes },
    ],
    listTitle: "Recent updates",
    list: [
      "Acme · Meta Ads — set relaunched",
      "Nova · SEO — report ready to send",
      "Peak · Meta — awaiting client reply",
    ],
  },
  ops: {
    tiles: [
      { label: "Pending issues", value: "9", icon: FileText },
      { label: "Updates to send", value: "5", icon: Send },
      { label: "Queue", value: "3", icon: Inbox },
    ],
    listTitle: "Issue queue",
    list: [
      "#2481 Acme · Meta — in progress",
      "#2483 Orbit · Website — new",
      "#2486 Zen · Apps — waiting on Sales",
    ],
  },
} as const;

function DashboardMock() {
  const reduce = useReducedMotion();
  const [role, setRole] = useState<"sales" | "ops">("sales");
  const data = DASH[role];
  const accent = role === "sales" ? DEPT.sales : DEPT.ops;

  return (
    <PortalFrame path={`dashboard/${role}`}>
      {/* role tabs */}
      <div className="flex items-center gap-1 rounded-lg border border-white/[0.07] bg-white/[0.02] p-1">
        {(["sales", "ops"] as const).map((r) => (
          <button
            key={r}
            onClick={() => setRole(r)}
            aria-pressed={role === r}
            className={cn(
              "relative flex-1 rounded-md px-3 py-1.5 text-[11px] font-medium capitalize transition-colors",
            )}
          >
            {role === r && (
              <motion.span
                layoutId="dash-tab"
                className={cn(
                  "absolute inset-0 rounded-md",
                  r === "sales" ? "bg-emerald-400/15" : "bg-amber-400/15",
                )}
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span
              className={cn(
                "relative z-10",
                role === r
                  ? r === "sales"
                    ? "text-emerald-300"
                    : "text-amber-300"
                  : "text-white/45",
              )}
            >
              {r === "sales" ? "Sales" : "Operations"}
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={role}
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
        >
          <div className="mt-3 grid grid-cols-3 gap-2.5">
            {data.tiles.map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.label}
                  className="rounded-lg border border-white/[0.07] bg-white/[0.02] p-2.5"
                >
                  <Icon className={cn("h-3.5 w-3.5", accent.text)} />
                  <p className="mt-2 font-aldrich text-xl font-bold text-white">
                    {t.value}
                  </p>
                  <p className="mt-0.5 text-[9px] leading-3 text-white/40">
                    {t.label}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-3 rounded-lg border border-white/[0.07] bg-white/[0.02] p-3">
            <p className="text-[10px] font-medium uppercase tracking-wider text-white/40">
              {data.listTitle}
            </p>
            <div className="mt-2 space-y-2">
              {data.list.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-[11px] text-white/65"
                >
                  <span
                    className={cn("h-1.5 w-1.5 rounded-full", accent.dot)}
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </PortalFrame>
  );
}

/* -------------------------------------------------------------------------- */
/*  System architecture diagram.                                             */
/* -------------------------------------------------------------------------- */

const ARCH_LAYERS = [
  {
    label: "People & Teams",
    note: "Employees grouped into departments and teams",
    icon: Users,
    items: ["Sales", "Operations", "Business Development"],
  },
  {
    label: "Profiles & Assignments",
    note: "Every client profile has a responsible owner",
    icon: Boxes,
    items: ["Client profiles", "Ownership", "Routing rules"],
  },
  {
    label: "Workflows",
    note: "The four systems that move work across the floor",
    icon: Workflow,
    items: ["Issue Sheet", "Update Sheet", "Station", "Queue"],
  },
  {
    label: "Role dashboards",
    note: "Each role sees exactly what it needs to act on",
    icon: LayoutDashboard,
    items: ["Sales view", "Operations view", "Admin controls"],
  },
];

function ArchitectureDiagram() {
  const reduce = useReducedMotion();
  return (
    <div className="mt-12 overflow-x-auto">
      <div className="grid min-w-[640px] gap-3 md:min-w-0 md:grid-cols-4">
        {ARCH_LAYERS.map((layer, i) => {
          const Icon = layer.icon;
          return (
            <motion.div
              key={layer.label}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-xl border border-white/10 bg-card/60 p-5"
            >
              <span className="absolute right-4 top-4 font-aldrich text-2xl font-bold text-white/[0.06]">
                0{i + 1}
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-aldrich text-base font-semibold text-white">
                {layer.label}
              </h3>
              <p className="mt-2 text-xs font-light leading-5 text-white/45">
                {layer.note}
              </p>
              <div className="mt-4 space-y-1.5">
                {layer.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-md bg-white/[0.03] px-2.5 py-1.5 text-[11px] text-white/60"
                  >
                    <span className="h-1 w-1 rounded-full bg-emerald-400/70" />
                    {item}
                  </div>
                ))}
              </div>
              {i < ARCH_LAYERS.length - 1 && (
                <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 md:block">
                  <ArrowRight className="h-4 w-4 text-white/20" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page.                                                                     */
/* -------------------------------------------------------------------------- */

const TECH = [
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Prisma", icon: SiPrisma, color: "#A78BFA" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
];

const BUILD_POINTS = [
  {
    icon: Layers,
    title: "Modeled the domain",
    text: "People, teams, client profiles, assignments, issues, updates, queue requests, and stations — the objects the whole floor shares.",
  },
  {
    icon: Route,
    title: "Built the routing",
    text: "Requests reach the person responsible for a profile instead of a group chat, so nothing waits on someone happening to notice it.",
  },
  {
    icon: ShieldCheck,
    title: "Role-based access",
    text: "Sales, Operations, and Admin each get the views and permissions their work needs — one portal, many tailored surfaces.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & admin tools",
    text: "Command-center views for daily work, plus the admin controls that keep employees, teams, and profiles accurate.",
  },
];

const OUTCOMES = [
  {
    icon: UserCheck,
    title: "Clear ownership",
    text: "Every profile and request has a named owner. The question “who handles this?” has a definite answer.",
  },
  {
    icon: ArrowRight,
    title: "Structured handoffs",
    text: "Issue out, update back. Sales and Operations pass work through a recorded path instead of forwarded messages.",
  },
  {
    icon: LayoutDashboard,
    title: "Shared visibility",
    text: "Pending issues, updates, and queue requests are visible to the people who need them, in one place.",
  },
  {
    icon: Boxes,
    title: "One source of truth",
    text: "Client profiles, assignments, and status live in the portal — not spread across inboxes and threads.",
  },
];

const OUTCOME_ACCENTS = [
  {
    text: "text-emerald-200",
    border: "border-emerald-400/25",
    bg: "bg-emerald-400/10",
    dot: "bg-emerald-400",
    hex: "#34D399",
    position: "left-[4%] top-[9%]",
  },
  {
    text: "text-amber-200",
    border: "border-amber-300/25",
    bg: "bg-amber-300/10",
    dot: "bg-amber-300",
    hex: "#FBBF24",
    position: "right-[4%] top-[9%]",
  },
  {
    text: "text-sky-200",
    border: "border-sky-300/25",
    bg: "bg-sky-300/10",
    dot: "bg-sky-300",
    hex: "#38BDF8",
    position: "bottom-[9%] left-[4%]",
  },
  {
    text: "text-violet-200",
    border: "border-violet-300/25",
    bg: "bg-violet-300/10",
    dot: "bg-violet-300",
    hex: "#C4B5FD",
    position: "bottom-[9%] right-[4%]",
  },
];

const OUTCOME_PATHS = [
  "M31 28 C40 28 41 39 50 50",
  "M69 28 C60 28 59 39 50 50",
  "M31 72 C40 72 41 61 50 50",
  "M69 72 C60 72 59 61 50 50",
];

function OutcomeSystem() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mt-12 lg:mt-0">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#070c14] shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
        <div className="pointer-events-none absolute inset-0 dotPattern opacity-[0.12] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/[0.08] blur-[80px]" />

        <div className="relative flex items-center justify-between border-b border-white/[0.07] bg-white/[0.02] px-4 py-3 sm:px-5">
          <span className="flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.18em] text-white/35">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
            Outcome map
          </span>
          <span className="flex items-center gap-1.5 text-[9px] text-white/30">
            <Users className="h-3 w-3" /> 300+ people · one workflow
          </span>
        </div>

        <div className="relative space-y-3 p-4 sm:p-5 md:hidden">
          <div className="absolute bottom-10 left-[37px] top-10 w-px bg-gradient-to-b from-emerald-400/50 via-amber-300/30 to-violet-300/40" />
          {OUTCOMES.map((item, i) => {
            const accent = OUTCOME_ACCENTS[i];
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={reduce ? false : { opacity: 0, x: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45, delay: i * 0.09 }}
                className="relative flex gap-4 rounded-xl border border-white/[0.08] bg-[#0a111c]/95 p-4"
              >
                <span
                  className={cn(
                    "relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border",
                    accent.border,
                    accent.bg,
                    accent.text,
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="font-aldrich text-sm font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs font-light leading-5 text-white/50">
                    {item.text}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="relative hidden h-[590px] md:block">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            {OUTCOME_PATHS.map((path, i) => (
              <g key={path}>
                <path
                  d={path}
                  fill="none"
                  stroke={OUTCOME_ACCENTS[i].hex}
                  strokeOpacity="0.1"
                  strokeWidth="1.2"
                  vectorEffect="non-scaling-stroke"
                />
                <motion.path
                  d={path}
                  fill="none"
                  stroke={OUTCOME_ACCENTS[i].hex}
                  strokeOpacity="0.52"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeDasharray="2 7"
                  vectorEffect="non-scaling-stroke"
                  initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                  whileInView={
                    reduce ? undefined : { pathLength: 1, opacity: 1 }
                  }
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 1, delay: 0.15 + i * 0.12 }}
                />
              </g>
            ))}
          </svg>

          {!reduce &&
            OUTCOME_ACCENTS.map((accent, i) => (
              <motion.span
                key={accent.hex}
                className={cn(
                  "pointer-events-none absolute left-1/2 top-1/2 z-20 h-2 w-2 rounded-full",
                  accent.dot,
                )}
                style={{ boxShadow: `0 0 12px ${accent.hex}` }}
                animate={
                  i === 0
                    ? {
                        x: [0, -145, -225],
                        y: [0, -90, -128],
                        opacity: [0, 1, 0],
                      }
                    : i === 1
                      ? {
                          x: [0, 145, 225],
                          y: [0, -90, -128],
                          opacity: [0, 1, 0],
                        }
                      : i === 2
                        ? {
                            x: [0, -145, -225],
                            y: [0, 90, 128],
                            opacity: [0, 1, 0],
                          }
                        : {
                            x: [0, 145, 225],
                            y: [0, 90, 128],
                            opacity: [0, 1, 0],
                          }
                }
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  delay: i * 0.65,
                  ease: "easeInOut",
                }}
              />
            ))}

          <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={reduce ? undefined : { scale: [1, 1.035, 1] }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex h-40 w-40 flex-col items-center justify-center rounded-full border border-emerald-300/25 bg-[#091723]/95 text-center shadow-[0_0_0_10px_rgba(52,211,153,0.025),0_0_70px_rgba(52,211,153,0.15)] backdrop-blur"
            >
              <motion.span
                aria-hidden="true"
                animate={reduce ? undefined : { rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full border border-dashed border-emerald-300/15"
              />
              <Network className="h-6 w-6 text-emerald-300" />
              <span className="mt-3 font-aldrich text-sm font-bold text-white">
                SAA Portal
              </span>
              <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.16em] text-emerald-200/55">
                Source of truth
              </span>
            </motion.div>
          </div>

          {OUTCOMES.map((item, i) => {
            const accent = OUTCOME_ACCENTS[i];
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={reduce ? false : { opacity: 0, y: 16, scale: 0.96 }}
                whileInView={
                  reduce ? undefined : { opacity: 1, y: 0, scale: 1 }
                }
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: 0.08 * i }}
                whileHover={reduce ? undefined : { y: -4 }}
                className={cn(
                  "absolute w-[230px] rounded-xl border bg-[#0a111c]/95 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.3)] backdrop-blur-sm",
                  accent.position,
                  accent.border,
                )}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg",
                      accent.bg,
                      accent.text,
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="font-aldrich text-xl font-bold text-white/[0.07]">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-3 font-aldrich text-sm font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-[11px] font-light leading-5 text-white/45">
                  {item.text}
                </p>
              </motion.article>
            );
          })}
        </div>

        <div className="relative grid grid-cols-3 divide-x divide-white/[0.07] border-t border-white/[0.07] bg-white/[0.015]">
          {[
            ["Before", "Scattered chats"],
            ["Now", "Structured handoffs"],
            ["Result", "Visible ownership"],
          ].map(([label, value], i) => (
            <div key={label} className="px-2 py-3 text-center sm:px-4 sm:py-4">
              <p className="text-[8px] font-medium uppercase tracking-[0.16em] text-white/25">
                {label}
              </p>
              <p
                className={cn(
                  "mt-1 text-[9px] sm:text-[11px]",
                  i === 2 ? "text-emerald-200/80" : "text-white/55",
                )}
              >
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RecognitionSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="recognition"
      aria-labelledby="recognition-title"
      className="relative isolate overflow-hidden border-y border-amber-300/10 bg-[#080b10] py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_48%,rgba(251,191,36,0.12),transparent_32%),radial-gradient(circle_at_20%_42%,rgba(52,211,153,0.08),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 dotPattern opacity-[0.08] [mask-image:linear-gradient(to_right,transparent,black_30%,black_75%,transparent)]" />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-14 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-amber-200/80">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-amber-300/20 bg-amber-300/[0.08] text-amber-200">
              <Award className="h-4 w-4" />
            </span>
            Management recognition
          </div>

          <h2
            id="recognition-title"
            className="mt-7 max-w-xl font-aldrich text-[28px] font-bold leading-[1.18] tracking-[-0.02em] text-white sm:text-[34px] md:text-[40px]"
          >
            The software did not just ship.
            <span className="mt-2 block text-amber-200">
              It changed how the agency worked.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm font-light leading-7 text-white/60 md:text-base md:leading-8">
            ScaleUp management recognized my work on SAA Portal with the
            Outstanding Contribution Award. The platform became an essential
            part of daily operations, bringing scattered work into one shared
            system for the agency.
          </p>

          <blockquote className="relative mt-8 max-w-xl border-l border-amber-300/30 pl-6">
            <Quote className="absolute -left-3 -top-2 h-6 w-6 bg-[#080b10] p-1 text-amber-300/70" />
            <p className="text-sm italic leading-7 text-white/75 md:text-[15px]">
              “A transformative organizational portal that streamlines
              processes, enhances collaboration, and improves organizational
              efficiency.”
            </p>
            <footer className="mt-3 text-[10px] font-medium uppercase tracking-[0.17em] text-white/35">
              ScaleUp IT Ltd. management
            </footer>
          </blockquote>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/15 bg-amber-300/[0.06] px-3.5 py-2 text-xs text-amber-100/85">
              <Award className="h-3.5 w-3.5" /> Outstanding Contribution Award
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-white/55">
              <CalendarDays className="h-3.5 w-3.5 text-emerald-300/70" /> Built
              August 2025
            </span>
          </div>
        </Reveal>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 36, rotate: 1.8 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0, rotate: -0.6 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.25, 0.25, 0.25, 0.75] }}
          className="relative mx-auto w-full max-w-[560px] lg:mr-0"
        >
          <motion.div
            aria-hidden="true"
            animate={
              reduce
                ? undefined
                : { opacity: [0.4, 0.8, 0.4], scale: [0.96, 1.04, 0.96] }
            }
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-8 -z-10 rounded-full bg-amber-300/[0.08] blur-3xl"
          />

          <div className="relative overflow-hidden rounded-[18px] border border-amber-200/20 bg-[#f7f5ef] p-2 shadow-[0_35px_100px_rgba(0,0,0,0.65),0_0_0_1px_rgba(251,191,36,0.06)] sm:p-3">
            <div className="relative min-h-[500px] overflow-hidden rounded-[12px] border border-[#173a2a]/10 bg-[#fbfaf6] px-7 py-8 text-[#101714] sm:min-h-[560px] sm:px-11 sm:py-10">
              <div className="pointer-events-none absolute -right-16 top-28 h-72 w-72 rounded-full border-[52px] border-amber-300/[0.09]" />
              <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full border-[64px] border-emerald-700/[0.07]" />
              <motion.span
                aria-hidden="true"
                animate={reduce ? undefined : { x: ["-160%", "240%"] }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  repeatDelay: 2.5,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute inset-y-0 w-24 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent blur-xl"
              />

              <div className="relative flex items-start justify-between gap-5">
                <ScaleUpLogo
                  showProduct={false}
                  plateClassName="bg-transparent p-0 shadow-none ring-0"
                />
                <span className="text-right text-[8px] font-semibold uppercase tracking-[0.2em] text-[#173a2a]/45 sm:text-[9px]">
                  Certificate of
                  <br />
                  recognition
                </span>
              </div>

              <div className="relative mt-16 text-center sm:mt-20">
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#173a2a]/50">
                  Certificate of recognition &amp; appreciation
                </p>
                <h3 className="mt-3 font-aldrich text-[20px] font-bold leading-tight text-[#0a1710] sm:text-[25px]">
                  Outstanding Contribution Award
                </h3>
                <span className="mx-auto mt-5 block h-px w-14 bg-amber-500/60" />
              </div>

              <div className="relative mx-auto mt-9 max-w-[390px] text-center">
                <p className="text-[11px] font-medium leading-5 text-[#142019]/65 sm:text-xs sm:leading-6">
                  Presented in recognition of the exceptional contribution made
                  through the successful development of a transformative
                  organizational portal.
                </p>
                <p className="mt-4 text-[10px] leading-5 text-[#142019]/48 sm:text-[11px]">
                  Technical excellence, initiative, and dedication created a
                  lasting impact across daily operations.
                </p>
              </div>

              <div className="relative mt-10 flex items-end justify-between gap-6 sm:mt-12">
                <div>
                  <span className="font-aldrich text-lg italic text-[#0d1711]">
                    Management
                  </span>
                  <span className="mt-1 block h-px w-28 bg-[#173a2a]/20" />
                  <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#173a2a]/55">
                    ScaleUp IT Ltd.
                  </p>
                </div>

                <motion.div
                  animate={reduce ? undefined : { rotate: [-2, 2, -2] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-amber-600/35 bg-amber-300/10 p-2 text-center shadow-[inset_0_0_0_4px_rgba(180,120,20,0.08)] sm:h-24 sm:w-24"
                >
                  <span className="font-aldrich text-[8px] font-bold uppercase leading-4 tracking-[0.12em] text-amber-800/80 sm:text-[9px]">
                    Recognized
                    <br />
                    for lasting
                    <br />
                    impact
                  </span>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 left-5 flex items-center gap-2 rounded-full border border-white/10 bg-[#0c1119]/95 px-3 py-2 text-[10px] text-white/55 shadow-2xl backdrop-blur-md sm:left-8">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
            Awarded by company management
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function SaaPortalCaseStudy() {
  return (
    <main className="overflow-x-clip bg-background text-white">
      {/* ------------------------------------------------------------------ */}
      {/* Hero                                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative isolate overflow-hidden pb-16 pt-28 md:pb-24 md:pt-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(52,211,153,0.12),transparent_42%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(251,191,36,0.07),transparent_38%)]" />
        <div className="pointer-events-none absolute inset-0 dotPattern opacity-[0.1] [mask-image:radial-gradient(ellipse_at_50%_40%,black,transparent_70%)]" />

        <div className="relative mx-auto w-full max-w-[1200px] px-4 md:px-6">
          <div className="flex items-center justify-between gap-4">
            <ScaleUpLogo />
            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-background/45 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white/50 backdrop-blur-md sm:flex">
              <span
                className="relative flex h-2.5 w-2.5 items-center justify-center"
                aria-hidden="true"
              >
                <span className="absolute -inset-1 animate-ping rounded-full bg-emerald-400/40 motion-reduce:animate-none" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              </span>
              In daily use
            </div>
          </div>

          <div className="mt-14 grid items-center gap-12 lg:mt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-3 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-200 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5" /> Internal product · ScaleUp
                Ads Agency
              </div>

              <h1 className="mt-6 font-aldrich text-[30px] font-bold leading-[1.12] tracking-[-0.02em] sm:text-[36px] md:text-[42px]">
                300 people. Three departments.
                <span className="mt-2 block bg-gradient-to-r from-white via-emerald-100 to-emerald-400 bg-clip-text text-transparent">
                  One portal to run the work.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-sm font-light leading-7 text-white/60 md:text-base md:leading-8">
                SAA Portal is the internal operations system I built for ScaleUp
                Ads Agency. It connects Sales, Operations, and Business
                Development so every client request has a clear owner, a clear
                status, and one place it lives.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {[
                  { icon: Users, label: "300+ people" },
                  { icon: Building2, label: "3 departments" },
                  { icon: Layers, label: "6 core systems" },
                ].map((item) => (
                  <span
                    key={item.label}
                    className="flex items-center gap-2 text-[11px] text-white/45"
                  >
                    <item.icon className="h-3.5 w-3.5 text-emerald-300/70" />
                    {item.label}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-2">
                {[
                  "Product design",
                  "Full-stack development",
                  "Internal tooling",
                ].map((role) => (
                  <span
                    key={role}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/70"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <DepartmentMap />
            </Reveal>
          </div>

          <div className="mt-14 flex items-end justify-between md:mt-20">
            <a
              href="#recognition"
              className="flex w-fit items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-white/30 transition-colors hover:text-white/60"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.04] backdrop-blur-sm">
                <ArrowDown className="h-3.5 w-3.5" />
              </span>
              See the recognition
            </a>
            <div className="hidden text-right md:block">
              <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/25">
                Internal tool
              </p>
              <p className="mt-1 text-[10px] text-white/40">
                Staff access only · no public link
              </p>
            </div>
          </div>
        </div>
      </section>

      <RecognitionSection />

      {/* ------------------------------------------------------------------ */}
      {/* At a glance                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section id="overview" className="relative py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <Reveal className="overflow-hidden rounded-2xl border border-white/10 bg-card/50">
            <div className="grid divide-white/10 sm:grid-cols-3 sm:divide-x">
              {[
                {
                  value: 300,
                  suffix: "+",
                  label: "People on the platform",
                  note: "Across the whole agency",
                },
                {
                  value: 3,
                  suffix: "",
                  label: "Departments connected",
                  note: "Sales · Operations · Biz Dev",
                },
                {
                  value: 6,
                  suffix: "",
                  label: "Systems in one portal",
                  note: "From issues to dashboards",
                },
              ].map((stat) => (
                <div key={stat.label} className="p-7 md:p-9">
                  <p className="font-aldrich text-[34px] font-bold leading-none tracking-tight text-white md:text-[44px]">
                    <CountUp value={stat.value} />
                    {stat.suffix ? (
                      <span className="text-emerald-400">{stat.suffix}</span>
                    ) : null}
                  </p>
                  <p className="mt-4 text-sm font-medium text-white/75">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-xs font-light text-white/40">
                    {stat.note}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid gap-6 border-t border-white/10 p-7 sm:grid-cols-[0.8fr_1.2fr] md:p-9">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-300">
                  My role
                </p>
                <p className="mt-2 text-sm font-light leading-6 text-white/60">
                  Product design and full-stack development — from the data
                  model to the dashboards.
                </p>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-300">
                  Services coordinated
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "FSD",
                    "Mobile App",
                    "CMS",
                    "Google Ads",
                    "Meta Ads",
                    "SEO",
                  ].map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-white/60"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* The problem                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-14 px-4 md:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <SectionHeading
            eyebrow="The problem"
            title="When the floor outgrew the group chat"
            text="ScaleUp Ads Agency delivers websites, apps, SEO, and paid ads for a lot of clients at once. Before the portal, the work that moved between Sales and Operations moved through messages — and at the scale of hundreds of people, messages stop being enough."
          />
          <Reveal className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: MessageCircle,
                title: "Requests lived in chats",
                text: "Client work was tracked in threads that were easy to lose, hard to search, and impossible to audit later.",
              },
              {
                icon: UserCheck,
                title: "Ownership was unclear",
                text: "With hundreds of people and profiles, it was rarely obvious who was responsible for a given client or task.",
              },
              {
                icon: ArrowRight,
                title: "Handoffs were manual",
                text: "Passing work between Sales and Operations depended on remembering to forward the right message to the right person.",
              },
              {
                icon: Clock,
                title: "Status was invisible",
                text: "There was no shared view of what was pending, in progress, or done — so people asked instead of checked.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-white/10 bg-card/60 p-6"
              >
                <item.icon className="h-5 w-5 text-red-300/70" />
                <h3 className="mt-5 font-aldrich text-base font-semibold">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-6 text-white/55">
                  {item.text}
                </p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Before / After                                                     */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative border-y border-white/10 bg-white/[0.015] py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(52,211,153,0.07),transparent_36%)]" />
        <div className="relative mx-auto max-w-[1200px] px-4 md:px-6">
          <SectionHeading
            eyebrow="Before / after"
            title="From scattered messages to a structured workflow"
            text="The portal did not add process for its own sake. It gave one shape to work that was already happening — so it could be seen, owned, and finished."
            align="center"
          />
          <BeforeAfter />
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* The solution — core workflow                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <SectionHeading
            eyebrow="The solution"
            title="A shared system with one loop at its center"
            text="Everything in SAA Portal serves a single idea: turn a client need into a tracked item that moves through a clear path and comes back visible to whoever needs it."
          />

          <Reveal className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                tag: "Main loop",
                icon: FileText,
                title: "Issue → Update",
                text: "Sales opens an Issue; Operations works it and sends an Update back. The core handoff, recorded end to end.",
                accent: "text-emerald-300",
                border: "border-emerald-400/20",
              },
              {
                tag: "Supporting",
                icon: Inbox,
                title: "The Queue",
                text: "When Operations needs information, a request is routed to the Sales member who owns that profile, and answered in the portal.",
                accent: "text-amber-300",
                border: "border-amber-400/20",
              },
              {
                tag: "Supporting",
                icon: MapPin,
                title: "The Station",
                text: "A live map of who is at which station and who owns which profile — so the right person is always reachable.",
                accent: "text-sky-300",
                border: "border-sky-400/20",
              },
            ].map((loop) => (
              <div
                key={loop.title}
                className={cn("rounded-xl border bg-card/60 p-6", loop.border)}
              >
                <div className="flex items-center justify-between">
                  <loop.icon className={cn("h-5 w-5", loop.accent)} />
                  <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/35">
                    {loop.tag}
                  </span>
                </div>
                <h3 className="mt-5 font-aldrich text-lg font-semibold">
                  {loop.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-6 text-white/55">
                  {loop.text}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Feature deep-dives                                                 */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative border-y border-white/10 bg-white/[0.015] py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <SectionHeading
            eyebrow="Inside the portal"
            title="Six systems, one connected workspace"
            text="Each part of SAA Portal does one job well. Together they cover the full path a client request takes across the agency."
          />

          <div className="mt-16">
            <FeatureSection
              index="01"
              icon={FileText}
              dept="sales"
              eyebrow="Issue Sheet"
              title="Where a client request begins"
              text="A Sales member opens an Issue with everything Operations needs to act — no back-and-forth to gather context."
              points={[
                "Captures client and order info, the profile, a description, screenshots, links, and notes in one place.",
                "Operations receives it, works on it, responds, and updates its status as it moves.",
                "Nothing sits in a chat waiting to be noticed — the Issue is the record.",
              ]}
              visual={<IssueSheetMock />}
              layout="right"
            />

            <FeatureSection
              index="02"
              icon={Send}
              dept="ops"
              eyebrow="Update Sheet"
              title="The path back to Sales"
              text="When Operations has news or finishes the work, they send an Update that lands on the right Sales member’s dashboard."
              points={[
                "Closes the loop the Issue opened: Client → Sales → Issue → Operations → Work → Update → Sales.",
                "Updates appear on the Sales dashboard, so the client-facing side always knows where things stand.",
                "The two teams stay in sync without a single forwarded message.",
              ]}
              visual={<UpdateSheetMock />}
              layout="left"
            />

            <FeatureSection
              index="03"
              icon={MapPin}
              dept="sales"
              eyebrow="Station"
              title="Who is where, and who owns what"
              text="Each Sales member keeps their current station and the profiles they handle up to date, giving Operations a live map of the floor."
              points={[
                "Operations can see at a glance who is at which station and who owns a given profile.",
                "When something needs a quick answer, they reach the right person on WhatsApp.",
                "Ownership stops being tribal knowledge and becomes something you can look up.",
              ]}
              visual={<StationMock />}
              layout="full"
            />

            <FeatureSection
              index="04"
              icon={Inbox}
              dept="ops"
              eyebrow="Queue"
              title="Routing questions to the right owner"
              text="When Operations needs information to keep moving, a Queue request goes straight to the Sales member responsible for that profile."
              points={[
                "Captures the client, order ID, profile, the request itself, and any extra detail.",
                "The portal routes it to the responsible Sales member — not a broadcast to everyone.",
                "They respond in the portal, so the answer stays attached to the work.",
              ]}
              visual={<QueueMock />}
              layout="right"
            />

            <FeatureSection
              index="05"
              icon={Settings2}
              dept="admin"
              eyebrow="Admin Management"
              title="The control room behind the routing"
              text="Admins manage the operational data that makes ownership and routing work across every department."
              points={[
                "Manage employees, teams, client profiles, and assignments in one place.",
                "Keep the data that powers routing accurate as people and clients change.",
                "The backbone that lets the rest of the portal stay reliable.",
              ]}
              visual={<AdminMock />}
              layout="left"
            />

            <FeatureSection
              index="06"
              icon={LayoutDashboard}
              dept="ops"
              eyebrow="Role-Based Dashboards"
              title="A command center for each role"
              text="Everyone opens the portal to a view built for their job — not a generic admin screen."
              points={[
                "Sales see pending updates, open issues, and the profiles assigned to them.",
                "Operations monitor pending issues, updates to send, the live queue, and overall workload.",
                "The first screen of the day is the work that needs attention, sorted by role.",
              ]}
              visual={<DashboardMock />}
              layout="full"
            />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* System architecture                                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <SectionHeading
            eyebrow="How it fits together"
            title="One data model connects every department"
            text="Underneath the six systems is a single model of people, profiles, and work. That is what lets a request find its owner and a status stay true across the whole agency."
          />
          <ArchitectureDiagram />
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* What I built                                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative border-y border-white/10 bg-black py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_35%,rgba(52,211,153,0.1),transparent_36%)]" />
        <div className="relative mx-auto max-w-[1200px] px-4 md:px-6">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <SectionHeading
              eyebrow="What I built"
              title="A real business problem, turned into a working product"
              text="I designed and built SAA Portal end to end — the data model, the workflows, the role-based dashboards, and the admin tools that keep it all accurate. It runs on the stack I use across my work."
            />
            <Reveal className="grid gap-4 sm:grid-cols-2">
              {BUILD_POINTS.map((point) => (
                <article
                  key={point.title}
                  className="rounded-xl border border-white/10 bg-card/60 p-6"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                    <point.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-aldrich text-base font-semibold">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-6 text-white/55">
                    {point.text}
                  </p>
                </article>
              ))}
            </Reveal>
          </div>

          <Reveal className="mt-12">
            <div className="flex flex-wrap items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <span className="mr-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/40">
                Built with
              </span>
              {TECH.map((tech) => {
                const Icon = tech.icon;
                return (
                  <span
                    key={tech.name}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#0a1120] px-3 py-2 text-xs font-medium text-white/75"
                  >
                    <Icon className="h-4 w-4" style={{ color: tech.color }} />
                    {tech.name}
                  </span>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Outcome                                                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_50%,rgba(52,211,153,0.07),transparent_34%)]" />
        <div className="relative mx-auto grid max-w-[1200px] gap-12 px-4 md:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-14">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="The outcome"
              title={
                <>
                  Clear ownership. Fewer lost requests.
                  <span className="mt-2 block text-emerald-300">
                    One source of truth.
                  </span>
                </>
              }
              text="Sales and Operations now share one system instead of scattered threads. Every request has an owner and a status, handoffs are structured, and anyone can see where the work stands — for more than 300 people, every day."
            />
            <Reveal delay={0.1} className="mt-8 flex items-center gap-4">
              <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] text-emerald-200">
                <CheckCircle2 className="h-5 w-5" />
                <span className="absolute -inset-1 rounded-full border border-emerald-300/10" />
              </span>
              <div>
                <p className="font-aldrich text-sm font-semibold text-white">
                  Built into the daily workflow
                </p>
                <p className="mt-1 text-xs text-white/40">
                  Not another dashboard to check—one system to work from.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <OutcomeSystem />
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Reflection                                                         */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative border-y border-white/10 bg-white/[0.015] py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(52,211,153,0.06),transparent_45%)]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
          <Reveal>
            <p className="font-aldrich text-[80px] font-bold leading-none text-emerald-400/20">
              “
            </p>
            <blockquote className="-mt-8 font-aldrich text-2xl font-semibold leading-relaxed md:text-3xl">
              The best internal tools disappear into the work. Nobody applauds
              them — the team just stops asking “who owns this?” and gets on
              with the job.
            </blockquote>
            <p className="mt-8 text-sm font-light leading-7 text-white/55">
              Building for people who use a product every day is different from
              building for visitors. The reward is not a launch moment — it is a
              floor of 300 people moving faster because the system quietly keeps
              the work in order.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* CTA + footer                                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-20 md:py-28">
        <Reveal className="relative mx-auto max-w-[1168px] overflow-hidden rounded-2xl border border-emerald-400/20 bg-card/70 px-6 py-16 text-center shadow-[0_30px_100px_rgba(52,211,153,0.1)] md:px-12 md:py-20">
          <div className="pointer-events-none absolute inset-0 dotPattern opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/15 blur-[100px]" />
          <div className="relative">
            <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white/50">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
              Internal product · Staff access only
            </div>
            <h2 className="mx-auto mt-6 max-w-2xl font-aldrich text-[28px] font-bold leading-tight sm:text-[34px] md:text-[40px]">
              An operations system, built for a real team.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm font-light leading-7 text-white/55 md:text-base">
              SAA Portal runs inside ScaleUp Ads Agency, so there is no public
              link to share. If you would like a closer look at how it works, or
              want something similar built, I am happy to walk through it.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="bg-emerald-500 text-black hover:bg-emerald-400"
              >
                <Link href="/contact">
                  Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/15 bg-white/[0.03] text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/case-study/trust-check-bd">
                  Read the Trust Check BD case study
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>

        <div className="mx-auto mt-8 flex max-w-[1168px] items-center justify-between gap-5 px-1 text-xs text-white/35">
          <Link
            href="/"
            className="flex items-center gap-2 transition hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back home
          </Link>
          <span className="text-right text-[10px] text-white/30">
            Access restricted to ScaleUp Ads Agency staff
          </span>
        </div>
      </section>
    </main>
  );
}
