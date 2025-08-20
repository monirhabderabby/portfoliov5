import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ogImage =
  "https://files.edgestore.dev/fo77r421j6yzhzmy/PortfolioV5/_public/og.webp";

export const BASE_URL = process.env.AUTH_URL!;
