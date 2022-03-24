import React, { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBar = ({setRecipes}) => {
  const searchInput = useRef(null);


  // console.log(searchInput.current.value);

  const runSearch = (e) => {
    e.preventDefault();
    console.log(searchInput.current.value);

    const userInput = searchInput.current.value;

    var API_Key = "baee51bfa3ab4d96aad7b37ff18176a4";
    var apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${userInput}&number=9&instructionsRequired=true&addRecipeInformation=true&sort=popularity&apiKey=${API_Key}`;

    // fetch(`/api/spoonacular/?query=${userInput}`, {
    //   method: "GET",
    //   headers: { "Content-Type": "application/json"
    //   // ,"Access-Control-Allow-Origin": true
    //  },
     fetch(apiUrl, {
      method: "GET",
      headers: { "Content-Type": "application/json"
      // ,"Access-Control-Allow-Origin": true
     },
    }).then((response) => {
      if (response.ok) {
        // console.log(response.json())
        // response.json().then(function (data) {
        //   console.log(data);
        return response.json()}
    }).then((res) => {setRecipes(res.results)})
    .catch(err=> console.log(err))
  };

  return (
    <div>
      <>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Find a recipe</Form.Label>
            <Form.Control
              type="input"
              placeholder="Search..."
              ref={searchInput}
            />
          </Form.Group>
          <Button onClick={runSearch} variant="primary" type="submit">
            Find Random Recipes
          </Button>
        </Form>
      </>
    </div>
  );
};

export default SearchBar;