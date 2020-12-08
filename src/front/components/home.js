import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div>
      <h3>Home</h3>
      <Link to={'/catalogo'}>Catalogo</Link>
    </div>
  )
}

export default Home;


