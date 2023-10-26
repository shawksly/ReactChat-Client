import {Navbar, NavbarBrand} from 'reactstrap'

const Brand = () =>{
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
      </Navbar>
    </>
  )
}

export default Brand