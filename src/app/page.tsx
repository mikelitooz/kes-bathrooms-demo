import type { Metadata } from "next";
import { HomeView } from "@/components/sections/HomeView";

export const metadata: Metadata = {
  title: "Yorkshire Home Interiors Ltd | Premium Furniture Showroom Sheffield",
  description:
    "Explore sofas, beds, wardrobes, carpets, dining furniture and home styling from a polished demo website for Yorkshire Home Interiors Ltd."
};

export default function HomePage() {
  return <HomeView />;
}
