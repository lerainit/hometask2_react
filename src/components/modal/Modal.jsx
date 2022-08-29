import React,{PureComponent} from 'react';
import '../../App.scss';
import PropTypes from 'prop-types'
import './modal.scss'



class Modal extends PureComponent{
  
    render(){
  const {text,backgroundColor,color,handleClick,addCart}  = this.props 

return(
<>

<div className='modal' >
  <div className='modal_main_container' style={{backgroundColor,color}} text ={text}  >
 
<button className='close_btn' onClick ={handleClick}>X</button>

<p>{text}</p>
<button className='modal_btn' onClick ={addCart} >Add to cart</button>
</div>
</div>

</>
  ) 

}


}

Modal.propTypes ={
text: PropTypes.string ,
backgroundColor:PropTypes.string ,
color:PropTypes.string ,
handleClick:PropTypes.func.isRequired,
addCart:PropTypes.func.isRequired 

}

Modal.defaultProps ={
text:'add this cart',
backgroundColor:'lightgreen',
color:'#000',


}


export default Modal