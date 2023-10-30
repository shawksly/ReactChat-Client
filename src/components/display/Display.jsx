import { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import RoomsList from '../rooms/roomslist/RoomsList'
import Update from '../rooms/update/Update'
import Delete from '../rooms/delete/Delete'

function Display({token}) {

  const [currentRoom, setCurrentRoom] = useState('');
  const [currentRoomId, setCurrentRoomId] = useState('');

  function chooseDisplayedRoom(room) {
    setCurrentRoom(room);
    setCurrentRoomId(room._id);
  };

  return (
			<Container
				// TODO h-50 doesn't do anything and I'd like to come back and fix that at some point -Scott
				className="d-flex flex-column m-2 h-100"
			>
        <Row className="g-5">
          <Col
          className="bg-light d-flex flex-column align-items-start"
          xs="3"
          >

            {/* Add rooms column */}
            <RoomsList token={ token } chooseDisplayedRoom={ chooseDisplayedRoom } currentRoom={ currentRoom } currentRoomId={ currentRoomId } />
          </Col>
          <Col
          className="bg-light"
          xs="9"
          >

            {/* Display room column */}
            {
              !currentRoom
              ?
              null
              :
              <div>
                {/* //? replace this div and components with ROOM DISPLAY COMPONENT */}
                <h2>{currentRoom.title}</h2>
                <Update currentRoomId={ currentRoomId } />
                <br/>
                <Delete currentRoomId={ currentRoomId } />
              </div>
            }
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