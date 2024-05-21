import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import './style.css'

const Editmenu = ({ food, fetchFoods }) => {

  const [editedFood, setEditedFood] = useState(food);
  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3000/food/${editedFood._id}`, editedFood);
      console.log('Food item updated successfully:', editedFood);

      fetchFoods();

      setEditMode(false);
      setEditedFood({
        name: '',
        price: '',
        description: '',
        foodtype: '',
        foodcategory: '',
        subcategorys: '',
        discount: '',
        foodimg: ''
      });
    } catch (error) {
      console.error('Error updating food item:', error);
    }
  };




  // AddFood Data Sow in the list

  useEffect(() => {
    fetchFoodList();
  }, []);

  const fetchFoodList = async () => {
    try {
      const responses = await axios.get('http://localhost:3001/addfood');
      setFoodList(responses.data);
    } catch (error) {
      console.error('Error fetching food items:', error);
    }
  };


  return (
    <div>
      <h6>Edit Food</h6>
      <form className='editforms p-0'>
        <div className='p-0'>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={editedFood.name}
            onChange={(e) => setEditedFood({ ...editedFood, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={editedFood.price}
            onChange={(e) => setEditedFood({ ...editedFood, price: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description" className='form-control is-invalid'
            value={editedFood.description}
            onChange={(e) => setEditedFood({ ...editedFood, description: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="foodtype">Food Type:</label>

          <select name="foodtype" id="foodtype" value={editedFood.foodtype} onChange={(e) => setEditedFood({ ...editedFood, foodtype: e.target.value })} >
            <option value=" "></option>
            <option value="veg">Veg</option>
            <option value="nonVeg">Non-Veg</option>
          </select>
        </div>
        <div >
          <label htmlFor="foodcategory">Food Category:</label>
          <select
            // className="input-text form-select"
            name="foodcategory"
            id="foodcategory"
            value={editedFood.foodcategory}
            onChange={(e) => setEditedFood({ ...editedFood, foodcategory: e.target.value })}
          >
            <option value="">Select Food Category</option>
            {foodList.map(food => (
              <option key={food._id} value={food.foodname}>
                {food.foodname}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="text"
            name='subcategorys'
            id="subcategorys"
            value={editedFood.subcategorys}
            onChange={(e) => setEditedFood({ ...editedFood, subcategorys: e.target.value })}
          />
        </div>
        <button type="button" onClick={handleUpdate}>Update</button>
      </form>
    </div>
  )
}

export default Editmenu