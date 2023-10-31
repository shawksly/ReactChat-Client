import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Input, Label, ModalFooter } from "reactstrap";
import { useState } from "react";

function Update({ token, currentRoomId, fetchRooms }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [roomName, setRoomname] = useState('');
  const [description, setDescription] = useState('');


  return (
    <>
      <Button color="dark" onClick={toggle}>
        Update
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Room</ModalHeader>
        <ModalBody>
          <FormGroup floating>
            <Input
              id="roomNameInput"
              // TODO active='owner_id' {true?}
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
            Update Room
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
        let response = await fetch(`http://localhost:4000/room/${currentRoomId}`, {
          headers: new Headers({
            "content-type": "application/json",
            "authorization": token
          }),
          method: "PATCH",
          body: JSON.stringify({
            title: roomName,
            description: description
          }),
        });

        let results = await response.json();
        console.log("results", results);
        console.log("token", token);

        fetchRooms();

        // TODO rerender currentroom
  
        } catch (error) {
          console.log(error);
        }
  }
}

export default Update