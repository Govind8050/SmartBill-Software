import React, { useState } from 'react'
import { initialProducts } from '../NavbarLeftRight/InitialProductData';
import BillingTemplate from './BillingTemplate';
const BillingComponent = ({products,setProducts}) => {
    const [showBill, setShowBill]=useState(false);

    

    const increaseQty=(index)=>{
    const updatedProducts=[...products];
    updatedProducts[index].quantity+=1;
    setProducts(updatedProducts);
  }

  const decreaseQty=(index)=>{
    const updatedProducts=[...products];
    if(updatedProducts[index].quantity>0){
      updatedProducts[index].quantity-=1;
    }
    setProducts(updatedProducts);
  }

  const clearCart=()=>{
    const clearedProducts=products.map((product)=>({
      ...product,
      quantity:0
    }));
    setProducts(clearedProducts)
  }

  const grandTotal=products.reduce((total,product)=>total+product.Price*product.quantity,0);
  const gstAmounts = (grandTotal * 18) / 100;
  const DisCountMrp=(grandTotal*5)/100;
  const AllTotalAmount=(grandTotal+gstAmounts)-DisCountMrp;


  return (
    <>
            <div className='BillingComponent'>
            <div className='ProductAdded'>
                <h2>Add Product</h2>
                <input type="text" placeholder='Search products...' />
                <table>
                        <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            </tr>
                        </thead>
                    <tbody>
                    {products.map((product,index)=>(
                        <tr key={index}>
                                <td>{product.ProductName}</td>
                                <td>{product.Price}</td>
                                <td>{product.Stock}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='CartTable'>
                <h2>Cart{}</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Qty.</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {initialProducts.map((product,index)=>(
                        <tr key={index}>
                                <td>{product.ProductName}</td>
                                <td>{product.Price}</td>
                                <td>
                                <button id='BtnDecInc' onClick={()=>decreaseQty(index)}>-</button>
                                <span style={{margin:"0 10px", color:"black"}}>
                                    {product.quantity}
                                </span>
                                <button id='BtnDecInc' onClick={()=>increaseQty(index)}>+</button>
                                </td>
                                <td> ₹{product.Price*product.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='BillSumary'>
                <h2>Bill Summary</h2>
            <div className='BillP'>
            <div style={{display:"flex", gap:"200px"}}>
                <p>Subtotal:</p>
                <p>{grandTotal}</p>
            </div>
            <div style={{display:"flex", gap:"180px"}}>
                <p>GST (18%):-</p>
                <p>{gstAmounts}</p>
            </div>
            <div style={{display:"flex", gap:"130px"}}>
                <p>Discount (5%):-</p>
                <p>{DisCountMrp}</p>
            </div>
            <div style={{display:"flex", gap:"120px", marginTop:"20px", marginBottom:"15px"}}>
                <h3>Grand Total:- </h3>
                <h3>{AllTotalAmount}</h3>
            </div>
            </div>
                <div className='GenrateBill'>
                <button onClick={clearCart}>Clear Chart</button>
                <button onClick={()=>setShowBill(true)}>Generate Bill</button>
                </div>
            </div>
            </div>
            {
     showBill && (
       <BillingTemplate
         products={products}
         grandTotal={grandTotal}
         gstAmounts={gstAmounts}
         DisCountMrp={DisCountMrp}
         AllTotalAmount={AllTotalAmount}
         setShowBill={setShowBill}
       />
     )
   }
    </>

  )
}

export default BillingComponent
