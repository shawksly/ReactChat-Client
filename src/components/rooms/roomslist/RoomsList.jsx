import { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import AddRoom from "../addroom/AddRoom"


function RoomsList({ token, chooseDisplayedRoom, currentRoom, currentRoomId, fetchRooms, rooms, errorHandler }) {
  
  // https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks
  useEffect(() => {
    const roomInterval = setInterval(() => {
      fetchRooms();
    }, 30000);
    return () => clearInterval(roomInterval);
  }, []);

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
                  <h4 className="text-break text-capitalize">{room.title}</h4>
                </button>
              )
            })
          }
        </Col>
      </Row>
      <AddRoom token={token} fetchRooms={fetchRooms} errorHandler={errorHandler} />
    </>
  );
}

export default RoomsList