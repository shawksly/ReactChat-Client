import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import RoomsList from "../rooms/roomslist/RoomsList";
import RoomDisplay from "../rooms/roomdisplay/RoomDisplay";

function Display({ token }) {
  const [currentRoom, setCurrentRoom] = useState({});
  const [currentRoomId, setCurrentRoomId] = useState("");
  const [rooms, setRooms] = useState([]); 
  const [messages, setMessages] = useState([]);

  function chooseDisplayedRoom(room) {
    setCurrentRoom(room);
    setCurrentRoomId(room._id);
  }

  async function fetchMessages() {
    if (token)
      try {
        let response = await fetch(`http://localhost:4000/message/show/${currentRoomId}`, {
          headers: new Headers({
            "content-type": "application/json",
            authorization: token,
          }),
          method: "GET",
        });
        
        let results = await response.json();
        console.log(results);
        console.log(token);

        // TODO make this do something if successful
        if (response.status === 200) setMessages(results);
      } catch (error) {
        console.log(error);
      }
  } 

  async function fetchRooms() {
    if (token)
      try {
        let response = await fetch("http://localhost:4000/room/list", {
          headers: new Headers({
            "content-type": "application/json",
            authorization: token,
          }),
          method: "GET",
        });

        let results = await response.json();
        console.log(results);
        console.log(token);

        // TODO make this do something if successful
        if (response.status === 200) setRooms(results);
      } catch (error) {
        console.log(error);
      }
  }

  return (
    <Container
      // TODO h-50 doesn't do anything and I'd like to come back and fix that at some point -Scott
      className="mw-100 d-flex flex-column m-2 h-100"
    >
      <Row>
        <Col className="bg-light d-flex flex-column align-items-start py-3 ps-3" xs="3">
          {/* Add rooms column */}
          <RoomsList
            token={token}
            chooseDisplayedRoom={chooseDisplayedRoom}
            fetchRooms={fetchRooms}
            currentRoom={currentRoom}
            currentRoomId={currentRoomId}
            rooms={rooms}
          />
        </Col>
        <Col className="bg-light py-3 pe-3" xs="9">
          {/* Display room column */}
          {!currentRoom ? null : (
            <RoomDisplay
              currentRoom={currentRoom}
              setCurrentRoom={setCurrentRoom}
              currentRoomId={currentRoomId}
              setCurrentRoomId={setCurrentRoomId}
              token={token}
              fetchRooms={fetchRooms}
              fetchMessages={fetchMessages}
              messages={messages}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Display;

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