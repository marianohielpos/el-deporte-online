import React, {Component, useEffect, useState} from "react";
import {
  Badge,
  Card,
  Carousel,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";
import {Link} from "react-router-dom";

const Home = (props) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/product/?trending=true", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((r) => {
        setProductos(r.products);
      })
      .catch((error) => {
        console.log("y ahi va el error", error);
      });
  }, []);

  return (
    <div style={{ background: "#2e2d3d" }}>
      <Card>
        <Card.Header>El deporte online!!</Card.Header>
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
          {productos.map((producto,i) => (
              <Carousel.Item style={{ height: "450px" }}>
                <span className="notify-badge">
                  <h1>
                    <Badge variant="secondary">$ {producto.price}</Badge>
                  </h1>
                </span>
                <img
                    src={producto.image}
                    alt={producto.name}
                    class="img-trending"
                />
                <Carousel.Caption>
                  <h3 style={{ color: "black" }}>{producto.name}</h3>
                </Carousel.Caption>
              </Carousel.Item>
          ))}
      </Carousel>
            
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
