import { useEffect, useState } from 'react'
import DeleteMessage from '../deletemessage/DeleteMessage'
import UpdateMessage from '../updatemessage/UpdateMessage'

function MessagesDisplay({ currentRoomId, currentRoom, token }) {

  const [messages, setMessages] = useState({});

  useEffect (() => {
    fetchMessages()
  }, [currentRoom])

  async function fetchMessages() {
    if (token)
      try {
        let response = await fetch(`http://localhost:4000/message/show/${currentRoomId}`, {
          headers: new Headers({
            "content-type": "application/json",
            authorization: token,
          }),
          method: "GET",
        });
        
        let results = await response.json();
        console.log(results);
        console.log(token);

        // TODO make this do something if successful
        if (response.status === 200) {
          setMessages(results);
        } else {
          setMessages({})
        }

      } catch (error) {
        console.log(error);
      }
  }

  // https://stackoverflow.com/questions/19407305/how-to-show-only-hours-and-minutes-from-javascript-date-tolocaletimestring
  function smallerDate(time) {
    let date = new Date(time);
    return date.toLocaleTimeString(navigator.language, {
      month: "2-digit",
      day: "2-digit",
      year: "2-digit",
      hour: '2-digit',
      minute:'2-digit'
    });
  }

  return (
    <div className="container border border-dark bg-white m-3 p-2 d-flex flex-column align-items-start flex-grow-1 justify-content-end">
          {/* <div className="container border border-dark bg-white m-3 d-flex flex-column align-items-start flex-grow-1 justify-content-end vh-100 mh-100" style={{ overflowY: "scroll", maxHeight: "50vh" }}> */}
            <h6>TEST MESSAGE 1</h6>
            <h6>TEST MESSAGE 2</h6>
            <h6>TEST MESSAGE 3</h6>
            <h6>TEST MESSAGE 4</h6>
            {
              !messages.getAllMessages ? null : (
                messages.getAllMessages?.map ((message) => {
                  return (
                    <div key={message._id} className="w-100">
                      <div className="d-flex align-items-end justify-content-start">
                        <small className="text-muted lh-1"><em>{smallerDate(message.date)}</em></small>
                      </div>
                      <div className="d-flex align-items-end justify-content-start">
                        <h6 className="me-auto mb-2 text-start">{message.username}: {message.text}</h6>
                        <UpdateMessage />
                        <DeleteMessage />
                      </div>
                      <hr className="mt-0 mb-3"/>
                    </div>
                  )
                })
              )
            }

      </div>
  )
}

export default MessagesDisplay