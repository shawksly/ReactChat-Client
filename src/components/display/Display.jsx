import { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import RoomsList from "../rooms/roomslist/RoomsList";
import RoomDisplay from "../rooms/roomdisplay/RoomDisplay";

function Display({ token, userId, errorHandler }) {

  const [currentRoom, setCurrentRoom] = useState({});
  const [currentRoomId, setCurrentRoomId] = useState("");
  const [rooms, setRooms] = useState({});
  const [roomUserId, setRoomUserId] = useState("");
  const [roomOwnerStatus, setRoomOwnerstatus] = useState(false);

  // checks if user owns room and disables delete and update if they don't
  useEffect(() => {
    if (userId === roomUserId) {
      setRoomOwnerstatus(true);
    } else {
      setRoomOwnerstatus(false);
    }
  }, [userId, roomUserId]);

  // sets variables for currently displayed room to be used by other components and fetches
  function chooseDisplayedRoom(room) {
    setCurrentRoom(room);
    setCurrentRoomId(room._id);
    setRoomUserId(room.owner);
  };

  async function fetchRooms() {
    // doesn't fetch if no token stored
    if (token)
      try {
        // sends request to server
        let response = await fetch("http://localhost:4000/room/list", {
          headers: new Headers({
            "content-type": "application/json",
            authorization: token,
          }),
          method: "GET",
        });

        let results = await response.json();

        errorHandler(results);

        if (response.status === 200) setRooms(results);

      } catch (error) {
        console.log(error);
      }
  }

  return (
    <Container
      className="mw-100 d-flex flex-column m-2 h-100"
    >
      <Row>
        <Col
          className="bg-light d-flex flex-column align-items-start py-3 ps-3"
          xs="3"
        >
          {/* rooms list */}
          <RoomsList
            token={token}
            chooseDisplayedRoom={chooseDisplayedRoom}
            fetchRooms={fetchRooms}
            rooms={rooms}
            errorHandler={errorHandler}
          />
        </Col>
        <Col className="bg-light py-3 pe-3" xs="9">
          {/* room/messages column */}
          {Object.keys(currentRoom).length <= 0 ? null : (
            <RoomDisplay
              currentRoom={currentRoom}
              setCurrentRoom={setCurrentRoom}
              currentRoomId={currentRoomId}
              setCurrentRoomId={setCurrentRoomId}
              token={token}
              fetchRooms={fetchRooms}
              userId={userId}
              roomOwnerStatus={roomOwnerStatus}
              errorHandler={errorHandler}
              chooseDisplayedRoom={chooseDisplayedRoom}
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
