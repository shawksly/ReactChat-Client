import { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import AddRoom from "../addroom/AddRoom"


function RoomsList({ token, chooseDisplayedRoom, currentRoom, currentRoomId, fetchRooms, rooms }) {
  
  useEffect(() => {
    fetchRooms();
    
  }, [token])
  
  return (
    <>
      <h2>Available Rooms</h2>
      <Row>
        <Col 
          className="container border border-dark bg-white m-3 d-flex flex-column align-items-start"
          >
          {
            rooms.getAllRooms?.map((room) => {
              return (
                <button
                  key={room._id}
                  style={{backgroundColor: "inherit", border: "none", font: "inherit"}}
                  // TODO there has to be an eaiser way with useState
                  onClick={() => {chooseDisplayedRoom(room)}}
                >
                  <h4 className="text-break">{room.title}</h4>
                </button>
              )
            })
          }
        </Col>
      </Row>
      <AddRoom token={token} fetchRooms={fetchRooms} />
    </>
  );
}

export default RoomsList