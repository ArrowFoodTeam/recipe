import React, { Component } from 'react';

class BuscadorporCalorias extends Component {
    busquedaRef = React.createRef();
    obtenerDatos = (e) => {
        e.preventDefault();

        const calorias = this.busquedaRef.current.value;

        this.props.datosBusqueda(calorias);
    }
    render (){
        return (
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="number" className="form-control form-control-lg" placeholder="Busca tu Receta por calorias/kcal" step="50" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn-lg btn-danger btn-block col-12" value="Buscar" />
                    </div>
                </div>
            </form>
        );
    }
}

export default BuscadorporCalorias;