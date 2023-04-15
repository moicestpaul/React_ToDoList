export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
          id={"checkbox-"+id}
        />
        <label htmlFor={"checkbox-"+id}></label>
        <span>{title}</span>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger"></button>
    </li>
  )
}