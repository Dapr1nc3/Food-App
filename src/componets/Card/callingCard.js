import React from "react";
import { Container, Card, CardGroup, Button, Row, Col } from "react-bootstrap";
import cake from "../../assets/images/cake.jpg";
import cardData from "../../data/cardData.json";

const CallingCard = () => {
  return (
    <div>
      <Container className="d-flex" fluid>
        <Row className="px-4 my-5 p-2">
          <Col>
            {cardData.map((d, i) => (
              <CardGroup className="card__space">
                <Card>
                  <Card.Img variant="top" src={cake} />
                  <Card.Body>
                    <Card.Title>{d.title}</Card.Title>
                    <Card.Text>{d.cardText}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button variant="primary">{d.btn}</Button>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src={cake} />
                  <Card.Body>
                    <Card.Title>{d.title}</Card.Title>
                    <Card.Text>{d.cardText}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button variant="primary">{d.btn}</Button>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src={cake} />
                  <Card.Body>
                    <Card.Title>{d.title}</Card.Title>
                    <Card.Text>{d.cardText}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button variant="primary">{d.btn}</Button>
                  </Card.Footer>
                </Card>
              </CardGroup>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CallingCard;
