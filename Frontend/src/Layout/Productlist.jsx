import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import html2canvas from 'html2canvas';
import Swal from "sweetalert2";

const Productlist = () => {
  const [foods, setFoods] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editedFood, setEditedFood] = useState({
    name: '',
    price: '',
    description: '',
    foodtype: '',
    foodcategory: '',
    subcategorys: '',
    discount: '',
    foodimg: ''
  });
  const [foodList, setFoodList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchFoods();
    fetchFoodList();
  }, []);

  const fetchFoods = async () => {
    try {
      const response = await axios.get('http://localhost:3001/food');
      setFoods(response.data);
    } catch (error) {
      console.error('Error fetching food items:', error);
    }
  };

  const fetchFoodList = async () => {
    try {
      const responses = await axios.get('http://localhost:3001/addfood');
      setFoodList(responses.data);
    } catch (error) {
      console.error('Error fetching food items:', error);
    }
  };

  const handleDelete = async (id) => {
    // Show a SweetAlert confirmation dialog
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t to Delete the data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          
          await axios.delete(`http://localhost:3001/food/${id}`);
          console.log('Food item deleted successfully:', id);
            Swal.fire(
            'Deleted!',
            'Your data has been deleted.',
            'success'
          );
          // Refresh the food list
          fetchFoods();
        } catch (error) {
          console.error('Error deleting food item:', error);
          // Show an error SweetAlert if deletion fails
          Swal.fire(
            'Error!',
            'Failed to delete the food item.',
            'error'
          );
        }
      }
    });
  };
  
  const handleEdit = (food) => {
    setEditMode(true);
    setEditedFood(food);
    setShowModal(true);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3001/food/${editedFood._id}`, editedFood);
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
      setShowModal(false);
    } catch (error) {
      console.error('Error updating food item:', error);
    }
  };

  const filteredFoods = foods.filter(food =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    food.foodtype.toLowerCase().includes(searchQuery.toLowerCase()) ||
    food.price.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
    food.foodcategory.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div id="wrapper" className="sub-category">
      <Navbar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Header />
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4 seach-fied">
              <div className='set-searchbar d-flex justify-content-between'>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  className="p-3 border form-control w-50"
                  placeholder="Search Food..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className='btn bg-gradient-danger'><a href="/Addproducts" className='text-white text-decoration-none'>Add Product</a></button>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="card shadow mb-4">
                  <div className="card-header py-3 flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">Food Items</h6>
                  </div>
                  <div className="card-body">
                    <table className="table shadow">
                      <thead>
                        <tr className='table-secondary'>
                          <th className='px-2'> S no </th>
                          <th className='px-2'>Name</th>
                          <th className='px-2'>Price</th>
                          <th className='px-2'>Description</th>
                          <th className='px-2'>Type</th>
                          <th className='px-2'>Category</th>
                          <th className='px-2'>SubCategory</th>
                          <th className='px-2'>Discount</th>
                          <th className='px-2'>Image</th>
                          <th className='px-2'>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredFoods.map((food, index) => (
                          <tr key={food._id}>
                            <td>{index + 1}</td>
                            <td className='p-0 px-2 pt-2'>{editMode && editedFood._id === food._id ? <input type="text" className='field' value={editedFood.name} onChange={(e) => setEditedFood({ ...editedFood, name: e.target.value })} /> : food.name}</td>
                            <td className='p-0  pt-2'>{editMode && editedFood._id === food._id ? <input type="number" className='field' value={editedFood.price} onChange={(e) => setEditedFood({ ...editedFood, price: e.target.value })} /> : food.price}</td>
                            <td className='p-0  pt-2'>{editMode && editedFood._id === food._id ? <input type="text" className='field' value={editedFood.description} onChange={(e) => setEditedFood({ ...editedFood, description: e.target.value })} /> : food.description}</td>
                            <td className='p-0  pt-2'>{editMode && editedFood._id === food._id ? <select className="field mt-2" value={editedFood.foodtype} onChange={(e) => setEditedFood({ ...editedFood, foodtype: e.target.value })} ><option value=" "> </option><option value="veg">Veg</option><option value="nonVeg">Non-Veg</option></select> : food.foodtype}</td>
                            <td className='p-0  pt-2'> 
                              {editMode && editedFood._id === food._id ? (
                                <select className="input-text" value={editedFood.foodcategory} onChange={(e) => setEditedFood({ ...editedFood, foodcategory: e.target.value })}>
                                  <option value="">Select Food Category</option>
                                  {foodList.map(food => (
                                    <option key={food._id} value={food.foodname}>{food.foodname}</option>
                                  ))}
                                </select>
                              ) : (
                                food.foodcategory 
                              )}
                            </td>
                            <td className='p-0 pt-2'>{editMode && editedFood._id === food._id ? <input type="text" className='field' value={editedFood.subcategorys} onChange={(e) => setEditedFood({ ...editedFood, subcategorys: e.target.value })} /> : food.subcategorys}</td>
                            <td className='p-0 px-2 pt-2'>{editMode && editedFood._id === food._id ? <input type="text" className='field' value={editedFood.discount} onChange={(e) => setEditedFood({ ...editedFood, discount: e.target.value })} /> : food.discount}</td>
                            <td className='p-0 pt-2'>{editMode && editedFood._id === food._id ? <input type="text" className='field' value={editedFood.foodimg} onChange={(e) => setEditedFood({ ...editedFood, foodimg: e.target.value })} /> : <img src={food.foodimg} alt="Food" className="food-image" />}</td>
                            <td> {editMode && editedFood._id === food._id ? (
                              <button onClick={handleUpdate} type="button" className="btn btn-success btn-sm mx-2"><i className="fa-solid fa-pen-to-square"></i></button>
                            ) : (
                              <>
                                <button className="btn btn-primary btn-sm mx-2" data-bs-toggle="modal" data-bs-target="#editModal"><i className="fa-solid fa-pen-fancy"></i></button>
                                <button onClick={() => handleDelete(food._id)} className="btn bg-gradient-danger text-white btn-sm"><i className="fa-solid fa-trash"></i></button>
                              </>
                            )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>















      {/* Modal for editing food item */}
      <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editModalLabel">Edit Food</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h6>Edit Food</h6>
              <form className='editforms p-0'>
                <div className='p-0'>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    value={editedFood.name}
                    onChange={(e) => setEditedFood({ ...editedFood, name: e.target.value })}
                  />
                </div>
                <div className='p-0'>
                  <label htmlFor="price">Price:</label>
                  <input
                    type="number"
                    id="price"
                    value={editedFood.price}
                    onChange={(e) => setEditedFood({ ...editedFood, price: e.target.value })}
                  />
                </div>
                <div className='p-0'>
                  <label htmlFor="description">Description:</label>
                  <textarea
                    id="description"
                    value={editedFood.description}
                    onChange={(e) => setEditedFood({ ...editedFood, description: e.target.value })}
                  />
                </div>
                <div className='p-0'>
                  <label htmlFor="foodtype">Food Type:</label>
                  <select
                    id="foodtype"
                    value={editedFood.foodtype}
                    onChange={(e) => setEditedFood({ ...editedFood, foodtype: e.target.value })}
                  >
                    <option value="veg">Veg</option>
                    <option value="nonVeg">Non-Veg</option>
                  </select>
                </div>
                <div className='p-0'>
                  <label htmlFor="foodcategory">Food Category:</label>
                  <select
                    id="foodcategory"
                    value={editedFood.foodcategory}
                    onChange={(e) => setEditedFood({ ...editedFood, foodcategory: e.target.value })}
                  >
                    <option value="">Select Food Category</option>
                    {foodList.map(food => (
                      <option key={food._id} value={food.foodname}>{food.foodname}</option>
                    ))}
                  </select>
                </div>
                <div className='p-0'>
                  <label htmlFor="subcategorys">Subcategory:</label>
                  <input
                    type="text"
                    id="subcategorys"
                    value={editedFood.subcategorys}
                    onChange={(e) => setEditedFood({ ...editedFood, subcategorys: e.target.value })}
                  />
                </div>
                <div className='p-0'>
                  <label htmlFor="discount">Discount:</label>
                  <input
                    type="text"
                    id="discount"
                    value={editedFood.discount}
                    onChange={(e) => setEditedFood({ ...editedFood, discount: e.target.value })}
                  />
                </div>
                <div className='p-0'>
                  <label htmlFor="foodimg">Image URL:</label>
                  <input
                    type="text"
                    id="foodimg"
                    value={editedFood.foodimg}
                    onChange={(e) => setEditedFood({ ...editedFood, foodimg: e.target.value })}
                  />
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productlist;
