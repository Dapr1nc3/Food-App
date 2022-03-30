import React from "react";

const userForm = () => {
  return (
    <div>
      <Form className="m-3">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="m-3">Bio...</Form.Label>
          <Form.Control className="m-2" as="textarea" rows={3} />
          <Button className="m-3" variant="outline-primary">
            Save
          </Button>{" "}
        </Form.Group>
      </Form>
    </div>
  );
};

export default userForm;
