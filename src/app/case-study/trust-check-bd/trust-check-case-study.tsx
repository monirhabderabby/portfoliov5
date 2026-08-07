"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Logo } from "@/components/ui/trust-check-bd-logo";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  BookOpen,
  BrainCircuit,
  CircleAlert,
  Code2,
  Database,
  ExternalLink,
  Facebook,
  FileCheck2,
  Flag,
  Github,
  Globe2,
  HeartHandshake,
  Linkedin,
  LockKeyhole,
  MessageSquareWarning,
  MousePointer2,
  Palette,
  Rocket,
  Search,
  Send,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Users,
  Wrench,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { SiTiktok } from "react-icons/si";

const PRODUCT_URL =
  "https://trustcheckbd.com/en?utm_source=monirhrabby.com&utm_medium=referral&utm_campaign=portfolio_case_study";
const HERO_VIDEO_URL =
  "https://da8h6r7q9t.ufs.sh/f/qDFYtzIILml3m6NnkVw26HX73ujT1xNwFocYCGW5daALbDV9";

const roles = [
  {
    label: "Founder",
    description:
      "Turned a real-world problem into a product with real users and measurable impact.",
    icon: Flag,
  },
  {
    label: "Product Strategy",
    description:
      "Defined the product vision, core features, and long-term roadmap.",
    icon: Target,
  },
  {
    label: "UI/UX Design",
    description:
      "Designed simple, intuitive experiences focused on trust and usability.",
    icon: Palette,
  },
  {
    label: "Full Stack Engineering",
    description:
      "Built the frontend, backend, APIs, and database architecture.",
    icon: Code2,
  },
  {
    label: "System Architecture",
    description:
      "Designed a scalable foundation for search, reporting, and future growth.",
    icon: ServerCog,
  },
  {
    label: "SEO & Discoverability",
    description:
      "Optimized the platform so people can easily find trusted information.",
    icon: Search,
  },
  {
    label: "Deployment & Operations",
    description:
      "Managed production deployment, monitoring, and ongoing improvements.",
    icon: Rocket,
  },
  {
    label: "Product Growth",
    description:
      "Continuously improved the product using community feedback and real usage.",
    icon: Wrench,
  },
  {
    label: "Community Building",
    description:
      "Built a community where people help protect others by sharing verified scam reports.",
    icon: Users,
  },
];

const roadmap = [
  {
    year: "May 2026",
    title: "The problem became personal",
    text: "A 900 BDT online purchase ended with an instant block—and a sharper question: where can someone verify a seller before paying?",
  },
  {
    year: "2026",
    title: "Research and product framing",
    text: "The idea became a free, proof-first platform where people could search suspicious identities and share reports that help others.",
  },
  {
    year: "2026",
    title: "Build and launch",
    text: "TrustCheck BD launched as a public reporting platform with manual verification and community scam-database search.",
  },
  {
    year: "Now",
    title: "Operate and improve",
    text: "The product is live, reports are reviewed, risk signals are published, and the community database continues to grow.",
  },
  {
    year: "2027",
    title: "Detection and mobile",
    text: "The published roadmap includes Android and iOS apps, AI-powered scam detection, and advanced trust analytics.",
  },
  {
    year: "2028+",
    title: "Trust infrastructure",
    text: "Browser extensions, a public verification API, instant alerts, and a long-term global trust intelligence network are planned.",
  },
];

const challenges = [
  {
    icon: FileCheck2,
    title: "Fair, evidence-led reporting",
    challenge:
      "A public warning can protect users, but an unverified claim can also cause harm.",
    response:
      "Reports move through proof checks, moderator review, final admin approval, and structured verification before warning badges go live.",
  },
  {
    icon: Database,
    title: "Useful signals, not false certainty",
    challenge:
      "People need a fast answer while the underlying evidence can be nuanced.",
    response:
      "The product presents trust scores and risk indicators as guidance, keeps the verification limitations visible, and asks users to apply judgment.",
  },
  {
    icon: LockKeyhole,
    title: "Protecting people who report",
    challenge:
      "Contributors need to share evidence without exposing their identity.",
    response:
      "The public product states that reporter identities stay private and that screenshots, files, and personal data are held behind strict access controls.",
  },
  {
    icon: MessageSquareWarning,
    title: "Spam and misleading reports",
    challenge:
      "An open reporting system must remain useful as participation grows.",
    response:
      "Fake or misleading reports are removed, submissions are moderated, and repeated spam can lead to account bans.",
  },
];

const technicalHighlights = [
  {
    icon: Search,
    title: "Search as the front door",
    text: "The main flow starts with the user’s real question: is this phone number, Facebook page, website, account, or business safe enough to pay?",
  },
  {
    icon: FileCheck2,
    title: "Proof-first data pipeline",
    text: "Reports gather identifying details, incident context, transaction information, and supporting files before entering review.",
  },
  {
    icon: ShieldCheck,
    title: "Human verification layer",
    text: "Moderation and admin approval sit between a user submission and a public warning, prioritizing fairness over instant publishing.",
  },
  {
    icon: BarChart3,
    title: "Derived trust signals",
    text: "Verified facts, proof quality, community feedback frequency, and automated signals contribute to the public risk indicators.",
  },
];

const lessons = [
  {
    title: "Start with the moment of risk",
    text: "The product became clearer when every decision worked backward from one high-stakes moment: the seconds before someone sends money.",
  },
  {
    title: "Trust needs visible process",
    text: "A safety product cannot ask users to trust a black box. Review stages, limitations, disputes, and evidence standards have to be understandable.",
  },
  {
    title: "Launching creates a different job",
    text: "Shipping the first version was only the start. Moderation, maintenance, search quality, public communication, and roadmap discipline became part of product ownership.",
  },
];

const socialCards = [
  {
    name: "Facebook",
    description:
      "Community warnings, product updates, and scam-awareness content.",
    href: "https://www.facebook.com/trustcheckbd.official",
    icon: Facebook,
    available: true,
  },
  {
    name: "TikTok",
    description:
      "Short-form safety education for people navigating online transactions.",
    href: "https://www.tiktok.com/@trustcheckbd.official",
    icon: SiTiktok,
    available: true,
  },
  {
    name: "LinkedIn",
    description:
      "A dedicated TrustCheck BD company page is not publicly listed yet.",
    href: "",
    icon: Linkedin,
    available: false,
  },
  {
    name: "YouTube",
    description:
      "A dedicated TrustCheck BD channel is not publicly listed yet.",
    href: "",
    icon: Youtube,
    available: false,
  },
];

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
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }
    >
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-blue-300">
        {eyebrow}
      </p>
      <h2 className="font-aldrich text-[26px] font-bold leading-tight tracking-tight sm:text-[30px] md:text-[36px]">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 text-sm font-light leading-7 text-white/60 md:text-base">
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

function BrowserFrame({
  className = "",
  crop = false,
}: {
  className?: string;
  crop?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-white/15 bg-[#07101f]/95 p-2 shadow-[0_30px_90px_rgba(0,0,0,0.55)] ${className}`}
    >
      <div
        className="mb-2 flex items-center gap-1.5 px-1 py-1"
        aria-hidden="true"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <span className="mx-auto rounded-sm bg-white/[0.06] px-8 py-1 text-[8px] text-white/40">
          trustcheckbd.com
        </span>
      </div>
      <div
        className={`overflow-hidden rounded-md bg-[#f8faff] ${crop ? "aspect-[9/16]" : ""}`}
      >
        <Image
          src="/images/trust-check-bd-homepage.png"
          alt="TrustCheck BD homepage with its scam checker search interface"
          width={1404}
          height={881}
          sizes="(max-width: 768px) 92vw, 720px"
          className={
            crop
              ? "h-full w-auto max-w-none object-cover object-left"
              : "h-auto w-full"
          }
        />
      </div>
    </div>
  );
}

export default function TrustCheckCaseStudy() {
  const [stats, setStats] = useState<{
    approvedReports: number;
    searchDone: number;
  }>({ approvedReports: 104, searchDone: 3588 });

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const response = await fetch("/api/trustcheck-stats", {
          cache: "no-store",
        });
        if (!response.ok) return;
        const payload = (await response.json()) as {
          approvedReports: number;
          searchDone: number;
        };
        if (mounted) setStats(payload);
      } catch {
        // The last verified public values remain visible if live stats are unavailable.
      }
    };
    void load();
    const timer = window.setInterval(load, 60_000);
    return () => {
      mounted = false;
      window.clearInterval(timer);
    };
  }, []);

  return (
    <main className="overflow-hidden bg-background text-white">
      <section className="relative isolate flex min-h-screen items-center overflow-hidden pb-16 pt-24 md:pb-20 md:pt-28">
        <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_82%,transparent_100%)]">
          <video
            aria-hidden="true"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            disablePictureInPicture
            tabIndex={-1}
            className="h-full w-full scale-[1.04] object-cover object-center opacity-[0.28] saturate-[0.8] contrast-[0.9] sm:opacity-[0.32] lg:translate-x-[100px] lg:object-right"
          >
            <source src={HERO_VIDEO_URL} type="video/mp4" />
          </video>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/35" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/35 via-transparent to-background" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_74%_44%,rgba(0,122,255,0.16),transparent_38%)]" />
        <div className="pointer-events-none absolute inset-0 dotPattern opacity-[0.12] [mask-image:radial-gradient(ellipse_at_36%_50%,black,transparent_66%)]" />
        <div className="pointer-events-none absolute left-[12%] top-[24%] h-64 w-64 rounded-full bg-primary/[0.09] blur-[120px]" />

        <div className="relative mx-auto w-full max-w-[1200px] px-4 md:px-6">
          <div className="flex items-center justify-between">
            <Logo
              locale="en"
              brand="TrustCheck BD"
              tagline="Check before you pay"
              showTagline
              brandClassName="text-white"
              taglineClassName="text-white/45"
            />
            <div className="hidden items-center gap-2 rounded-full bg-background/45 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white/45 backdrop-blur-md sm:flex">
              <span
                className="relative flex h-2.5 w-2.5 items-center justify-center"
                aria-hidden="true"
              >
                <span className="absolute -inset-1 animate-ping rounded-full bg-emerald-400/40 motion-reduce:animate-none" />
                <span className="absolute inset-0 animate-pulse rounded-full bg-emerald-300 motion-reduce:animate-none" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.95)]" />
              </span>
              Live Since July 2026
            </div>
          </div>

          <Reveal className="relative z-10 mt-16 max-w-[760px] md:mt-20 lg:mt-24">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/[0.1] px-3 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-blue-200 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" /> Founder case study · Est.
              2026
            </div>

            <h1 className="mt-6 font-aldrich text-[30px] font-bold leading-[1.16] tracking-[-0.025em] sm:text-[34px] md:text-[38px] lg:text-[42px]">
              I didn&apos;t set out to build a startup.
              <span className="mt-2 block bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
                I set out to solve a problem.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-sm font-light leading-7 text-white/60 md:text-base md:leading-8">
              Trust Check BD is a community-powered platform that helps people
              search suspicious identities before paying and report scams to
              protect others. This case study explores the journey of building,
              launching, and growing a real product with measurable impact.
            </p>

            <div className="mt-11 flex flex-wrap gap-x-7 gap-y-3">
              {[
                { icon: BadgeCheck, label: "Human reviewed" },
                { icon: ShieldCheck, label: "Evidence based" },
                { icon: Users, label: "Community powered" },
              ].map((item) => (
                <span
                  key={item.label}
                  className="flex items-center gap-2 text-[11px] text-white/40"
                >
                  <item.icon className="h-3.5 w-3.5 text-blue-300/70" />{" "}
                  {item.label}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="mt-16 flex items-end justify-between md:mt-20">
            <a
              href="#impact"
              className="flex w-fit items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-white/30 transition-colors hover:text-white/60"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.04] backdrop-blur-sm">
                <ArrowDown className="h-3.5 w-3.5" />
              </span>
              Explore the story
            </a>
            <div className="hidden text-right md:block">
              <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/25">
                Live product preview
              </p>
              <p className="mt-1 text-[10px] text-white/40">
                Muted · Autoplay · Continuous loop
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="relative isolate py-16 md:py-20">
        <div className="pointer-events-none absolute left-[8%] top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-primary/10 blur-[90px]" />
        <div className="pointer-events-none absolute right-[8%] top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-blue-400/[0.07] blur-[90px]" />

        <div className="relative mx-auto grid max-w-[1200px] gap-y-16 px-6 sm:grid-cols-3 sm:gap-x-8 md:px-8">
          {[
            {
              label: "Approved scam reports",
              value: stats.approvedReports,
              suffix: "+",
              note: "Reviewed and published",
              status: "Live data",
              icon: FileCheck2,
            },
            {
              label: "Scam searches",
              value: stats.searchDone,
              suffix: "+",
              note: "Checks made before payment",
              status: "Live data",
              icon: Search,
            },
            {
              label: "Platform launched",
              value: 2026,
              suffix: "",
              note: "Founder-led and growing",
              status: "Milestone",
              icon: Rocket,
            },
          ].map((item, index) => (
            <Reveal
              key={item.label}
              delay={index * 0.08}
              className="group relative min-h-[170px] sm:min-h-[185px]"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-1 -top-5 font-aldrich text-[64px] font-bold leading-none text-white/[0.025] transition-colors duration-500 group-hover:text-primary/[0.055] md:text-[76px]"
              >
                0{index + 1}
              </span>

              <div className="relative flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.18em] text-white/35">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                {item.status}
              </div>

              <div className="relative mt-6 flex items-start gap-2.5">
                <item.icon className="mt-1.5 h-4 w-4 shrink-0 text-blue-300/70 transition-colors group-hover:text-blue-300" />
                <p className="font-aldrich text-[25px] font-bold leading-none tracking-[-0.025em] text-white sm:text-[30px] lg:text-[40px]">
                  <CountUp value={item.value} />
                  {item.suffix ? (
                    <span className="ml-1 text-primary">{item.suffix}</span>
                  ) : null}
                </p>
              </div>

              <div className="relative mt-5 pl-[26px]">
                <div className="mb-3.5 h-1 w-9 rounded-full bg-gradient-to-r from-primary to-blue-300 transition-[width] duration-500 group-hover:w-16" />
                <p className="text-[13px] font-medium text-white/75">
                  {item.label}
                </p>
                <p className="mt-1.5 text-[11px] font-light text-white/35">
                  {item.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="mx-auto grid max-w-[1200px] gap-14 px-4 md:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <SectionHeading
            eyebrow="The problem"
            title="Online trust breaks at the moment of payment"
            text="A Facebook page with thousands of followers, positive comments, or a polished website can look trustworthy. Yet before Trust Check BD, there was no simple way to verify whether that identity had already been reported."
          />
          <Reveal className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: MousePointer2,
                title: "People trust too quickly",
                text: "Thousands of followers, positive comments, or a polished website can create false confidence before any payment is made.",
              },
              {
                icon: Search,
                title: "Warnings are scattered",
                text: "Scam evidence is often buried across Facebook posts, screenshots, inboxes, and personal experiences instead of one searchable place.",
              },
              {
                icon: Users,
                title: "One report protects many",
                text: "A single verified scam report can warn thousands of others before they become the next victim.",
              },
              {
                icon: BadgeCheck,
                title: "Trust needs evidence",
                text: "Safety should be based on searchable reports and verified information—not assumptions, rumors, or appearances.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-md border border-white/10 bg-card/60 p-6"
              >
                <item.icon className="h-5 w-5 text-blue-300" />
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

      <section className="relative border-y border-white/10 bg-black py-24 md:py-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(0,75,224,0.15),transparent_38%)]" />
        <div className="relative mx-auto grid max-w-[1200px] gap-14 px-4 md:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-24">
          <Reveal>
            <p className="text-[92px] font-bold leading-none text-primary/20">
              “
            </p>
            <blockquote className="-mt-8 font-aldrich text-2xl font-semibold leading-relaxed text-white md:text-3xl">
              If someone with a strong tech background can get scammed, what
              happens to millions of people every day?
            </blockquote>
            <p className="mt-6 text-xs uppercase tracking-[0.16em] text-white/40">
              The question that led me to found Trust Check BD
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-300">
              Why I built it
            </p>
            <h2 className="mt-3 font-aldrich text-[26px] font-bold leading-tight md:text-[36px]">
              A 900 BDT scam exposed a much bigger problem.
            </h2>
            <div className="mt-6 space-y-5 text-sm font-light leading-7 text-white/60 md:text-base">
              <p>
                In May 2026, I wanted to try ChatGPT Pro, but I didn&apos;t have
                an international payment card. I found a Facebook page that
                promised instant access. I paid 900 BDT, but instead of getting
                the service, I was blocked.
              </p>

              <p>
                Losing 900 BDT was not the biggest problem. I realized there was
                no easy way to check if a seller had scammed other people before
                sending money. That simple question inspired me to build
                something better.
              </p>

              <p>
                That&apos;s how Trust Check BD started. It helps people search
                before they pay, report scams, and share evidence so others can
                stay safe. My goal is simple: help people make safer decisions
                online.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <SectionHeading
            eyebrow="Founder ownership"
            title="Built from idea to production."
            text="Building Trust Check BD meant owning every stage of the journey—from identifying the problem and designing the experience to writing code, launching the product, improving SEO, and continuously making it better."
            align="center"
          />
          <Reveal className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((role) => (
              <div
                key={role.label}
                className="group flex items-center gap-4 rounded-md border border-white/10 bg-card/60 p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-card"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-blue-300 transition group-hover:bg-primary group-hover:text-white">
                  <role.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-medium text-white/80">
                    {role.label}
                  </h3>
                  <p className="mt-1 text-xs font-light leading-5 text-white/50">
                    {role.description}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.018] py-24 md:py-36">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <SectionHeading
            eyebrow="Core product"
            title="Two actions form one protection loop."
            text="Search helps someone avoid a risky payment today. Reporting turns a bad experience into a warning that can protect someone tomorrow."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {[
              {
                number: "01",
                icon: Send,
                title: "Report a scam",
                text: "Users submit the suspicious identity, explain what happened, add transaction context, and attach screenshots or documents. The report then moves through review before publication.",
                link: "https://trustcheckbd.com/en/report-scam",
                cta: "Report a scam",
              },
              {
                number: "02",
                icon: Search,
                title: "Search before you pay",
                text: "People can look up phone numbers, bKash or Nagad accounts, websites, Facebook pages, links, businesses, and other suspicious identities before sending money.",
                link: "https://trustcheckbd.com/en",
                cta: "Try the search",
              },
            ].map((feature, index) => (
              <Reveal
                key={feature.title}
                delay={index * 0.08}
                className="group relative overflow-hidden rounded-lg border border-white/10 bg-card/70 p-7 md:p-10"
              >
                <span className="absolute right-6 top-3 font-aldrich text-7xl font-bold text-white/[0.035]">
                  {feature.number}
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-primary/20 bg-primary/10 text-blue-300">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-12 font-aldrich text-2xl font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm font-light leading-7 text-white/60">
                  {feature.text}
                </p>
                <Link
                  href={feature.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition hover:text-white"
                >
                  {feature.cta} <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <SectionHeading
            eyebrow="Product gallery"
            title="A public safety product designed for clarity."
            text="The interface puts the primary task—checking before paying—at the center, then makes the reporting and verification process visible around it."
          />
          <div className="mt-12 grid items-end gap-5 lg:grid-cols-[1fr_280px]">
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label="Open desktop product screenshot"
                >
                  <BrowserFrame />
                  <span className="mt-3 flex items-center justify-between text-xs text-white/40">
                    <span>Desktop product view</span>
                    <span className="flex items-center gap-1 transition group-hover:text-white/70">
                      Open image <ExternalLink className="h-3 w-3" />
                    </span>
                  </span>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-6xl border-white/15 bg-[#07101f] p-2">
                <Image
                  src="/images/trust-check-bd-homepage.png"
                  alt="Full TrustCheck BD homepage screenshot"
                  width={1404}
                  height={881}
                  className="h-auto w-full rounded-md"
                />
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="group mx-auto w-[250px] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label="Open mobile product crop"
                >
                  <div className="rounded-[28px] border border-white/15 bg-[#070b14] p-2 shadow-2xl">
                    <div className="mx-auto mb-2 h-1.5 w-16 rounded-full bg-white/15" />
                    <BrowserFrame
                      crop
                      className="rounded-[20px] border-0 p-1"
                    />
                  </div>
                  <span className="mt-3 flex items-center justify-between text-xs text-white/40">
                    <span>Mobile preview</span>
                    <ExternalLink className="h-3 w-3 transition group-hover:text-white/70" />
                  </span>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-6xl border-white/15 bg-[#07101f] p-2">
                <Image
                  src="/images/trust-check-bd-homepage.png"
                  alt="TrustCheck BD interface shown in the gallery lightbox"
                  width={1404}
                  height={881}
                  className="h-auto w-full rounded-md"
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black py-24 md:py-36">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <SectionHeading
            eyebrow="Technical highlights"
            title="The architecture follows the trust journey."
            text="Implementation specifics that are not public are intentionally omitted. These are the confirmed product layers visible in TrustCheck BD’s published workflow."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-2">
            {technicalHighlights.map((item) => (
              <Reveal key={item.title} className="bg-[#030812] p-7 md:p-9">
                <item.icon className="h-5 w-5 text-blue-300" />
                <h3 className="mt-5 font-aldrich text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-7 text-white/55">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <SectionHeading
            eyebrow="Challenges & responses"
            title="Trust products carry consequences."
            text="The hard parts were not only screens and endpoints. They were product decisions about evidence, fairness, privacy, and how to communicate risk responsibly."
          />
          <div className="mt-12 space-y-4">
            {challenges.map((item, index) => (
              <Reveal
                key={item.title}
                className="grid gap-6 rounded-md border border-white/10 bg-card/60 p-6 md:grid-cols-[64px_0.72fr_1.28fr] md:items-start md:p-8"
                delay={index * 0.04}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-blue-300">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/35">
                    Challenge
                  </p>
                  <h3 className="mt-2 font-aldrich text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/50">
                    {item.challenge}
                  </p>
                </div>
                <div className="border-t border-white/10 pt-5 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-blue-300">
                    Product response
                  </p>
                  <p className="mt-3 text-sm font-light leading-7 text-white/65">
                    {item.response}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.018] py-24 md:py-36">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <SectionHeading
            eyebrow="Results & impact"
            title="The product is already doing real work."
            text="Impact is measured carefully: verified public product data where available, and no invented growth claims where it is not."
            align="center"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <Reveal className="rounded-md border border-white/10 bg-card/70 p-7">
              <CircleAlert className="h-5 w-5 text-blue-300" />
              <p className="mt-8 font-aldrich text-4xl font-bold">
                <CountUp value={stats.approvedReports} />+
              </p>
              <h3 className="mt-2 text-sm font-medium">Approved reports</h3>
              <p className="mt-3 text-sm leading-6 text-white/45">
                Community experiences made searchable after review.
              </p>
            </Reveal>
            <Reveal
              delay={0.07}
              className="rounded-md border border-white/10 bg-card/70 p-7"
            >
              <Search className="h-5 w-5 text-blue-300" />
              <p className="mt-8 font-aldrich text-4xl font-bold">
                <CountUp value={stats.searchDone} />+
              </p>
              <h3 className="mt-2 text-sm font-medium">Searches completed</h3>
              <p className="mt-3 text-sm leading-6 text-white/45">
                Moments where someone chose to check before trusting.
              </p>
            </Reveal>
            <Reveal
              delay={0.14}
              className="rounded-md border border-white/10 bg-card/70 p-7"
            >
              <HeartHandshake className="h-5 w-5 text-blue-300" />
              <p className="mt-8 font-aldrich text-4xl font-bold">Live</p>
              <h3 className="mt-2 text-sm font-medium">
                Founder-led operation
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/45">
                A launched product under continued maintenance and improvement.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <SectionHeading
            eyebrow="Social presence"
            title="Safety education beyond the product."
            text="TrustCheck BD’s official channels extend the mission into awareness content, community alerts, and product updates."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {socialCards.map((social, index) =>
              social.available ? (
                <Reveal key={social.name} delay={index * 0.05}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full rounded-md border border-white/10 bg-card/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-card"
                  >
                    <div className="flex items-start justify-between">
                      <social.icon className="h-6 w-6 text-blue-300" />
                      <ArrowUpRight className="h-4 w-4 text-white/25 transition group-hover:text-white" />
                    </div>
                    <h3 className="mt-12 font-aldrich text-lg font-semibold">
                      {social.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/50">
                      {social.description}
                    </p>
                  </Link>
                </Reveal>
              ) : (
                <Reveal
                  key={social.name}
                  delay={index * 0.05}
                  className="h-full rounded-md border border-dashed border-white/10 bg-white/[0.018] p-6"
                >
                  <div className="flex items-start justify-between">
                    <social.icon className="h-6 w-6 text-white/30" />
                    <span className="rounded bg-white/5 px-2 py-1 text-[9px] uppercase tracking-wider text-white/30">
                      Not listed
                    </span>
                  </div>
                  <h3 className="mt-12 font-aldrich text-lg font-semibold text-white/60">
                    {social.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/35">
                    {social.description}
                  </p>
                </Reveal>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black py-24 md:py-36">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <SectionHeading
            eyebrow="Product timeline"
            title="From one question to trust infrastructure."
            text="Past milestones and future items are taken from TrustCheck BD’s published founder story and roadmap."
          />
          <div className="relative mt-14 md:ml-5">
            <div className="absolute bottom-0 left-[5px] top-0 w-px bg-gradient-to-b from-primary via-primary/40 to-white/10" />
            <div className="space-y-10">
              {roadmap.map((item, index) => (
                <Reveal
                  key={`${item.year}-${item.title}`}
                  className="relative grid gap-3 pl-10 md:grid-cols-[140px_1fr] md:gap-8"
                >
                  <span className="absolute left-0 top-1 h-[11px] w-[11px] rounded-full border-2 border-primary bg-black shadow-[0_0_0_6px_rgba(0,75,224,0.12)]" />
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-blue-300">
                    {item.year}
                  </p>
                  <div>
                    <h3 className="font-aldrich text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm font-light leading-7 text-white/50">
                      {item.text}
                    </p>
                  </div>
                  {index < roadmap.length - 1 ? null : (
                    <span className="absolute -bottom-1 left-[3px] h-2 w-2 rounded-full bg-white/20" />
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <SectionHeading
            eyebrow="Lessons learned"
            title="A real product changes how you think."
            text="TrustCheck BD reinforced lessons that only become concrete once people depend on what you ship."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {lessons.map((lesson, index) => (
              <Reveal
                key={lesson.title}
                delay={index * 0.07}
                className="rounded-md border border-white/10 bg-card/60 p-7"
              >
                <span className="font-aldrich text-sm text-primary">
                  0{index + 1}
                </span>
                <h3 className="mt-10 font-aldrich text-lg font-semibold">
                  {lesson.title}
                </h3>
                <p className="mt-4 text-sm font-light leading-7 text-white/50">
                  {lesson.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-white/[0.018] py-24 md:py-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(0,75,224,0.16),transparent_34%)]" />
        <div className="relative mx-auto grid max-w-[1200px] gap-14 px-4 md:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
          <SectionHeading
            eyebrow="Future vision"
            title="From a Bangladesh-first product to a broader trust network."
            text="The north star is a free, accessible system that helps people act on better information before fraud happens—not only document losses afterward."
          />
          <Reveal className="grid gap-3 sm:grid-cols-2">
            {[
              {
                icon: Smartphone,
                title: "Mobile access",
                text: "Android and iOS apps are planned for 2027.",
              },
              {
                icon: BrainCircuit,
                title: "Smarter detection",
                text: "AI-powered detection and advanced trust analytics are on the published roadmap.",
              },
              {
                icon: Globe2,
                title: "Verification infrastructure",
                text: "A browser extension, public API, and instant messaging alerts are planned for 2028.",
              },
              {
                icon: ShieldCheck,
                title: "Global network",
                text: "The long-term vision is cross-border trust intelligence and fraud-data collaboration.",
              },
            ].map((vision) => (
              <div
                key={vision.title}
                className="rounded-md border border-white/10 bg-background/70 p-6"
              >
                <vision.icon className="h-5 w-5 text-blue-300" />
                <h3 className="mt-5 font-aldrich text-base font-semibold">
                  {vision.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/50">
                  {vision.text}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <Reveal className="relative mx-auto max-w-[1168px] overflow-hidden rounded-lg border border-primary/20 bg-card/70 px-6 py-16 text-center shadow-[0_30px_100px_rgba(0,75,224,0.12)] md:px-12 md:py-24">
          <div className="pointer-events-none absolute inset-0 dotPattern opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[100px]" />
          <div className="relative">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-300">
              Check before you pay
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl font-aldrich text-[28px] font-bold leading-tight sm:text-[34px] md:text-[44px]">
              A safer transaction can start with one search.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm font-light leading-7 text-white/55 md:text-base">
              Explore the live product, learn more about the mission, or connect
              with me to talk about building useful products with real-world
              ownership.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link
                  href={PRODUCT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit TrustCheck BD <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/15 bg-white/[0.03] text-white hover:bg-white/10 hover:text-white"
              >
                <Link
                  href="https://trustcheckbd.com/en/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BookOpen className="mr-2 h-4 w-4" /> Read the founder story
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-white/70 hover:bg-white/10 hover:text-white"
              >
                <Link href="/contact">
                  Connect with me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
        <div className="mx-auto mt-8 flex max-w-[1168px] justify-between px-1 text-xs text-white/35">
          <Link
            href="/"
            className="flex items-center gap-2 transition hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back home
          </Link>
          <Link
            href="https://github.com/monirhabderabby"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition hover:text-white"
          >
            <Github className="h-3.5 w-3.5" /> GitHub
          </Link>
        </div>
      </section>
    </main>
  );
}
