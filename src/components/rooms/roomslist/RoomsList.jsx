import { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import AddRoom from "../addroom/AddRoom"


function RoomsList({ token, chooseDisplayedRoom, currentRoom, currentRoomId, fetchRooms, rooms }) {
  
  useEffect(() => {
    fetchRooms();
    
  }, [token,])

    // TODO why this no work?
      // useEffect(function (token) {
  
    //   fetch("http://localhost:4000/room/list", {
    //     headers: new Headers({
    //       'content-type': 'application/json',
    //       'authorization': token
    //     }),
    //     method: 'GET'})
    //     .then(response => response.json())
    //     .then(data => {
    //       console.log(data);
    //       setRooms(data);
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     })
    // }, []);
  
  return (
    <>
      <h2>Available Rooms</h2>
      <Row>
        <Col 
          className="container border border-dark bg-white m-3 d-flex flex-column align-items-start"
          >
          <h3>TESTING</h3>
          <h3>TESTING</h3>
          <h3>TESTING</h3>
          <h3>TESTING</h3>
          {
            rooms.getAllRooms?.map((room) => {
              return (
                <button
                  key={room._id}
                  style={{backgroundColor: "inherit", border: "none", font: "inherit"}}
                  // TODO there has to be an eaiser way with useState
                  onClick={() => {chooseDisplayedRoom(room)}}
                >
                  <h3>{room.title}</h3>
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