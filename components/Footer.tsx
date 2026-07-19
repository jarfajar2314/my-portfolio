import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-on-surface/5">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto gap-stack-lg">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
            Fajar Yusuf
          </span>
          <span className="font-label-md text-label-md text-on-surface-variant text-center md:text-left">
            © {new Date().getFullYear()} Fajar Yusuf. All rights reserved.
          </span>
          <a
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
            href="mailto:hello@fajaryusuf.com"
          >
            hello@fajaryusuf.com
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 w-full sm:w-auto">
          <div className="flex flex-col items-center sm:items-start gap-3">
            <span className="font-label-md text-label-md text-primary uppercase tracking-widest">
              Connect
            </span>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
              <a
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
                href="https://github.com/jarfajar2314"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
                href="https://linkedin.com/in/mfajaryusuf"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
                href="https://instagram.com/jarfajaarr_"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-start gap-3">
            <span className="font-label-md text-label-md text-primary uppercase tracking-widest">
              Navigation
            </span>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
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
              <a
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
                href="#top"
              >
                Back to top
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
