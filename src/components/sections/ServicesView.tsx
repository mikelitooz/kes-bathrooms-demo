import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { media, services } from "@/data/site";

export function ServicesView() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Advice, styling and delivery support from showroom to home."
        body="The services page turns a furniture shop into a helpful local interior partner, making it easier for customers to ask questions before they visit."
        image={media.dining}
      />
      <section className="bg-ivory px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What customers can ask for"
            title="Practical help that removes buying friction."
            body="These service cards can later connect to booking forms, WhatsApp prompts or product enquiry flows."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={index * 0.04}>
                  <article className="h-full rounded-[1.5rem] bg-white p-7 shadow-card">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-linen text-bronze">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h2 className="mt-6 font-display text-3xl font-semibold text-charcoal">{service.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-pretty text-taupe">{service.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
