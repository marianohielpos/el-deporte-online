import React, { useState, useEffect } from "react";
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";

const Catalogo = (props) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/product/", {
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
    <div>
      <h1>Catalogo</h1>

      {productos.map((producto,i) => (
        <Card style={{ width: "18rem", margin: "10px"}} key={i}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>{producto.name}</Card.Title>
            <Card.Text>{producto.long_description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{producto.short_description}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Algun link</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Catalogo;
