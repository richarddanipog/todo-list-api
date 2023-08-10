import { Card, Container } from "react-bootstrap";
import { ITodo } from "../../interfaces/todo.interface";
import { CheckSquareFill, XSquareFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { deleteTodoAsync } from "../../utils/api/todosApi";

type TodoProps = {
  todo: ITodo;
};

const Todo = ({ todo }: TodoProps): JSX.Element => {
  const dispatch = useDispatch();
  const convertDateFormat = (date: string): string => {
    const dateObject = new Date(date);

    const longDateFormat: any = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const formattedDate = dateObject.toLocaleDateString(
      undefined,
      longDateFormat
    );

    return formattedDate;
  };

  const handleDelete = (todoId: string) => {
    dispatch(deleteTodoAsync(todoId));
  };

  return (
    <>
      <Card className="mt-3">
        <Card.Body className="d-flex justify-content-between align-items-center">
          <Container>
            <blockquote className="blockquote mb-0">
              <p>{todo.title}</p>
              <footer className="blockquote-footer">
                <cite title="Source Title">{todo.description}</cite>
              </footer>
            </blockquote>
            <span>{convertDateFormat(todo.createdAt)}</span>
          </Container>
          <Container className="task-actions">
            <CheckSquareFill className="done-icon" size={30} />
            <XSquareFill
              className="delete-icon"
              size={30}
              onClick={() => handleDelete(todo._id)}
            />
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default Todo;
