import React from "react";
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
  fetchMessages
}) {
  return (
    <>
      <Row className="h-100">
        <Col className="bg-light d-flex flex-column align-items-center" xs="2">
          <Update
            setCurrentRoom={setCurrentRoom}
            currentRoomId={currentRoomId}
            token={token}
            fetchRooms={fetchRooms}
          />
          <h3 className="m-4">Description</h3>
          <p className="text-break flex-grow-1">{currentRoom.description}</p>
          <Delete
            setCurrentRoom={setCurrentRoom}
            currentRoomId={currentRoomId}
            setCurrentRoomId={setCurrentRoomId}
            token={token}
            fetchRooms={fetchRooms}
          />
        </Col>
        {/* https://stackoverflow.com/questions/21515042/scrolling-a-flexbox-with-overflowing-content */}
        <Col className="bg-light d-flex flex-column align-items-center h-100" xs="10">
          <h1 className="text-capitalize">{currentRoom.title}</h1>
        {/* <Col className="bg-light d-flex flex-column align-items-center h-100" xs="10" style={{ maxHeight: "75vh" }}>
          <h1>{currentRoom.title}</h1> */}

          
          <MessagesDisplay currentRoom={currentRoom} currentRoomId={currentRoomId} token={token}/>

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
