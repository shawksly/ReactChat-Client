import { useState } from "react";
import { Row, Col, Form, Input, Button } from "reactstrap";
import Update from "../update/Update";
import Delete from "../delete/Delete";
import MessagesDisplay from "../../messages/messagesdisplay/MessagesDisplay";
import SendMessage from "../../messages/sendmessage/SendMessage";

function RoomDisplay({
  currentRoom,
  setCurrentRoom,
  currentRoomId,
  setCurrentRoomId,
  token,
  fetchRooms,
  fetchMessages,
  userId,
  roomUserId,
  roomOwnerStatus
}) {

  const [messages, setMessages] = useState({});

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
        if (response.status === 200) {
          setMessages(results);
        } else {
          setMessages({})
        }

      } catch (error) {
        console.log(error);
      }
  }

  return (
    <>
      <Row className="h-100">
        <Col className="bg-light d-flex flex-column align-items-center" xs="2">
          <Update
            setCurrentRoom={setCurrentRoom}
            currentRoomId={currentRoomId}
            token={token}
            fetchRooms={fetchRooms}
            roomOwnerStatus={roomOwnerStatus}
          />
          <h3 className="m-4">Description</h3>
          <p className="text-break flex-grow-1">{currentRoom.description}</p>
          <Delete
            setCurrentRoom={setCurrentRoom}
            currentRoomId={currentRoomId}
            setCurrentRoomId={setCurrentRoomId}
            token={token}
            fetchRooms={fetchRooms}
            roomOwnerStatus={roomOwnerStatus}
          />
        </Col>
        {/* https://stackoverflow.com/questions/21515042/scrolling-a-flexbox-with-overflowing-content */}
        {/* <Col className="bg-light d-flex flex-column align-items-center h-100" xs="10">
          <h1 className="text-capitalize">{currentRoom.title}</h1> */}
        <Col className="bg-light d-flex flex-column align-items-center h-100" xs="10" style={{ maxHeight: "75vh", overflow: "hidden" }}>
          <h1>{currentRoom.title}</h1>

          
          <MessagesDisplay currentRoom={currentRoom} currentRoomId={currentRoomId} token={token} fetchMessages={fetchMessages} messages={messages} userId={userId} />

          {/* // TODO Needs to be replaced by input component containing the below code */}
          <SendMessage
          currentRoomId={currentRoomId}
          token={token}
          fetchMessages={fetchMessages}
          />

          
        </Col>
      </Row>
    </>
  );
}

export default RoomDisplay;
