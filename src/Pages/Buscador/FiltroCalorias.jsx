import BuscadorporCaloriasporCalorias from '../../components/BuscadorporCalorias';
import React, { Component } from 'react';
import Resultado from '../../components/Resultado';

class Filtros extends Component {

  state = {
    caloriasmin: '',
    caloriasmax:'',
    imagenes : []
  }

  consultarApi = () =>{
    const caloriasmin = this.state.caloriasmin;  
    const caloriasmax=this.state.caloriasmax;
    const APP_ID="1a0fff68";
    const APP_KEY="8e2ca551686efaf2d0a519ab8e7de94d";
    const url = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&calories=${caloriasmin}-${caloriasmax}`;
   
    fetch(url).
    then(datos => datos.json() ).
    then(resultado =>this.setState({imagenes: resultado.hits}))

  }

  datosBusqueda = (caloriasmin,caloriasmax) => {
    this.setState({
        caloriasmin,caloriasmax
    }, () => {
      this.consultarApi();
    })
   }

render (){
  return (
    <div className="App container">
     <div className="jumbotron">
       <p className="lead text-center">Buscador</p>
       <BuscadorporCalorias 
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
