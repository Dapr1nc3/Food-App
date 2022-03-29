import React from "react";
import { Container } from "react-bootstrap";

const SignIn = () => {
  return ( 
  <div>
    <Container className="my-auto my-auto" fluid>
      <div className="text-center">
        <h1>Log In</h1>
        <form id="login-form">
          <input type="text" name="username" placeholder="Username"></input>
            <br></br>
            <br></br>
          <input type="text" name="password" placeholder="Password"></input>
        </form>
      </div>
    </Container>
  </div>
  )
};

export default SignIn;
