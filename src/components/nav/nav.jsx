import Nav from "react-bootstrap/Nav";
const NavMenu = (object) => {

  const objecto = [
    {
      link: "/recetasaludable",
      description: "Recetas Saludables",
    },
    {
      link: "/recetasrapidas",
      description: "Recetas Rapidas",
    },
    {
      link: "/dieta",
      description: "Dieta",
    },
    {
      link: "/nutricion",
      description: "Nutricion",
    },
    {
      link: "/busqueAvanzada",
      description: "Busqueda Avanzada",
    },
  ];

  return (
    <>
      <Nav justify variant="tabs" defaultActiveKey="/">
        {objecto.map(iterator => {
          return (
            <Nav.Item key={ iterator.link}>
              <Nav.Link href={iterator.link}>{iterator.description}</Nav.Link>
            </Nav.Item>
          );
        })}
      </Nav>
    </>
  );
};
export default NavMenu;
