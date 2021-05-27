import React from 'react';
const Imagen = (props) => {
    const {recipe} = props.imagen;   
    return (
        <div className="col-12 col-6 col-md-4 col-lg-3 mb-4">
            <div className="card-body">
            <p className="card-header">{recipe.label}</p>
            <img src={recipe.image} alt="Error al cargar la imagen" className="card-img-top" />
            <button type="button" className="btn col-12 btn-block btn-outline-info"   onClick={() => this.handleChange(false)}>Ingredientes</button>
            </div>
        </div>
    )
}

export default Imagen;