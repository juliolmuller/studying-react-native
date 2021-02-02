import noteFactory from './modelFactory'

export const CREATE = (state, payload) => {
  const { title, body } = payload
  const newNote = noteFactory(title, body)

  return { ...state, notes: [...state.notes, newNote] }
}

export const UPDATE = (state, payload) => {
  const { id, title, body } = payload
  const notes = state.notes.map((note) => {
    if (note.id === id) {
      return noteFactory(title, body, id)
    }

    return note
  })

  return { ...state, notes }
}

export const DELETE = (state, noteId) => {
  const notes = state.notes.filter((note) => {
    return noteId !== note.id
  })

  return { ...state, notes }
}
