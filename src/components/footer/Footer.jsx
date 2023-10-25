import {Navbar, NavbarBrand} from 'reactstrap'


const Footer = () =>{
  return(
    <>
      <Navbar
    className="my-2 App-footer"
    color="secondary"
    dark
  >
    <NavbarBrand href="/">
      Upright Project: React Chat
    </NavbarBrand>
  </Navbar>
    </>
  )
}

export default Footer;