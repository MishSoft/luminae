import { create } from "zustand";

interface CurrencyState {
  currentCurrency: string;
  exchangeRates: Record<string, number>;
  setCurrency: (currency: string) => void;
}

export const useCurrencyStore = create<CurrencyState>((set) => ({
  currentCurrency: "USD",
  exchangeRates: {
    USD: 1,
    GEL: 2.7, 
    EUR: 0.92,
  },
  setCurrency: (currency) => set({ currentCurrency: currency }),
}));
