import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'


function Display() {
  return (
			<Container
				// TODO h-50 doesn't do anything and I'd like to come back and fix that at some point -Scott
				className="d-flex flex-column m-2 p-3 h-100"
        style={{ backgroundColor: "blue" }}
			>
        <Row className="g-5">
          <Col className="bg-light">
            <h2>Available Rooms</h2>
            <br />
            <Row>
              <Col
              color="dark"
              className="bg-light"
              >
              </Col>
            </Row>
            <Button></Button>
          </Col>
          <Col className="bg-light">
            <h2>Title, message</h2>
          </Col>
        </Row>
			</Container>
  )
}

export default Display