import type { Metadata } from "next";
import { ServicesView } from "@/components/sections/ServicesView";

export const metadata: Metadata = {
  title: "Services",
  description: "Interior design, consultation, space planning, delivery, home styling and custom furniture advice."
};

export default function ServicesPage() {
  return <ServicesView />;
}
