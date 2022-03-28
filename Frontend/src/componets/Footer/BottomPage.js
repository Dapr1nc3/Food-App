import React from "react";
import "./BottomPage.css";

const BottomPage = () => {
  return (
    <>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4>H4 GOES HERE</h4>
              <ul className="list-unstyled">
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
            </div>
          </div>
          <hr />
          <div className="row text-center">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Binary Brians INC | All rights
              reserved | Privacy
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomPage;
