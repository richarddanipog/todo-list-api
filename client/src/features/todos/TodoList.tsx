import { Container } from "react-bootstrap";
import Todo from "../../components/Todo/Todo";
import { ITodo } from "../../interfaces/todo.interface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useEffect } from "react";
import { fetchTodosAsync } from "../../utils/api/todosApi";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos: ITodo[] = useSelector((state: RootState) => state.todos.todos);

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, [dispatch]);

  return (
    <>
      <Container className="task-list p-0 h-100">
        {todos.map((todo: ITodo) => (
          <Container key={todo._id} className="task p-0">
            <Todo todo={todo} />
          </Container>
        ))}
      </Container>
    </>
  );
};

export default TodoList;
