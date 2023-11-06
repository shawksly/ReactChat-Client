import React from 'react'
import { useNavigate } from 'react-router-dom'
import{Button} from 'reactstrap'

function Logout({clearUser}) {
  const navigate = useNavigate()

  function redirect(){
    clearUser();
    navigate('/');
  }

  return (
    <Button color='dark' onClick={redirect}>Logout</Button>
  )
}

export default Logout