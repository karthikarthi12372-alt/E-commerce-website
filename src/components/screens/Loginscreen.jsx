import React from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

function LoginScreen() {
  return (
    <Container className="mt-5">
      <Card className="p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <h3 className="text-center mb-3">Login</h3>

        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>

          <Button className="w-100" type="submit">
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default LoginScreen;