// We are not using this in our project



import React from 'react'
import { useState, useEffect, useContext, createContext } from 'react'

const AppContext = createContext();

const AppProvider = ({children}) => {
    const msg = "Hello";

  return (
    <AppContext.Provider value={msg}>
        {children}
    </AppContext.Provider>
)
}

export default AppProvider

export const useGlobalContext = () => {
    return useContext(AppContext);
}