import React, { createContext, useReducer } from 'react'
import noteFactory from './modelFactory'
import notesReducer from './reducer'
import { mapActions } from './actions'

const initialState = {
  notes: [
    noteFactory('Vue Composition API', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
    noteFactory('React Hooks 😖', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
    noteFactory('Why TypeScript?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
  ],
}

export const NotesContext = createContext(null)

export const NotesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, initialState)

  return (
    <NotesContext.Provider value={{ ...state, ...mapActions(dispatch) }}>
      {children}
    </NotesContext.Provider>
  )
}
