'use client'

import { createContext, ReactNode, useContext, useState } from "react";

type Props = {
    selected: number;
    setSelected: (selected: number) => void; 
}

const NavigationContext = createContext<Props | undefined>(undefined)

export const useNavigation = () => {
    const context = useContext(NavigationContext)
    if (!context)
        throw new Error('useNavigation doit etre utilise dans un NavigationProvider')
    return context;
}

export const NavigationProvider = ({children}: { children : ReactNode }) => {
    const [selected, setSelected] = useState(0)

    return (
        <NavigationContext.Provider value={{ selected, setSelected }}>
            { children }
        </NavigationContext.Provider>
    )
}
