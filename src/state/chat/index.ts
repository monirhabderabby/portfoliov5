import { create } from "zustand";

interface AiSearchState {
  aiSearchValue: string;
  setAiSearchValue: (value: string) => void;
}

export const useAiSearchStore = create<AiSearchState>((set) => ({
  aiSearchValue: "",
  setAiSearchValue: (value) => set({ aiSearchValue: value }),
}));
