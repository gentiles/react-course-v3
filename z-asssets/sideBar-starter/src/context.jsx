import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()

export const Appcontext = ({ children }) => {
  const [isSidebar, setSidebar] = useState(true)
  const [isModal, setmodal] = useState(true)

  const openSidebar = () => {
    setSidebar(false)
  }

  const closeSidebar = () => {
    setSidebar(true)
  }

  const openModal = () => {
    setmodal(false)
  }
  const closeModal = () => {
    setmodal(true)
  }
  return (
    <GlobalContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
        isSidebar,
        isModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
export const useGlobalContex = () => {
  return useContext(GlobalContext)
}
