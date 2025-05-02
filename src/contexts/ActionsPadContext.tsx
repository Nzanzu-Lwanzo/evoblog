import React, { createContext, useContext, useState } from "react";

export type ActionPadSection = "comments" | "likes" | "bookmarks"

interface ActionsPadContextType {
    currentActionPadSection: ActionPadSection
    setCurrentActionPadSection: React.Dispatch<React.SetStateAction<ActionPadSection>>

    isPadVisible: boolean,
    setIsPadVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const ActionsPadContext = createContext<ActionsPadContextType | null>(null);

export const useActionsPadContext = () => {
    return useContext(ActionsPadContext)
}

export const ActionsPadContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [currentActionPadSection, setCurrentActionPadSection] = useState<ActionPadSection>('comments')

    const [isPadVisible, setIsPadVisible] = useState(false)

    const value = {
        currentActionPadSection,
        setCurrentActionPadSection,
        isPadVisible,
        setIsPadVisible
    }

    return <ActionsPadContext.Provider value={value}>
        {children}
    </ActionsPadContext.Provider>

}