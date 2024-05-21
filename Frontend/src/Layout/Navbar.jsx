import React, { useState, useEffect } from 'react';
import './Style.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [foodname, setFoodname] = useState('');
  const [foodList, setFoodList] = useState([]);
  const [foods, setFoods] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');


  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };





  // const [foodList, setFoodList] = useState([]);
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
    <div>
      <ul className="navbar-nav fixed-left sidebar sidebar-dark accordion shadow" id="accordionSidebar">
        <a className="sidebar-brand d-flex align-items-center justify-content-center">
          <div className="sidebar-brand-icon rotate-n-15">
          </div>
          <div className="sidebar-brand-text mx-3">
            <img src="./icons/Byloop.png" className='img-fluid p-3 pt-5' alt="" />
          </div>
        </a>
        <hr className="sidebar-divider mt-4 " />
        <h5 className="text-white px-3"><i className="fa-brands fa-product-hunt "></i><b className='px-2'>Product List</b></h5>
        <li className="nav-item " >
          <a className="nav-link collapsed " href="#" onClick={toggleDropdown}>
            <div className='d-flex justify-content-evenly'>
              <span className="text-white w-100 Appetizers">Appetizers</span>
              <i className={`fas fa-angle-${isDropdownOpen ? 'down' : 'right'} ml-auto text-white `}></i>
            </div>
          </a>
          {/* {filteredFoods.map((food, index) => ( */}
          <div  className={`collapse ${isDropdownOpen ? 'show' : '.'} dropdown_menu-1 fade-In`} aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div className="text-white py-0 collapse-inner ">{ /*key={food._id*/} 
              <div className=" text-white food-arrange ">{/* onSubmit={handleSubmit}*/}
                <ul className="input-text p-0  nav-food-header " name="foodcategory">
               

                <li>
                    {/* <Link to="/burger" className='nav-food text-white'>  {food.subcategorys} </Link> */}
                    <Link to="/burger" className='nav-food text-white'>  Burger</Link>

                  </li> 
                 <li>
                    <Link to="/pizza" className='nav-food text-white'> Pizza</Link>
                  </li>
                  <li>
                    <Link to="/southindian" className='nav-food text-white'> South Indian</Link>
                  </li>
                  <li>
                    <Link to="/chineese" className='nav-food text-white'> chineese</Link>
                  </li> 
                </ul>


                 {/*<ul className="input-text p-0  nav-food-header " name="foodcategory" onChange={(e) => setFoodcategory(e.target.value)}>
                  {foodList.map((food) => (
                    <li key={food._id}>
                    <Link to={`/${food.category?.toLowerCase()}`} className='nav-food text-white'>
                        {food.foodname} <br />
                      </Link>
                    </li>
                  ))} 
                </ul>*/}
              </div>
              <div className="collapse-divider " />
            </div>
          </div>
            {/* //  ))}  */}
        </li>
        <li>



        </li>

        {/* <li className="nav-item active">
          <a className="nav-link" href="/Dashboard">
            <i className="fas fa-fw fa-tachometer-alt iii" />
            <span className='sidenav-menu'>Dashboard</span>
          </a>
          <hr className="sidebar-divider" />
        </li>
        <div className="sidebar-heading"> <i className="fa-solid fa-utensils "></i><b className='px-2'>Category</b></div>



        <li className={`nav-item ${isCollapsedTwo ? 'active' : ''} menus disabled`}>
          <div className="nav-link" onClick={toggleCollapseTwo}>
            <div className='d-flex justify-content-between'>
              <i className="fa-solid fa-bowl-rice text-white pt-2 iii"></i>
              <span className='text-white sidenav-menu'>Product</span>
              <i className={`fas fa-angle-${isCollapsedTwo ? 'down' : 'right'} ml-auto text-white`}></i>
            </div>
          </div>
          <div className={`collapse ${isCollapsedTwo ? 'show' : ''} list-menu`} style={{ transition: 'height 2.3s ease !important' }}>
            <div className="  py-2 collapse-inner rounded border-none">
              <div className="bg-danger ">
                <a href="/Subcategory" className="list-group-item list-group-item-action ">
                  Add Product
                </a>
                <a href="/admin" className="list-group-item list-group-item-action ">List Product</a>
                <a href="/addfood" className="list-group-item list-group-item-action">add Food </a>
                <a href="#" className="list-group-item list-group-item-action">Mattar TIkki</a>
              </div>
            </div>
          </div>
        </li>

        <hr className="sidebar-divider" />
      
        <div className="sidebar-heading"> <i className="fa-solid fa-blender"></i> <b className='px-1'>Addons</b></div>

     
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="/"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fa-solid fa-user-tie text-white iii"></i>
            <span className='text-white px-1'>Costomers</span>
          </a>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <a className="collapse-item" href="login.html">
                Login
              </a>
              <a className="collapse-item" href="register.html">
                Register
              </a>
              <a className="collapse-item" href="forgot-password.html">
                Forgot Password
              </a>
              <div className="collapse-divider" />
              <h6 className="collapse-header">Other Pages:</h6>
              <a className="collapse-item" href="404.html">
                404 Page
              </a>
              <a className="collapse-item" href="blank.html">
                Blank Page
              </a>
            </div>
          </div>
        </li>

     
        <li className="nav-item">
          <a className="nav-link" href="charts.html">
            <i className="fas fa-fw fa-chart-area" />
            <span>Charts</span>
          </a>
        </li>
   
        <li className="nav-item">
          <a className="nav-link" href="tables.html">
            <i className="fas fa-fw fa-table" />
            <span>Tables</span>
          </a>
        </li>

        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle" />
        </div> */}

      </ul>
    </div>
  );
};

export default Navbar;
