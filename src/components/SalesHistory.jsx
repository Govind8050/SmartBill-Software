import React, { useState } from 'react'
import { initialProducts } from '../components/NavbarLeftRight/InitialProductData';
import { IoIosPrint, IoIosSave } from 'react-icons/io';


const SalesHistory = ({products,setProducts}) => {
      const [date,setDate]= useState("");
      const [newDate,newSetDate]=useState("");
      const today=new Date().toISOString().split('T')[0];  
    
      const PrintBtn=(bill)=>{
        const printWindow=window.open("", "", "width=800, height=600");
    
        printWindow.document.write(`
        <html>
          <head>
            <title>Bill Print</title>
            <style>
              body{
                font-family: Arial;
                padding:20px;
              }
    
              table{
                width:100%;
                border-collapse: collapse;
              }
    
              th,td{
                border:1px solid black;
                padding:10px;
                text-align:left;
              }
    
              h2{
                text-align:center;
              }
            </style>
          </head>
    
          <body>
    
            <h2>Sales Bill</h2>
    
            <table>
              <tr>
                <th>Bill No</th>
                <td>${bill.billNo}</td>
              </tr>
    
              <tr>
                <th>Customer Name</th>
                <td>${bill.customerName}</td>
              </tr>
    
              <tr>
                <th>Date</th>
                <td>${bill.date}</td>
              </tr>
    
              <tr>
                <th>Product Name</th>
                <td>${bill.ProductName}</td>
              </tr>
    
              <tr>
                <th>Price</th>
                <td>₹${bill.Price}</td>
              </tr>
    
              <tr>
                <th>Payment Mode</th>
                <td>${bill.paymentMode}</td>
              </tr>
    
              <tr>
                <th>Category</th>
                <td>${bill.Category}</td>
              </tr>
    
              <tr>
                <th>Barcode</th>
                <td>${bill.Barcode}</td>
              </tr>
            </table>
    
          </body>
        </html>
    
          `);
          printWindow.document.close();
          printWindow.print();
      };
    
    
    
      const SaveBtn=(bill)=>{
        const data=JSON.stringify(bill,null,2);
    
        const blob=new Blob([data],{
          type:"application/json",
        });
        const link=document.createElement("a");
        link.href=URL.createObjectURL(blob);
        link.download=`${bill.billNo}.json`;
        link.click();
        URL.revokeObjectURL(link.href);
      };
    
  return (
    <div className='SalesHistory'>
                        <h2>Sales History</h2>
                        <div className='SameComponent'>
    
                        <div className='SalesInput'>
                          <input type="text" placeholder='Search Bill No / Customers' />
                        </div>
    
                        <div id='dateDiv'>
                          <h4>Date from</h4>
                            <input type="date"
                            value={date}
                            onChange={(e)=>setDate(e.target.value)}
                            max={today} />
                        </div>
    
                        <div id='dateDiv'>
                        <h4>Date To</h4>
                        <div id='DatesDivs'>
                            <input type="date"
                            value={newDate}
                            onChange={(e)=>newSetDate(e.target.value)}
                            min={date}
                            max={today}
                             />
    
                        <button id='btn-search'>Search</button>
                        </div>
                        </div>
                      </div>
                      <table>
                        <thead>
                          <tr>
                            <th>Bill No</th>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Items</th>
                            <th>Amount</th>
                            <th>Payment Mode</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {products.map((bill, index)=>(
                            <tr key={index}>
                              <td>{bill.billNo}</td>
                              <td>{bill.customerName}</td>
                              <td>{bill.date}</td>
                              <td>{bill.ProductName}</td>
                              <td>{bill.Price}</td>
                              <td>{bill.paymentMode}</td>
                              <td className='tdBtn'>
                                <button onClick={()=>SaveBtn(bill)}><IoIosSave/></button>
                                <button onClick={()=>PrintBtn(bill)}><IoIosPrint/></button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      </div>
  )
}

export default SalesHistory
