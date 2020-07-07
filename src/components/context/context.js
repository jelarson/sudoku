import React, { useState, createContext } from 'react'

export const SelectedContext = createContext()

export const UserProvider = ({ children }) => {
  const [selected, setState] = useState({
    selectedNum: 1,
  })

  const actions = {
    setSelectedNum: (amt) => {
      setState((preState) => {
        return { ...preState, selectedNum: amt }
      })
    },
  }

  return <SelectedContext.Provider value={{ selected, actions }}>{children}</SelectedContext.Provider>
}
