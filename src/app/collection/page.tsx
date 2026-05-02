import type { Metadata } from "next";
import { ShopView } from "@/components/ecommerce/ShopView";

export const metadata: Metadata = {
  title: "Furniture Collection",
  description: "Browse sofas, recliners, dining sets, beds, wardrobes, coffee tables, living room furniture and decor."
};

export default function CollectionPage() {
  return <ShopView />;
}
