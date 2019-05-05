import React from 'react'

function Counter({value, onDecrement, onIncrement, onReset}) {
  return(
    <React.Fragment>
      <button onClick={onDecrement}>-</button>
      <span style={{margin: '0 10px'}}>{value}</span>
      <button onClick={onIncrement}>+</button>
      <button onClick={onReset} style={{marginLeft: '20px'}}>
        Reset value
      </button>
    </React.Fragment>
  )
}

export {Counter}