import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Menus.css';
// import Productlist from '../Productlist'

const Burger = () => {

    const [foods, setFoods] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [foodList, setFoodList] = useState([]);




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

  


    const filteredFoods = foods.filter(food =>
        food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        food.foodtype.toLowerCase().includes(searchQuery.toLowerCase()) ||
        food.price.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
        food.foodcategory.toLowerCase().includes(searchQuery.toLowerCase())
    );



    return (
        <>
            <div className="container">
                <div className="row">
                    {/* Earnings (Monthly) Card Example */}
                    {filteredFoods.map((food, index) => (
                        <div className="col-xl-3 col-md-12 mb-4">
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body p-0 px-3">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-lg-12 mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                <div key={food._id} className='items-ul'>
                                                <div className="h6 display-5 mb-0 font-weight-bold text-gray-800">{food.name}</div>
                                                <div className="h6 mb-0 font-weight-bold text-gray-800">{food.foodtype}</div>
                                                <div className="h6 mb-0 font-weight-bold text-gray-800">{food.discount}%</div>

                                                    {/* <li className='p-0  pt-2'>
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
                                                    </li> */}
                                                    {/* <li className='p-0 px-2 pt-2'></li> */}


                                            </div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                ${food.price}
                                            </div>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-calendar fa-2x text-gray-300" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Burger