import { useDispatch, useSelector } from "react-redux";
import { destroy,  selectFilteredTodos,  toggle } from "../features/todosSlice";



function TodoList() {
  const dispatch = useDispatch();
  const filteredTodos = useSelector(selectFilteredTodos)
  // const items = useSelector(selectTodos);
  // const activeFilter = useSelector((state) => state.todos.activeFilter);

  

  // filtered = items;
  // if (activeFilter !== "all") {
  //   filtered = items.filter((item) =>
  //     activeFilter === "active"
  //       ? item.completed === false
  //       : item.completed === true
  //   );
  // }

  return (
    <ul className="todo-list">
      {filteredTodos.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              onChange={() => dispatch(toggle({ id: item.id }))}
            />
            <label>{item.title}</label>
            <button
              className="destroy"
              onClick={() => dispatch(destroy(item.id))}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
