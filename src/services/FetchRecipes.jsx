
const api_di = "23352615";
const app_key = "49117340f2e618191b1633d37cbe08f9"

const FetchRecipes = ({search, from= 0,to = 3}) => {
  const api =encodeURI(`https://api.edamam.com/search?q=${search}&app_id=${api_di}&app_key=${app_key}&from=${from}&to=${to}`)
  return fetch(api) 
}
export default FetchRecipes