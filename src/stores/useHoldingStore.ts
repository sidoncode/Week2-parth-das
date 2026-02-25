import { create } from "zustand";
import { holdings } from "../data/stockData";
import type { Holding } from "../types/stock.types";

interface HoldingStore {
  allHoldings: Holding[];
  compareList: Holding[];
  
  // Actions
  toggleCompare: (item: Holding) => void;
  clearCompare:  () => void;
  isInCompare:   (id: string) => boolean;
}

export const useHoldingStore = create<HoldingStore>((set, get) => ({
  // ── Initial State ──────────────────────────────────────────────────
  allHoldings: holdings,
  compareList: [],

  // ── toggleCompare ──────────────────────────────────────────────────
  toggleCompare: (holding) => {
    set((prev) => {
      const alreadyIn = prev.compareList.some((h) => h.id === holding.id);

      if (alreadyIn) {
        return {
          compareList: prev.compareList.filter((h) => h.id !== holding.id),
        };
      }

      if (prev.compareList.length >= 2) {
        alert("You can compare up to 2 holdings at a time.");
        return prev;
      }

      return {
        compareList: [...prev.compareList, holding],
      };
    });
  },

  // ── clearCompare ───────────────────────────────────────────────────
  clearCompare: () => set({ compareList: [] }),

  // ── isInCompare ────────────────────────────────────────────────────
  isInCompare: (id) => {
    return get().compareList.some((h) => h.id === id);
  },
}));
