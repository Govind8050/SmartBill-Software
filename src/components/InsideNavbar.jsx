import React, { useEffect, useRef, useState } from 'react'
import BillingHeader from './NavbarLeftRight/BillingHeader'
import { FiShoppingCart } from "react-icons/fi";
import NavLeft from './NavbarLeftRight/NavLeft'
import NavRight from './NavbarLeftRight/NavRight'
import FourCart from './FourCart'
import SalesChart from './NavbarLeftRight/SalesOverview/SalesChart';
import Products from './NavbarLeftRight/Products';
import BillingTemplate from './NavbarLeftRight/BillingTemplate';
import BillingComponent from './NavbarLeftRight/BillingComponent';
import {initialProducts} from "../components/NavbarLeftRight/InitialProductData"
import { FaPlus } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";


import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import SalesHistory from './SalesHistory';

const salesData=[
  {day:"Mon",sales:2000},
  {day:"Tue",sales:2200},
  {day:"Wed",sales:1800},
  {day:"Thu",sales:3000},
  {day:"Fri",sales:2500},
  {day:"Sat",sales:4000},
  {day:"Sun",sales:3500},
]




const InsideNavbar = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const [products, setProducts]=useState(initialProducts);
  
  // const [showForms, setShowForms]=useState(false);
  // const fileInputRef=useRef(null);


  return (
    <>
        <div className='Navbar'>
            <BillingHeader setActivePage={setActivePage}/>
        <div className='right-section'>
              <div className='Normal'>
                  <NavLeft/>
                  <NavRight/>
              </div>
              {activePage=="dashboard" &&(
                <>
                <FourCart/> 
                <div className='sales-chart-container'>
                <div className='LeftDivs'>
                  <h2>Sales Overview</h2>

                  <ResponsiveContainer width="70%" height={500}>
                    <LineChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day"/>
                      <YAxis />
                      <Tooltip />
                      <Line
                          type="monotone"
                          dataKey="sales"
                          stroke='#4f46e5'
                          strokeWidth={3}
                        />
                    </LineChart>
                  </ResponsiveContainer>
                  </div>
                  <div className='RightDivs'>
                  <SalesChart/>
                  </div>
                </div>
                </>
              )}

              {
                activePage==="product"&&(
                  <Products
                    products={products}
                    setProducts={setProducts}
                  />
                )
              }

              {
                activePage==="billing" &&(
                  <BillingComponent
                  products={products}
                  setProducts={setProducts} />
                )
              }

              {
                activePage==="sales-history" &&(
                  <SalesHistory
                    products={products}
                    setProducts={setProducts}
                  />
                )
              }

              {
                activePage==="customer" &&(
                  <div className='CustomerMain'>
                    <div className='CustomerChild'>
                      <input type="text" placeholder='Search customer by name, phone or email...' />
                      <select>
                        <option value="">Select Product </option>
                        {products.map((product,index)=>(
                          <option 
                          key={index}
                          value={product.ProductName}>
                            {product.ProductName}
                          </option>
                        ))}
                      </select>
                      <div className='btnChild'>
                        <button className='ProductsCase' onClick={()=>setShowForms(true)}><FaPlus/> Add Product</button>
                        <button className='ProductsCase1' onClick={()=>fileInputRef.current.click()}><FaFileAlt /> Import </button>
                      </div>
                      
                      
                    </div>
                    <table style={{"margin-top":"12px"}}>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Customer Name</th>
                          <th>Phone</th>
                          <th>Email</th>
                          <th>Address</th>
                          <th>Total Bills</th>
                          <th>Total Spent </th>
                          <th>Last Purchase </th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((bill,index)=>(
                          <tr key={index}>
                            <td>{bill.numCount}</td>
                            <td>{bill.customerName}</td>
                            <td>{bill.MobNo}</td>
                            <td>{bill.EmailId}</td>
                            <td>{bill.Address}</td>
                            <td>{bill.Bills}</td>
                            <td>{bill.Spent}</td>
                            <td>{bill.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )
              }

              {
                activePage==="settings" &&(
                  <div style={{display:"flex", justifyContent:"center", alignItems:"center",height:"70vh"}}>
                   <h4 style={{textAlign:"center", fontSize:"1.5rem"}}>Under Maintenence coming soon......</h4>
                  </div>
                )
              }

            </div>
        </div>
    </>
  )
}

export default InsideNavbar
