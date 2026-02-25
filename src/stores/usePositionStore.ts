import { create } from "zustand";
import type { Position } from "../types/stock.types";
// Assuming you have initial position data
import { positions } from "../data/stockData";

interface PositionStore {
  allPositions: Position[];
  compareList:  Position[];
  
  // Actions
  toggleCompare: (position: Position) => void;
  clearCompare:  () => void;
  isInCompare:   (id: string) => boolean;
}

export const usePositionStore = create<PositionStore>((set, get) => ({
  // ── Initial State ──────────────────────────────────────────────────
  allPositions: positions,
  compareList:  [],

  // ── toggleCompare ──────────────────────────────────────────────────
  toggleCompare: (position) => {
    set((prev) => {
      const alreadyIn = prev.compareList.some((p) => p.id === position.id);

      if (alreadyIn) {
        return {
          compareList: prev.compareList.filter((p) => p.id !== position.id),
        };
      }

      if (prev.compareList.length >= 2) {
        alert("You can compare up to 2 positions at a time.");
        return prev;
      }

      return {
        compareList: [...prev.compareList, position],
      };
    });
  },

  // ── clearCompare ───────────────────────────────────────────────────
  clearCompare: () => set({ compareList: [] }),

  // ── isInCompare ────────────────────────────────────────────────────
  isInCompare: (id) => {
    return get().compareList.some((p) => p.id === id);
  },
}));
