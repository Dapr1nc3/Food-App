import React from "react";
import { Container } from "react-bootstrap";
import aboutImg from "../assets/images/about-placeholder.gif"


const About = () => {
  return (
    <div className="about-us">
      <Container className="my-auto my-auto" fluid>
        <div className="">
          <h1 className="text-center">About Us</h1>
        </div>

        
      </Container>
      
      {/* Containers for About Us */}
      <Container>
        {/* Devin's About Me */}
        <h2 className="text-center">Devin The OG</h2>
        <div className="card-group card-spacing card__space">
          <div className="card">
            <img alt="" src={aboutImg}></img>
          </div>
        <div className="card">
          <p>
            Insert Info about Devin here!
          </p>

          {/* Footer */}
          <footer>
              <ul>
                <li><a href="https://www.github.com"><i class="fa-brands fa-github fa-2xl"></i></a></li>
                <li><a href="https://www.linkedin.com"><i class="fa-brands fa-linkedin fa-2xl"></i></a></li>
                <li><a href="https://www.facebook.com"><i class="fa-brands fa-facebook fa-2xl"></i></a></li>
              </ul>
            </footer>
        </div>
        </div>

        {/* Alex's About Me */}
        <h2 className="text-center">Alex The Backend OG</h2>
        <div className="card-group card-spacing card__space">
          <div className="card about-text">
            <p>
              Insert Info About Alex
            </p>

            {/* Footer */}
            <footer>
              <ul>
                <li><a href="https://www.github.com"><i class="fa-brands fa-github fa-2xl"></i></a></li>
                <li><a href="https://www.linkedin.com"><i class="fa-brands fa-linkedin fa-2xl"></i></a></li>
                <li><a href="https://www.facebook.com"><i class="fa-brands fa-facebook fa-2xl"></i></a></li>
              </ul>
            </footer>
          </div>
        <div className="card">
          <img alt="" src={aboutImg}></img>
        </div>
        </div>

        {/* Bryan's About Me */}
        <h2 className="text-center">Bryan The OG Backend</h2>
        <div className="card-group card-spacing card__space">
          <div className="card">
          <img alt="" src={aboutImg}></img>
          </div>
        <div className="card">
          <p>
            Place Bryan's info here!
          </p>

          {/* Footer */}
          <footer>
              <ul>
                <li><a href="https://www.github.com"><i class="fa-brands fa-github fa-2xl"></i></a></li>
                <li><a href="https://www.linkedin.com"><i class="fa-brands fa-linkedin fa-2xl"></i></a></li>
                <li><a href="https://www.facebook.com"><i class="fa-brands fa-facebook fa-2xl"></i></a></li>
              </ul>
            </footer>
        </div>
        </div>

        {/* Luis' About Me */}
        <h2 className="text-center">Luis the I'm also here</h2>
        <div className="card-group card-spacing card__space">
          <div className="card">
            <p>
              Insert info about Luis here
            </p>
            
            {/* Footer */}
            <footer>
              <ul>
                <li><a href="https://www.github.com"><i class="fa-brands fa-github fa-2xl"></i></a></li>
                <li><a href="https://www.linkedin.com"><i class="fa-brands fa-linkedin fa-2xl"></i></a></li>
                <li><a href="https://www.facebook.com"><i class="fa-brands fa-facebook fa-2xl"></i></a></li>
              </ul>
            </footer>
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
