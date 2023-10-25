import {Navbar, NavbarBrand} from 'reactstrap'

const Brand = () =>{
  return(
    <>
      <Navbar
    className="my-2"
    color="secondary"
    dark
  >
    <NavbarBrand href="/">
      DSJ CHAT SERVER
    </NavbarBrand>
  </Navbar>
    </>
  )
}

export default Brand