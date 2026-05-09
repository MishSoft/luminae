import {create} from "zustand"



interface SideBarStore {
  isOpen: boolean;
  openSidebar: () => void
  closeSidebar: () => void
}


export const useSidebarStore = create<SideBarStore>((set) => ({
  isOpen: false,
  openSidebar: () => set({ isOpen: true }),
  closeSidebar: () => set({ isOpen: false }),
}));
