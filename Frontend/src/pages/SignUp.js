import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Container, Form, Button } from "react-bootstrap";

const SignUp = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser] = useMutation(ADD_USER);

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

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail" value={formState.username}
                onChange={handleChange}>
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="" required="true" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail" value={formState.email}
                onChange={handleChange}>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="" required="true" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword" value={formState.password}
                onChange={handleChange}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="" required="true" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword" value={formState.password}
                onChange={handleChange}>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="" required="true" />
          </Form.Group>

          <Button variant="primary" type="submit" onSubmit={handleFormSubmit}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default SignUp;