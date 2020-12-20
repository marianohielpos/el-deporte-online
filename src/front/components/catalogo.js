import React, { useState, useEffect } from "react";
import { Card, Button, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Catalogo = (props) => {
  let history = useHistory();
  const [input, setInput] = useState('');
  const [productos, setProductos] = useState([]);

  const updateInput = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
    
    fetch("http://localhost:5000/api/product/?query=" + event.target.value, {
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
  };

  useEffect(() => {
    console.log('test');
    fetch("http://localhost:5000/api/product/?query=" + input, {
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

  const ordenarPorNombre = () => {
    let productosCopia = productos.slice();

    productosCopia.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

    console.log("prod", productosCopia);
    setProductos(productosCopia);
  };



  return (
    <div>
      <h1>Catalogo</h1>
      <div className = {"m-3"}>
         <SearchBar
          input={input}
          onChange={updateInput}
          />

        <Button variant="primary" onClick={() => ordenarPorNombre()} className = {"ml-3"}>
          Ordenar alfabeticamente
        </Button>
      </div>

      <Row>
        {productos.map((producto, i) => (
          <Card style={{ width: "18rem", margin: "10px" }} key={i}>
            <Card.Img
              variant="top"
              src={producto.image || "./static/imagenes/imagen-camara.jpg"}
            />
            <Card.Body>
              <Card.Title>{producto.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{producto.short_description}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Algun link</Card.Link>
            </Card.Body>
            <Card.Body>
              <Link
                className="btn btn-primary"
                to={{
                  pathname: "/producto/" + producto.id,
                  props: { producto: producto.id },
                }}
              >
                Ver Producto
              </Link>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </div>
  );
};

export default Catalogo;
