import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

interface ScaleUpLogoProps {
  /** Show the "SAA Portal" product wordmark beside the brand plate. */
  showProduct?: boolean;
  /** Product wordmark. Defaults to "SAA Portal". */
  product?: string;
  /** Sub-label under the product wordmark. Defaults to "Internal Operations". */
  tagline?: string;
  /** Optional link wrapper; renders a plain element when omitted. */
  href?: string;
  /** Extra classes merged onto the root element. */
  className?: string;
  /** Override the brand-plate classes (size, background). */
  plateClassName?: string;
  target?: string;
  rel?: string;
}

/**
 * ScaleUp Ads Agency brand lockup for the SAA Portal case study.
 *
 * The source asset (`/images/scaleup_logo.svg`) is a dark wordmark, so it sits on
 * a light "brand plate" to stay legible on the dark portfolio shell. Paired with
 * the product wordmark it reads as: ScaleUp Ads Agency → SAA Portal. Used by both
 * the hero and the homepage spotlight so they stay pixel-identical.
 */
export function ScaleUpLogo({
  showProduct = true,
  product = "SAA Portal",
  tagline = "Internal Operations",
  href,
  className,
  plateClassName,
  target,
  rel,
}: ScaleUpLogoProps) {
  const content: ReactNode = (
    <div className={cn("flex items-center gap-3", className)}>
      <span
        className={cn(
          "inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 shadow-[0_2px_14px_rgba(0,0,0,0.28)] ring-1 ring-black/5",
          plateClassName,
        )}
      >
        <Image
          src="/images/scaleup_logo.svg"
          alt="ScaleUp Ads Agency"
          width={200}
          height={67}
          priority
          className="h-4 w-auto sm:h-[18px]"
        />
      </span>

      {showProduct ? (
        <>
          <span aria-hidden="true" className="h-8 w-px bg-white/12" />
          <span className="flex flex-col leading-tight">
            <span className="font-aldrich text-[15px] font-semibold tracking-tight text-white">
              {product}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-emerald-300/70">
              {tagline}
            </span>
          </span>
        </>
      ) : null}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className="group inline-flex w-fit shrink-0"
        aria-label={`${product} — ScaleUp Ads Agency`}
      >
        {content}
      </Link>
    );
  }

  return content;
}
