import { CollectionGrid } from "@/components/sections/CollectionGrid";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { media } from "@/data/site";

export function CollectionView() {
  return (
    <main>
      <PageHero
        eyebrow="Furniture collection"
        title="Sofas, beds, dining and storage styled for real homes."
        body="A premium product browsing experience inspired by modern furniture ecommerce: clean categories, clear price prompts and immersive showroom photography."
        image={media.bedroom}
      />
      <section className="bg-ivory px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <SectionHeading
              eyebrow="Browse categories"
              title="Everything a customer expects to find."
              body="Each category card is designed to support future product listings, filters, finance messaging and enquiry-led shopping."
            />
          </div>
          <CollectionGrid />
        </div>
      </section>
    </main>
  );
}
