import React, { useState } from 'react';

function ShippingInfo() {
  const [goodsName, setGoodsName] = useState("");
  const [goodsWeight, setGoodsWeight] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  
  const handleGoodsNameChange = (event) => setGoodsName(event.target.value);
  const handleGoodsWeightChange = (event) => setGoodsWeight(event.target.value);
  const handlePaymentMethodChange = (event) => setPaymentMethod(event.target.value);
  
  const handleCalculate = () => {
    const estimatedSubtotal = goodsWeight * 30;
    const hst = estimatedSubtotal * 0.13;
    const estimatedTotal = estimatedSubtotal + hst;

    localStorage.setItem('goodsName', goodsName);
    localStorage.setItem('paymentMethod', paymentMethod);
    localStorage.setItem('estimatedSubtotal', estimatedSubtotal.toFixed(2));
    localStorage.setItem('hst', hst.toFixed(2));
    localStorage.setItem('estimatedTotal', estimatedTotal.toFixed(2));
  };

  return (
    <div>
      <input id="goodsName" type="text" value={goodsName} onChange={handleGoodsNameChange} />
      <input id="goodsWeight" type="number" value={goodsWeight} onChange={handleGoodsWeightChange} />
      <input id="PaymentMethod" type="text" value={paymentMethod} onChange={handlePaymentMethodChange} />
      <button onClick={handleCalculate}>Calculate</button>

      <p>Shipping Products: {goodsName}</p>
      <p>Estimated Subtotal: ${parseFloat(localStorage.getItem('estimatedSubtotal')).toFixed(2)}</p>
      <p>HST: ${parseFloat(localStorage.getItem('hst')).toFixed(2)}</p>
      <p>Estimated Total: ${parseFloat(localStorage.getItem('estimatedTotal')).toFixed(2)}</p>
    </div>
  );
}

export default ShippingInfo;
