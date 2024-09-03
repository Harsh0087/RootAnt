import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import {Container,Row,Col,Button,InputGroup,FormControl,ListGroup} from 'react-bootstrap';
function App() {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState("");
  const addItem = () => {
    console.log("hello")
    if (userInput) { 
      setList([...list, { id: Math.random(), value: userInput }]);
      setUserInput("")
    }
  }
  const deleteItem = (key) => {
     const updatedList = list.filter((item) => item.id !== key);
    setList(updatedList);
  }
  const editItem = (value) => {
    
  }
  return (
    <Container>
      <Row className="text-center mb-4" style={{ fontSize: "3rem", fontWeight: "bolder" }}>
        TODO APP
      </Row>
      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="add item..."
              size="lg"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            
              <Button variant="dark" onClick={addItem}>ADD</Button>
          </InputGroup>
        </Col>
      </Row>
            <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <ListGroup>
            {list.map((item, index) => (
              <ListGroup.Item
                key={item.id}
                variant="dark"
                action
                className="d-flex justify-content-between"
              >
                <span>
                  
                {index+1}
                </span>
                {item.value}
                <span>
                  <Button style={{ marginRight: "10px", variant: "dark" }} onClick={()=>editItem(item.value)} > Edit</Button>
                </span>
                <span>
                  <Button style={{ marginRight: "10px", variant: "dark" }} onClick={()=>deleteItem(item.id)} > Delete</Button>
                </span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
           
      </Container>
      );
}

export default App;
