import React from 'react'
import { FaShoppingBag } from 'react-icons/fa';
import { TbNotes } from "react-icons/tb";
import { FiBox } from "react-icons/fi";
import { TrendingDown } from "lucide-react";
import Cart from './Cart';

const FourCart = () => {
  return (
    <>
        <div className='center-soul'>
                <Cart
                  logo={<FaShoppingBag/>}
                  title="Total Products"
                  number="128"
                  linkText="View all Products"
                  bgColor="blue"
                />
                <Cart
                  logo={<TrendingDown/>}
                  title="Today's Sales"
                  number="12,450.00"
                  linkText="+12% from yesterday"
                  bgColor="green"

                />
                <Cart
                  logo={<TbNotes/>}
                  title="Total Bills"
                  number="36"
                  linkText="View all bills"
                  bgColor="rgb(138, 181, 38)"
                  />
                <Cart
                  logo={<FiBox/>}
                  title="Low Stock"
                  number="5"
                  linkText="view products"
                  bgColor="red"
                  />
              </div>
    </>
  )
}

export default FourCart
