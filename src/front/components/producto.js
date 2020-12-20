import React, { useState, useEffect } from "react";
import {Card,    Button, ListGroup, Form, Badge} from "react-bootstrap";

const Producto = (props) => {
  const [product, setProduct] = useState([]);
  const [evaluations, setEvaluations] = useState([]);

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

  useEffect(getEvaluations, []);

  function getEvaluations() {
    fetch("http://localhost:5000/api/product/"+ props.location.props.producto+"/evaluation", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((r) => {
        setEvaluations(r);
      })
      .catch((error) => {
        console.log("y ahi va el error", error);
      });
  }


  function renderEvaluations() {
      if (evaluations.length > 0) {
          console.log(evaluations)
          return (
                <div className={"border p-2"}>
                    <div>Comentarios y valoraciones</div>
                    <ListGroup>
                        {
                            evaluations.map(evaluation => {
                                return (<ListGroup.Item>
                                    <div>
                                        Comentario: <i>{evaluation.comment}</i>
                                    </div>
                                    <div>
                                        Valoración: <b>{evaluation.rating}</b>
                                    </div>
                                </ListGroup.Item>)
                            })
                        }
                    </ListGroup>
                </div>
          )
      }

      return <div>No hay comentarios</div>
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    event.stopPropagation()

    fetch("http://localhost:5000/api/product/"+ props.location.props.producto+"/evaluation", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        "rating": event.target.elements[0].value,
        "comment": event.target.elements[1].value
      })
    })
      .then(() => {
          return getEvaluations()
      })
      .catch((error) => {
        console.log("y ahi va el error", error);
      });
  };

  function renderEvaluationForm() {
      return (
          <Form className={"border mt-3 mb-3 p-2"} onSubmit={handleSubmit}>
              Evaluá el producto
              <Form.Group name="rating" type="number">
                <Form.Label>Rating</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group name="comment" type="text">
                <Form.Label>Dejanos un comentario</Form.Label>
                <Form.Control as="textarea" rows={2} />
              </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
      )
  }


  return (
    <div style={{ background: "#2e2d3d", width: "30rem" }}>
        <Card>
            <Card.Header>{product.name}</Card.Header>
            <span className="product-price-badge">
                  <h2>
                    <Badge variant="secondary">$ {product.price}</Badge>
                  </h2>
                </span>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <p>{product.short_description}</p>
                <p>{product.long_description}</p>
                {renderEvaluations()}
                {renderEvaluationForm()}
            <Button variant="primary">Agregar al carrito</Button>
            </Card.Body>
        </Card>
    </div>
  );
};

export default Producto;
