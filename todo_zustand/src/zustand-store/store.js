import { create } from 'zustand'
import axios from 'axios'

const BASE_URL = "http://localhost:3000"

const useStore = create((set) => ({
    todos: [],
    getTodos: async () => {
        try {
            const response = await axios.get(`${BASE_URL}/todos`)
            set({ todos: response.data })
        } catch (error) {
            console.log("Error fetching todos:", error);
            throw new Error("Failed to load todos")
        }
    },
    addTodoToStore: async (todo) => {
        try {
            const response = await axios.post(`${BASE_URL}/todo`, todo)
            await useStore.getState().getTodos()
            return response.data
        } catch (error) {
            console.log("Error while adding todo:", error)
            throw new Error("Failed to add todo")
        }
    }
}))

export default useStore