interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, body, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-bronze">{eyebrow}</p> : null}
      <h2 className="font-display text-4xl font-semibold leading-none text-balance text-charcoal md:text-6xl">
        {title}
      </h2>
      {body ? <p className="mt-5 text-base leading-8 text-pretty text-taupe md:text-lg">{body}</p> : null}
    </div>
  );
}
