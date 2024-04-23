import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Summary({ selectedOptions,selectedVersion, selectedWheel,selectedSellerie, selectedOptionsAcc, basePrice, colorPrice, wheelPrice, selleriePrice, selectedColor }) {
  // Calculate total price
  const [totalPrice, setTotalPrice] = useState(0);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    let totalPrice = basePrice + colorPrice + wheelPrice + selleriePrice;

    // Include prices of selected accessory options
    for (const category in selectedOptionsAcc) {
      selectedOptionsAcc[category].forEach(option => {
        totalPrice += option.price;
      });
    }

    // Include prices of selected equipment options
    for (const category in selectedOptions) {
      selectedOptions[category].forEach(option => {
        totalPrice += option.price;
      });
    }

    setTotalPrice(totalPrice);
  }, [selectedOptions, selectedOptionsAcc, basePrice, colorPrice, wheelPrice, selleriePrice]);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="summary row" style={{ position: 'fixed', bottom: 0, left: 20, borderRadius: '50% 50% 0 0', backgroundColor: 'rgba(25, 83, 137, 0.657)', color: 'white', padding: '20px' }}>
      <div>
        <h6 className='text-center'>Total: {totalPrice}€</h6>
        <h2 className='text-center'> <FontAwesomeIcon icon={faShoppingCart} onClick={toggleOptions} /></h2>
        {showOptions && (
          <ul>
            <li>Version {selectedVersion}: {basePrice}€</li>
            <li>Couleur {selectedColor}: {colorPrice}€</li>
            <li>Jantes {selectedWheel}:{wheelPrice}€</li>
            <li>Sellerie {selectedSellerie}:{selleriePrice}€</li>
            {/* Display selected accessory options */}
            {Object.entries(selectedOptionsAcc).map(([category, options]) => (
              Array.isArray(options) && options.map((option, index) => (
                <li key={index}>
                  {option.name}: {option.price}€
                </li>
              ))
            ))}
            {/* Display selected equipment options */}
            {Object.entries(selectedOptions).map(([category, options]) => (
              Array.isArray(options) && options.map((option, index) => (
                <li key={index}>
                  {option.name}: {option.price}€
                </li>
              ))
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Summary;
