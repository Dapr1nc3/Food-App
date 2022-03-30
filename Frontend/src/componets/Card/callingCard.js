import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
// import cardData from "../../data/cardData.json";

const CallingCard = ({cardData}) => {
  return (
    <div>
      <Container className="d-flex" style={{ marginTop: '3rem', marginBottom: '5rem'}} fluid>
        <Row className="px-1 my-1 p-1 ">
            {cardData?.map((d) => (
              <Col className="card__space card-spacing grow col" key={d.id}>
                <Card className="text-center card-box" style={{ width: '18rem', marginBottom: '3rem' }}>
                <Card.Img variant="top" src={d.image} className="image-border" />
                <Card.Body>
                  <Card.Title className="text-center">{d.title}</Card.Title>
                  <p>
                    <Card.Text className="text-center scrollable">
                      <div dangerouslySetInnerHTML={{__html: d.summary}}></div>
                    </Card.Text>
                  </p>
                  <Button onClick={()=>{window.location.href=d.sourceUrl}} variant="" className="card-btn">Click Here</Button>
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
