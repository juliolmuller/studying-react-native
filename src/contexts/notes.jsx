import React, { createContext } from 'react'
import idMaker from '../utils/idMaker'

const noteFactory = (title, body) => ({
  id: idMaker.next(),
  createdAt: new Date(),
  title,
  body,
})

const initialState = {
  notes: [
    noteFactory('Vue', 'Vue is the coolest framework!'),
    noteFactory('Nuxt', 'Check main SSR option for Vue'),
    noteFactory('Vuex', 'Check out Composition API for new patterns.'),
  ],
}

export const NotesContext = createContext(null)

export const NotesProvider = ({ children }) => (
  <NotesContext.Provider value={initialState}>
    {children}
  </NotesContext.Provider>
)
