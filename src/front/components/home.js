import React, { Component } from 'react';
import { Card } from "react-bootstrap";


const Home = (props) => {
  return (
    <div>
     <Card>
  <Card.Header>El deporte online</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        Encontraras los mejores precios, las mejores promos!
      </p>
      <footer className="blockquote-footer">
        el deporte online <cite title="Source Title">lo mejor en la web.</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
    </div>
  )
}

export default Home;


