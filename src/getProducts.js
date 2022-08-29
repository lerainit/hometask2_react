const initLocalStorage = () =>{
 // if(!localStorage.getItem('products')){
   // (async() => {const products = await fetch('productsJSON.json').then(response => response.json())


//localStorage.setItem('products',JSON.stringify(products))})()}
 let addCardsArr =[]

if(!localStorage.getItem('addCards')){
localStorage.setItem('addCards',JSON.stringify(addCardsArr))
}
if(!localStorage.getItem('addFavorites')){
  localStorage.setItem('addFavorites',JSON.stringify([]))
  }}

export default initLocalStorage;