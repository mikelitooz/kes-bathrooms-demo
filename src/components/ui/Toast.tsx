"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useCart } from "@/components/cart/CartProvider";

export function Toast() {
  const { toast } = useCart();

  return (
    <AnimatePresence>
      {toast.visible && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2"
        >
          <div className="inline-flex items-center gap-2.5 rounded-lg bg-forest px-5 py-3 text-sm font-semibold text-white shadow-showroom">
            <div className="grid h-5 w-5 place-items-center rounded-full bg-wheat/20">
              <Check className="h-3 w-3" />
            </div>
            {toast.message}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
