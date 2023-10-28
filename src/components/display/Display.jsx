import React from 'react'
import { Container, Row, Col } from 'reactstrap'


function Display() {
  return (
			<Container
				// TODO h-50 doesn't do anything and I'd like to come back and fix that at some point -Scott
				className="d-flex flex-column m-2 h-100"
			>
        <Row className="g-5">
          {/* Add rooms column */}
          <Col className="bg-light">
            {/* //?ROOM LIST COMPONENT */}
            {/* <h2>Available Rooms</h2>
            <br />
            <Row>
              <Col
              color="dark"
              className="bg-light"
              >
              </Col>
            </Row>
            <Button></Button> */}
          </Col>
          {/* Display room column */}
          <Col className="bg-light">
            {/* //?ROOM DISPLAY COMPONENT */}
            {/* <h2>Title, message</h2> */}
          </Col>
        </Row>
			</Container>
  )
}

export default Display

/* 
map

{
  map
  return(
    <jsx
    (useState with setRoom or something)
    >
  )
}
*/