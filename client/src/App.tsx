import "./App.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import TodoList from "./features/todos/TodoList";
import FormTodo from "./components/FormTodo/FormTodo";

const App = () => {
  return (
    <Container className="App">
      <Row>
        <Col md={4}>
          <FormTodo />
        </Col>
        <Col md={8}>
          <Card className="wrapper-card">
            <Card.Body>
              <TodoList />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
