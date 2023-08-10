import "./App.css";
import { Card, Container } from "react-bootstrap";
import { FileTextFill } from "react-bootstrap-icons";
import TodoList from "./features/todos/TodoList";
import FormTodo from "./components/FormTodo/FormTodo";

const App = () => {
  return (
    <Container className="App">
      <Card className="wrapper-card">
        <Card.Body>
          <h1>
            <FileTextFill style={{ fill: "orange" }} size={35} />
            My ToDo
          </h1>
          <FormTodo />
          <hr />
          <TodoList />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default App;
