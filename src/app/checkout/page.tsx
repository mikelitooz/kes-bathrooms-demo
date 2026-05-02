import type { Metadata } from "next";
import { CheckoutView } from "@/components/ecommerce/CheckoutView";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete delivery and billing details to place your order."
};

export default function CheckoutPage() {
  return <CheckoutView />;
}
