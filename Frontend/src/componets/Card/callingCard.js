import React from "react";
import { Container, Card, CardGroup, Button, Row, Col } from "react-bootstrap";
import cake from "../../assets/images/cake.jpg";
// import cardData from "../../data/cardData.json";

const CallingCard = ({cardData}) => {
  return (
    <div>
      <Container className="d-flex" fluid>
        <Row className="px-1 my-1 p-1">
          <Col>
            {cardData?.map((d) => (
              // <CardGroup className="card__space card-spacing" key={i}>
                <Card className="card-spacing grow" key={d.id}>
                  <Card.Img variant="top" src={d.image} className="image-border" />
                  <Card.Body>
                    <Card.Title className="text-center">{d.title}</Card.Title>
                    <Card.Text className="text-center">{d.summary}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-center">
                    <Button onClick={()=>{window.location.href=d.sourceUrl}} variant="primary">Click Here</Button>
                  </Card.Footer>
                </Card>
            ))}
                {/* <Card className="card-spacing grow">
                  <Card.Img variant="top" src={cake} className="image-border" />
                  <Card.Body>
                    <Card.Title className="text-center">{d.title}</Card.Title>
                    <Card.Text className="text-center">{d.cardText}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-center">
                    <Button variant="primary">{d.btn}</Button>
                  </Card.Footer>
                </Card>
                <Card className="card-spacing grow">
                  <Card.Img variant="top" src={cake} className="image-border" />
                  <Card.Body>
                    <Card.Title className="text-center">{d.title}</Card.Title>
                    <Card.Text className="text-center">{d.cardText}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-center">
                    <Button variant="primary">{d.btn}</Button>
                  </Card.Footer>
                </Card>
              </CardGroup> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CallingCard;
