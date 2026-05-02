import type { Metadata } from "next";
import { AboutView } from "@/components/sections/AboutView";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Yorkshire Home Interiors Ltd and the Queens Road Sheffield showroom positioning."
};

export default function AboutPage() {
  return <AboutView />;
}
