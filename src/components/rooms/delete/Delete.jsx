import React from "react";
import { Button } from "reactstrap";

function Delete({
  setCurrentRoom,
  currentRoomId,
  setCurrentRoomId,
  token,
  fetchRooms,
  roomOwnerStatus,
  errorHandler,
}) {

  async function deleteRoom(e) {
    e.preventDefault();
    console.log("deleting room");

    try {
      // sends request to server
      let response = await fetch(
        `http://localhost:4000/room/${currentRoomId}`,
        {
          headers: new Headers({
            "content-type": "application/json",
            authorization: token,
          }),
          method: "Delete",
        }
      );

      let results = await response.json();
      console.log("results", results);

      errorHandler(results);

      // fetches rooms and sets current room to empty
      if (response.status === 200) {
        fetchRooms();
        setCurrentRoom({});
        setCurrentRoomId(null);
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {/* delete button, disabled depending on status */}
      <Button color="dark" disabled={!roomOwnerStatus} onClick={deleteRoom}>
        Delete
      </Button>
    </>
  );

}
export default Delete;
