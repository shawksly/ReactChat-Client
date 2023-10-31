import React from 'react'
import { Button} from "reactstrap";
import { useState } from "react";

function Delete({ token, currentRoomId, fetchRooms }) {
  
  const [roomName, setRoomname] = useState('');
  const [description, setDescription] = useState('');


  return (
    <>
      <Button color="dark" onClick={deleteRoom}>
        Delete {/* TODO -- track owner_id */}
      </Button>
      
    </>
  );

  async function deleteRoom (e) {
    e.preventDefault();
      console.log("room: ", roomName);
      console.log("description: ", description);
      ;

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

        fetchRooms();
  
      } catch (error) {
        console.log(error);
      }
  }
}
//temp comment
export default Delete;