import React from "react";
import { Form, Button } from "react-bootstrap";

const Search = () => {
  return (
    <div>
      <>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Find a recipe</Form.Label>
            <Form.Control type="email" placeholder="Search..." />
          </Form.Group>
          <Button variant="primary" type="submit">
            Find
          </Button>
        </Form>
      </>
    </div>
  );
};

export default Search;