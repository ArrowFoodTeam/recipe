import Buscador from '../../components/Buscador';
import React, { Component } from 'react';
import Resultado from '../../components/Resultado';

class Filtros extends Component {

  state = {
    termino: '',
    imagenes : []
  }

  consultarApi = () =>{
    const termino = this.state.termino;
    const APP_ID="1a0fff68";
    const APP_KEY="8e2ca551686efaf2d0a519ab8e7de94d";
    const url = `https://api.edamam.com/search?q=${termino}&app_id=${APP_ID}&app_key=${APP_KEY}`;
   
    fetch(url).
    then(datos => datos.json() ).
    then(resultado =>this.setState({imagenes: resultado.hits}))

  }

  datosBusqueda = (termino) => {
    this.setState({
      termino
    }, () => {
      this.consultarApi();
    })
   }

render (){
  return (
    <div className="App container">
     <div className="jumbotron">
       <p className="lead text-center">Buscador</p>
       <Buscador 
        datosBusqueda={this.datosBusqueda}
       />
     </div>
     <Resultado 
     imagenes ={this.state.imagenes}
     />
    </div>
  );
}
} 
export default Filtros;
