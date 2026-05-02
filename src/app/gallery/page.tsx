import type { Metadata } from "next";
import { GalleryView } from "@/components/sections/GalleryView";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A premium furniture showroom gallery experience for Yorkshire Home Interiors Ltd."
};

export default function GalleryPage() {
  return <GalleryView />;
}
