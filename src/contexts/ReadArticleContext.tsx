import React, { createContext, useContext, useState } from "react";
import { Post } from "../lib/@type";

interface ReadPostContextType {
    post: Post,
    setPost: React.Dispatch<React.SetStateAction<Post>>
}

const ReadPostContext = createContext<ReadPostContextType | null>(null);

export const useReadPostContext = () => {
    return useContext(ReadPostContext)
}

export const ReadPostContextProvider = ({ children, post: _post }: { children: React.ReactNode, post: Post }) => {

    const [post, setPost] = useState<Post>(_post)

    const value = {
        post,
        setPost
    }

    return <ReadPostContext.Provider value={value}>
        {children}
    </ReadPostContext.Provider>

}