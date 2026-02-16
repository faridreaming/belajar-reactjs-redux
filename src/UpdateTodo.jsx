import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { getTodo, updateTodo } from './todoListSlice'

export default function UpdateTodo() {
  const params = useParams()
  const todo = useSelector((state) => getTodo(state, Number(params.id)))
  const [name, setName] = useState(todo.name)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleClick() {
    dispatch(updateTodo({ id: todo.id, name }))
    navigate('/todolist')
  }

  return (
    <div>
      <h1>Add Todo</h1>
      <input
        value={name}
        type="text"
        placeholder="Enter todo name..."
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>Update Todo</button>
    </div>
  )
}
