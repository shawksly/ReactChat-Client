import { Navbar, NavbarBrand } from "reactstrap";
import Logout from "../auth/logout/Logout";

const Brand = ({ token, clearUser }) => {

  return (
    <>
      <Navbar className="mb-2 align-self-stretch" color="secondary" dark>
        <NavbarBrand href="/">DSJ CHAT SERVER</NavbarBrand>
        {/* displays logout button if user is logged in */}
        {!token ? null : <Logout clearUser={clearUser} />}
      </Navbar>
    </>
  );
};

export default Brand;
