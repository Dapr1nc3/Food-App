import React, { useState } from "react";
import { Container } from "react-bootstrap";
import SlideShow from "../componets/Carousel/SlideShow";
import CallingCard from "../componets/Card/callingCard";
import BottomPage from "../componets/Footer/BottomPage";
import SearchBar from "../componets/SearchBar/SearchBar";
// import Breakfast from "../assets/images/breakfast.jpeg"

const Home = () => {
  const [recipes, setRecipes] = useState();

  return (
    <>
      <Container>
        <SlideShow />
        <SearchBar setRecipes={setRecipes} />
        {recipes ? (
          <CallingCard
            cardData={recipes}
            showButton={true}
            showDelete={false}
          />
        ) : (
          <>
            {/* <h1 className="text-center">WELCOME!</h1>
          <img variant="top" src={Breakfast} className="image-border" /> */}
          </>
        )}
      </Container>
      <BottomPage />
    </>
  );
};

export default Home;
