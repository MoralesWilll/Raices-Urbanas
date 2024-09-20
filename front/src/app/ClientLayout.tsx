"use client"
import React from "react"
import { GlobalStyle } from "./GlobalStyles"

const ClientLayout: React.FC<{children: React.ReactNode}> =({ children }) => {
    return (
        <>
            <GlobalStyle />
            {children}
        </>
    )
}

export default ClientLayout