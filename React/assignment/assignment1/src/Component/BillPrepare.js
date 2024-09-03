import React, { useState } from 'react'

export default function BillPrepare() {
  const [bill, getBill] = useState("");
  const [discount, getDiscount] = useState("");
  const [totalBill, getTotalBill] = useState("");
  const [product, getProduct] = useState("");
  const [quantity, getQuantity] = useState("");

  const calculate = () => {
    getBill(product * quantity);
    getDiscount(bill * 0.10);
    getTotalBill(bill - discount);

  }
  return (
    <div>
      <h1>Bill Calculator</h1>
      <label for="product">Product Price</label>
      <input
      value={product}
      type='number'
        onChange={(e) => getProduct(e.target.value)}>
        
      </input>
      <label for="quantity">Quantity</label>
      <input
        value={quantity}
        type='number'
        onChange={(e) => getQuantity(e.target.value)}>

      </input>
      <label for="bill">Bill</label>
      <input
        value={bill}
        type='number' 
        onChange={(e)=>getBill(e.target.value)}
      >
        
        </input>
      <label for="discount">Discount(10%)</label>
      <input
        value={discount}
        type='number'
        onChange={(e) => getDiscount(e.target.value)}
      >

      </input>
      <label for="totalBill">Totalbill(In Rupees)</label>
      <input
        value={totalBill}
        type='number'
        onChange={(e) => getTotalBill(e.target.value)}
      >
      </input>
      <button onClick={calculate}>Calculate</button>
    </div>
  )
}
