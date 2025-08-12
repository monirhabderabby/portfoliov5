"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ResponsiveDialog from "../ui/responsive-dialog";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button variant="outline" size="icon" onClick={() => setOpen((p) => !p)}>
        <Menu />
      </Button>

      <ResponsiveDialog
        open={open}
        onOpenChange={setOpen}
        title="Menus"
        description=""
      >
        <nav className="md:hidden">
          <ul className="space-y-5">
            <li className="hover:text-foreground/80 text-sm">
              <Button asChild className="w-full" variant="ghost">
                <Link href="/about">About</Link>
              </Button>
            </li>
            <li className="hover:text-foreground/80 text-sm">
              <Button asChild variant="ghost" className="w-full">
                <Link href="/projects">Projects</Link>
              </Button>
            </li>
            <li className="hover:text-foreground/80 text-sm">
              <Button asChild variant="ghost" className="w-full">
                <Link href="/achievements">Achievements</Link>
              </Button>
            </li>
            <li className="hover:text-foreground/80 text-sm">
              <Button asChild variant="secondary" className="w-full">
                <Link href="/contact">Contact</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </ResponsiveDialog>
    </div>
  );
};

export default MobileNavbar;
