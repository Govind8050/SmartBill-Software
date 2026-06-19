import React from 'react'
import { FaShoppingBag } from "react-icons/fa";

const Cart = ({logo,title,number,linkText,bgColor,color}) => {
  return (
    <>
        <div className='cart'>
                    <div className='imageLog' style={{backgroundColor:bgColor, color:color}}>
                    <span>{logo}</span>
                    </div>
                    <div className='LogoDetails'>
                    <h4>{title}</h4>
                    <p>{number}</p>
                    <a href="#">{linkText}</a>
                </div>
            </div>
    </>

  )
}

export default Cart
