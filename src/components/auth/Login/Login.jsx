import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Form, FormGroup, Input, Label, Button } from "reactstrap";

function Login({ setToken, setSignup }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
    <Form>
      <FormGroup floating>
      <Input
            id="usernameInput"
            name="username"
            placeholder="Username"
            type="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <Label for="usernameInput">Username</Label>
        </FormGroup>

        {/* Password */}
        <FormGroup floating>
          <Input
            id="passwordInput"
            name="password"
            placeholder="Password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Label for="passwordInput">Password</Label>
        </FormGroup>

        {/* Buttons */}
        <Container className="d-flex justify-content-between">

          {/* button to switch to login */}
          <Button
            className="btn-link link-secondary"
            onClick={() => {
              setSignup(true);
            }}
          >
            Create Account
          </Button>

          {/* button to submit */}
          <Button size="lg" onClick={processUserData}>
            Submit
          </Button>

        </Container>
      </Form>
    </>
  );

  // runs on button click
  async function processUserData(e) {
    e.preventDefault();
    console.log("username: ", username);
    console.log("password: ", password);

    try {
      // request sent to server
      let response = await fetch("http://localhost:4000/user/login", {
        headers: new Headers({
          "content-type": "application/json"
        }),
        method: "POST",
        body: JSON.stringify({
          username,
          password,
        }),
      });

      let results = await response.json();
      console.log("results", results);

      setToken(results.token);

      // TODO needs to redirect somewhere
      if (response.status === 200) navigate("/display");
    } catch (error) {
      console.log(error);
    }
  }
}

export default Login;
