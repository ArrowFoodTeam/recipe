import './App.css';
import SearchRecipes from "./components/search/search";
import NavMenu from './components/nav/nav'
// import Cards from './components/Cards/cards';
import Carrusel from './components/carrusel/carrusel'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const style = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
};

function App() {
  return (
    <>
      
      <div className="menu-nav">
        <NavMenu />
        <SearchRecipes style={style} />
{/*         <Carrusel/> */}
      </div>
    </>
  );
  
} 
export default App;
