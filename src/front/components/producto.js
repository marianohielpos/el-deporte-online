import React, { useState, useEffect } from "react";
import {Card,    Button} from "react-bootstrap";

const Producto = (props) => {
  const [product, setProduct] = useState([]);

  console.log("Properties:", props)
  useEffect(() => {
    fetch("http://localhost:5000/api/product/"+ props.location.props.producto, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((r) => {
        setProduct(r);
      })
      .catch((error) => {
        console.log("y ahi va el error", error);
      });
  }, []);

  return (
    <div style={{ background: "#2e2d3d", width: "30rem" }}>
        <Card>
            <Card.Header>{product.name}</Card.Header>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <p>{product.short_description}</p>
                <p>{product.long_description}</p>
            <Button variant="primary">Agregar al carrito</Button>
            </Card.Body>
        </Card>
    </div>
  );
};

export default Producto;
