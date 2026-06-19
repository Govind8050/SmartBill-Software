import React from 'react'

const BillingTemplate = ({
    products,
    grandTotal,
    gstAmounts,
    DisCountMrp,
    AllTotalAmount,
    setShowBill
}) => {
  return (
   <>
    <div className="bill-overlay">

      <div className="bill-container">

        <button
          className="close-btn"
          onClick={() => setShowBill(false)}
        >
          X
        </button>

        <h1>SmartBill Billing Software</h1>

        <p>Address: Kanthudih, Bahera Benipur DBG (847201)</p>

        <hr />

        <h3>Invoice</h3>

        <p>Bill No: 1001</p>
        <p>Date: {new Date().toLocaleDateString()}</p>

        <p>Customer Name: Govind Mishra</p>
        <p>Customer Address: Gurgaon, Haryana</p>

        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {products.map((item,index)=>(
              item.quantity > 0 && (
                <tr key={index}>
                  <td>{item.ProductName}</td>
                  <td>{item.quantity}</td>
                  <td>{item.Price}</td>
                  <td>{item.Price * item.quantity}</td>
                </tr>
              )
            ))}
          </tbody>
        </table>

        <hr />

        <p>Subtotal : ₹{grandTotal}</p>
        <p>GST : ₹{gstAmounts}</p>
        <p>Discount : ₹{DisCountMrp}</p>

        <h2>Total : ₹{AllTotalAmount}</h2>

                      <button onClick={()=>window.print()} id='SinglePrint'>Print Bill</button>
      </div>


    </div>
   </>
  )
}

export default BillingTemplate
