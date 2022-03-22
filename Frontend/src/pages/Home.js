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
    </Container>
  );
};

export default Home;