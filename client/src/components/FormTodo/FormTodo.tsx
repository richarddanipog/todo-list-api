import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { createTodoAsync } from "../../utils/api/todosApi";
import { Button, Container } from "react-bootstrap";

const FormTodo = (): JSX.Element => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const dispatch = useDispatch();

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const addTodo = () => {
    const result = {
      title,
      description,
    };

    dispatch(createTodoAsync(result));
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
