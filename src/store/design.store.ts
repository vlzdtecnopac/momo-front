import { create } from 'zustand'

interface DesignStoreInterface{
    typeTypography: string,
    typeColumns: number,
    selectTypeColumn: (option: number) => void,
    selectTypography: (option: string) => void
}

export const useDesignStore = create<DesignStoreInterface>((set) => ({
    typeTypography: "medium",
    typeColumns: 0,
    selectTypeColumn: (option: number) => set((state) => ({...state, typeColumns: option})),
    selectTypography: (option: string) => set((state) => ({...state, typeTypography: option}))
}));