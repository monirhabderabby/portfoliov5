"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/trust-check-bd-logo";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  BrainCircuit,
  Database,
  Facebook,
  FileCheck2,
  Github,
  Globe2,
  Linkedin,
  LockKeyhole,
  MessageSquareWarning,
  MousePointer2,
  Rocket,
  Search,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  SiGoogleanalytics,
  SiMongodb,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiRedis,
  SiShadcnui,
  SiSocketdotio,
  SiTailwindcss,
  SiTiktok,
  SiTypescript,
} from "react-icons/si";

const PRODUCT_URL =
  "https://trustcheckbd.com/en?utm_source=monirhrabby.com&utm_medium=referral&utm_campaign=portfolio_case_study";
const HERO_VIDEO_URL =
  "https://da8h6r7q9t.ufs.sh/f/qDFYtzIILml3m6NnkVw26HX73ujT1xNwFocYCGW5daALbDV9";

const engineeringFlow = [
  {
    step: "01",
    label: "Understand the query",
    title: "Search is treated as a relevance problem.",
    text: "I normalize Bangla and English input, recognize identifier-like values, and score matches across names, phone or payment identities, keywords, tags, and report references.",
    detail: "Bounded to 100 candidates · scored in chunks",
    icon: Search,
  },
  {
    step: "02",
    label: "Connect the evidence",
    title: "Related signals stay useful—and bounded.",
    text: "Direct matches can expand through one shared identifier, connecting reports that use the same phone, account, website, or social identity without an uncontrolled relationship crawl.",
    detail: "One-hop expansion · deduplicated results",
    icon: Database,
  },
  {
    step: "03",
    label: "Protect the write path",
    title: "A submission never becomes a warning by default.",
    text: "Reports pass schema validation, bot and rate-limit checks, evidence capture, and a permission-controlled human review flow before they can be approved for public use.",
    detail: "Validation · abuse protection · human review",
    icon: ShieldCheck,
  },
  {
    step: "04",
    label: "Publish the signal",
    title: "Approval updates more than one screen.",
    text: "An approved report refreshes the public experience and feeds localized report pages, structured metadata, and sitemap entries. Short-lived Redis caches reduce repeat database work and fail back to live queries.",
    detail: "Public revalidation · EN/BN SEO · resilient caching",
    icon: Globe2,
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
    title: "Checking reports fairly",
    challenge:
      "A warning can keep people safe. But a false report can hurt an innocent person or business.",
    response:
      "We check the proof, review the report, and ask an admin to approve it before showing a public warning.",
  },
  {
    icon: Database,
    title: "Giving clear but honest answers",
    challenge:
      "People want a quick answer, but the available proof may not tell the full story.",
    response:
      "We show trust scores and risk signs as helpful guides, not final answers. We also explain what we could not verify.",
  },
  {
    icon: LockKeyhole,
    title: "Keeping reporters safe",
    challenge:
      "People may be afraid to report a scam if others can see who they are.",
    response:
      "We keep the reporter's identity private. Only approved team members can access their screenshots, files, and personal information.",
  },
  {
    icon: MessageSquareWarning,
    title: "Spam and misleading reports",
    challenge:
      "Some people may send fake reports or spam, making the platform less useful for everyone.",
    response:
      "We review every report and remove fake or misleading ones. If someone keeps sending spam, we can block their IP address.",
  },
];

const technologyLayers = [
  {
    number: "01",
    label: "Experience",
    description: "Fast, clear, and responsive on every screen.",
    tools: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "shadcn/ui", icon: SiShadcnui },
    ],
  },
  {
    number: "02",
    label: "Application",
    description: "The secure core that runs the product.",
    tools: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Better Auth", mark: "BA" },
      { name: "Socket.IO", icon: SiSocketdotio },
    ],
  },
  {
    number: "03",
    label: "Data & files",
    description: "Reports stay searchable, quick, and safe.",
    tools: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Prisma", icon: SiPrisma },
      { name: "Redis", icon: SiRedis },
      { name: "UploadThing", mark: "UT" },
    ],
  },
];

const futurePhases = [
  {
    year: "2026",
    status: "In progress",
    items: [
      "Public reporting platform",
      "Proof-based manual review",
      "Community scam search",
    ],
  },
  {
    year: "2027",
    status: "Planned",
    items: ["Android and iOS apps", "AI scam detection", "Trust analytics"],
  },
  {
    year: "2028",
    status: "Planned",
    items: ["Browser extension", "Public verification API", "Instant alerts"],
  },
  {
    year: "Future",
    status: "Vision",
    items: [
      "Global trust network",
      "Verified business program",
      "Cross-border fraud data",
    ],
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
  imageSrc = "/images/trust-check-bd-homepage.png",
}: {
  className?: string;
  crop?: boolean;
  imageSrc?: string;
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
          src={imageSrc}
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

const galleryPages = [
  {
    id: "discover",
    number: "01",
    label: "Discover",
    title: "Stay safer before you pay",
    text: "TrustCheck BD helps people check suspicious details before sending money and learn from reports shared by others.",
    accent: "Know before you pay",
  },
  {
    id: "search",
    number: "02",
    label: "Search",
    title: "Search any detail in one place",
    text: "Search a bKash, Nagad or Rocket number, phone number, website, business name, Facebook page, or other suspicious detail.",
    accent: "One simple search",
  },
  {
    id: "results",
    number: "03",
    label: "Search results",
    title: "See the reports behind the risk",
    text: "See the total reported loss, number of reports, and real experiences shared by people about the searched detail.",
    accent: "Clear and useful results",
  },
  {
    id: "report",
    number: "04",
    label: "Report a scam",
    title: "Help warn the next person",
    text: "Explain what happened and add screenshots or other proof. Every report is reviewed before it becomes a public warning.",
    accent: "Share your experience",
  },
] as const;

function GalleryVideo({
  start,
  end,
  onComplete,
}: {
  start: number;
  end?: number;
  onComplete: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const completedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    completedRef.current = false;
    const playSegment = () => {
      video.currentTime = start;
      void video.play().catch(() => undefined);
    };
    if (video.readyState >= 1) playSegment();
    else video.addEventListener("loadedmetadata", playSegment, { once: true });
    return () => video.removeEventListener("loadedmetadata", playSegment);
  }, [start]);

  const complete = () => {
    const video = videoRef.current;
    if (!video || completedRef.current) return;
    completedRef.current = true;
    video.pause();
    onComplete();
  };

  return (
    <video
      ref={videoRef}
      src={HERO_VIDEO_URL}
      muted
      playsInline
      autoPlay
      preload="metadata"
      aria-label={end ? "TrustCheck BD search demo" : "TrustCheck BD search results demo"}
      className="h-full w-full bg-[#f7f8fc] object-cover object-top"
      onTimeUpdate={(event) => {
        if (end && event.currentTarget.currentTime >= end) complete();
      }}
      onEnded={complete}
    />
  );
}

function ProductSurface({
  page,
  onComplete,
}: {
  page: (typeof galleryPages)[number]["id"];
  onComplete: () => void;
}) {
  if (page === "discover") {
    return (
      <Image
        src="/images/trust-check-bd-homepage.png"
        alt="TrustCheck BD search-first homepage"
        width={1404}
        height={881}
        priority={false}
        className="h-full w-full object-cover object-top"
      />
    );
  }

  if (page === "search") {
    return <GalleryVideo start={1} end={15} onComplete={onComplete} />;
  }

  if (page === "results") {
    return <GalleryVideo start={15} onComplete={onComplete} />;
  }

  if (page === "report") {
    return (
      <Image
        src="https://da8h6r7q9t.ufs.sh/f/qDFYtzIILml3SHf1UOPp945jt61u32oCNRmavzPbwlDTYscQ"
        alt="TrustCheck BD report a scam form"
        width={1404}
        height={881}
        sizes="(max-width: 768px) 92vw, 850px"
        className="h-full w-full bg-[#f8f9fd] object-contain object-top"
      />
    );
  }

  return null;
}

function ProductGallery() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const item = galleryPages[active];
  const go = (direction: number) => setActive((current) => (current + direction + galleryPages.length) % galleryPages.length);

  useEffect(() => {
    if (item.id === "search" || item.id === "results") return;
    const timer = window.setTimeout(
      () => setActive((current) => (current + 1) % galleryPages.length),
      item.id === "discover" ? 5000 : 6000,
    );
    return () => window.clearTimeout(timer);
  }, [item.id]);

  return (
    <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#070b14] shadow-[0_40px_120px_rgba(0,0,0,.45)]">
      <div className="grid lg:grid-cols-[310px_1fr]">
        <div className="flex flex-col border-b border-white/10 p-4 sm:p-5 lg:border-b-0 lg:border-r lg:p-6">
          <div className="flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.18em] text-white/35"><span>Product tour</span><span>{item.number} / 04</span></div>
          <AnimatePresence mode="wait" initial={false}><motion.div key={item.id} initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, y: -8 }} transition={{ duration: 0.28 }} className="mt-7 lg:mt-12"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">{item.accent}</p><h3 className="mt-3 font-aldrich text-2xl font-semibold leading-tight md:text-3xl">{item.title}</h3><p className="mt-4 text-sm font-light leading-6 text-white/50">{item.text}</p></motion.div></AnimatePresence>
          <div className="mt-7 flex gap-2 lg:mt-auto"><button onClick={() => go(-1)} aria-label="Previous product screen" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/60 transition hover:border-white/30 hover:text-white"><ArrowLeft className="h-4 w-4" /></button><button onClick={() => go(1)} aria-label="Next product screen" className="grid h-10 w-10 place-items-center rounded-full bg-white text-black transition hover:bg-blue-200"><ArrowRight className="h-4 w-4" /></button></div>
        </div>
        <div className="relative min-w-0 bg-[radial-gradient(circle_at_60%_20%,rgba(88,101,242,.18),transparent_42%)] p-2.5 sm:p-4 lg:p-5">
          <div className="mb-2.5 flex h-9 items-center gap-2 rounded-lg border border-white/[0.06] bg-[#111725] px-3 shadow-inner">
            <div className="flex shrink-0 items-center gap-1.5" aria-hidden="true"><span className="h-2.5 w-2.5 rounded-full bg-red-400/90" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" /></div>
            <div className="ml-1 hidden items-center gap-1 text-white/25 sm:flex" aria-hidden="true"><ArrowLeft className="h-3.5 w-3.5" /><ArrowRight className="h-3.5 w-3.5 opacity-40" /></div>
            <div className="mx-auto flex h-6 w-full max-w-md items-center justify-center gap-1.5 rounded-md border border-white/[0.04] bg-[#090e19] px-3 text-[8px] text-white/45 shadow-inner sm:text-[9px]"><LockKeyhole className="h-2.5 w-2.5 text-emerald-400/70" /><span>trustcheckbd.com</span><span className="text-white/20">/</span><span className="text-white/35">{item.id}</span></div>
            <div className="hidden w-[52px] sm:block" aria-hidden="true" />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-white/10 bg-white shadow-2xl"><AnimatePresence mode="wait" initial={false}><motion.div key={item.id} initial={reduce ? false : { opacity: 0, scale: .985, x: 18 }} animate={{ opacity: 1, scale: 1, x: 0 }} exit={reduce ? undefined : { opacity: 0, scale: .99, x: -18 }} transition={{ duration: .35, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0"><ProductSurface page={item.id} onComplete={() => go(1)} /></motion.div></AnimatePresence></div>
        </div>
      </div>
      <div className="grid grid-cols-2 border-t border-white/10 sm:grid-cols-4">{galleryPages.map((page, index) => <button key={page.id} onClick={() => setActive(index)} aria-pressed={active === index} className={`group relative border-r border-white/10 px-4 py-4 text-left last:border-r-0 transition sm:px-5 ${active === index ? "bg-white/[0.06] text-white" : "text-white/35 hover:bg-white/[0.03] hover:text-white/65"}`}><span className="text-[9px] font-medium">{page.number}</span><span className="ml-3 text-xs font-medium sm:text-sm">{page.label}</span>{active === index ? <motion.span layoutId="gallery-progress" className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-300" /> : null}</button>)}</div>
    </div>
  );
}

function TechnologyStack() {
  return (
    <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-20">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-300">
          Technology used
        </p>
        <h2 className="mt-3 max-w-lg font-aldrich text-[26px] font-bold leading-tight tracking-tight sm:text-[30px] md:text-[36px]">
          The tools behind TrustCheck BD.
        </h2>
        <p className="mt-5 max-w-lg text-sm font-light leading-7 text-white/60 md:text-base">
          I built the full product—from the website and database to secure
          sign-in, evidence uploads, fast searches, and live updates.
        </p>
        <div className="mt-8 flex items-center gap-3 text-xs text-white/35">
          <span className="h-px w-10 bg-blue-300/60" />
          <span>One connected full-stack system</span>
        </div>
      </Reveal>

      <Reveal className="relative">
        <div className="pointer-events-none absolute -inset-12 bg-[radial-gradient(circle,rgba(59,130,246,.13),transparent_62%)] blur-2xl" />
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#070c16]/90 shadow-[0_35px_100px_rgba(0,0,0,.35)]">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_12px_rgba(147,197,253,.8)]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                trustcheckbd / system
              </span>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-300/60">
              Live
            </span>
          </div>

          <div className="relative p-5 sm:p-7">
            <div className="absolute bottom-10 left-[42px] top-10 w-px bg-gradient-to-b from-blue-300/0 via-blue-300/50 to-blue-300/0 sm:left-[42px]" />
            {technologyLayers.map((layer, layerIndex) => (
              <div
                key={layer.label}
                className={`relative grid gap-4 py-6 pl-14 sm:pl-16 md:grid-cols-[150px_1fr] md:items-center ${
                  layerIndex ? "border-t border-white/[0.07]" : ""
                }`}
              >
                <div className="absolute left-0 top-7 z-10 grid h-9 w-9 place-items-center rounded-full border border-blue-300/30 bg-[#0b1423] font-mono text-[10px] text-blue-300">
                  {layer.number}
                </div>
                <div>
                  <h3 className="font-aldrich text-sm font-semibold text-white">
                    {layer.label}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-white/35">
                    {layer.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-4">
                  {layer.tools.map((tool) => {
                    const ToolIcon = tool.icon;
                    return (
                      <div
                        key={tool.name}
                        className="group flex items-center gap-2.5 text-white/60 transition hover:text-white"
                      >
                        <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/[0.055] text-white/80 transition group-hover:bg-blue-300/10 group-hover:text-blue-300">
                          {ToolIcon ? (
                            <ToolIcon className="h-4 w-4" aria-hidden="true" />
                          ) : (
                            <span className="font-aldrich text-[8px] font-bold text-blue-300">
                              {tool.mark}
                            </span>
                          )}
                        </span>
                        <span className="text-xs font-medium">{tool.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 border-t border-white/10 bg-white/[0.02] px-5 py-3 font-mono text-[9px] uppercase tracking-[0.14em] text-white/25">
            <ShieldCheck className="h-3.5 w-3.5 text-blue-300/60" />
            Built for trust, speed, and real-time action
          </div>
        </div>
      </Reveal>
    </div>
  );
}

function FutureVision() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#050a13] py-24 md:py-36">
      <div className="pointer-events-none absolute inset-0 dotPattern opacity-[0.08] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      <div className="pointer-events-none absolute -right-40 top-0 h-[620px] w-[620px] rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-20">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-300">
              Future vision
            </p>
            <h2 className="mt-4 max-w-xl font-aldrich text-[30px] font-bold leading-[1.12] tracking-tight sm:text-[38px] md:text-[48px]">
              Local signal.
              <br />
              <span className="text-white/35">Global protection.</span>
            </h2>
            <p className="mt-6 max-w-lg text-sm font-light leading-7 text-white/55 md:text-base">
              TrustCheck BD starts in Bangladesh. The long-term goal is to help
              people spot fraud earlier, wherever a payment or conversation
              begins.
            </p>
            <div className="mt-9 flex items-center gap-4">
              <div className="grid h-11 w-11 place-items-center rounded-full border border-blue-300/25 bg-blue-300/10">
                <Rocket className="h-4 w-4 text-blue-300" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Bangladesh first</p>
                <p className="mt-1 text-xs text-white/35">Built to grow beyond borders</p>
              </div>
            </div>
          </Reveal>

          <Reveal className="relative mx-auto aspect-square w-full max-w-[570px]">
            <div className="absolute inset-[8%] rounded-full border border-white/[0.06]" />
            <motion.div
              className="absolute inset-[17%] rounded-full border border-dashed border-blue-300/20"
              animate={reduce ? undefined : { rotate: 360 }}
              transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-[29%] rounded-full border border-white/10"
              animate={reduce ? undefined : { rotate: -360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            />

            <div className="absolute inset-[34%] grid place-items-center rounded-full border border-blue-300/25 bg-[#0a1424] shadow-[0_0_80px_rgba(59,130,246,.2)]">
              <motion.div
                animate={reduce ? undefined : { scale: [1, 1.08, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="grid h-16 w-16 place-items-center rounded-full bg-blue-400/10"
              >
                <ShieldCheck className="h-7 w-7 text-blue-300" />
              </motion.div>
              <div className="absolute top-[68%] text-center">
                <p className="font-aldrich text-[11px] font-semibold text-white">TRUSTCHECK BD</p>
                <p className="mt-1 font-mono text-[8px] uppercase tracking-widest text-blue-300/60">Origin signal</p>
              </div>
            </div>

            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 570 570" fill="none" aria-hidden="true">
              <motion.path
                d="M84 332C142 116 390 60 493 238C583 395 390 526 220 467C87 421 73 271 174 177"
                stroke="url(#vision-line)"
                strokeWidth="1.5"
                strokeDasharray="5 8"
                initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                whileInView={reduce ? undefined : { pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="vision-line" x1="80" y1="170" x2="500" y2="430">
                  <stop stopColor="#60A5FA" stopOpacity="0" />
                  <stop offset=".45" stopColor="#93C5FD" />
                  <stop offset="1" stopColor="#34D399" stopOpacity=".35" />
                </linearGradient>
              </defs>
            </svg>

            {[
              { label: "Mobile apps", icon: Smartphone, position: "left-[2%] top-[52%]" },
              { label: "Browser extension", icon: MousePointer2, position: "left-[12%] top-[13%]" },
              { label: "AI detection", icon: BrainCircuit, position: "right-[4%] top-[28%]" },
              { label: "Public API", icon: Globe2, position: "bottom-[5%] right-[20%]" },
              { label: "Verified business", icon: BadgeCheck, position: "bottom-[13%] left-[7%]" },
            ].map((node, index) => (
              <motion.div
                key={node.label}
                className={`absolute ${node.position} flex items-center gap-2.5 rounded-full border border-white/10 bg-[#08101c]/90 px-3 py-2 shadow-xl backdrop-blur`}
                animate={reduce ? undefined : { y: [0, index % 2 ? 7 : -7, 0] }}
                transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
              >
                <node.icon className="h-3.5 w-3.5 text-blue-300" />
                <span className="text-[10px] font-medium text-white/65">{node.label}</span>
              </motion.div>
            ))}
          </Reveal>
        </div>

        <Reveal className="mt-16 pt-10 md:mt-20 md:pt-12">
          <div className="relative grid gap-10 md:grid-cols-4 md:gap-6">
            <motion.div
              className="absolute left-0 right-0 top-[7px] hidden h-px origin-left bg-gradient-to-r from-blue-400 via-blue-300 to-emerald-300/30 md:block"
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={reduce ? undefined : { scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            />
            {futurePhases.map((phase, index) => (
              <motion.div
                key={phase.year}
                initial={reduce ? false : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.25 + index * 0.12, duration: 0.55 }}
                className="relative border-l border-white/10 pl-6 md:border-l-0 md:pl-0 md:pt-8"
              >
                <span className={`absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full border-2 border-[#050a13] md:left-0 md:top-[2px] ${index === 0 ? "bg-blue-300 shadow-[0_0_14px_rgba(147,197,253,.8)]" : "bg-white/25"}`} />
                <div className="flex items-center gap-3">
                  <h3 className="font-aldrich text-xl font-bold text-white">{phase.year}</h3>
                  <span className="rounded-full bg-white/[0.055] px-2 py-1 text-[8px] font-medium uppercase tracking-wider text-white/40">{phase.status}</span>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {phase.items.map((item) => (
                    <li key={item} className="flex gap-2 text-xs leading-5 text-white/45">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-300/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
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
    <main className="overflow-x-clip bg-background text-white">
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

      <section className="relative isolate overflow-x-clip py-24 md:py-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_45%,rgba(0,75,224,0.13),transparent_34%)]" />
        <div className="pointer-events-none absolute inset-0 dotPattern opacity-[0.08] [mask-image:linear-gradient(to_right,black,transparent_62%)]" />
        <div className="relative mx-auto max-w-[1200px] px-4 md:px-6">
          <SectionHeading
            eyebrow="Engineering the trust layer"
            title="I engineered the system behind every trust decision."
            text="Trust Check BD is more than a searchable interface. I built the path that turns an uncertain search or community report into a reviewed, useful, and discoverable public signal."
          />

          <div className="mt-14 grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-20 relative">
            <div className=" lg:sticky lg:top-0">
              <Reveal>
                <div className="relative">
                  <div className="pointer-events-none absolute -inset-8 rounded-full bg-primary/[0.08] blur-[70px]" />
                  <BrowserFrame className="relative rotate-[-1deg] transition-transform duration-700 hover:rotate-0" />

                  <div className="relative -mt-3 ml-4 mr-2 border-l border-primary/50 bg-background/90 py-4 pl-5 pr-3 backdrop-blur-md sm:ml-8 sm:mr-6">
                    <div className="flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.18em] text-blue-300">
                      <span
                        className="relative flex h-2 w-2"
                        aria-hidden="true"
                      >
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60 motion-reduce:animate-none" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                      </span>
                      The visible product is only the first layer
                    </div>
                    <p className="mt-2 max-w-md text-xs font-light leading-6 text-white/50">
                      Behind one search sits query handling, relationship
                      boundaries, moderation controls, caching, and a localized
                      publication system.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-y border-white/10 py-4 text-[9px] font-medium uppercase tracking-[0.16em] text-white/30">
                  <span>Public product</span>
                  <span className="text-primary/70">→</span>
                  <span>Operations</span>
                  <span className="text-primary/70">→</span>
                  <span>Public signal</span>
                </div>
              </Reveal>
            </div>

            <div className="relative">
              <div className="absolute bottom-6 left-[21px] top-6 w-px bg-gradient-to-b from-primary via-primary/45 to-blue-300/10 sm:left-[25px]" />
              <ol className="space-y-10 md:space-y-12">
                {engineeringFlow.map((item, index) => (
                  <Reveal
                    key={item.step}
                    delay={index * 0.06}
                    className="group relative grid grid-cols-[44px_1fr] gap-5 sm:grid-cols-[52px_1fr] sm:gap-7"
                  >
                    <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-primary/35 bg-background text-blue-300 shadow-[0_0_0_7px_rgba(0,75,224,0.06)] transition duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white sm:h-[52px] sm:w-[52px]">
                      <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>

                    <div className="border-b border-white/10 pb-9 md:pb-11">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="font-aldrich text-[10px] text-primary">
                          {item.step}
                        </span>
                        <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/35">
                          {item.label}
                        </span>
                      </div>
                      <h3 className="mt-3 font-aldrich text-lg font-semibold leading-snug text-white/90 sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm font-light leading-7 text-white/55">
                        {item.text}
                      </p>
                      <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.14em] text-blue-300/65">
                        {item.detail}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.018] py-24 md:py-36">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <SectionHeading
            eyebrow="Core features"
            title="Search before you pay. Report when it happens."
            text="Search helps someone avoid a risky payment today. Reporting turns a bad experience into a warning that can protect someone tomorrow."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {[
              {
                number: "01",
                icon: Send,
                title: "Report a scam",
                text: "Users can report a scam, explain what happened, and add screenshots or other proof. Each report is reviewed before it becomes a public warning.",
                link: "https://trustcheckbd.com/en/report-scam?ref=portfolio&utm_source=monirhrabby&utm_medium=case-study&utm_campaign=trustcheckbd",
                cta: "Report a scam",
              },
              {
                number: "02",
                icon: Search,
                title: "Search before you pay",
                text: "People can search phone numbers, bKash or Nagad accounts, websites, Facebook pages, links, businesses, and other suspicious identities before sending money.",
                link: "https://trustcheckbd.com/?ref=portfolio&utm_source=monirhrabby&utm_medium=case-study&utm_campaign=trustcheckbd",
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
            title="One decision. Four connected moments."
            text="Explore the product as a journey—from the first safety check to the human review that makes a public warning trustworthy."
          />
          <ProductGallery />
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-white/[0.018] py-24 md:py-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(59,130,246,.08),transparent_34%)]" />
        <div className="relative mx-auto max-w-[1200px] px-4 md:px-6">
          <TechnologyStack />
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <SectionHeading
            eyebrow="Challenges & responses"
            title="Building trust means making careful choices."
            text="The biggest challenges were not only about design or code. We also had to check proof, treat people fairly, protect private information, and explain risks clearly."
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

      <section className="relative overflow-hidden border-y border-white/10 bg-white/[0.018] py-24 md:py-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_45%,rgba(245,158,11,0.08),transparent_28%),radial-gradient(circle_at_82%_28%,rgba(79,70,229,0.12),transparent_26%)]" />
        <div className="relative mx-auto max-w-[1200px] px-4 md:px-6">
          <SectionHeading
            eyebrow="Proof of traction"
            title="Built for people. Proven in the real world."
            text="A 30-day view of real product use, supported by public launches on Product Hunt and PeerPush."
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-[1.55fr_0.75fr]">
            <Reveal className="relative overflow-hidden rounded-xl border border-white/10 bg-[#080d18]/90 p-5 shadow-[0_30px_100px_rgba(0,0,0,.3)] sm:p-7 md:p-8">
              <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-amber-400/[0.06] blur-3xl" />
              <div className="relative flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-amber-400/15 bg-amber-400/10 text-amber-400">
                    <SiGoogleanalytics className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Google Analytics</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-white/35">30-day traffic snapshot</p>
                  </div>
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] text-white/45">1 July — 31 July</span>
              </div>

              <div className="relative mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-4">
                {[
                  { value: <CountUp value={716} />, label: "Total users" },
                  { value: <CountUp value={643} />, label: "New users" },
                  { value: "3.1K", label: "Views" },
                  { value: "5m 25s", label: "Avg. engagement" },
                ].map((metric) => (
                  <div key={metric.label} className="bg-[#080d18] p-4 sm:p-5">
                    <p className="font-aldrich text-2xl font-bold tracking-tight text-white sm:text-3xl">{metric.value}</p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.12em] text-white/35">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="relative mt-5 overflow-hidden rounded-lg border border-white/10 bg-white/[0.025] p-4 sm:p-5">
                <div className="flex items-center justify-between gap-4">
                  <div><p className="text-xs font-medium text-white/70">Audience activity</p><p className="mt-1 text-[10px] text-white/30">Visits across the month</p></div>
                  <div className="flex gap-2 text-[10px]"><span className="rounded-full bg-white/5 px-3 py-1 text-white/45">Bangladesh</span><span className="rounded-full bg-primary/10 px-3 py-1 text-blue-300">Dhaka</span></div>
                </div>
                <svg viewBox="0 0 620 100" className="mt-4 h-20 w-full overflow-visible" role="img" aria-label="Audience activity trend during July">
                  <defs><linearGradient id="analytics-area" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f59e0b" stopOpacity=".22" /><stop offset="100%" stopColor="#f59e0b" stopOpacity="0" /></linearGradient></defs>
                  <path d="M0 78 C45 72 62 80 104 61 C148 41 173 68 215 52 C258 36 276 54 316 40 C361 24 379 47 420 34 C465 20 492 31 526 17 C560 4 585 19 620 8 L620 100 L0 100 Z" fill="url(#analytics-area)" />
                  <motion.path d="M0 78 C45 72 62 80 104 61 C148 41 173 68 215 52 C258 36 276 54 316 40 C361 24 379 47 420 34 C465 20 492 31 526 17 C560 4 585 19 620 8" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 1.2, ease: "easeOut" }} />
                </svg>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <Reveal delay={0.08} className="group relative overflow-hidden rounded-xl border border-[#FF6154]/20 bg-[#110c0d] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#FF6154]/40">
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#FF6154]/10 blur-3xl" />
                <p className="relative text-[10px] font-medium uppercase tracking-[0.16em] text-[#ff8a80]">Public launch</p>
                <h3 className="relative mt-3 font-aldrich text-xl font-semibold">Featured on Product Hunt</h3>
                <p className="relative mt-3 text-sm leading-6 text-white/45">Shared with a global community of product makers and early users.</p>
                <Link href="https://www.producthunt.com/products/trust-check-bd?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-trust-check-bd" target="_blank" rel="noopener noreferrer" aria-label="View Trust Check BD on Product Hunt (opens in a new tab)" className="relative mt-7 block w-fit rounded-lg outline-none transition hover:drop-shadow-[0_8px_18px_rgba(255,97,84,.18)] focus-visible:ring-4 focus-visible:ring-[#FF6154]/20">
                  <Image src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1209925&theme=light&t=1785917093450" alt="Trust Check BD featured on Product Hunt" width={250} height={54} unoptimized className="h-auto w-[220px] max-w-full" />
                </Link>
              </Reveal>

              <Reveal delay={0.14} className="group relative overflow-hidden rounded-xl border border-indigo-400/20 bg-[#0c0c18] p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/40">
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-indigo-500/10 blur-3xl" />
                <p className="relative text-[10px] font-medium uppercase tracking-[0.16em] text-indigo-300">Builder community</p>
                <h3 className="relative mt-3 font-aldrich text-xl font-semibold">Launched on PeerPush</h3>
                <p className="relative mt-3 text-sm leading-6 text-white/45">A public product page for discovery, feedback, and support from other builders.</p>
                <Link href="https://peerpush.com/p/trust-check-bd" target="_blank" rel="noopener noreferrer" aria-label="View Trust Check BD on PeerPush (opens in a new tab)" className="relative mt-7 block w-fit rounded-lg outline-none transition hover:drop-shadow-[0_8px_18px_rgba(79,70,229,.22)] focus-visible:ring-4 focus-visible:ring-[#4F46E5]/20">
                  <Image src="https://peerpush.com/p/trust-check-bd/badge.png" alt="Trust Check BD on PeerPush" width={230} height={65} className="h-auto w-[210px] max-w-full" />
                </Link>
              </Reveal>
            </div>
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

      <FutureVision />

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
