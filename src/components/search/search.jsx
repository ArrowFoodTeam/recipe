import fetchrecipes from '../../services/FetchRecipes'
import { useEffect, useState} from 'react'
const SearchRecipes = () => {

  const [search, setbuscar] = useState("")
  const [recipes, setrecipes] = useState([])
  useEffect(() => {
    if (search !== "") {
      fetchrecipes({ search })
        .then(response => response.json())
        .then(data => {
          const recipesArray = []
          for (const iterator of data.hits) {
            recipesArray.push(iterator.recipe)
          }
         setrecipes(recipesArray)
        })
    }
  },[search])
  
  const handlersubmit = (event) => {
    event.preventDefault()
    if (document.getElementById("recipes").value.length > 0) {
      setbuscar(document.getElementById("recipes").value)
    } else {
      console.log("escribe algo")
    }
    console.log(recipes);
  }

  return (
    <>
      <input type="text" name="recipes" id="recipes" />
      <input type="submit" value="enviar" onClick={handlersubmit}/>
    </>
  )
}
export default SearchRecipes