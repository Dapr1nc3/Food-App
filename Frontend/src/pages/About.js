import React from "react";
import { Container } from "react-bootstrap";
import aboutImg from "../assets/images/userPlaceholder.png";
import devinImg from "../assets/images/Devin-pic.jpg";

const About = () => {
  return (
    <div>
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
      </Container>
    </div>
  );
};

export default About;
