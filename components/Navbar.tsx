"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Work", href: "/work" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="bg-surface/80 backdrop-blur-md sticky top-0 z-50 border-b border-on-surface/5">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
        <Link
          href="/"
          className="font-headline-sm text-headline-sm font-bold text-on-surface tracking-tighter"
        >
          Fajar Yusuf
        </Link>
        <div className="hidden md:flex items-center gap-stack-lg">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`font-label-md text-label-md transition-colors ${
                  isActive
                    ? "text-primary font-bold relative after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <Link
            href="/#contact"
            className="bg-primary-container text-on-primary text-label-md font-label-md px-8 py-3 rounded-2xl hover:opacity-90 transition-opacity"
          >
            Hire Me
          </Link>
        </div>
        <button
          className="md:hidden p-2 text-on-surface"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Dropdown Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-on-surface/5 py-6 px-margin-mobile flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface py-2"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-primary-container text-on-primary text-center text-label-md font-label-md py-4 rounded-2xl"
          >
            Hire Me
          </Link>
        </div>
      )}
    </nav>
  );
}
