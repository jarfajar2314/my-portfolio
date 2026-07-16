import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  year?: string;
  imageSrc: string;
  link: string;
  colSpan?: string;
  aspectRatio?: string;
  isLarge?: boolean;
}

export default function ProjectCard({
  title,
  description,
  category,
  year,
  imageSrc,
  link,
  colSpan = "md:col-span-4",
  aspectRatio = "aspect-video",
  isLarge = false,
}: ProjectCardProps) {
  if (isLarge) {
    return (
      <div className={`${colSpan} group cursor-pointer`}>
        <div className="bg-surface-container-lowest rounded-3xl overflow-hidden soft-shadow transition-all duration-500 hover:soft-shadow-lg hover-lift h-full border border-on-surface/5 flex flex-col justify-between">
          <div className="h-[400px] relative overflow-hidden bg-surface-container">
            <Image
              src={imageSrc}
              alt={title}
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-6 left-6 flex gap-2 z-10">
              <span className="bg-surface-container-lowest/80 backdrop-blur px-4 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider text-primary">
                Architecture
              </span>
              <span className="bg-primary-container text-on-primary px-4 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider">
                {category}
              </span>
            </div>
          </div>
          <div className="p-10">
            <h3 className="font-headline-sm text-headline-sm mb-4">{title}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-lg">
              {description}
            </p>
            <div className="flex items-center gap-2 text-primary font-label-md text-label-md group/link">
              View Case Study
              <span className="material-symbols-outlined transition-transform duration-300 group-hover/link:translate-x-2">
                arrow_forward
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${colSpan} group flex flex-col gap-4`}>
      <div className={`relative overflow-hidden rounded-3xl soft-shadow ${aspectRatio} bg-surface-container`}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute bottom-6 right-6 translate-y-12 group-hover:translate-y-0 transition-transform duration-500 z-10">
          <Link
            className="bg-surface text-primary w-12 h-12 rounded-full flex items-center justify-center soft-shadow group/btn hover:scale-110 transition-transform duration-300"
            href={link}
          >
            <span className="material-symbols-outlined transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">arrow_outward</span>
          </Link>
        </div>
      </div>
      <div className="px-2">
        <div className="flex items-center gap-2 mb-1">
          {year && <span className="font-label-md text-label-md text-on-surface-variant/60">{year}</span>}
          {year && <span className="w-1 h-1 bg-primary/20 rounded-full"></span>}
          <span className="font-label-md text-label-md text-primary">{category}</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
    </div>
  );
}
