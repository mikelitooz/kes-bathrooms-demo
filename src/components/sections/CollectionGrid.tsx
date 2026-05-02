"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { collections } from "@/data/site";

interface CollectionGridProps {
  limit?: number;
}

export function CollectionGrid({ limit }: CollectionGridProps) {
  const items = typeof limit === "number" ? collections.slice(0, limit) : collections;

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
            whileHover={{ y: -6 }}
            className="group overflow-hidden rounded-[1.5rem] bg-white shadow-card"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-linen text-charcoal">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="rounded-full bg-charcoal px-3 py-1 text-xs font-semibold text-ivory">{item.price}</span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-charcoal">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-pretty text-taupe">{item.description}</p>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
