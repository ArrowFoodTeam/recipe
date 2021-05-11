import Carousel from 'react-bootstrap/Carousel'

const Carrusel = () => {
  // se puede hacer un array de imagenes y pintar las card caundo se necesite, pasando 
  // como pros

  return (
    <>
      <Carousel>
  <Carousel.Item> {/* inicia de un card del carrusel */}
    <img /* se almacen los datos de de la imagen */
      className="d-block w-100 justyfy-content-center"
      src="https://cdn.pixabay.com/index/2021/04/30/09-58-39-26_1440x480.jpg"
      alt="First slide"
    />
    <Carousel.Caption> {/* los captions */}
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>{/* cierre del carrusel */}
</Carousel>
    </>
  )
}

export default Carrusel