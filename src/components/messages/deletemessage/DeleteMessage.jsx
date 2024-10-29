import React from "react";
import { baseUrl } from "../../../Urls";

function DeleteMessage({ fetchMessages, token, messageId, errorHandler }) {

  return (
    // delete message icon
    <i
      className="bi bi-twitter-x m-1"
      role="button"
      style={{ fontSize: "1rem", color: "black" }}
      onClick={deleteMessage}
    ></i>
  );

  async function deleteMessage(e) {
    e.preventDefault();

    try {
      // sends request to server
      let response = await fetch(`${baseUrl}/message/${messageId}`, {
        headers: new Headers({
          "content-type": "application/json",
          authorization: token,
        }),
        method: "DELETE",
      });

      let results = await response.json();

      errorHandler(results);

      if (response.status === 200) {
        fetchMessages();
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default DeleteMessage;
