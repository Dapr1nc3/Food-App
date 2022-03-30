import React from "react";
import { Container } from "react-bootstrap";
import BottomPage from "../componets/Footer/BottomPage";
import alexImg from "../assets/images/Alex.jpeg";
import luisImg from "../assets/images/Luis.jpg";
import brianImg from "../assets/images/Brian.jpg";
import aboutImg from "../assets/images/userPlaceholder.png";
import devinImg from "../assets/images/Devin-pic.jpg";

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
            <img className="picture-about-size" alt="" src={devinImg}></img>
          </div>
          <div className="card">
            <p className="about-description">
              Hey there, my name is Devin. I am a Jr Web Developer. I like
              working on the Front End of websites. I enjoy coding and watch
              anime on my off time. I also like to play Elden Ring which is my
              current obsession. I also enjoy being with my younger siblings. I
              will be expanding my knowledge on Web Development as well as
              coding. I am hoping to make a website that is an anime streaming
              service someday in the future.
            </p>

            {/* Footer */}
            <footer>
              <ul>
                <li>
                  <a href="https://github.com/Dapr1nc3">
                    <i class="fa-brands fa-github fa-2xl"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/devin-minnis-082a95217/">
                    <i class="fa-brands fa-linkedin fa-2xl"></i>
                  </a>
                </li>
              </ul>
            </footer>
          </div>
        </div>

        {/* Alex's About Me */}
        <h2 className="text-center">Alex The OG</h2>
        <div className="card-group card-spacing card__space">
          <div className="card">
            <img className="picture-about-size" alt="" src={alexImg}></img>
          </div>
          <div className="card">
            <p className="about-description">
              Hello, my name is Alex. I am a Junior Web Dev. I enjoy coding,
              specially the backend. It's like figuring out a puzzle and I enjoy
              challenges. I am hoping to expand my knowledge and see where my
              studies will take me. I am looking forward to all of the new and
              exciting challenges in the future!
            </p>

            {/* Footer */}
            <footer>
              <ul>
                <li>
                  <a href="https://www.github.com/ajbf92">
                    <i class="fa-brands fa-github fa-2xl"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/alex-betancourt-267187236/">
                    <i class="fa-brands fa-linkedin fa-2xl"></i>
                  </a>
                </li>
              </ul>
            </footer>
          </div>
        </div>

        {/* Bryan's About Me */}
        <h2 className="text-center">Brian the OG</h2>
        <div className="card-group card-spacing card__space">
          <div className="card">
            <img className="picture-about-size" alt="" src={brianImg}></img>
          </div>
          <div className="card">
            <p className="about-description">
              Hi there! My name is Brian. I am a Web Developer. I enjoy creating
              the backend of websites and fixing things up. I love outer space
              and hope to create a website about outer space some time in the
              future. I enjoy coding and spending time with my wife and kids.
            </p>

            {/* Footer */}
            <footer>
              <ul>
                <li>
                  <a href="https://github.com/bdoneq7">
                    <i class="fa-brands fa-github fa-2xl"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/brian-done-9080b026/">
                    <i class="fa-brands fa-linkedin fa-2xl"></i>
                  </a>
                </li>
              </ul>
            </footer>
          </div>
        </div>

        {/* Luis' About Me */}
        <h2 className="text-center">Luis</h2>
        <div className="card-group card-spacing card__space">
          <div className="card">
            <img className="picture-about-size" alt="" src={luisImg}></img>
          </div>
          <div className="card">
            <p className="about-description">
              Hello there! I'm Luis. I'm a Junior Web Developer. I enjoy working
              on the Front End of sites. I enjoy coding, and when I am not
              working or coding I enjoy playing video games. Very hooked on
              Elden Ring at the moment! I will keep expanding my knowledge in
              coding. I want to create a social media site that everyone will
              enjoy using. Hopefully someday in the future you will see that
              page!
            </p>

            {/* Footer */}
            <footer>
              <ul>
                <li>
                  <a href="https://github.com/luistorano">
                    <i class="fa-brands fa-github fa-2xl"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/luis-torano-serrano-a07a91209/">
                    <i class="fa-brands fa-linkedin fa-2xl"></i>
                  </a>
                </li>
              </ul>
            </footer>
          </div>
        </div>
      </Container>
      <BottomPage />
    </div>
  );
};

export default About;
