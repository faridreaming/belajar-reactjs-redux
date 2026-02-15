import { useDispatch, useSelector } from 'react-redux'
import {
  decrement,
  increment,
  getDoubleCounter,
  getCounter,
} from './counterSlice'

export default function Counter() {
  const counter = useSelector((state) => state.counter)
  const doubleCounter = useSelector(getDoubleCounter)
  const tenfoldCounter = useSelector((state) => getCounter(state, 10))
  const dispatch = useDispatch()

  function handleIncrement() {
    dispatch(increment(2))
  }

  function handleDecrement() {
    dispatch(decrement(2))
  }

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <h1>Double Counter : {doubleCounter}</h1>
      <h1>Tenfold Counter : {tenfoldCounter}</h1>
      <button onClick={handleIncrement}>Increment 2</button>
      <button onClick={handleDecrement}>Decrement 2</button>
    </div>
  )
}
