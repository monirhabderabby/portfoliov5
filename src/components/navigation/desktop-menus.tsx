"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DesktopMenus = () => {
  const pathName = usePathname();

  const getActiveClass = (href: string) =>
    pathName === href ? " font-medium" : "hover:text-foreground/80 font-light"; // active page gets 'default'
  return (
    <nav className="hidden md:flex">
      <ul className="flex items-center justify-center gap-8">
        <li className={cn("text-sm ", getActiveClass("/about-me"))}>
          <Link href="/about-me">About Me</Link>
        </li>
        <li className={cn("text-sm ", getActiveClass("/projects"))}>
          <Link href="/projects" prefetch={false}>
            Projects
          </Link>
        </li>
        <li className={cn("text-sm ", getActiveClass("/achievements"))}>
          <Link href="/achievements" prefetch={false}>
            Achievements
          </Link>
        </li>
        <li className={cn("text-sm ", getActiveClass("/contact"))}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopMenus;
