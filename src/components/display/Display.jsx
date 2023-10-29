import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import RoomsList from '../rooms/roomslist/RoomsList'
import Update from '../rooms/update/Update'
import Delete from '../rooms/delete/Delete'

function Display({token}) {
  return (
			<Container
				// TODO h-50 doesn't do anything and I'd like to come back and fix that at some point -Scott
				className="d-flex flex-column m-2 h-100"
			>
        <Row className="g-5">
          <Col
          className="bg-light"
          xs="3"
          >

            {/* Add rooms column */}
            <RoomsList token = { token }/>
          </Col>
          <Col
          className="bg-light"
          xs="9"
          >

            {/* Display room column */}
            {/* //? ROOM DISPLAY COMPONENT */}
            <Update/>
            <br/>
            <Delete/>
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