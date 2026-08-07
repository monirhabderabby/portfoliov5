import { cn } from "@/lib/utils";
import { Shield } from "lucide-react";
import Link from "next/link";

interface LogoProps {
  /** Locale used to build the default home link. */
  locale: string;
  /** Brand wordmark, e.g. "TrustCheck BD". */
  brand: string;
  /** Sub-label shown under the wordmark, e.g. "Check before you pay". */
  tagline?: string;
  /** Hide the tagline (it is already hidden below the `sm` breakpoint). */
  showTagline?: boolean;
  /** Override the destination; defaults to the locale home page. */
  href?: string;
  /** Extra classes merged onto the root link. */
  className?: string;
  /** Override the brand wordmark color/classes (e.g. for dark backgrounds). Defaults to the dark navbar color. */
  brandClassName?: string;
  /** Override the tagline color/classes (e.g. for dark backgrounds). */
  taglineClassName?: string;
  /** Browser target used by the logo link. */
  target?: string;
  /** Link relationship, especially useful with target="_blank". */
  rel?: string;
}

/**
 * The TrustCheck BD brand lockup — an indigo shield mark beside the wordmark and
 * tagline. This is the single source of truth for the logo so the navbar, mobile
 * menu, footer, and anywhere else stay pixel-identical. The visual design is
 * intentionally unchanged from the original navbar markup.
 */
export function Logo({
  locale,
  brand,
  tagline,
  showTagline = true,
  href,
  className,
  brandClassName,
  taglineClassName,
  target,
  rel,
}: LogoProps) {
  return (
    <Link
      href={href ?? `/${locale}`}
      target={target}
      rel={rel}
      className={cn("flex items-center gap-2.5 group shrink-0", className)}
    >
      <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#4F46E5] shadow-sm transition-colors duration-200 group-hover:bg-[#4338CA]">
        <Shield className="w-3.5 h-3.5 text-white" />
      </div>
      <div className="flex flex-col leading-tight">
        <span
          className={cn(
            "text-[14px] font-semibold tracking-tight text-[#0F172A]",
            brandClassName,
          )}
        >
          {brand}
        </span>
        {showTagline && tagline ? (
          <span
            className={cn(
              "hidden text-[10px] font-medium text-[#64748B] sm:block",
              taglineClassName,
            )}
          >
            {tagline}
          </span>
        ) : null}
      </div>
    </Link>
  );
}
