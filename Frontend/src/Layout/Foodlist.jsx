import React from 'react';

const Foodlist = ({ products }) => {
  return (
    <div>
      <h1>Food Items</h1>
      <ul>
        {products.map((product, index) => (
          <li key={food._id}>
            {index + 1}. {products.itemname} - ${food.baseprice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Foodlist;
