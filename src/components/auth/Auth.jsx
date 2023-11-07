import { Container } from "reactstrap";
import Signup from "./signup/Signup";
import Login from "./Login/Login";

function Auth({ updateUser, signup, setSignup, errorHandler }) {
	
  return (
    <>
      <Container
        className="d-inline-block w-50 p-3 bg-light mt-5"
      >
				{/* displays signup or login based on ternary */}
        {signup ? (
          <Signup
            updateUser={updateUser}
            setSignup={setSignup}
            errorHandler={errorHandler}
          />
        ) : (
          <Login
            updateUser={updateUser}
            setSignup={setSignup}
            errorHandler={errorHandler}
          />
        )}
      </Container>
    </>
  );
}

export default Auth;
