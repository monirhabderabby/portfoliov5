"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ResponsiveDialog from "../ui/responsive-dialog";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  const onClose = () => {
    setOpen((p) => !p);
  };

  const getVariant = (href: string) =>
    pathName === href ? "default" : "ghost"; // active page gets 'default'

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
              <Button
                asChild
                className="w-full"
                variant={getVariant("/about-me")}
                onClick={onClose}
              >
                <Link href="/about">About</Link>
              </Button>
            </li>
            <li className="hover:text-foreground/80 text-sm">
              <Button
                asChild
                className="w-full"
                variant={getVariant("/projects")}
                onClick={onClose}
              >
                <Link href="/projects">Projects</Link>
              </Button>
            </li>
            <li className="hover:text-foreground/80 text-sm">
              <Button
                asChild
                className="w-full"
                variant={getVariant("/achievements")}
                onClick={onClose}
              >
                <Link href="/achievements">Achievements</Link>
              </Button>
            </li>
            <li className="hover:text-foreground/80 text-sm">
              <Button
                asChild
                className="w-full"
                variant={getVariant("/contact")}
                onClick={onClose}
              >
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
