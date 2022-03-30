import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import UseLocalStorage from "../localStorage/useLocalStorage";

const UserForm = () => {
  const [bio, setBio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="m-3">
        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1"> */}
        <Form.Label
          className="m-3"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        >
          Bio...
        </Form.Label>
        <Form.Control className="m-2" as="textarea" rows={3} />
        <Button className="m-3" variant="outline-primary">
          Save
        </Button>
        {/* </Form.Group> */}
      </Form>
    </div>
  );
};

export default UserForm;
