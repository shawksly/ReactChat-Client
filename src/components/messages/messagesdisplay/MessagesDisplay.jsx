import { useEffect, useState } from 'react'
import DeleteMessage from '../deletemessage/DeleteMessage'
import UpdateMessage from '../updatemessage/UpdateMessage'

function MessagesDisplay({ currentRoomId, currentRoom, token, fetchMessages, messages }) {

  useEffect (() => {
    fetchMessages()
  }, [currentRoom])

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
    <div className="container border border-dark bg-white m-3 d-flex flex-column align-items-start flex-grow-1 overflow-y-scroll">
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
                  <h6 className="me-auto mb-2 text-start"><strong>{message.username}</strong>: {message.text}</h6>
                  <UpdateMessage 
                  fetchMessages={fetchMessages}
                  token={token}
                  messageId={message._id}
                  currentRoomId={currentRoomId}
                  />
                  <DeleteMessage 
                  messageId={message._id}
                  fetchMessages={fetchMessages}
                  token={token}
                  />
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