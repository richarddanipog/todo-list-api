import { Card, Container } from "react-bootstrap";
import { ITask } from "../interfaces/task.interface";
import { useEffect } from "react";

type TaskProps = {
  task: ITask;
};

const Task = ({ task }: TaskProps): JSX.Element => {
  return (
    <>
      <Card className="mt-3">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>{task.title}</p>
            <footer className="blockquote-footer">
              <cite title="Source Title">{task.description}</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </>
  );
};

export default Task;
