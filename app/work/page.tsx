import React from "react";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

export default function SelectedWorks() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20 md:py-32 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
          <div className="z-10">
            <span className="font-label-md text-label-md text-primary tracking-widest uppercase block mb-stack-sm">
              Selected Work
            </span>
            <h1 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface mb-stack-md font-extrabold tracking-tighter">
              Digital Experiences <br />
              <span className="text-primary italic">that Matter.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-stack-lg">
              A showcase of systematic solutions designed for complex industrial workflows and digital transformation.
            </p>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="absolute w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="w-full max-w-md aspect-square relative glass-card rounded-3xl p-12 overflow-hidden hover-lift flex flex-col justify-center items-center group">
              <div className="w-24 h-24 bg-primary-container/20 rounded-2xl rotate-12 flex items-center justify-center mb-6 group-hover:rotate-0 transition-transform duration-700">
                <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  view_quilt
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-bold">
                Systems Architect
              </h3>
              <p className="text-center font-body-md text-on-surface-variant">
                Bridging the gap between industrial complexity and human-centered design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1: Maintenance Workspace */}
          <ProjectCard
            title="Maintenance Workspace"
            description="A clean, minimalist high-fidelity UI design showing a maintenance dashboard."
            category="Heavy Industrial"
            year="2024"
            imageSrc="/images/maintenance-work.png"
            link="#"
            aspectRatio="aspect-[4/3]"
          />
          {/* Project 2: SPC Dashboard */}
          <ProjectCard
            title="SPC Dashboard"
            description="A sophisticated data visualization dashboard for statistical process control."
            category="FinTech & Data"
            year="2023"
            imageSrc="/images/spc-work.png"
            link="#"
            aspectRatio="aspect-[4/3]"
          />
          {/* Project 3: Leak Detection System */}
          <ProjectCard
            title="Leak Detection System"
            description="A minimal dark-themed interface for a leak detection monitoring system."
            category="Environmental Tech"
            year="2023"
            imageSrc="/images/leak-work.png"
            link="#"
            aspectRatio="aspect-[4/3]"
          />
          {/* Project 4: Procurement Digitalization */}
          <ProjectCard
            title="Procurement Digitalization"
            description="An editorial-style layout showcasing a procurement digitalization platform."
            category="Enterprise Software"
            year="2022"
            imageSrc="/images/procurement-work.png"
            link="#"
            colSpan="md:col-span-2"
            aspectRatio="aspect-[2/1]"
          />
          {/* Project 5: Incident Reporting */}
          <ProjectCard
            title="Incident Reporting"
            description="A task-focused mobile application screen for incident reporting."
            category="Public Safety"
            year="2022"
            imageSrc="/images/incident-work.png"
            link="#"
            colSpan="md:col-span-1"
            aspectRatio="aspect-[1/1]"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-32 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl aspect-square bg-primary/5 blur-[120px] -z-10"></div>
        <span className="font-label-md text-label-md text-primary mb-stack-sm block tracking-widest uppercase">
          Start a conversation
        </span>
        <h2 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface mb-stack-lg font-extrabold tracking-tighter">
          Let's Work <br />
          <span className="text-stroke text-primary">Together.</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-stack-md">
          <Link
            href="mailto:hello@fajar.yusuf"
            className="bg-primary text-on-primary px-10 py-5 rounded-2xl font-label-md text-label-md hover:scale-[1.05] transition-all shadow-xl shadow-primary/20"
          >
            hello@fajar.yusuf
          </Link>
          <Link
            href="#"
            className="border border-on-surface/10 text-on-surface px-10 py-5 rounded-2xl font-label-md text-label-md hover:bg-on-surface/5 transition-all"
          >
            Schedule a Call
          </Link>
        </div>
      </section>
    </main>
  );
}
