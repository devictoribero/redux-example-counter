import React from 'react'
import {Counter} from '../components/Counter'
import {connect} from 'react-redux'
import {
  incrementCounter,
  decrementCounter,
  resetCounter
} from '../actions'

function MyComponent({
  onIncrement,
  onDecrement,
  onReset,
  value
}) {
  return(
    <Counter
      value={value}
      onDecrement={onDecrement}
      onIncrement={onIncrement}
      onReset={onReset}/>
  )
}

const mapStateToProps = state => ({
  value: state
})
const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(incrementCounter()),
  onDecrement: () => dispatch(decrementCounter()),
  onReset: () => dispatch(resetCounter())
})

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(MyComponent)
export {CounterContainer}