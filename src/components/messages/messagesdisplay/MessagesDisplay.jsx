import {useEffect} from 'react'
import DeleteMessage from '../deletemessage/DeleteMessage'
import UpdateMessage from '../updatemessage/UpdateMessage'

function MessagesDisplay({fetchMessages, messages}) {
  useEffect (() => {
    fetchMessages()
  }, [])

  return (
    <div className="container border border-dark bg-white m-3 d-flex flex-column align-items-start flex-grow-1 justify-content-end">
          {/* <div className="container border border-dark bg-white m-3 d-flex flex-column align-items-start flex-grow-1 justify-content-end vh-100 mh-100" style={{ overflowY: "scroll", maxHeight: "50vh" }}> */}
            <h6>TEST MESSAGE 1</h6>
            <h6>TEST MESSAGE 2</h6>
            <h6>TEST MESSAGE 3</h6>
            <h6>TEST MESSAGE 4</h6>
            {
              messages.getAllMessages?.map ((message) => {
                return (
                  <div key={message._id}>
                    <p>{message.date}</p>
                    <h6>{message.text}</h6>
                    <DeleteMessage />
                    {/* <UpdateMessage /> */}
                  </div>
                )
              })

            }

      </div>
  )
}

export default MessagesDisplay