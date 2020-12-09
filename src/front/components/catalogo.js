import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Catalogo = (props) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://0.0.0.0:5000/product/", {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((r) => {
        setProductos(r);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div>Catalogo</div>

      {productos?.map((producto) => (
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <p class="card-text">{producto.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Catalogo;
