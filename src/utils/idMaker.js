
const generator = function* (start, step = 1) {
  let value = start

  while (true) {
    value += step
    yield value
  }
}

const idMaker = generator(1, 1)

export default {
  next() {
    return idMaker.next().value
  },
}
