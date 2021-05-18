import { useEffect, useState } from "react";
import fetchrecipes from '../../services/FetchRecipes'

const SearchHook = ({search}) => {

   const [recipes, setrecipes] = useState([]);

   useEffect(() => {
     if (search !== "") {
       fetchrecipes({ search })
         .then((response) => response.json())
         .then((data) => {
           const recipesArray = [];
           for (const iterator of data.hits) {
             recipesArray.push(iterator.recipe);
           }
           setrecipes(
             recipesArray
           ); /* ACTUALIZA EL ESTADO DEL RECIPES (RECETAS) */
         });
     }
   }, [search]);
  
  return [recipes];
}
export default SearchHook;