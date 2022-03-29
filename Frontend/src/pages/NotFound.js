import React from "react";
import notFound from "../assets/images/404-not-found.png";

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center not-found">
      <img src={notFound} alt="" />
    </div>
  );
};

export default NotFound;
