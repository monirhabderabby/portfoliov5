import Link from "next/link";

export async function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 h-[60px]  bg-background/40 backdrop-blur-lg border-b-[1px] border-white/20 rounded-2xl shadow-xl z-50 w-full px-4">
      <section className="max-w-[1200px] mx-auto h-full ">
        <div className="flex items-center justify-between  h-full">
          <div className="flex items-start">
            <Link href="/" className="flex items-center gap-2">
              {/* <Image
              src="/icons/A-logo.png"
              alt="Logo"
              width={30}
              height={30}
              priority
            /> */}
              <span className="text-lg font-medium">Monir Hossain</span>
            </Link>
          </div>

          {/* Nav for larger screens */}
          <nav className="hidden md:flex">
            <ul className="flex items-center justify-center gap-8">
              <li className="hover:text-foreground/80 text-sm">
                <Link href="/#pricing">Pricing</Link>
              </li>
              <li className="hover:text-foreground/80 text-sm">
                <Link href="/#about">About</Link>
              </li>
              <li className="hover:text-foreground/80 text-sm">
                <Link href="/#features">Features</Link>
              </li>
              <li className="hover:text-foreground/80 text-sm">
                <Link href="/blog">Contact</Link>
              </li>
            </ul>
          </nav>

          <Link
            href="/contact"
            className="hover:text-foreground/80 text-sm md:hidden bg-primary  text-white px-3 py-2 rounded-[4px]"
          >
            Contact
          </Link>
        </div>
      </section>
    </header>
  );
}
