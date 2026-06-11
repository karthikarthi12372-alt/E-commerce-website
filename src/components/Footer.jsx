import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center p-2">
          copyright @copy; karthi.in
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer