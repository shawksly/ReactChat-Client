import { Navbar, NavbarText } from "reactstrap";

const Footer = () => {
  
  return (
    <>
      <Navbar
        className="mt-auto align-self-stretch d-flex justify-content-center"
        color="secondary"
        dark
      >
        <NavbarText className="mx-auto">
          <h5>Upright Project: React Chat</h5>
        </NavbarText>
      </Navbar>
    </>
  );
};

export default Footer;
