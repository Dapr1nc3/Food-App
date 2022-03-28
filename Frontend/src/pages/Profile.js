<<<<<<< HEAD
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
=======
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import Auth from '../utils/auth';

const Profile = (props) => {
  // const { username: userParam } = useParams();

  const { loading, data } = useQuery( QUERY_USER,{
    variables: { username: Auth.getProfile().data.username },
  });

  const user = data?.me || data?.user || {};

  // redirect to personal profile page if username is yours
  // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  //   return <Redirect to="/profile" />;
  // }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }


  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing { `${user.username}'s` } profile.
        </h2>

      </div>

>>>>>>> workspace-BrianD
    </div>
  );
};

export default Profile;
