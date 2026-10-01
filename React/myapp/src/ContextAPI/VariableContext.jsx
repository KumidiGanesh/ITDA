import { createContext } from "react";

export const VariableContext = createContext()

export const VariableProvide =({children})=>{

const username = "Bharath"

    return (
        <VariableContext.Provider value={username}>
        {children}
        </VariableContext.Provider>
    )
}