import React from "react";
// import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import UserForm from "../componets/userForm/userForm";
import BottomPage from "../componets/Footer/BottomPage";
import userPlaceholder from "../assets/images/profile-placeholder.png";
import Auth from "../utils/auth";
import { Container, Form } from "react-bootstrap";
import CallingCard from "../componets/Card/callingCard";
import Navigation from "../componets/Navbar/Navagation";

const Profile = (props) => {
  // const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_USER, {
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

  const savedRecipes = JSON.parse(localStorage.getItem(user.username));

  return (
    <>
      {/* <Navigation showLogOut={true} /> */}
      <div>
        <div className="flex-row mb-3">
          <h2 className="bg-dark text-secondary p-3 display-inline-block">
            Viewing {`${user.username}'s`} profile.
          </h2>
          <div>
            {/* Banner Container */}
            <Container>
              <img alt="" src=""></img>
              <h2>Main Avatar</h2>
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
                    <UserForm />
                  </div>
                </div>
                <br></br>
                <div className="card-group">
                  {/* <Button className='card profile-btn'>Favorite Recipes</Button>
            <Button className=' card profile-btn'>My Recipes</Button> */}
                </div>
              </div>
              {savedRecipes ? (
                <CallingCard
                  cardData={savedRecipes}
                  showButton={false}
                  showDelete={true}
                />
              ) : (
                <div>No saved Recipes</div>
              )}
            </Container>
          </div>
        </div>
        <BottomPage />
      </div>
    </>
  );
};

export default Profile;
