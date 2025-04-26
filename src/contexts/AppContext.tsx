import React, { createContext, useContext, useState } from "react";

interface AppContextType {
    showFilterAndSearchPanel: boolean;
    setShowFilterAndSearchPanel: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
    return useContext(AppContext)
}

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [showFilterAndSearchPanel, setShowFilterAndSearchPanel] = useState(false)

    const value = {
        showFilterAndSearchPanel,
        setShowFilterAndSearchPanel
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}