import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Input, Label, ModalFooter } from "reactstrap";
import { useState } from "react";

function UpdateMessage( { fetchMessages, token, messageId, currentRoomId, errorHandler }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [messageContent, setMessageContent] = useState('');

  return (
    <>
      <i className="bi bi-feather m-1" role="button" style={{fontSize: "1rem", color: "black"}} onClick={toggle}></i>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Message</ModalHeader>

        <ModalBody>
          <FormGroup floating>
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
          <Button color="primary" onClick={postMessage}>
            Update Message
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
    );

async function postMessage (e) {
e.preventDefault();
  console.log("message: ", messageContent);
  toggle();

  try {
    let response = await fetch(`http://localhost:4000/message/${currentRoomId}/${messageId}`, {
      headers: new Headers({
        "content-type": "application/json",
        "authorization": token
      }),
      method: "PATCH",
      body: JSON.stringify({
        text: messageContent
      }),
    });

    let results = await response.json();

    errorHandler(results);

    console.log("results", results);
    console.log("token", token);

    if(response.status === 200) {
      fetchMessages();
    }

    } catch (error) {
      console.log(error);
    }
}
}

export default UpdateMessage;

// Check routes for Update and Delete (use new message as test).