import React, { useState } from "react";
import { Container } from "react-bootstrap";
import SlideShow from "../components/Carousel/SlideShow";
import CallingCard from "../components/Card/callingCard";
import BottomPage from "../components/Footer/BottomPage";
import SearchBar from "../components/SearchBar/SearchBar";
// import Breakfast from "../assets/images/breakfast.jpeg"

const Home = () => {
  const [recipes, setRecipes] = useState();

  return (
    <>
      <Container>
        <SlideShow />
        <SearchBar setRecipes={setRecipes} />
        {recipes ? (
          <CallingCard cardData={recipes}  showButton={true}
          showDelete={false} />
        ) : (
          <>
            {/* <h1 className="text-center">WELCOME!</h1>
            <img variant="top" src={Breakfast} className="image-border" /> */}
          </>
        )}
        {/* <BottomPage /> ORIGINALLY HERE */}
      </Container>
      <BottomPage />
    </>
  );
};

export default Home;
