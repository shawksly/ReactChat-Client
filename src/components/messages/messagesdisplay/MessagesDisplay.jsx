import { useEffect, useRef } from "react";
import DeleteMessage from "../deletemessage/DeleteMessage";
import UpdateMessage from "../updatemessage/UpdateMessage";

function MessagesDisplay({
  currentRoom,
  currentRoomId,
  token,
  fetchMessages,
  messages,
  userId,
  errorHandler,
}) {

  const messagesEndRef = useRef(null);

  //scrolls to bottom of messages using useRef. Learned from below link.
  // https://stackoverflow.com/questions/72372407/react-auto-scroll-to-bottom-of-a-div
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // reloads messages every 30 seconds. Learned from below link.
  // https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks
  useEffect(() => {
    const messageInterval = setInterval(() => {
      fetchMessages();
    }, 30000);
    return () => clearInterval(messageInterval);
  }, []);

  // re-fetches messages when room changes
  useEffect(() => {
    fetchMessages();
  }, [currentRoom]);

  // scroll function called
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // parses date infor from server for a smaller date. Learned from below link and MDN.
  // https://stackoverflow.com/questions/19407305/how-to-show-only-hours-and-minutes-from-javascript-date-tolocaletimestring
  function smallerDate(time) {
    let date = new Date(time);
    return date.toLocaleTimeString(navigator.language, {
      month: "2-digit",
      day: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <div className="container border border-dark bg-white m-3 p-3 d-flex flex-column align-items-start flex-grow-1 overflow-y-scroll">
      {/* 0x0 div pushes all other items (mesages) down. Learned from below link. */}
      {/* https://stackoverflow.com/questions/36130760/use-justify-content-flex-end-and-to-have-vertical-scrollbar */}
      <div className="mb-auto"></div>
      {/* shows messages if ternary is false */}
      {!messages.getAllMessages
        ? null
        // maps messages using optional chaining operator in case array doesn't have values
        : messages.getAllMessages?.map((message) => {
            return (
              <div key={message._id} className="w-100">
                <div className="d-flex align-items-end justify-content-start">
                  {/* date */}
                  <small className="text-muted lh-1">
                    <em>{smallerDate(message.date)}</em>
                  </small>
                </div>
                <div className="d-flex align-items-end justify-content-start">
                  {/* username and message */}
                  <h6 className="me-auto mb-2 text-start text-break">
                    <strong>
                      <u>{message.username}</u>
                    </strong>
                    : {message.text}
                  </h6>
                  {/* update and delete message buttons displayed if user is message owner */}
                  {message.owner !== userId ? null : (
                    <>
                      <UpdateMessage
                        fetchMessages={fetchMessages}
                        token={token}
                        messageId={message._id}
                        currentRoomId={currentRoomId}
                        errorHandler={errorHandler}
                      />
                      <DeleteMessage
                        fetchMessages={fetchMessages}
                        token={token}
                        messageId={message._id}
                        errorHandler={errorHandler}
                      />
                    </>
                  )}
                </div>
                <hr className="mt-0 mb-3" />
              </div>
            );
          })}
      {/* scroll function scrolls to here using useRef */}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default MessagesDisplay;
