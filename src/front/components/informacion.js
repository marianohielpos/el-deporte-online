import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const Informacion = (props) => {
    return (
        <div style={{ background: "#2e2d3d", width: "50rem" }}>
            <Card >
        <Card.Header>Acerca de Nosotros</Card.Header>
        <Card.Body>
          <blockquote className="text-center">
            <p>El Deporte On-line es la herramienta disponible para la compra de todas tus necesidades deportivas.</p>
            <p>Año tras año, nos caracterizamos por nuestro compromiso por la satisfacción del cliente.</p>
            <p>Acá vas a encontrar algunas de tus marcas favoritas. Entre ellas:</p>
          </blockquote>
        </Card.Body>
        <Card.Img variant="top" src="./static/imagenes/marcasDeportivas.jpeg"/>
      </Card>
        </div>

    );
};

export default Informacion;