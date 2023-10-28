import { Navbar, NavbarBrand} from 'reactstrap'
import Logout from '../auth/logout/Logout'
const Brand = ({ token, clearToken}) =>{
  
  
 

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
        !token
        ?
        null
        :
        <Logout clearToken={clearToken}/>
  
        }
      </Navbar>
    </>
  )
}

export default Brand