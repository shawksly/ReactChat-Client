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

function UpdateMessage({
  fetchMessages,
  token,
  messageId,
  currentRoomId,
  errorHandler,
}) {
  
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [messageContent, setMessageContent] = useState("");

  async function postMessage(e) {
    e.preventDefault();
    toggle();

    try {
      // sends request to server
      let response = await fetch(
        `${process.env.BACKEND_URL}message/${currentRoomId}/${messageId}`,
        {
          headers: new Headers({
            "content-type": "application/json",
            authorization: token,
          }),
          method: "PATCH",
          body: JSON.stringify({
            text: messageContent,
          }),
        }
      );

      let results = await response.json();

      errorHandler(results);

      if (response.status === 200) {
        fetchMessages();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {/* edit message icon toggles modal */}
      <i
        className="bi bi-feather m-1"
        role="button"
        style={{ fontSize: "1rem", color: "black" }}
        onClick={toggle}
      ></i>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Message</ModalHeader>

        <ModalBody>
          <FormGroup floating>
            {/* message text */}
            <Input
              id="messageInput"
              name="messageContent"
              placeholder="Message Content"
              type="text"
              onChange={(e) => {
                setMessageContent(e.target.value);
              }}
            />
            <Label for="messageInput">Message Name</Label>
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          {/* modal submit and close buttons */}
          <Button color="primary" onClick={postMessage}>
            Update Message
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );

}

export default UpdateMessage;