import React from 'react';

const Foodlist = ({ foods }) => {
  return (
    <div>
      <h1>Food Items</h1>
      <ul>
        {foods.map((food, index) => (
          <li key={food._id}>
            {index + 1}. {food.name} - ${food.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Foodlist;
