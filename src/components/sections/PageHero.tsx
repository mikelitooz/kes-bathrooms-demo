 "use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
}

export function PageHero({ eyebrow, title, body, image }: PageHeroProps) {
  return (
    <section className="bg-charcoal text-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[0.9fr_1.1fr] md:items-center lg:px-8 lg:py-24">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-bronze">{eyebrow}</p>
          <h1 className="font-display text-5xl font-semibold leading-none text-balance md:text-7xl">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-pretty text-ivory/75">{body}</p>
          <div className="mt-8">
            <Button href="/contact" variant="light">
              Plan a visit
            </Button>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
          <Image src={image} alt={title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
