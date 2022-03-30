import React from "react";
import "./BottomPage.css";

const BottomPage = () => {
  return (
    <>
      <footer className="main-footer">
        {/* classname was container */}
        <div className="" fluid> 
          <div className="row">
            {/* classname was col */}
            <div className="text-center">
              <h4>Contact Information</h4>
                <p>
                  Orlando FL
                  <br></br>
                  (321)123-4567
                  <br></br>
                  Email: food4thoughtcontact@gmail.com
                </p>
            </div>
              {/* <ul className="list-unstyled">
                <li>321-321-3211</li>
                <li>Orlando, Florida</li>
                <li>That place around the corner</li>
              </ul>
            </div>

            <div className="col">
              <h4>STUFF WILL GO HERE</h4>
              <ul className="list-unstyled">
                <li>content here</li>
                <li>contnet here</li>
                <li>contnet here</li>
              </ul>
            </div>

            <div className="col">
              <h4>ANOTHER ONE</h4>
              <ul className="list-unstyled">
                <li>content here</li>
                <li>contnet here</li>
                <li>contnet here</li>
              </ul>
            </div> */}
          </div>
          <hr />
          <div className="row text-center">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Binary Brains INC | All rights
              reserved | Privacy
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default BottomPage;
