import { create } from "zustand";

const useMacBookStore = create((set) => ({
  color: "#2e2c2e",
  setColor: (color) => set({ color }),
  reset: () => set({ color: "#2e2c2e" }),
}));

export { useMacBookStore };
