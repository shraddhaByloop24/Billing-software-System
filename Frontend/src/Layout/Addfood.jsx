import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
// import Header from './Header';
import Footer from './Footer';
import Swal from "sweetalert2";

const Addfood = () => {
  const [foodname, setFoodname] = useState('');
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    fetchFoodList();
  }, []);

  const fetchFoodList = async () => {
    try {
      const response = await axios.get('http://localhost:3001/addfood');
      setFoodList(response.data);
    } catch (error) {
      console.error('Error fetching food items:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/addfood', { foodname });
      console.log('Food item created successfully:', response.data);
      setFoodname('');
      fetchFoodList();
      Swal.fire(
        'Submit!',
        'Your data is Submited.',
        'success'
      );
    } catch (error) {
      console.error('Error creating food item:', error);
    }
  };

  const handleDelete = async (id) => {
    console.log('Deleting food item with ID:', id);
    try {
      await axios.delete(`http://localhost:3001/addfood/${id}`);
      console.log('Food item deleted successfully:', id);
      setFoodList(foodList.filter(food => food._id !== id));
    } catch (error) {
      console.error('Error deleting food item:', error);
    }
  };
  

  return (
    <>
      <div id="wrapper">
        <Navbar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            {/* <Header /> */}
            <div className="container">
              <form onSubmit={handleSubmit} className='d-flex justify-content-center'>
                <input
                  type="text"
                  name='foodname'
                  id='foodname'
                  value={foodname}
                  className='form-control mx-2'
                  onChange={(e) => setFoodname(e.target.value)}
                />
                <button type="submit" className="btn btn-danger px-5">Add</button>
              </form>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Food Name</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {foodList.map((food, index) => (
                    <tr key={food._id}>
                      <td>{index + 1}</td>
                      <td>{food.foodname}</td>
                      <td>
                      <button onClick={() => handleDelete(food._id)} className="btn btn-danger ml-2">Delete</button>

                       
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  )
}

export default Addfood;
