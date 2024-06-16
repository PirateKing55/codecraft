document.getElementById("todoForm").addEventListener("submit", handleSubmit)
const todoListDiv = document.getElementById("todos")

renderTodos()

async function handleSubmit(e) {
    e.preventDefault()
    const title = document.getElementById("title").value
    const task = document.getElementById("task").value
    document.getElementById("todoForm").reset()

    try {
        const res = await fetch("https://backend-p4xc.onrender.com/todo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                description: task,
            }),
        });

        const json = await res.json();

        alert(json.msg)

        renderTodos()
    } catch (error) {
        alert("something went wrong")
    }
}

async function renderTodos() {
    let todos = []
    try {
        const res = await fetch("https://backend-p4xc.onrender.com/todos");
        const json = await res.json();
        todos = json.todos
    } catch (error) {
        todoListDiv.innerHTML = "<h3>Failed to load todos</h3>"
        return
    }

    if (!todos.length) {
        todoListDiv.innerHTML = "<h3>No todos available</h3>"
        return
    }

    todoListDiv.innerHTML = ""
    todos.forEach(function (todo) {
        const todoDiv = document.createElement("li")
        todoDiv.innerHTML = `
        <h3>${todo.title}</h3>
        <p>${todo.description}</p>
        `;
        todoListDiv.appendChild(todoDiv)
    })
}

