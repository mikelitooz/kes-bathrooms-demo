"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gallery, media } from "@/data/site";
import { cn } from "@/lib/utils";

export function GalleryView() {
  const [active, setActive] = useState<(typeof gallery)[number] | null>(null);

  return (
    <main>
      <PageHero
        eyebrow="Gallery"
        title="A visual showroom built to impress in seconds."
        body="A masonry-style gallery with hover states and a lightbox preview, ready for real Google Business photos from the showroom."
        image={media.decor}
      />
      <section className="bg-ivory px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <SectionHeading
              eyebrow="Showroom moments"
              title="Furniture, flooring and room inspiration."
              body="Replace these media URLs with the owner-approved Google Business photos to make the demo feel fully connected to the real showroom."
            />
          </div>
          <div className="grid auto-rows-[260px] gap-4 md:grid-cols-4">
            {gallery.map((item) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActive(item)}
                className={cn(
                  "group relative overflow-hidden rounded-[1.5rem] bg-charcoal text-left shadow-card focus:outline-none focus:ring-2 focus:ring-bronze",
                  item.span
                )}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 25vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-80"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-5 text-sm font-semibold text-white">
                  {item.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {active ? (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <button
            type="button"
            aria-label="Close gallery preview"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-charcoal"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative h-[78dvh] w-full max-w-5xl overflow-hidden rounded-[2rem] bg-charcoal">
            <Image src={active.src} alt={active.title} fill sizes="90vw" className="object-contain" />
          </div>
        </div>
      ) : null}
    </main>
  );
}
