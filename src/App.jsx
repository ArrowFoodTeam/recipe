import SearchRecipes from "./components/search/search";
import NavMenu from './components/nav/nav'
// import Cards from './components/Cards/cards';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';



const style = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
};

function App() {
  return (
    <>
      <Router>
        <div className="menu-nav">
          <NavMenu />
          <SearchRecipes style={style} />
        </div>
        <Switch>
          <Route path="/recetasaludable">
            <h1> pagina donde renderizara recetasaludable</h1>
          </Route>
          <Route path="/recetasPais">
            <h1> pagina donde renderizara recetasPais</h1>
          </Route>
          <Route path="/dieta">
            <h1> pagina donde renderizara dieta</h1>
          </Route>
          <Route path="/nutricion">
            <h1> pagina donde renderizara nutricion</h1>
          </Route>
          <Route path="/tiporeceta">
            <h1> pagina donde renderizara tiporeceta</h1>
          </Route>
          <Route path="/busqueAvanzada">
            <h1> pagina donde renderizara busqueAvanzada</h1>
          </Route>
          <Route path="/">
            <h1> pagina donde renderizara inicio</h1>
          </Route>
        </Switch>
      </Router>
    </>
  );
  
} 
export default App;
