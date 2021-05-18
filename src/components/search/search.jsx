import { useState } from 'react'
import SearcHook from '../../hooks/Search-hook/Search-hook'

const SearchRecipes = ({ style }) => {
  
  const [search, setbuscar] = useState("")
  const [recipes] = SearcHook({search})
  
  const handlersubmit = (event) => {
    event.preventDefault()
    if (document.getElementById("recipes").value.length > 0) {
      setbuscar(document.getElementById("recipes").value)
    } else {
      console.log("escribe algo")
    }
  }
   console.log(recipes);

  return (
    <div style={style}>
      <input type="text" name="recipes" id="recipes" />
      <input type="submit" value="Buscar" onClick={handlersubmit} />
    </div>
  )
}
export default SearchRecipes