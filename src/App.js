import './App.css';
import SearchRecipes from "./components/search/search";
import Carrusel from './components/carrusel/carrusel'
import NavMenu from './components/nav/nav'
import Cards from './components/Cards/cards';

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
        <Carrusel />
        <Cards/>
      </div> 
    </>
  );
  
} 
export default App;
