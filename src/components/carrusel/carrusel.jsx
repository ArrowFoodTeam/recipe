import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import './carrousel.css'
const Carrusel = () => {
  // se puede hacer un array de imagenes y pintar las card caundo se necesite, pasando
  // como pros
  const objecto = [
    {
      img:
        "https://cdn7.recetasdeescandalo.com/wp-content/uploads/2020/03/Recetas-de-cuarentena-para-comer-bien-durante-el-confinamiento.jpg",
      alt: "alt1",
      label: "label1",
      description: "description1",
    },
    {
      img:
        "https://lacocinademasito.com/wp-content/uploads/10-recetas-faciles-para-el-fin-de-semana.jpg",
      alt: "alt2",
      label: "label2",
      description: "description2",
    },
  ];
  
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="mt-5">
      <Carousel activeIndex={index} onSelect={handleSelect} className="center">
        {objecto.map((iterator) => {
          return (
            <Carousel.Item key={iterator.img}>
              <img className="w-100" src={iterator.img} alt={iterator.alt} />
              <Carousel.Caption>
                <h3>{iterator.label}</h3>
                <p>{iterator.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Carrusel;
