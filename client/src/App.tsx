import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Button, Card, Container } from "react-bootstrap";
import Task from "./components/Task";

const App = (): JSX.Element => {
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/todos")
      .then((data) => setTasks(data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container className="App">
      <Card>
        <Card.Body>
          <h1>My ToDo</h1>
          <Container className="add-task">
            <input className="add-task-input" placeholder="Add New Task..." />
            <Button>Add</Button>
          </Container>
          <hr />
          <Container>
            {tasks.map((task: any) => (
              <Task task={task} />
            ))}
          </Container>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default App;
