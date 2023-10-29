import React from "react";
import { Row, Col } from "reactstrap";
import AddRoom from "../addroom/AddRoom"


function RoomsList({ token }) {

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

          }
        </Col>
      </Row>
      <AddRoom token={token} />
    </>
  );
}

export default RoomsList