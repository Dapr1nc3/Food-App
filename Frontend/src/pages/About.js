import React from "react";
// , Row, Col, Image 
import { Container} from "react-bootstrap";
import aboutImg from "../assets/images/userPlaceholder.png";
import devinImg from "../assets/images/Devin-pic.jpg";
import BottomPage from "../components/Footer/BottomPage";

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
              Hello, you will see my projects, skills attained, contact, and
              about me, sections are located on this portfolio. Now, to describe
              myself, and the things I like in a short paragraph is difficult,
              but in short, I love my family. I enjoy multiple outdoor
              activities, sports competitions, as well as.... coding! I've
              always had an interest in it and how coding works, so I took the
              leap of faith in the area and wouldn't have imagined myself living
              at my desk. Enjoying the coding world is a big thing for me and
              it's very fun most of the time. I've met a lot of fun and
              interesting people in this field.
            </p>

            {/* Footer */}
            <footer>
              <ul>
                <li>
                  <a href="https://www.github.com">
                    <i class="fa-brands fa-github fa-2xl"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com">
                    <i class="fa-brands fa-linkedin fa-2xl"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com">
                    <i class="fa-brands fa-facebook fa-2xl"></i>
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
            <img className="picture-about-size" alt="" src={aboutImg}></img>
          </div>
          <div className="card">
            <p className="about-description">
              Hello, you will see my projects, skills attained. Contact, and
              About me, sections are located on this portfolio. Now, to describe
              myself, and the things I like in a short paragraph is difficult,
              but in short, I love my family. I enjoy multiple outdoor
              activities, sports competitions, as well as.... coding! I've
              always had an interest in it and how coding works, so I took the
              leap of faith in the area and wouldn't have imagined myself living
              at my desk. Enjoying the coding world is a big thing for me and
              it's very fun most of the time. I've met a lot of fun and
              interesting people in this field.
            </p>

            {/* Footer */}
            <footer>
              <ul>
                <li>
                  <a href="https://www.github.com">
                    <i class="fa-brands fa-github fa-2xl"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com">
                    <i class="fa-brands fa-linkedin fa-2xl"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com">
                    <i class="fa-brands fa-facebook fa-2xl"></i>
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
            <img className="picture-about-size" alt="" src={aboutImg}></img>
          </div>
          <div className="card">
            <p className="about-description">
              Hello, you will see my projects, skills attained. Contact, and
              About me, sections are located on this portfolio. Now, to describe
              myself, and the things I like in a short paragraph is difficult,
              but in short, I love my family. I enjoy multiple outdoor
              activities, sports competitions, as well as.... coding! I've
              always had an interest in it and how coding works, so I took the
              leap of faith in the area and wouldn't have imagined myself living
              at my desk. Enjoying the coding world is a big thing for me and
              it's very fun most of the time. I've met a lot of fun and
              interesting people in this field.
            </p>

            {/* Footer */}
            <footer>
              <ul>
                <li>
                  <a href="https://www.github.com">
                    <i class="fa-brands fa-github fa-2xl"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com">
                    <i class="fa-brands fa-linkedin fa-2xl"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com">
                    <i class="fa-brands fa-facebook fa-2xl"></i>
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
            <img className="picture-about-size" alt="" src={aboutImg}></img>
          </div>
          <div className="card">
            <p className="about-description">
              Hello, you will see my projects, skills attained. Contact, and
              About me, sections are located on this portfolio. Now, to describe
              myself, and the things I like in a short paragraph is difficult,
              but in short, I love my family. I enjoy multiple outdoor
              activities, sports competitions, as well as.... coding! I've
              always had an interest in it and how coding works, so I took the
              leap of faith in the area and wouldn't have imagined myself living
              at my desk. Enjoying the coding world is a big thing for me and
              it's very fun most of the time. I've met a lot of fun and
              interesting people in this field.
            </p>

            {/* Footer */}
            <footer>
              <ul>
                <li>
                  <a href="https://www.github.com">
                    <i class="fa-brands fa-github fa-2xl"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com">
                    <i class="fa-brands fa-linkedin fa-2xl"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com">
                    <i class="fa-brands fa-facebook fa-2xl"></i>
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

// const About = () => {
//   return (
//     <div>
//       <Container className="my-auto my-auto" fluid>
//         <div className="">
//           <h1 className="text-center">About Us</h1>
//         </div>
//       </Container>

//       {/* Containers for About Us */}
//       <Container>
//         {/* Devin's About Me */}
//         <h2 className="text-center">Devin The OG</h2>
//         <div className="card-group">
//           <div className="card bg-warning">
//             <img alt="" src={devinImg}></img>
//           </div>
//           <div className="card bg-success">
//             <p></p>
//           </div>
//         </div>

//         {/* Alex's About Me */}
//         <h2 className="text-center">Alex The Backend OG</h2>
//         <div className="card-group">
//           <div className="card bg-warning">
//             <p>Insert Info About Alex</p>
//           </div>
//           <div className="card bg-success">
//             <img alt="" src={aboutImg}></img>
//           </div>
//         </div>

//         {/* Bryan's About Me */}
//         <h2 className="text-center">Bryan The OG Backend</h2>
//         <div className="card-group">
//           <div className="card bg-warning">
//             <img alt="" src={aboutImg}></img>
//           </div>
//           <div className="card bg-success">
//             <p>Place Bryan's info here!</p>
//           </div>
//         </div>

//         {/* Luis' About Me */}
//         <h2 className="text-center">Luis the I'm also here</h2>
//         <div className="card-group">
//           <div className="card bg-warning">
//             <p>This is Devin and his awesome coding skills</p>
//           </div>
//           <div className="card bg-success">
//             <img alt="" src={aboutImg}></img>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default About;

// import React from "react";
// import { Container } from "react-bootstrap";
// import aboutImg from "../assets/images/about-placeholder.gif"


// const About = () => {
//   return (
//     <div className="about-us">
//       <Container className="my-auto my-auto" fluid>
//         <div className="">
//           <h1 className="text-center">About Us</h1>
//         </div>

        
//       </Container>
      
//       {/* Containers for About Us */}
//       <Container>
//         {/* Devin's About Me */}
//         <h2 className="text-center">Devin The OG</h2>
//         <div className="card-group card-spacing card__space">
//           <div className="card">
//             <img alt="" src={aboutImg}></img>
//           </div>
//         <div className="card">
//           <p>
//             Insert Info about Devin here!
//           </p>

//           {/* Footer */}
//           <footer>
//               <ul>
//                 <li><a href="https://www.github.com"><i class="fa-brands fa-github fa-2xl"></i></a></li>
//                 <li><a href="https://www.linkedin.com"><i class="fa-brands fa-linkedin fa-2xl"></i></a></li>
//                 <li><a href="https://www.facebook.com"><i class="fa-brands fa-facebook fa-2xl"></i></a></li>
//               </ul>
//             </footer>
//         </div>
//         </div>

//         {/* Alex's About Me */}
//         <h2 className="text-center">Alex The Backend OG</h2>
//         <div className="card-group card-spacing card__space">
//           <div className="card about-text">
//             <p>
//               Insert Info About Alex
//             </p>

//             {/* Footer */}
//             <footer>
//               <ul>
//                 <li><a href="https://www.github.com"><i class="fa-brands fa-github fa-2xl"></i></a></li>
//                 <li><a href="https://www.linkedin.com"><i class="fa-brands fa-linkedin fa-2xl"></i></a></li>
//                 <li><a href="https://www.facebook.com"><i class="fa-brands fa-facebook fa-2xl"></i></a></li>
//               </ul>
//             </footer>
//           </div>
//         <div className="card">
//           <img alt="" src={aboutImg}></img>
//         </div>
//         </div>

//         {/* Bryan's About Me */}
//         <h2 className="text-center">Bryan The OG Backend</h2>
//         <div className="card-group card-spacing card__space">
//           <div className="card">
//           <img alt="" src={aboutImg}></img>
//           </div>
//         <div className="card">
//           <p>
//             Place Bryan's info here!
//           </p>

//           {/* Footer */}
//           <footer>
//               <ul>
//                 <li><a href="https://www.github.com"><i class="fa-brands fa-github fa-2xl"></i></a></li>
//                 <li><a href="https://www.linkedin.com"><i class="fa-brands fa-linkedin fa-2xl"></i></a></li>
//                 <li><a href="https://www.facebook.com"><i class="fa-brands fa-facebook fa-2xl"></i></a></li>
//               </ul>
//             </footer>
//         </div>
//         </div>

//         {/* Luis' About Me */}
//         <h2 className="text-center">Luis the I'm also here</h2>
//         <div className="card-group card-spacing card__space">
//           <div className="card">
//             <p>
//               Insert info about Luis here
//             </p>
            
//             {/* Footer */}
//             <footer>
//               <ul>
//                 <li><a href="https://www.github.com"><i class="fa-brands fa-github fa-2xl"></i></a></li>
//                 <li><a href="https://www.linkedin.com"><i class="fa-brands fa-linkedin fa-2xl"></i></a></li>
//                 <li><a href="https://www.facebook.com"><i class="fa-brands fa-facebook fa-2xl"></i></a></li>
//               </ul>
//             </footer>
//           </div>
//         <div className="card bg-success">
//           <img alt="" src={aboutImg}></img>
//         </div>
//         </div>
//       </Container>
      
//     </div>
//   );
// };