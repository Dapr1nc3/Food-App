import React from "react";
import { Container, Button } from "react-bootstrap";
import userPlaceholder from "../assets/images/userPlaceholder.png";
import useLocalStorage from "../componets/localStorage/useLocalStorage";

const Profile = () => {
  let [value, setValue] = useLocalStorage("name", "");

  return (
    <div>
      {/* Banner Container */}
      <Container>
        <img alt="" src=""></img>
        <h2>Image Here</h2>
      </Container>
      {/* Profile Container */}
      <Container>
        <div>
          <div className="card-group">
            <div className="card">
              <img
                alt=""
                src={userPlaceholder}
                className="profile-picture"
              ></img>
            </div>
            <div className="card">
              <p>Profile info here...</p>
            </div>
          </div>
          <br></br>
          <div className="card-group">
            <Button className="card profile-btn">Favorite Recipes</Button>
            <Button className=" card profile-btn">My Recipes</Button>
          </div>
        </div>
      </Container>
      {/* Description section */}
      <Container className="p-5">
        <input
          type="text"
          placeholder="Bio..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </Container>
    </div>
  );
};

export default Profile;
