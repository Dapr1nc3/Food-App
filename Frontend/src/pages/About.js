import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
<<<<<<< HEAD
import aboutImg from "../assets/images/userPlaceholder.png";
import devinImg from "../assets/images/Devin-pic.jpg";
=======
>>>>>>> workspace-BrianD

const About = () => {
  return (
    <div>
<<<<<<< HEAD
      <Container className="my-auto my-auto" fluid>
        <div className="">
          <h1 className="text-center">About Us</h1>
        </div>
      </Container>

      {/* Containers for About Us */}
      <Container>
        {/* Devin's About Me */}
        <h2 className="text-center">Devin The OG</h2>
        <div className="card-group">
          <div className="card bg-warning">
            <img alt="" src={devinImg}></img>
          </div>
          <div className="card bg-success">
            <p></p>
          </div>
        </div>

        {/* Alex's About Me */}
        <h2 className="text-center">Alex The Backend OG</h2>
        <div className="card-group">
          <div className="card bg-warning">
            <p>Insert Info About Alex</p>
          </div>
          <div className="card bg-success">
            <img alt="" src={aboutImg}></img>
          </div>
        </div>

        {/* Bryan's About Me */}
        <h2 className="text-center">Bryan The OG Backend</h2>
        <div className="card-group">
          <div className="card bg-warning">
            <img alt="" src={aboutImg}></img>
          </div>
          <div className="card bg-success">
            <p>Place Bryan's info here!</p>
          </div>
        </div>

        {/* Luis' About Me */}
        <h2 className="text-center">Luis the I'm also here</h2>
        <div className="card-group">
          <div className="card bg-warning">
            <p>This is Devin and his awesome coding skills</p>
          </div>
          <div className="card bg-success">
            <img alt="" src={aboutImg}></img>
          </div>
        </div>
=======
      <Container>
        <Row>
          <Col>
            <h1>This is a heading</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </Col>
          <Col>
            <Image src="https://www.impactbnd.com/hubfs/blog-image-uploads/best-about-us-pages.jpg"></Image>
          </Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
>>>>>>> workspace-BrianD
      </Container>
    </div>
  );
};

<<<<<<< HEAD
export default About;
=======
export default About;
>>>>>>> workspace-BrianD
