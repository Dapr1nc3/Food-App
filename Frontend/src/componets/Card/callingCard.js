import React, { useState } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";
import Auth from "../../utils/auth";
import UseLocalStorage from "../localStorage/useLocalStorage";
// import cardData from "../../data/cardData.json";

const CallingCard = ({ cardData, showButton, showDelete }) => {
  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: Auth.getProfile().data.username },
  });

  const user = data?.me || data?.user || {};
  const savedRecipes = JSON.parse(localStorage.getItem(user.username));

  const handleUnsave = (id) => {
    const removedSavedRecipe = savedRecipes?.filter(
      (recipe) => recipe.id !== id
    );
    localStorage.setItem(user.username, JSON.stringify(removedSavedRecipe));
    window.location.reload();
  };

  const handleSave = (recipe) => {
    let recipeArray = savedRecipes ? savedRecipes : [];
    recipeArray.push(recipe);
    // const savedRecipe = {
    //   [user.username]: { recipe },
    // };
    localStorage.setItem(user.username, JSON.stringify(recipeArray));
  };

  let [value, setValue] = UseLocalStorage("name", "");
  return (
    <div>
      <Container
        className="d-flex"
        style={{ marginTop: "3rem", marginBottom: "5rem" }}
        fluid
      >
        <Row className="px-1 my-1 p-1 ">
          {cardData?.map((d) => (
            <Col className="card__space card-spacing grow col" key={d.id}>
              <Card
                className="text-center card-box"
                style={{ width: "18rem", marginBottom: "3rem" }}
              >
                <Card.Img
                  variant="top"
                  src={d.image}
                  className="image-border"
                />
                <Card.Body>
                  <Card.Title className="text-center">{d.title}</Card.Title>
                  <p>
                    <Card.Text className="text-center scrollable">
                      <div
                        dangerouslySetInnerHTML={{ __html: d.summary }}
                      ></div>
                    </Card.Text>
                  </p>
                  {showButton && (
                    <>
                      <Button
                        className="card-btn"
                        onClick={() => {
                          window.location.href = d.sourceUrl;
                        }}
                        variant="primary"
                      >
                        Learn More
                      </Button>
                      <Button
                        className="card-btn"
                        onClick={() => handleSave(d)}
                        variant="primary"
                      >
                        Save
                      </Button>
                    </>
                  )}
                  {showDelete && (
                    <Button
                      className="card-btn"
                      onClick={() => handleUnsave(d.id)}
                      variant="primary"
                    >
                      Unsave
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CallingCard;
