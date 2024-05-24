import React, { useState, useEffect } from 'react';
import './Style.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpenFastFood, setIsDropdownOpenFastFood] = useState(false);
  const [isDropdownOpenMainCourse, setIsDropdownOpenMainCourse] = useState(false);
  const [isDropdownOpenDesserts, setIsDropdownOpenDesserts] = useState(false);
  const [foods, setFoods] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const response = await axios.get('http://localhost:3001/food');
      setFoods(response.data);
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
    <div >
      <ul className="navbar-nav fixed-left sidebar sidebar-dark accordion shadow" >
        <a className="sidebar-brand d-flex align-items-center justify-content-center">
          <div className="sidebar-brand-icon rotate-n-15"></div>
          <div className="sidebar-brand-text mx-3">
            <img src="./icons/Byloop.png" className='img-fluid p-3 pt-5' alt="" />
          </div>
        </a>
        <hr className="sidebar-divider mt-4" />
        <h6 className="text-gray-500 text-uppercase pt-4 px-3">Food Category</h6>
        
        {/* Fast Food Dropdown */}
        <li className="nav-item " id="fastfood">
          <a className="nav-link collapsed" href="#" onClick={() => setIsDropdownOpenFastFood(!isDropdownOpenFastFood)}>
            <div className='d-flex justify-content-evenly'>
              <span className="text-white w-100 ">Fast Food</span>
              <i className={`fas fa-angle-${isDropdownOpenFastFood ? 'down' : 'right'} ml-auto text-white`}></i>
            </div>
          </a>
          <div className={`collapse ${isDropdownOpenFastFood ? 'show' : ''} dropdown_menu-1 fade-In`} aria-labelledby="headingPages" data-parent="#fastfood">
            <div className="text-white py-0 collapse-inner">
              <div className="text-white food-arrange">
                <ul className="input-text p-0 nav-food-header" name="foodcategory">
                  <li><Link to="/burger" className='nav-food text-white'>Burger</Link></li>
                  <li><Link to="/pizza" className='nav-food text-white'>Pizza</Link></li>
                  <li><Link to="/southindian" className='nav-food text-white'>Egg</Link></li>
                  <li><Link to="/chineese" className='nav-food text-white'>Chicken</Link></li>
                  <li><Link to="/pizza" className='nav-food text-white'>Chakha</Link></li>
                  <li><Link to="/southindian" className='nav-food text-white'>Chinese Snacks</Link></li>
                  <li><Link to="/chineese" className='nav-food text-white'>Chinese Soups</Link></li>
                  <li><Link to="/pizza" className='nav-food text-white'>Garlic Bread</Link></li>
                  <li><Link to="/southindian" className='nav-food text-white'>South Indian</Link></li>
                  <li><Link to="/chineese" className='nav-food text-white'>Gravy Items</Link></li>
                  <li><Link to="/southindian" className='nav-food text-white'>Hawalian Wraps</Link></li>
                  <li><Link to="/chineese" className='nav-food text-white'>Maggie Lover</Link></li>
                </ul>
              </div>
              <div className="collapse-divider" />
            </div>
          </div>
        </li>

        {/* Main Course Dropdown */}
        <li className="nav-item " id="maincourse">
          <a className="nav-link collapsed" href="#" onClick={() => setIsDropdownOpenMainCourse(!isDropdownOpenMainCourse)}>
            <div className='d-flex justify-content-evenly'>
              <span className="text-white w-100">Main Course</span>
              <i className={`fas fa-angle-${isDropdownOpenMainCourse ? 'down' : 'right'} ml-auto text-white`}></i>
            </div>
          </a>
          <div className={`collapse ${isDropdownOpenMainCourse ? 'show' : ''} dropdown_menu-1 fade-In`} aria-labelledby="headingPages" data-parent="#maincourse">
            <div className="text-white py-0 collapse-inner">
              <div className="text-white food-arrange">
                <ul className="input-text p-0 nav-food-header" name="foodcategory">
                  <li><Link to="/burger" className='nav-food text-white'>Burger</Link></li>
                  <li><Link to="/pizza" className='nav-food text-white'>Pizza</Link></li>
                  <li><Link to="/southindian" className='nav-food text-white'>Egg</Link></li>
                  <li><Link to="/chineese" className='nav-food text-white'>Chicken</Link></li>
                  <li><Link to="/pizza" className='nav-food text-white'>Chakha</Link></li>
                  <li><Link to="/southindian" className='nav-food text-white'>Chinese Snacks</Link></li>
                  <li><Link to="/chineese" className='nav-food text-white'>Chinese Soups</Link></li>
                  <li><Link to="/pizza" className='nav-food text-white'>Garlic Bread</Link></li>
                  <li><Link to="/southindian" className='nav-food text-white'>South Indian</Link></li>
                  <li><Link to="/chineese" className='nav-food text-white'>Gravy Items</Link></li>
                  <li><Link to="/southindian" className='nav-food text-white'>Hawalian Wraps</Link></li>
                  <li><Link to="/chineese" className='nav-food text-white'>Maggie Lover</Link></li>
                </ul>
              </div>
              <div className="collapse-divider" />
            </div>
          </div>
        </li>

        {/* Desserts Dropdown */}
        <li className="nav-item" id="desserts">
          <a className="nav-link collapsed" href="#" onClick={() => setIsDropdownOpenDesserts(!isDropdownOpenDesserts)}>
            <div className='d-flex justify-content-evenly'>
              <span className="text-white w-100">Desserts</span>
              <i className={`fas fa-angle-${isDropdownOpenDesserts ? 'down' : 'right'} ml-auto text-white`}></i>
            </div>
          </a>
          <div className={`collapse ${isDropdownOpenDesserts ? 'show' : ''} dropdown_menu-1 fade-In`} aria-labelledby="headingPages" data-parent="#desserts">
            <div className="text-white py-0 collapse-inner">
              <div className="text-white food-arrange">
                <ul className="input-text p-0 nav-food-header" name="foodcategory">
                  <li><Link to="/icecream" className='nav-food text-white'>Ice Cream</Link></li>
                  <li><Link to="/cake" className='nav-food text-white'>Cake</Link></li>
                  <li><Link to="/pudding" className='nav-food text-white'>Pudding</Link></li>
                  <li><Link to="/pastry" className='nav-food text-white'>Pastry</Link></li>
                  <li><Link to="/custard" className='nav-food text-white'>Custard</Link></li>
                  <li><Link to="/brownie" className='nav-food text-white'>Brownie</Link></li>
                  <li><Link to="/pie" className='nav-food text-white'>Pie</Link></li>
                </ul>
              </div>
              <div className="collapse-divider" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
