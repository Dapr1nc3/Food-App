import React, {useRef, useState} from "react";
import { Container } from "react-bootstrap";
import SlideShow from "../componets/Carousel/SlideShow";
import CallingCard from "../componets/Card/callingCard";
import SearchBar from "../componets/SearchBar/SearchBar";

const Home = () => {
  const [recipes, setRecipes] = useState();

  // const RunSearch = function (e) {
  //   e.preventDefault();
  //     // console.log(searchInput.current.value);
  //     // console.log(searchInput.current.value)
  //     // const userInput = searchInput.current.value
  //     // console.log(userInput);
  
  //     // var API_Key = "baee51bfa3ab4d96aad7b37ff18176a4";
    
  //     // var apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${userInput}&number=9&instructionsRequired=true&sort=popularity&apikey=${API_Key}`;
    
  //     // fetch(apiUrl).then(function (response) {
  //     //   if (response.ok) {
  //     //     response.json().then(function (data) {
  //     //       // console.log(data);
  //     //       // exerciseArray(data);
  //     //     });
  //     //   } else {
  //     //     alert("Error");
  //     //   }
  //     // });
  //   };

  return (
    <Container>
      <SlideShow />
      <SearchBar setRecipes={setRecipes} />
      {recipes?<CallingCard cardData={recipes} /> : <h1>WELCOME!</h1>}
    </Container>
  );
};

export default Home;
