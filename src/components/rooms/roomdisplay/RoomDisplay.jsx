import { useState } from "react";
import { Row, Col } from "reactstrap";
import Update from "../update/Update";
import Delete from "../delete/Delete";
import MessagesDisplay from "../../messages/messagesdisplay/MessagesDisplay";
import SendMessage from "../../messages/sendmessage/SendMessage";
import { baseUrl } from "../../../Urls";

function RoomDisplay({
  currentRoom,
  setCurrentRoom,
  currentRoomId,
  setCurrentRoomId,
  token,
  fetchRooms,
  userId,
  roomOwnerStatus,
  errorHandler,
  chooseDisplayedRoom
}) {

  const [messages, setMessages] = useState({});

  async function fetchMessages() {
    // doesn't fetch if no token stored
    if (token)
      try {
        // sends request to server
        let response = await fetch(
          `${baseUrl}/message/show/${currentRoomId}`,
          {
            headers: new Headers({
              "content-type": "application/json",
              authorization: token,
            }),
            method: "GET",
          }
        );

        let results = await response.json();

        errorHandler(results);

        if (response.status === 200) {
          setMessages(results);
        } else {
          setMessages({});
        }

      } catch (error) {
        console.log(error);
      }
  }

  return (
    <>
      <Row className="h-100">
        <Col className="bg-light d-flex flex-column align-items-center" xs="2">
          {/* update button */}
          <Update
            currentRoomId={currentRoomId}
            token={token}
            fetchRooms={fetchRooms}
            roomOwnerStatus={roomOwnerStatus}
            errorHandler={errorHandler}
            chooseDisplayedRoom={chooseDisplayedRoom}
          />
          <h3 className="m-4">Description</h3>
          <p className="text-break flex-grow-1 text-capitalize">{currentRoom.description}</p>
          {/* delete button */}
          <Delete
            setCurrentRoom={setCurrentRoom}
            currentRoomId={currentRoomId}
            setCurrentRoomId={setCurrentRoomId}
            token={token}
            fetchRooms={fetchRooms}
            roomOwnerStatus={roomOwnerStatus}
            errorHandler={errorHandler}
          />
        </Col>
        <Col
          className="bg-light d-flex flex-column align-items-center h-100"
          xs="10"
          style={{ maxHeight: "75vh", overflow: "hidden" }}
        >
          <h1 className="text-capitalize">{currentRoom.title}</h1>
          {/* messages display */}
          <MessagesDisplay
            currentRoom={currentRoom}
            currentRoomId={currentRoomId}
            token={token}
            fetchMessages={fetchMessages}
            messages={messages}
            userId={userId}
            errorHandler={errorHandler}
          />
          {/* send message input and button */}
          <SendMessage
            currentRoomId={currentRoomId}
            token={token}
            fetchMessages={fetchMessages}
            errorHandler={errorHandler}
          />
        </Col>
      </Row>
    </>
  );
}

export default RoomDisplay;
