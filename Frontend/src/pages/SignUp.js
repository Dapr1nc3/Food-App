import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';

const SignUp = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser] = useMutation(ADD_USER); 
  //add login in automatically - useNavigate - react component with useState

  // Update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // fetch post call to api/user/ to add the user - axios npm package
    // specify post method, set headers to application/content json
    // return.then response
    // that route will check backend routes, should post the user with create user
    // then do an if statement, check that confirmed password equals password before submit - conditional
    // console.log
    

    try {
      
      const { data } = await addUser({
        variables: { ...formState }, 
      });

      // call addUser

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };
  
  return (
    <div>
      <Container>
        <Form onSubmit={handleFormSubmit} autoComplete="on">
          <Form.Group className="mb-3" controlId="formBasicUser">
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={handleChange}
              required type="text"
              placeholder=""
              name="username"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={handleChange}
              required type="email"
              placeholder=""
              name="email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handleChange}
              required type="password"
              placeholder=""
              name="password"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control required type="password" placeholder="" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default SignUp;