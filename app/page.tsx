import React from "react";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-28 md:pb-36 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto relative z-10">
          <div className="flex flex-col gap-6 max-w-3xl">
            <span className="font-label-md text-label-md uppercase tracking-widest text-primary font-bold animate-fade-in-up">
              Full-Stack Engineer
            </span>
            <h1 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl leading-tight text-on-surface font-extrabold tracking-tighter animate-fade-in-up animation-delay-100">
              Scale. Secure.<br />Simplify.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed animate-fade-in-up animation-delay-200">
              Crafting high-performance digital ecosystems with a focus on precision, scalability, and intuitive engineering solutions for global enterprises.
            </p>
            <div className="flex gap-4 mt-8 animate-fade-in-up animation-delay-300">
              <Link
                href="/work"
                className="bg-primary-container text-on-primary font-label-md text-label-md px-8 py-4 rounded-2xl flex items-center gap-2 group transition-all hover:bg-primary hover-lift hover:shadow-lg hover:shadow-primary/20"
              >
                View My Work
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full hidden lg:block pointer-events-none">
          <div className="relative w-full h-full">
            <div className="absolute top-[15%] right-[20%] w-36 h-36 glass-card rounded-2xl animate-float-slow flex flex-col justify-between p-6 soft-shadow border border-on-surface/5 pointer-events-auto hover:scale-105 transition-transform duration-500">
              <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>insights</span>
              <span className="text-[12px] font-mono text-on-surface-variant">telemetry.log</span>
            </div>
            <div className="absolute top-[40%] right-[30%] w-16 h-16 bg-primary-container/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-[25%] right-[10%] w-48 h-24 glass-card rounded-2xl animate-float-delayed flex items-center gap-4 p-6 soft-shadow border border-on-surface/5 pointer-events-auto hover:scale-105 transition-transform duration-500">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
              </div>
              <div>
                <div className="text-[14px] font-bold">Secure</div>
                <div className="text-[10px] text-on-surface-variant">SSL/TLS Active</div>
              </div>
            </div>
            <div className="absolute top-[60%] right-[40%] text-[200px] font-black text-on-surface opacity-[0.02] select-none">
              FJ
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section (Bento Grid) */}
      <section className="py-16 md:py-20 bg-surface px-margin-mobile md:px-margin-desktop" id="work">
        <div className="max-w-container-max mx-auto">
          <ScrollReveal className="flex flex-col md:flex-row md:justify-between items-end mb-12 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6 font-bold tracking-tight">
                Selected Projects
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Solving complex industrial and enterprise challenges through refined digital architecture.
              </p>
            </div>
            <div className="flex items-center gap-4 font-label-md text-label-md text-primary">
              <span>01 / 03</span>
              <div className="w-24 h-[1px] bg-outline-variant">
                <div className="w-1/3 h-full bg-primary"></div>
              </div>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Project 1: Maintenance Workspace (Large) */}
            <ScrollReveal className="md:col-span-8" delayClass="animation-delay-100">
              <ProjectCard
                title="Maintenance Workspace"
                description="A unified hub for managing large-scale equipment upkeep, featuring real-time telemetry and predictive scheduling engines."
                category="Enterprise"
                imageSrc="/images/maintenance-home.png"
                link="/work"
                colSpan="w-full"
                isLarge
              />
            </ScrollReveal>
            <div className="md:col-span-4 flex flex-col gap-gutter">
              {/* Project 2: SPC Dashboard */}
              <ScrollReveal className="w-full" delayClass="animation-delay-200">
                <ProjectCard
                  title="SPC Dashboard"
                  description="Statistical process control for automated factory lines."
                  category="FinTech & Data"
                  imageSrc="/images/spc-home.png"
                  link="/work"
                  colSpan="w-full"
                  aspectRatio="aspect-[4/3]"
                />
              </ScrollReveal>
              {/* Project 3: Leak Detection */}
              <ScrollReveal className="w-full" delayClass="animation-delay-300">
                <ProjectCard
                  title="Leak Detection"
                  description="IoT infrastructure for urban water management."
                  category="Environmental Tech"
                  imageSrc="/images/leak-home.png"
                  link="/work"
                  colSpan="w-full"
                  aspectRatio="aspect-[4/3]"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Experience / Call to Action Section */}
      <section className="py-20 md:py-24 bg-primary-container text-on-primary overflow-hidden relative" id="services">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal className="flex flex-col gap-6">
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8 font-extrabold tracking-tighter">
                Let's build the future together.
              </h2>
              <p className="font-body-lg text-body-lg opacity-80 mb-12 max-w-md">
                I am currently open to new collaborations and high-impact engineering projects. Whether it's a zero-to-one startup or enterprise scaling, I bring precision to the stack.
              </p>
              <div className="flex flex-wrap gap-6" id="contact">
                <Link
                  href="mailto:hello@fajaryusuf.com"
                  className="bg-surface-container-lowest text-primary font-label-md text-label-md px-10 py-5 rounded-2xl soft-shadow hover-lift hover:shadow-lg hover:shadow-black/10 transition-all"
                >
                  Get in touch
                </Link>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-on-primary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                  </div>
                  <span className="font-label-md text-label-md">hello@fajaryusuf.com</span>
                </div>
              </div>
            </ScrollReveal>
            <div className="hidden lg:block relative h-[500px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative">
                  <div className="w-32 h-32 bg-white/20 rounded-3xl backdrop-blur-xl absolute -top-12 -left-12 rotate-12 flex items-center justify-center soft-shadow border border-white/10 animate-float-slow pointer-events-auto">
                    <span className="material-symbols-outlined text-white text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>code</span>
                  </div>
                  <div className="w-48 h-48 bg-white/10 rounded-full backdrop-blur-md absolute top-12 -right-12 flex items-center justify-center soft-shadow border border-white/10 hover:scale-105 transition-transform duration-500 pointer-events-auto">
                    <span className="material-symbols-outlined text-white text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>storage</span>
                  </div>
                  <div className="w-24 h-24 bg-white/30 rounded-2xl backdrop-blur-lg absolute bottom-0 left-24 -rotate-6 flex items-center justify-center soft-shadow border border-white/10 animate-float-delayed pointer-events-auto">
                    <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Background Graphic */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <svg className="w-full h-full fill-current" viewBox="0 0 100 100">
            <circle cx="50" cy="50" fill="none" r="40" stroke="white" strokeWidth="0.1"></circle>
            <circle cx="50" cy="50" fill="none" r="30" stroke="white" strokeWidth="0.1"></circle>
          </svg>
        </div>
      </section>
    </main>
  );
}
