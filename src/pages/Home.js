import React from "react";
import { Container } from "react-bootstrap";
import SlideShow from "../componets/Carousel/SlideShow";
import CallingCard from "../componets/Card/callingCard";


const Home = () => {
  return (
    <Container>
      <SlideShow />
      <CallingCard />
    </Container>
  );
};

export default Home;
