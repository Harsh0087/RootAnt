import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Container, Row, Col, Button, InputGroup, FormControl, ListGroup } from 'react-bootstrap';
function App() {
  return (
    <Container>
      <Row className="text-center mb-4" style={{ fontSize: "3rem", fontWeight: "bolder" }}>
        CRUD app
      </Row>
    </Container>
  );
}

export default App;
