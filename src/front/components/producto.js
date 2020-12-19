import React, { useState, useEffect } from "react";
import {Card,    Button, ListGroup} from "react-bootstrap";

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

  useEffect(() => {
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
  }, []);

  function render_evaluations() {
      if (evaluations.length > 0) {
          console.log(evaluations)
          return (
                <div>
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


  return (
    <div style={{ background: "#2e2d3d", width: "30rem" }}>
        <Card>
            <Card.Header>{product.name}</Card.Header>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <p>{product.short_description}</p>
                <p>{product.long_description}</p>
                {render_evaluations()}
            <Button variant="primary">Agregar al carrito</Button>
            </Card.Body>
        </Card>
    </div>
  );
};

export default Producto;
