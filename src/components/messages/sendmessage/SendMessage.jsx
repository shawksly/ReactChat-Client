import React from "react";
import { Button, Form, Input } from "reactstrap";
import { useState } from "react";
import { baseUrl } from "../../../Urls";

function SendMessage({ currentRoomId, token, fetchMessages, errorHandler }) {
  
  const [message, setMessage] = useState("");

  return (
    <Form className="d-flex align-self-stretch">
      {/* message input */}
      <Input
        id="text"
        name="text"
        type="textarea"
        rows="2"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      {/* message send button */}
      <Button
        className="align-self-end ms-3"
        color="dark"
        onClick={postMessage}
      >
        Send
      </Button>
    </Form>
  );

  async function postMessage(e) {
    e.preventDefault();

    try {
      // sends request to server
      let response = await fetch(
        `${baseUrl}/message/create/${currentRoomId}`,
        {
          headers: new Headers({
            "content-type": "application/json",
            authorization: token,
          }),
          method: "POST",
          body: JSON.stringify({
            text: message,
          }),
        }
      );
      let results = await response.json();

      errorHandler(results);

      fetchMessages();

      // sets input field back to empty
      document.getElementById("text").value = "";

    } catch (error) {
      console.log(error);
    }
  }
}

export default SendMessage;
