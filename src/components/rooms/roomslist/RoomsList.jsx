import { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import AddRoom from "../addroom/AddRoom"


function RoomsList({ token }) {

  let [rooms, setRooms] = useState([])

  useEffect(function (token) {
    // This is going to be the function that runs when our useEffect runs
    fetch("http://localhost:4000/room/list", {
      headers: new Headers({
        'content-type': 'application/json',
        'authorization': token
      }),
      method: 'GET'})
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setRooms(data);
      })
  }, []);

  // useEffect(() => {

  //   async function getData() {

  //     try {
  //       let response = fetch("http://localhost:4000/room/list", {
  //         headers: new Headers({
  //           'content-type': 'application/json'
  //         }),
  //         method: 'GET'
  //       })
        
  //       let results = response.json();
  //       console.log(results);
        
  //       setRooms(results);
        
  //       // if(response.status === 200)
  //       //   something
        
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // }, [rooms])

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
            rooms.map((room, index) => {
              return (
              <div key={index}>
                <h3>{room.title}</h3>
              </div>
              )
            })
          }
        </Col>
      </Row>
      <AddRoom token={token} />
    </>
  );
}

export default RoomsList