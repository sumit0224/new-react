import React, { useReducer } from 'react'

function red(state, action) {
    
    switch (action.type) {
        case "plus":
            return { count: state.count + 1 };
        case "minus":
            return { count: state.count - 1 };
        case "reset":
            return { count: 0 }
    }
}
const Counter = () => {
    const a = { count: 0 }

    const [state, dispatch] = useReducer(red, a)

    return (
        <div>
            <h1>counter: {state.count}</h1>
            <button onClick={() => dispatch({ type: 'plus' })}>plus</button>
            <button onClick={() => dispatch({ type: 'minus' })}>minus</button>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
        </div>
    )
}

export default Counter
