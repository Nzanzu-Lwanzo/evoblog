import React, { createContext, useContext, useState } from "react";
import { SubscriberType } from "../firebase/@types";
import { getFromLocalStorage } from "../lib/storage";
import { LOCAL_STORAGE_KEYS } from "../lib/enums";

interface AppContextType {
    showFilterAndSearchPanel: boolean;
    setShowFilterAndSearchPanel: React.Dispatch<React.SetStateAction<boolean>>;
    subscriptionData: SubscriberType | null
    setSubscriptionData: React.Dispatch<React.SetStateAction<SubscriberType | null>>
}

const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
    return useContext(AppContext)
}

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [showFilterAndSearchPanel, setShowFilterAndSearchPanel] = useState(false)
    const [subscriptionData, setSubscriptionData] = useState<SubscriberType | null>(
        getFromLocalStorage(LOCAL_STORAGE_KEYS.SUBSCRIPTION_DATA)
    )

    const value = {
        showFilterAndSearchPanel,
        setShowFilterAndSearchPanel,
        subscriptionData,
        setSubscriptionData
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}