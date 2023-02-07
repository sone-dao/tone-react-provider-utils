import { pub } from '@sone-dao/sone-react-utils'
import React, { createContext, useContext } from 'react'

interface IUtilitiesContext {
  helmet: {
    hide: Function
  }
}

const F = () => {}

const utilitiesContextDefaults: IUtilitiesContext = {
  helmet: {
    hide: Function,
  },
}

const UtilitiesContext = createContext<IUtilitiesContext>(
  utilitiesContextDefaults
)

export const useUtilitiesContext = () => useContext(UtilitiesContext)

export interface IUtilitiesProviderProps {
  children: React.ReactNode
}

const UtilitiesProvider: React.FC<IUtilitiesProviderProps> = ({ children }) => {
  const helmet = {
    hide: (hidden: boolean) => pub('__TONE_EVENTS__', 'helmet.state', hidden),
  }

  return (
    <UtilitiesContext.Provider value={{ helmet }}>
      {children}
    </UtilitiesContext.Provider>
  )
}

export default UtilitiesProvider
