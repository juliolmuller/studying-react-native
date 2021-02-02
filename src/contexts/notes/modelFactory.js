import idMaker from '../../utils/idMaker'

const noteFactory = (title, body, id = null) => ({
  id: id ?? idMaker.next(),
  modifiedAt: new Date(),
  title,
  body,
})

export default noteFactory
