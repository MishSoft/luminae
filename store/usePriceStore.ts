import { create } from "zustand";

interface PriceState {
  calculateDiscount: (price: number, discountPercentage: number) => number;
  calculateSavings: (price: number, discountPercentage: number) => number;
}

export const usePriceStore = create<PriceState>(() => ({
  calculateDiscount: (price, discountPercentage) => {
    if (!discountPercentage || discountPercentage <= 0) return price;
    const discountAmount = (price * discountPercentage) / 100;
    return Number((price - discountAmount).toFixed(2));
  },

  calculateSavings: (price, discountPercentage) => {
    if (!discountPercentage || discountPercentage <= 0) return 0;
    return Number(((price * discountPercentage) / 100).toFixed(2));
  },
}));
