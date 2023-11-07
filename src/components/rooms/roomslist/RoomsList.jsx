import { useEffect } from "react";
import { Row, Col } from "reactstrap";
import AddRoom from "../addroom/AddRoom";

function RoomsList({
  token,
  chooseDisplayedRoom,
  fetchRooms,
  rooms,
  errorHandler,
}) {

  // reloads rooms list every 30 seconds. Learned from below link.
  // https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks
  useEffect(() => {
    const roomInterval = setInterval(() => {
      fetchRooms();
    }, 30000);
    return () => clearInterval(roomInterval);
  }, []);

  // fetches rooms again if token changes
  useEffect(() => {
    fetchRooms();
  }, [token]);

  return (
    <>
      <h2>Available Rooms</h2>
      <Row>
        <Col className="container border border-dark bg-white m-3 d-flex flex-column align-items-start">
          {/* maps each room as a button using optional chaining operator in case array doesn't have values */}
          {rooms.getAllRooms?.map((room) => {
            return (
              <button
                key={room._id}
                style={{
                  backgroundColor: "inherit",
                  border: "none",
                  font: "inherit",
                }}
                onClick={() => {
                  chooseDisplayedRoom(room);
                }}
              >
                <h4 className="text-break text-capitalize">{room.title}</h4>
              </button>
            );
          })}
        </Col>
      </Row>
      {/* add room button */}
      <AddRoom
        token={token}
        fetchRooms={fetchRooms}
        errorHandler={errorHandler}
      />
    </>
  );
}

export default RoomsList;
