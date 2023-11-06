import React from 'react'
import { Button} from "reactstrap";
import { useState } from "react";

function Delete({ token, setCurrentRoom, currentRoomId, setCurrentRoomId, fetchRooms, roomOwnerStatus, errorHandler }) {

  return (
    <>
      <Button color="dark" disabled={!roomOwnerStatus} onClick={deleteRoom}>
        Delete
      </Button>
      
    </>
  );

  async function deleteRoom (e) {
    e.preventDefault();
      console.log("deleting room");

      try {
        let response = await fetch(`http://localhost:4000/room/${currentRoomId}`, {
          headers: new Headers({
            "content-type": "application/json",
            "authorization": token
          }),
          method: "Delete"
        });

        let results = await response.json();
        console.log("results", results);

        errorHandler(results);

        if(response.status === 200) {
          fetchRooms();
          setCurrentRoom({});
          setCurrentRoomId(null);
        }
  
      } catch (error) {
        console.log(error);
      }
  }
}
export default Delete;