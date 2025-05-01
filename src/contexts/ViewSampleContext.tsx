import React, { createContext, useContext } from "react";
import { Sample } from "../lib/@type";

interface ViewSampleContextType {
    sample: Sample
}

const ViewSampleContext = createContext<ViewSampleContextType | null>(null);

export const useViewSampleContext = () => {
    return useContext(ViewSampleContext)
}

export const ViewSampleContextProvider = ({ children, sample }: { children: React.ReactNode, sample: Sample }) => {

    const value = {
        sample
    }

    return <ViewSampleContext.Provider value={value}>
        {children}
    </ViewSampleContext.Provider>

}