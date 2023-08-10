import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { createTodoAsync } from "../../utils/api/todosApi";
import { Button, Container } from "react-bootstrap";

const FormTodo = (): JSX.Element => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
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

  const addTodo = (): void => {
    const newTodo = {
      title,
      description,
    };

    dispatch(createTodoAsync(newTodo));
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <Container className="add-task">
        <input
          onChange={onChangeTitle}
          className="add-task-input"
          placeholder="Add New Task..."
          value={title}
        />
        <Button onClick={addTodo}>Add</Button>
      </Container>
      {title && (
        // Need to Style this element...
        <textarea
          onChange={onChangeDescription}
          value={description}
          className="mt-3"
          cols={40}
          rows={4}
          placeholder="Add Description (optional)..."
        />
      )}
    </>
  );
};

export default FormTodo;
