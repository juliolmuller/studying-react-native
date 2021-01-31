import React from 'react'
import { NotesProvider } from './notes'

export { NotesContext } from './notes'

const ContextProvider = ({ children }) => (
  <NotesProvider>
    {children}
  </NotesProvider>
)

export default ContextProvider
