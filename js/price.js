import React, { useState } from 'react';

// Constants for price calculation
const PRICE_PER_KG_DOMESTIC = 10;
const INTERNATIONAL_SURCHARGE = 1.5;
const HST_RATE = 0.13;

const ShippingCalculator = () => {
    const [weight, setWeight] = useState(0);
    const [shippingType, setShippingType] = useState('Domestic');
    const [priceDetails, setPriceDetails] = useState({ basePrice: 0, hst: 0, total: 0 });

    const calculatePrice = () => {
        // Calculate the base price
        let basePrice = weight * PRICE_PER_KG_DOMESTIC;

        // Apply the surcharge for international shipping if necessary
        if (shippingType === "International") {
            basePrice *= INTERNATIONAL_SURCHARGE;
        }

        // Calculate HST and the total
        let hst = basePrice * HST_RATE;
        let total = basePrice + hst;

        setPriceDetails({ basePrice, hst, total });
    }

    return (
        <div>
            <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
            <select value={shippingType} onChange={e => setShippingType(e.target.value)}>
                <option value="Domestic">Domestic</option>
                <option value="International">International</option>
            </select>
            <button onClick={calculatePrice}>Calculate</button>
            <div>
                <strong>Estimated Subtotal:</strong> ${priceDetails.basePrice.toFixed(2)}
                <br /><strong>HST:</strong> ${priceDetails.hst.toFixed(2)}
                <br /><strong>Estimated Total:</strong> ${priceDetails.total.toFixed(2)}
            </div>
        </div>
    );
};

const ChangeTextComponent = () => {
    const [text, setText] = useState('');

    return (
        <div>
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
            <div className="right-column">{text}</div>
        </div>
    );
};

export { ShippingCalculator, ChangeTextComponent };
