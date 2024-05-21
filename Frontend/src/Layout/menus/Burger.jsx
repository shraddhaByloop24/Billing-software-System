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
                                        <div className="col-lg-10 mr-2">
                                            <div className="text-xs text-primary text-capitalize mb-1">
                                                <div key={food._id} className='items-ul'>
                                                <div className="items-name mb-0 font-weight-bold  text-primary font-weight-bold ">{food.name}</div>
                                                <ul className='d-flex items-align'>
                                                <li className="items-menu-name mb-0 font-weight-bold text-gray-800 ">{food.foodtype}</li>
                                                <li className="items-menu-name mb-0 font-weight-bold text-gray-800 px-2">{food.discount}%</li>
                                                <li className="items-menu-name mb-0 font-weight-bold text-gray-800 ">${food.price}</li>
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-1">
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