"use client";

import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
import { products } from "@/data/ecommerce";

type CartLine = {
  slug: string;
  quantity: number;
};

type ToastState = {
  message: string;
  visible: boolean;
};

type CartContextValue = {
  lines: CartLine[];
  isCartOpen: boolean;
  addToCart: (slug: string, quantity?: number) => void;
  removeFromCart: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  totalItems: number;
  subtotal: number;
  toast: ToastState;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState<ToastState>({ message: "", visible: false });
  const toastTimer = useRef<ReturnType<typeof setTimeout>>();

  const showToast = useCallback((message: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ message, visible: true });
    toastTimer.current = setTimeout(() => {
      setToast((t) => ({ ...t, visible: false }));
    }, 2500);
  }, []);

  const addToCart = useCallback(
    (slug: string, quantity = 1) => {
      const product = products.find((p) => p.slug === slug);
      setLines((current) => {
        const existing = current.find((line) => line.slug === slug);
        if (existing) {
          return current.map((line) =>
            line.slug === slug ? { ...line, quantity: line.quantity + quantity } : line
          );
        }
        return [...current, { slug, quantity }];
      });
      setIsCartOpen(true);
      if (product) {
        showToast(`${product.name} added to basket`);
      }
    },
    [showToast]
  );

  const removeFromCart = useCallback((slug: string) => {
    setLines((current) => current.filter((line) => line.slug !== slug));
  }, []);

  const updateQuantity = useCallback(
    (slug: string, quantity: number) => {
      if (quantity <= 0) {
        removeFromCart(slug);
        return;
      }
      setLines((current) =>
        current.map((line) => (line.slug === slug ? { ...line, quantity } : line))
      );
    },
    [removeFromCart]
  );

  const subtotal = useMemo(() => {
    return lines.reduce((total, line) => {
      const product = products.find((p) => p.slug === line.slug);
      if (!product) return total;
      return total + product.price * line.quantity;
    }, 0);
  }, [lines]);

  const totalItems = useMemo(
    () => lines.reduce((total, line) => total + line.quantity, 0),
    [lines]
  );

  const value: CartContextValue = {
    lines,
    isCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart: () => setLines([]),
    openCart: () => setIsCartOpen(true),
    closeCart: () => setIsCartOpen(false),
    totalItems,
    subtotal,
    toast,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
