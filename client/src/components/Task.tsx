import { Container } from "react-bootstrap";
import { ITask } from "../interfaces/task.interface";

type TaskProps = {
  task: ITask;
};

const Task = ({ task }: TaskProps): JSX.Element => {
  return (
    <Container>
      <span key={task._id}>{JSON.stringify(task)}</span>
    </Container>
  );
};

export default Task;
