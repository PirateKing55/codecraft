import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useStore from './zustand-store/store'
import Todo from './components/Todo'
import toast, { Toaster } from 'react-hot-toast';

function App() {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const getTodos = useStore((state) => state.getTodos)
  const todos = useStore((state) => state.todos)
  const addTodoToStore = useStore((state) => state.addTodoToStore)

  console.log(todos)

  const addTodo = async () => {
    const newTodo = {
      title: title,
      description: description
    }
    const toastId = toast.loading("Adding Todo...")
    const response = await addTodoToStore(newTodo)
    toast.success("Added Todo", { id: toastId })
    setTitle("")
    setDescription("")
    console.log(response.data)

  }

  useEffect(() => {
    const fetchData = async () => {
      const toastId = toast.loading("Getting todos...")
      await getTodos()
      toast.success("Todos fetched", { id: toastId })
    }

    fetchData()

  }, [])

  return (
    <div>
      <input type='text' value={title} placeholder='Enter title' onChange={(e) => setTitle(e.target.value)} />
      <input type='text' value={description} placeholder='Enter Description' onChange={(e) => setDescription(e.target.value)} />
      <button onClick={addTodo} >Add toto</button>
      {todos.todos && <div>
        {todos.todos.map((todo) => (
          <Todo key={todo._id} todo={todo} />
        ))}
      </div>}
      <Toaster />
    </div>
  )
}

export default App
