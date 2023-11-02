import React from "react";
import { Row, Col, Form, Input, Button } from "reactstrap";
import Update from "../update/Update";
import Delete from "../delete/Delete";

function RoomDisplay({
  currentRoom,
  setCurrentRoom,
  currentRoomId,
  setCurrentRoomId,
  token,
  fetchRooms,
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
          <h1>{currentRoom.title}</h1>
        {/* <Col className="bg-light d-flex flex-column align-items-center h-100" xs="10" style={{ maxHeight: "75vh" }}>
          <h1>{currentRoom.title}</h1> */}
          {/* // TODO Needs to be replaced by message display component containing the below code */}
          <div className="container border border-dark bg-white m-3 d-flex flex-column align-items-start flex-grow-1 justify-content-end">
          {/* <div className="container border border-dark bg-white m-3 d-flex flex-column align-items-start flex-grow-1 justify-content-end vh-100 mh-100" style={{ overflowY: "scroll", maxHeight: "50vh" }}> */}
            <h6>TEST MESSAGE</h6>
            <h6>TEST MESSAGE</h6>
            <h6>TEST MESSAGE</h6>
            <h6>TEST MESSAGE</h6>
          </div>
          {/* // TODO Needs to be replaced by input component containing the below code */}
          <Form className="d-flex align-self-stretch">
            {/* <FormGroup> */}
              <Input id="exampleText" name="text" type="textarea" rows="2" />
              <Button className="align-self-end ms-3" color="dark" onClick={null}>Send</Button>
            {/* </FormGroup> */}

          </Form>
        </Col>
      </Row>
    </>
  );
}

export default RoomDisplay;
