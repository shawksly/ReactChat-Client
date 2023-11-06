import { useEffect, useRef } from 'react'
import DeleteMessage from '../deletemessage/DeleteMessage'
import UpdateMessage from '../updatemessage/UpdateMessage'

function MessagesDisplay({ currentRoomId, currentRoom, token, fetchMessages, messages, userId, errorHandler }) {

  const messagesEndRef = useRef(null);

  // https://stackoverflow.com/questions/72372407/react-auto-scroll-to-bottom-of-a-div
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  };

  // https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks
  useEffect(() => {
    const messageInterval = setInterval(() => {
      fetchMessages()
    }, 30000);
    return () => clearInterval(messageInterval);
  }, []);

  useEffect (() => {
    fetchMessages();
  }, [currentRoom])

  useEffect (() => {
    scrollToBottom();
  }, [messages])

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
    <div className="container border border-dark bg-white m-3 p-3 d-flex flex-column align-items-start flex-grow-1 overflow-y-scroll">
      {
        !messages.getAllMessages ? null : (
          messages.getAllMessages?.map ((message) => {
            return (
              <div key={message._id} className="w-100">
                <div className="d-flex align-items-end justify-content-start">
                  <small className="text-muted lh-1"><em>{smallerDate(message.date)}</em></small>
                </div>
                <div className="d-flex align-items-end justify-content-start">
                  <h6 className="me-auto mb-2 text-start text-break"><strong><u>{message.username}</u></strong>: {message.text}</h6>
                  {
                    message.owner !== userId ?
                    null
                    :
                    <>
                      <UpdateMessage
                      fetchMessages={fetchMessages}
                      token={token}
                      messageId={message._id}
                      currentRoomId={currentRoomId}
                      errorHandler={errorHandler}
                      />
                      <DeleteMessage 
                      messageId={message._id}
                      fetchMessages={fetchMessages}
                      token={token}
                      errorHandler={errorHandler}
                      />
                    </>
                  }
                </div>
                <hr className="mt-0 mb-3"/>
              </div>
            )
          })
        )
      }
      <div ref={messagesEndRef} />
    </div>
  )
}

export default MessagesDisplay