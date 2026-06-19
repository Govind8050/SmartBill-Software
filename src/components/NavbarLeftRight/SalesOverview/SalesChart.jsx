import React from 'react'
const recentBills=[
  {
    billNo:"SB-1001",
    customer:"Govind Mishra",
    date:"12-05-2026",
    amount:2500,
  },
  {
    billNo:"SB-1002",
    customer:"Aman Mishra",
    date:"14-05-2026",
    amount:3000,
  },
  {
    billNo:"SB-1003",
    customer:"Raja Mishra",
    date:"18-05-2026",
    amount:5500,
  },
  {
    billNo:"SB-1004",
    customer:"Saurabh Jha",
    date:"25-05-2026",
    amount:4500,
  },
  {
    billNo:"SB-1004",
    customer:"Saurabh Jha",
    date:"25-05-2026",
    amount:4500,
    
  },
  {
    billNo:"SB-1004",
    customer:"Saurabh Jha",
    date:"25-05-2026",
    amount:4500,

  },
  {
    billNo:"SB-1002",
    customer:"Aman Mishra",
    date:"14-05-2026",
    amount:3000,
  },
  {
    
    billNo:"SB-1003",
    customer:"Raja Mishra",
    date:"18-05-2026",
    amount:5500,
  },
  {
    
    billNo:"SB-1003",
    customer:"Raja Mishra",
    date:"18-05-2026",
    amount:5500,
  },
]
const SalesChart = () => {
  return (
   <>
          <div className='SalesBills'>
             <h3>Recent Bills</h3>
              <table>
                <thead>
                  <tr>
                    <th>Bill No</th>
                      <th>Customer</th>
                      <th>Date</th>
                       <th>Amount</th>
                    </tr>
                </thead>
            <tbody>
              {recentBills.map((bill,index)=>(
                  <tr key={index}>
                      <td>{bill.billNo}</td>
                        <td>{bill.customer}</td>
                        <td>{bill.date}</td>
                        <td>{bill.amount}</td>
                    </tr>
                  ))}
                      </tbody>
                    </table>
                  </div>
   </>
  )
}

export default SalesChart
