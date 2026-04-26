"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-6">
        <Link href="/" className="flex items-center gap-3">
         <Image
            src='/images/logo.png'
            alt="logo"
            width={150}
            height={100}
         />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-6 text-xs font-medium uppercase tracking-[0.24em] text-white/60">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative pb-1 transition-colors hover:text-white",
                    active && "text-white"
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-0 -bottom-0.5 h-px bg-linear-to-r from-transparent via-amber-400 to-transparent"
                    />
                  )}
                </Link>
              );
            })}
          </div>
          <Button
            size="sm"
            className="hidden uppercase font-semibold md:inline-flex px-4 py-5 bg-amber-400 text-black hover:bg-amber-300"
            onClick={() => {
              const section = document.getElementById("reserve");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book a Table
          </Button>
        </div>

        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="border-t border-white/10 bg-black/95 md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 text-sm font-medium uppercase tracking-[0.22em] text-white/70">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "py-1.5 transition-colors text-xs hover:text-white",
                    active && "text-white"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button
              size="sm"
              className="mt-2 uppercase bg-amber-400 text-black hover:bg-amber-300"
              onClick={() => {
                const section = document.getElementById("reserve");
                section?.scrollIntoView({ behavior: "smooth" });
                setOpen(false);
              }}
            >
              Book a Table
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
}

