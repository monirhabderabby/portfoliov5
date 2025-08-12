import Link from "next/link";
import { Button } from "../ui/button";
import MobileNavbar from "./mobile-navbar";

export async function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 h-[60px]  bg-background/40 backdrop-blur-lg border-b-[1px] border-white/20 rounded-2xl shadow-xl z-50 w-full px-4">
      <section className="max-w-[1200px] mx-auto h-full ">
        <div className="flex items-center justify-between  h-full">
          <div className="flex items-start">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-lg font-medium">Monir Hossain</span>
            </Link>
          </div>

          {/* Nav for larger screens */}
          <nav className="hidden md:flex">
            <ul className="flex items-center justify-center gap-8">
              <li className="hover:text-foreground/80 text-sm">
                <Link href="/about">About Me</Link>
              </li>
              <li className="hover:text-foreground/80 text-sm">
                <Link href="/projects" prefetch={false}>
                  Projects
                </Link>
              </li>
              <li className="hover:text-foreground/80 text-sm">
                <Link href="/achievements" prefetch={false}>
                  Achievements
                </Link>
              </li>
              <li className="hover:text-foreground/80 text-sm">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <div>
            <div className="hidden md:block">
              <Button>Contact</Button>
            </div>
            <div className="md:hidden">
              <MobileNavbar />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
