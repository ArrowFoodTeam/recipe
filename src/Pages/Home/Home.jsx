import React, { Component } from 'react';
import Example from '../../components/Carrusel';
class Home extends Component {

render (){
  return (
    <div>
    <div className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
      <a className="navbar-brand" href="">Home</a>
      <div className="navbar-nav me-auto">
        <div className="nav-nav-item">
        <a className="nav-link active" href="">Buscardor</a> 
        </div>  
        <div className="nav-nav-item">
        <a className="nav-link active" href="">Comida por Estilo</a> 
        </div>
        <div className="nav-nav-item">
        <a className="nav-link active" href="">Comida Por calorías</a> 
        </div>
        <div className="nav-nav-item">
        <a className="nav-link active" href="">Comida Saludable</a> 
        </div>  
        </div>
      </div>
    </div>
    <Example />
    </div>
  );
}
} 
export default Home;
