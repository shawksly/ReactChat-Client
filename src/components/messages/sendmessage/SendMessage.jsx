import React from "react"
import {Button,Form,Input} from 'reactstrap'
import {useState} from "react"

function SendMessage({
  currentRoomId,
  token,
  fetchMessages
}) {
  
  const [message,setMessage] = useState('')

  return (
  
    <Form className="d-flex align-self-stretch">
    {/* <FormGroup> */}
      <Input id="text" name="text" type="textarea" rows="2" onChange={(e)=>{
        setMessage(e.target.value)
      }} />
      <Button className="align-self-end ms-3" color="dark" onClick={postMessage}>Send</Button>
    {/* </FormGroup> */}
  </Form>
  
  )

  async function postMessage (e) {
    e.preventDefault();

    try{
      let response = await fetch(`http://localhost:4000/message/create/${currentRoomId}`,{
        headers: new Headers({
          "content-type": "application/json",
          "authorization":token
        }),
        method: "POST",
        body: JSON.stringify({
          text: message,
        }),
      })
      let results = await response.json();
      console.log('results',results)
      fetchMessages()
    }catch (error){
      console.log(error)
    }
  }
}

export default SendMessage