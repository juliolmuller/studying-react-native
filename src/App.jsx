import React from 'react'
import Routes from './routes'
import ContextProvider from './contexts'

const App = () => (
  <ContextProvider>
    <Routes />
  </ContextProvider>
)

export default App
