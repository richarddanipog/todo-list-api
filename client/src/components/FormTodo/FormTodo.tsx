import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodoAsync } from "../../utils/api/todosApi";
import { Button, Card, FloatingLabel, Form } from "react-bootstrap";
import { RootState } from "../../app/store";

const FormTodo = (): JSX.Element => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const totalTodos: number = useSelector(
    (state: RootState) => state.todos.totalTodos
  );

  const dispatch = useDispatch();

  const onChangeTitle = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setTitle(value);
  };

  const onChangeDescription = ({
    target: { value },
  }: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const newTodo = {
      title,
      description,
    };

    if (!description) {
      newTodo.description = "No description.";
    }

    dispatch(createTodoAsync(newTodo));
    setTitle("");
    setDescription("");
  };

  return (
    <Card>
      <Card.Body>
        <Form className="form-todo" onSubmit={handleSubmit}>
          <h2>Todo List</h2>
          <div className="mb-3">Total ({totalTodos})</div>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Title"
            className="mb-3"
          >
            <Form.Control
              onChange={onChangeTitle}
              value={title}
              as="textarea"
              placeholder="Leave a comment here"
              required
            />
          </FloatingLabel>

          <FloatingLabel
            className="mb-3"
            controlId="floatingTextarea2"
            label="Description (optional)"
          >
            <Form.Control
              onChange={onChangeDescription}
              value={description}
              as="textarea"
              placeholder="Add Description (optional)..."
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <Button type="submit">Add</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default FormTodo;
