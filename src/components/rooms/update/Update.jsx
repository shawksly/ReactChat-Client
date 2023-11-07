import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Input,
  Label,
  ModalFooter,
} from "reactstrap";
import { useState } from "react";

function Update({
  currentRoomId,
  token,
  fetchRooms,
  roomOwnerStatus,
  errorHandler,
  chooseDisplayedRoom
}) {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [roomName, setRoomname] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      {/* button toggles modal */}
      <Button color="dark" disabled={!roomOwnerStatus} onClick={toggle}>
        Update
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Room</ModalHeader>
        <ModalBody>
          {/* room name */}
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
          {/* modal submit and cancel buttons */}
          <Button color="primary" onClick={postRoom}>
            Update Room
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );

  async function postRoom(e) {
    e.preventDefault();
    toggle();

    // adds individual entries to object, in case one is blank. This object is then sent as the body, stringified.
    const body = {};
    if (roomName.length > 0) body.title = roomName;
    if (description.length > 0) body.description = description;

    try {
      // sends request to server
      let response = await fetch(
        `http://localhost:4000/room/${currentRoomId}`,
        {
          headers: new Headers({
            "content-type": "application/json",
            authorization: token,
          }),
          method: "PATCH",
          body: JSON.stringify(body),
        }
      );

      let results = await response.json();

      errorHandler(results);
      chooseDisplayedRoom(results.updated);

      // set back to zero in case a field is left blank and the useState retains the old value.
      setRoomname("");
      setDescription("");

      if (response.status === 200) {
        fetchRooms();
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default Update;
