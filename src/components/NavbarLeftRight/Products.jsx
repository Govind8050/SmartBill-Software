import React, { useState, useRef } from 'react';
import { IoSearch } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import SalesChart from './SalesOverview/SalesChart';
// import Products from './Products';



const Products = ({products,setProducts}) => {
    // const [activePage, setActivePage] = useState("dashboard");
      const [category,setCategory]=useState("");
     //DeleteBtn For Action last
      const [editingProduct,setEditingProducts]=useState(null);
    
      const [editIndex, setEditIndex]=useState(null)

      const [showForms, setShowForms]=useState(false);
      
      const [newProduct,setNewProducts]=useState({
        numCount:"",
        ProductName:"",
        Category:"",
        Barcode:"",
        Price:"",
        Stock:"",
        gst:""
      })
      const fileInputRef=useRef(null);
      const handleFileChange=(e)=>{
        const file=e.target.files[0];

        if(file){
          console.log("Selected File: ",file.name);
          alert(`Selected file: ${file.name}`);
          
        }
      }
      const handleAddProduct=()=>{
        setProducts([
          ...products,
          newProduct
        ]);
        setNewProducts({
          numCount:"",
          ProductName:"",
          Category:"",
          Barcode:"",
          Price:"",
          Stock:"",
          gst:""
        });
        setShowForms(false)
      }

      const handleDelete=(index)=>{
        const updateProducts=products.filter((_,i)=>i!==index);
        setProducts(updateProducts);
      }
    
      const handleEdit=(product)=>{
        setEditingProducts(product)
      }
  return (
    <>
                          <div className='Products'>
                            <h2>Products</h2>
                            {
                              showForms&&(
                                <div className='addProductForms'>
                                  <input type="number"
                                  placeholder='#'
                                  value={newProduct.numCount}
                                  onChange={(e)=>setNewProducts({
                                    ...newProduct,
                                    numCount:e.target.value
                                  })}
                                   />
                                   <input type="text"
                                   placeholder='Product name' 
                                    value={newProduct.ProductName}
                                    onChange={(e)=>
                                    setNewProducts({
                                      ...newProduct,
                                      ProductName:e.target.value
                                    })
                                    }
                                   />
                                   <input type="text"
                                   placeholder='Category'
                                   value={newProduct.Category}
                                   onChange={(e)=>
                                   setNewProducts({
                                    ...newProduct,
                                    Category:e.target.value
                                   })
                                   }
                                  />
                                  <input type="text"
                                  placeholder='Barcode'
                                  value={newProduct.Barcode}
                                  onChange={(e)=>setNewProducts({
                                    ...newProduct,
                                    Barcode:e.target.value
                                  })} />
                                  <input type="number"
                                  placeholder='Price'
                                  value={newProduct.Price}
                                  onChange={(e)=>setNewProducts({
                                    ...newProduct,
                                    Price:e.target.value
                                  })} />
                                  <input type="number"
                                  placeholder='Stock'
                                  value={newProduct.Stock}
                                  onChange={(e)=>setNewProducts({
                                    ...newProduct,
                                    Stock:e.target.value
                                  })} />
                                  <input type="number"
                                  placeholder='GST'
                                  value={newProduct.gst}
                                  onChange={(e)=>setNewProducts({
                                    ...newProduct,
                                    gst:e.target.value
                                  })} />
                                  <button onClick={handleAddProduct}>Save Product</button>
                                </div>
                              )
                            }
                            <div className='CenterInput'>
                            <div className='leftInput'>
                              <IoSearch/>
                              <input type="text" placeholder='Search Products by name, barcode...'/>
                            </div>
                            <div className='RightInput'>
                                      <select
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                      >
        
                                        <option value="">Select Category</option>
        
                                        <option value="electronics">Electronics</option>
        
                                        <option value="grocery">Grocery</option>
        
                                        <option value="clothes">Clothes</option>
        
                                        <option value="medicine">Medicine</option>
        
                                        <option value="shoes">Shoes</option>
        
                                      </select>
                                      <div style={{display:"flex", gap:"15px"}}>
                                        <button className='ProductsCase' onClick={()=>setShowForms(true)}><FaPlus/> Add Product</button>
                                        <button className='ProductsCase1' onClick={()=>fileInputRef.current.click()}><FaFileAlt /> Import </button>
                                       <input
                                          type="file"
                                          ref={fileInputRef}
                                          style={{ display: "none" }}
                                          onChange={handleFileChange}
                                        />
                                      </div>
                            </div>
                            
                            </div>
                            
                              <table>
                                  <thead>
                                      <tr>
                                            <th>#</th>
                                            <th>Product Name</th>
                                            <th>Category</th>
                                            <th>Barcode</th>
                                            <th>Price (₹)</th>
                                            <th>Stock </th>
                                            <th>gst (%)</th>
                                            <th>Action</th>
        
                                      </tr>
                                  </thead>
                                  <tbody>
                                    {products.map((bill,index)=>(
                                        <tr key={index}>
                                            <td>{bill.numCount}</td>
                                              <td>{editIndex===index ?(
                                                <input type="text"
                                                value={bill.ProductName}
                                                onChange={(e)=>{
                                                  const updatedProducts=[...products];
                                                  updatedProducts[index].ProductName=e.target.value;
                                                  setProducts(updatedProducts);
                                                }}
                                                onBlur={()=>setEditIndex(null)}

                                                onKeyDown={(e)=>{
                                                  if(e.key=== "Enter"){
                                                    setEditIndex(null)
                                                  }
                                                }}
                                                  />

                                              ):(
                                                bill.ProductName
                                              )}</td>

                                              <td>{editIndex===index ?(
                                                <input type="text"
                                                value={bill.Category}
                                                onChange={(e)=>{
                                                  const updatedProducts=[...products];
                                                  updatedProducts[index].Category=e.target.value;
                                                  setProducts(updatedProducts);
                                                }}
                                                onBlur={()=>setEditIndex(null)}

                                                onKeyDown={(e)=>{
                                                  if(e.key=== "Enter"){
                                                    setEditIndex(null)
                                                  }
                                                }}
                                                  />

                                              ):(
                                                bill.Category
                                              )}</td>
                                              <td>{editIndex===index ?(
                                                <input type="text"
                                                value={bill.Barcode}
                                                onChange={(e)=>{
                                                  const updatedProducts=[...products];
                                                  updatedProducts[index].Barcode=e.target.value;
                                                  setProducts(updatedProducts);
                                                }}
                                                onBlur={()=>setEditIndex(null)}

                                                onKeyDown={(e)=>{
                                                  if(e.key=== "Enter"){
                                                    setEditIndex(null)
                                                  }
                                                }}
                                                  />

                                              ):(
                                                bill.Barcode
                                              )}</td>
                                              <td>{editIndex===index ?(
                                                <input type="text"
                                                value={bill.Price}
                                                onChange={(e)=>{
                                                  const updatedProducts=[...products];
                                                  updatedProducts[index].Price=e.target.value;
                                                  setProducts(updatedProducts);
                                                }}
                                                onBlur={()=>setEditIndex(null)}

                                                onKeyDown={(e)=>{
                                                  if(e.key=== "Enter"){
                                                    setEditIndex(null)
                                                  }
                                                }}
                                                  />

                                              ):(
                                                bill.Price
                                              )}</td>
                                              <td>{editIndex===index ?(
                                                <input type="text"
                                                value={bill.Stock}
                                                onChange={(e)=>{
                                                  const updatedProducts=[...products];
                                                  updatedProducts[index].Stock=e.target.value;
                                                  setProducts(updatedProducts);
                                                }}
                                                onBlur={()=>setEditIndex(null)}

                                                onKeyDown={(e)=>{
                                                  if(e.key=== "Enter"){
                                                    setEditIndex(null)
                                                  }
                                                }}
                                                  />

                                              ):(
                                                bill.Stock
                                              )}</td>
                                              <td>{editIndex===index ?(
                                                <input type="text"
                                                value={bill.gst}
                                                onChange={(e)=>{
                                                  const updatedProducts=[...products];
                                                  updatedProducts[index].gst=e.target.value;
                                                  setProducts(updatedProducts);
                                                }}
                                                onBlur={()=>setEditIndex(null)}

                                                onKeyDown={(e)=>{
                                                  if(e.key=== "Enter"){
                                                    setEditIndex(null)
                                                  }
                                                }}
                                                  />

                                              ):(
                                                bill.gst
                                              )}</td>
                                              <td>
                                                <div className='ActionBtn'>
                                                  <button className='EditBtn' onClick={()=>setEditIndex(index)}>
                                                    <FaEdit/>
                                                  </button>
                                                  <button className='DeleteBtn' onClick={()=>handleDelete(index)}>
                                                    <MdDelete/>
                                                  </button>
                                                </div>
                                              </td>
                                              
                                          </tr>
                                        ))}
                                  </tbody>
                              </table>
                          </div>
    </>
  )
}

export default Products
