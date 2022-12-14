import React,{PureComponent} from 'react'
import Card from '../productcard/productCard'
import  '../../App.scss'
import PropTypes from 'prop-types'
import  styles from './productPage.module.scss'


class ProductPage extends PureComponent{



 render(){

 const {addCards,addFavoritesPage,products,addFavoritesFunc,openModal,clearFavorites,clearCart} = this.props

     return(
<>
   
<header className={styles.header}><h2 className={styles.logo}>Fashion store</h2 ><div className={styles.button_container}><button className={styles.clear_cart_btn}  onClick ={clearCart}>Clear Cart</button><button className={styles.clear_fav_btn} onClick ={clearFavorites}>Clear Favorites</button></div><div className={styles.container}><img className={styles.cart} src="https://toppng.com/uploads/preview/shopping-cart-11530997216xsrc2jr32q.png" alt="cart" /><h2>Added cart:{addCards}</h2>
 <img className={styles.favorite_img} src="./star.png" alt="" /> <h2>Added favorites:{addFavoritesPage}</h2></div></header>
  {products.map(({id,name,price,art,url,addFavorites}) =><Card key={id}  id ={id}  name= {name} price ={price} art ={art} url={url}  fill={addFavorites === false?'#FFFF':'#FFFF00'} addFavoritesFunc={addFavoritesFunc} openModal ={openModal} ></Card>)}
</>)
 }

}

ProductPage.propTypes={

  addCards: PropTypes.number,
products:PropTypes.array.isRequired,
addFavoritesPage:PropTypes.number,
addFavoritesFunc:PropTypes.func.isRequired,
openModal:PropTypes.func.isRequired,
clearFavorites:PropTypes.func.isRequired

}
ProductPage.defaultProps ={
addCards:0,
addFavoritesPage:0

}


export default ProductPage