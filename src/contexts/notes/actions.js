import { CREATE, UPDATE, DELETE } from './mutations'

const actionsMap = {
  createNote: CREATE,
  updateNote: UPDATE,
  destroyNote: DELETE,
}

const generateMask = (dispatch, type) => {
  return (payload) => {
    dispatch({ type, payload })
  }
}

export const mapActions = (dispatcher) => {
  const rawActionsEntries = Object.entries(actionsMap)
  const actionEntries = rawActionsEntries.map(([name, mutation]) => [name, generateMask(dispatcher, mutation.name)])

  return Object.fromEntries(actionEntries)
}
