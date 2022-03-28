<<<<<<< HEAD
import React, {useRef, useState} from "react";
import { Container } from "react-bootstrap";
import SlideShow from "../componets/Carousel/SlideShow";
import CallingCard from "../componets/Card/callingCard";
import BottomPage from "../componets/Footer/BottomPage";
import SearchBar from "../componets/SearchBar/SearchBar";
// import Breakfast from "../assets/images/breakfast.jpeg"


const Home = () => {
  const [recipes, setRecipes] = useState();

  return (
    <Container>
      <SlideShow />
       <SearchBar setRecipes={setRecipes} />
      {recipes?<CallingCard cardData={recipes} /> : 
        <>
          {/* <h1 className="text-center">WELCOME!</h1>
          <img variant="top" src={Breakfast} className="image-border" /> */}
        </>}
      <BottomPage />
=======
import React from "react";
import { Container } from "react-bootstrap";
import SlideShow from "../components/Carousel/SlideShow";
import CallingCard from "../components/Card/callingCard";
import Search from "../components/Search/Search";

const Home = () => {
  return (
    <Container>
      <SlideShow />
      <Search />
      <CallingCard />
>>>>>>> workspace-BrianD
    </Container>
  );
};

<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> workspace-BrianD
