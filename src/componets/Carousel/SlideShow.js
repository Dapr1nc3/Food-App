import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import data from "../../data/data.json";

export default function SlideShow() {
  return (
    <div>
      <Carousel>
        {data.map((d, i) => (
          <Carousel.Item key={i}>
            <img className="d-block w-100" src={d.imageUrl} alt={d.label} />

            <Carousel.Caption>
              <h3>{d.label}</h3>
              <p>{d.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
