// types
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

// Action creators
export const incrementCounter = () => ({
  type: INCREMENT,
})

export const decrementCounter = () => ({
  type: DECREMENT,
})

export const resetCounter = () => ({
  type: RESET,
})