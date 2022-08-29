fetch('productsJSON.json').then(response => response.json()).then(result => {
    
    console.log(result)
    localStorage.setItem('products',JSON.stringify(result))
  })
  
  const products = JSON.parse(localStorage.getItem('products'))
  
 

export default products