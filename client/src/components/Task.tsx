import { Card, Container } from "react-bootstrap";
import { ITask } from "../interfaces/task.interface";
import { CheckSquareFill, XSquareFill } from "react-bootstrap-icons";

type TaskProps = {
  task: ITask;
};

const Task = ({ task }: TaskProps): JSX.Element => {
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

  return (
    <>
      <Card className="mt-3">
        <Card.Body className="d-flex justify-content-between align-items-center">
          <Container>
            <blockquote className="blockquote mb-0">
              <p>{task.title}</p>
              <footer className="blockquote-footer">
                <cite title="Source Title">{task.description}</cite>
              </footer>
            </blockquote>
            <span>{convertDateFormat(task.createdAt)}</span>
          </Container>
          <Container className="task-actions">
            <CheckSquareFill className="done-icon" size={30} />
            <XSquareFill className="delete-icon" size={30} />
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default Task;
