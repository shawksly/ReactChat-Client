import React from "react";
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Input, Label, ModalFooter } from "reactstrap";
import { useState } from "react";

function AddRoom({ token, fetchRooms }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [roomName, setRoomname] = useState('');
  const [description, setDescription] = useState('');


  return (
    <>
      <Button color="dark" onClick={toggle} className="mb-3">
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
        fetchRooms();
      } catch (error) {
        console.log(error);
      }
  }
}

export default AddRoom;


// useParams from react-router-dom
// 

// Notes from Conor about messages:
// passed to message component:
// Message
// fetchmesssages
// token

// in message update, use messages.id
// let id = message id
// url+ id