import React, { createContext, useContext, useState } from "react";
import { getFromLocalStorage } from "../lib/storage";
import { LOCAL_STORAGE_KEYS } from "../lib/enums";
import { AuthenticatedUserType } from "../lib/@type";

interface AppContextType {
    showFilterAndSearchPanel: boolean;
    setShowFilterAndSearchPanel: React.Dispatch<React.SetStateAction<boolean>>;
    authUser: AuthenticatedUserType | null
    setAuthUser: React.Dispatch<React.SetStateAction<AuthenticatedUserType | null>>
}

const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
    return useContext(AppContext)
}

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [showFilterAndSearchPanel, setShowFilterAndSearchPanel] = useState(false)
    const [authUser, setAuthUser] = useState<AuthenticatedUserType | null>(
        getFromLocalStorage(LOCAL_STORAGE_KEYS.AUTHENTICATED_USER)
    )

    const value = {
        showFilterAndSearchPanel,
        setShowFilterAndSearchPanel,
        authUser,
        setAuthUser
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}