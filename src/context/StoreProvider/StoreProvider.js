import React, { createContext, useState } from 'react'

export const StoreContext = createContext();

export default function StoreProvider({ children }) {

    const [isNavVisible, setIsNavVisible] = useState(false)

    return (
        <StoreContext.Provider value={{
            isNavVisible, setIsNavVisible
        }}>
            {children}
        </StoreContext.Provider>
    )
}

