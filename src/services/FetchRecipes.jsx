
const FetchRecipes = ({search, from= 0,to = 3}) => {
  const api =encodeURI(`https://pacific-woodland-79761.herokuapp.com/recipes/${search}&from=${from}&to=${to}`)
  return fetch(api) 
}
export default FetchRecipes