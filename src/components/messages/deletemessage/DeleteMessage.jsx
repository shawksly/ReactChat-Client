import React from 'react';

function DeleteMessage ({ fetchMessages, token, messageId, errorHandler }) {

  return (
      <i className="bi bi-twitter-x m-1" role="button" style={{fontSize: "1rem", color: "black"}} onClick={deleteMessage}></i>
  )

async function deleteMessage (e) {
  e.preventDefault();
    console.log("deleting message");

    try {
      let response = await fetch(`http://localhost:4000/message/${messageId}`, {
        headers: new Headers({
          "content-type": "application/json",
          "authorization": token
        }),
        method: "DELETE"
      });
      
      let results = await response.json();
      console.log("results", results);

      errorHandler(results);

      if(response.status === 200) {
        fetchMessages();
      }
      
    } catch (error) {
      console.log(error);
    }
  }
}

export default DeleteMessage;