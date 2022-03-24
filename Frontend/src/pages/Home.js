import React from "react";
import { Container } from "react-bootstrap";
import SlideShow from "../componets/Carousel/SlideShow";
import CallingCard from "../componets/Card/callingCard";
import Search from "../componets/Search/Search";
import BottomPage from "../componets/Footer/BottomPage";

const Home = () => {
  return (
    <Container>
      <SlideShow />
      <Search />
      <CallingCard />
      <BottomPage />
    </Container>
  );
};

export default Home;
