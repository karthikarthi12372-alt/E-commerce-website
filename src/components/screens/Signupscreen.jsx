import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function Signupscreen() {
  return (
    <>
      <Container>
        <Row>
          <Col md="3"></Col>
          <Col md="6">
            <Form>
              <br />

              <h1 className="text-center">SignUp here</h1>

              <Form.Group controlId="firstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your First Name" />
              </Form.Group>

              <Form.Group controlId="lastname" className="mt-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your  LastName" />
              </Form.Group>
              <Form.Group controlId="email" className="mt-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your Email" />
              </Form.Group>

              <Form.Group controlId="pass1" className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your Password"
                />
              </Form.Group>

              <Form.Group controlId="password" className="mt-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>

              <Form.Group controlId="number" className="mt-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="Enter your Number " />
              </Form.Group>

              <Form.Select className="mt-3" aria-label="selectgender">
                <option>Select Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
              </Form.Select>
                    
        <div key={`inline-radio`} className="mb-3">
          <Form.Check
            inline
            label="student"
            name="group1"
            type='radio'
            id={`inline-radio-1`}
          />
          <Form.Check
            inline
            label="profesional"
            name="group1"
            type='radio'
            id={`inline-radio-2`}
          />
         
        </div>
  

              <Form.Group className="mt-3">
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                />
              </Form.Group>
              <Button className="mt-3" variant="success">Register </Button>

            
            </Form>
          </Col>
          <Col md="3"></Col>
        </Row>
      </Container>
    </>
  );
}

export default Signupscreen;
