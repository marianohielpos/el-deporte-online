import React, { Component } from "react";
import { Card, Carousel, Container, Row, Col } from "react-bootstrap";

const Home = (props) => {
  return (
    <div style={{ background: "#2e2d3d" }}>
      <Card>
        <Card.Header>El deporte online</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>Encontraras los mejores precios, las mejores promos!</p>
            <footer className="blockquote-footer">
              el deporte online{" "}
              <cite title="Source Title">lo mejor en la web.</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
 

      <Container >
      
        <Row>
          <Col >
          <Carousel>
        <Carousel.Item style={{ height: "450px" }}>
          <img
            className="d-block w-100"
            src="./static/imagenes/deporte1.jpeg"
            alt="Primero"
          />
          <Carousel.Caption>
            <h3 style={{ color: "black" }}>Las mejores marcas</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "450px" }}>
          <img
            className="d-block w-100"
            src="./static/imagenes/deporte2.jpeg"
            alt="Segundo"
          />

          <Carousel.Caption>
            <h3 style={{ color: "black" }}>Las mejores ofertas</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "450px" }}>
          <img
            className="d-block w-100"
            src="./static/imagenes/deporte3.jpeg"
            alt="Tercero"
          />

          <Carousel.Caption>
            <h3 style={{ color: "black" }}> Las mejores promos!</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
            
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
