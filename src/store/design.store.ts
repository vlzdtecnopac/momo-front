import { create } from 'zustand'

export enum TypeColumnsEnum{
    split = 0,
    stacked = 1,
    clasica = 2
}

export enum  TypographyEnum {
    small = "small",
    medium = "medium",
    large = "large"
}


interface DesignStoreInterface{
    typeTypography: TypographyEnum,
    typeColumns: TypeColumnsEnum,
    selectTypeColumn: (option: TypeColumnsEnum) => void,
    selectTypography: (option: TypographyEnum) => void
}

export const useDesignStore = create<DesignStoreInterface>((set) => ({
    typeTypography: TypographyEnum.medium,
    typeColumns: TypeColumnsEnum.split,
    selectTypeColumn: (option: TypeColumnsEnum) => set((state) => ({...state, typeColumns: option})),
    selectTypography: (option: TypographyEnum) => set((state) => ({...state, typeTypography: option}))
}));