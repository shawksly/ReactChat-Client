import { useNavigate } from 'react-router-dom'
import {Navbar, NavbarBrand,Button} from 'reactstrap'

const Brand = ({token,clearToken}) =>{
  const navigate = useNavigate()
  function logout(){
   
    navigate('/')
  }

  return(
    <>
      <Navbar
        className="mb-2 align-self-stretch"
        color="secondary"
        dark
      >
        <NavbarBrand href="/">
          DSJ CHAT SERVER
        </NavbarBrand>
        {
        token
        ?
        null
        :
        <Button color='dark' onClick={clearToken}>Logout</Button>
  
        }
      </Navbar>
    </>
  )
}

export default Brand