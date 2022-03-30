import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import data from "../../data/data.json";

export default function SlideShow() {
  return (
    <div>
      <h2 className="text-center">Welcome to Food 4 Thought!</h2>
      <Container className="img__container" fluid>
        <div>
          <Carousel className="p-4">
            {data.map((d, i) => (
              <Carousel.Item className="img__carousel" key={i}>
                <img className="d-block w-100" src={d.imageUrl} alt={d.label} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <h4 className="text-center">
          Search bellow to find a recipe or click the button to find a random
          one!
        </h4>
      </Container>
    </div>
  );
}
