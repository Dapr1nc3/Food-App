import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Container className="d-flex" fluid>
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold">Heading title</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        <div></div>
        {/* <Row className=" px-4 my-5 p-5 about-header">
          <Col>
            <Image
              src="https://img.freepik.com/free-vector/about-us-website-banner-concept-with-thin-line-flat-design_56103-96.jpg"
              fluid
              rounded
            />
          </Col>
          <Col className="text-dark about-image">
            <div className="">
              <h1>This is what we do!</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
};

export default About;
