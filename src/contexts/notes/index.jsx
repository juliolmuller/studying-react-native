import React, { createContext, useReducer } from 'react'
import noteFactory from './modelFactory'
import notesReducer from './reducer'
import { mapActions } from './actions'

const initialState = {
  notes: [
    noteFactory('Vue', 'Vue is the coolest framework!'),
    noteFactory('Nuxt', 'Check main SSR option for Vue'),
    noteFactory('Vuex', 'Check out Composition API for new patterns.'),
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
