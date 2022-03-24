import React, { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";


const SearchBar = ({setRecipes}) => {
  const searchInput = useRef(null);

  const runSearch = (e) => {
    e.preventDefault();
    console.log(searchInput.current.value);
    // console.log(process.env);

    const userInput = searchInput.current.value;

    var apiKey = process.env.REACT_APP_MY_API_KEY;
    var apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${userInput}&number=9&instructionsRequired=true&addRecipeInformation=true&sort=random&apiKey=${apiKey}`;

    // fetch(apiUrl, {
    //   method: "GET",
    //   headers: { "Content-Type": "application/json"
    //   // ,"Access-Control-Allow-Origin": true
    //  },
    axios.get(apiUrl)
    .then((response) => {
      if (response.ok) {
        // console.log(response.json())
        return response.json()}
    })
    .then((res) => {setRecipes(res.results)})
    .catch(err=> console.log(err))
  };


  return (
    <div>
      <>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label></Form.Label>
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