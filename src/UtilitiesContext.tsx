import { pub } from '@sone-dao/sone-react-utils'
import React, { createContext, useContext } from 'react'

interface IUtilitiesContext {
  helmet: {
    open: Function
    close: Function
    toggle: Function
  }
}

const F = () => {}

const utilitiesContextDefaults: IUtilitiesContext = {
  helmet: {
    open: F,
    close: F,
    toggle: F,
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
    open: () => pub('__TONE_EVENTS__', 'helmet.state', 'open'),
    close: () => pub('__TONE_EVENTS__', 'helmet.state', 'close'),
    toggle: () => pub('__TONE_EVENTS__', 'helmet.state', 'toggle'),
  }

  return (
    <UtilitiesContext.Provider value={{ helmet }}>
      {children}
    </UtilitiesContext.Provider>
  )
}

export default UtilitiesProvider
