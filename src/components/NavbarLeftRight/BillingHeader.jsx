import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { IoMdHome } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import { TbNotes } from "react-icons/tb";
import { MdGroup } from "react-icons/md";
import { LuChartNoAxesColumnIncreasing } from "react-icons/lu";
import { IoIosSettings } from "react-icons/io";


const BillingHeader = ({setActivePage}) => {
  return (
          <div className='Billing_c'>
                <div className='Element'>
                <div className='same-line'>
                    <span><FiShoppingCart/></span>
                    <h2>SmartBill</h2>
                </div>
                    <p>Billing Software</p>
                </div>
                <div className='All_btn'>
                    <button
                     className='Btn_Filter'
                     onClick={()=>setActivePage('dashboard')}
                     >
                     <IoMdHome/> Dashboard</button>
                    <button className='Btn_Filter' onClick={()=>setActivePage('product')}><AiFillProduct/> Products</button>
                    <button className='Btn_Filter' onClick={()=>setActivePage('billing')}><FiShoppingCart/> Billing</button>
                    <button className='Btn_Filter' onClick={()=>setActivePage("sales-history")}><TbNotes /> Sales History </button>
                    <button className='Btn_Filter' onClick={()=>setActivePage('customer')}><MdGroup /> Customers</button>
                    <button className='Btn_Filter' onClick={()=>setActivePage("settings")}><IoIosSettings/> Settings</button>
                </div>
            </div>
  )
}

export default BillingHeader
