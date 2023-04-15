import { useState } from "react";

export function NewTodoForm({onSubmit}) {
    const [newItem, setNewItem] = useState("");
    const [todos, setTodos] = useState([])

    function handleSubmit(e) {
        e.preventDefault()

        if(newItem === "") return
    
        onSubmit(newItem)

        setTodos((currentTodos) => {
            return [...currentTodos, { id: crypto.randomUUID(), title: newItem, completed: false }]
        })
        setNewItem("")
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="form-row">
                <input
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    type="text"
                    id="item"
                    placeholder="Ajouter une tâche"
                />
            </div>
            <button className="btn">Ajouter</button>
        </form>
    )
}