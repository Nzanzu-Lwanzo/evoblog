import React, { createContext, useContext } from "react";
import { Post } from "../lib/@type";

interface ReadPostContextType {
    post: Post
}

const ReadPostContext = createContext<ReadPostContextType | null>(null);

export const useReadPostContext = () => {
    return useContext(ReadPostContext)
}

export const ReadPostContextProvider = ({ children, post }: { children: React.ReactNode, post: Post }) => {

    const value = {
        post
    }

    return <ReadPostContext.Provider value={value}>
        {children}
    </ReadPostContext.Provider>

}