import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Button, Card, Container } from "react-bootstrap";
import Task from "./components/Task";
import { ITask } from "./interfaces/task.interface";
import { FileTextFill } from "react-bootstrap-icons";

const App = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/todos")
      .then(({ data }) => setTasks(data));
  }, []);

  return (
    <Container className="App">
      <Card className="wrapper-card">
        <Card.Body>
          <h1>
            <FileTextFill style={{ fill: "orange" }} size={35} />
            My ToDo
          </h1>
          <Container className="add-task">
            <input className="add-task-input" placeholder="Add New Task..." />
            <Button>Add</Button>
          </Container>
          <hr />

          <Container>
            <h6>Total ToDo's - ( {tasks.length} )</h6>
          </Container>
          <Container className="task-list p-0">
            {tasks.map((task) => (
              <Container key={task._id} className="task p-0">
                <Task task={task} />
              </Container>
            ))}
          </Container>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default App;
