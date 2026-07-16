import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-on-surface/5">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto gap-stack-md">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
            Fajar Yusuf
          </span>
          <span className="font-label-md text-label-md text-on-surface-variant">
            © {new Date().getFullYear()} Fajar Yusuf. All rights reserved.
          </span>
        </div>
        <div className="flex gap-12">
          <div className="flex flex-col gap-4">
            <span className="font-label-md text-label-md text-primary uppercase tracking-widest">
              Connect
            </span>
            <div className="flex gap-6">
              <a
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dribbble
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-label-md text-label-md text-primary uppercase tracking-widest">
              Navigation
            </span>
            <div className="flex gap-6">
              <Link
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
                href="/work"
              >
                Projects
              </Link>
              <a
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
                href="#"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
