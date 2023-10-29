import React from "react";
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Input, Label, ModalFooter, Row, Col, Container } from "reactstrap";
import { useState } from "react";

function AddRoom({ token }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [roomName, setRoomname] = useState('');
  const [description, setDescription] = useState('');


  return (
    <>
      <h2>Available Rooms</h2>
      <Row>
        <Col 
          className="container border-dark bg-white"
        >
          {

          }
        </Col>
      </Row>
      <div>
      <Button color="dark" onClick={toggle}>
        Add Room
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>New Rooms</ModalHeader>
        <ModalBody>
          <FormGroup floating>
            <Input
              id="roomNameInput"
              name="roomName"
              placeholder="RoomName"
              type="roomName"
              onChange={(e) => {
                setRoomname(e.target.value);
              }}
            />
            <Label for="roomNameInput">Room Name</Label>
          </FormGroup>

          {/* Description */}
          <FormGroup floating>
            <Input
              id="descriptionInput"
              name="description"
              placeholder="Description"
              type="description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <Label for="descriptionInput">Description</Label>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={postRoom}>
            Add Room
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
    </>
  );

  async function postRoom (e) {
    e.preventDefault();
      console.log("room: ", roomName);
      console.log("description: ", description);
      toggle();

      try {
        let response = await fetch("http://localhost:4000/room/create", {
          headers: new Headers({
            "content-type": "application/json",
            "authorization": token
          }),
          method: "POST",
          body: JSON.stringify({
            title: roomName,
            description: description
          }),
        });

        let results = await response.json();
      console.log("results", results);
  
      } catch (error) {
        console.log(error);
      }
  }
}

export default AddRoom;


// useParams from react-router-dom
// 