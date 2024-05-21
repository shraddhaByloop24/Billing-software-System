import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import Header from './Header';
import Burger from './menus/Burger';

const BurgerPage = () => {

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
      <div id="wrapper" className="sub-category">
        <Navbar/>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />
            <div className="container-fluid">
              
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="/Addproducts"className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                   <i className="fa-solid fa-plus"></i>
                </a>
              </div>
              <div className="row">
              {/* {filteredFoods.map((food, index) => ( */}
                <div className="col-xl-12 col-lg-12 ">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3 flex-row align-items-center justify-content-between">
                     <section className="mt-2 ">
                       <Burger />
                      {/* <form
                        className="contact-form row p-0"
                        onSubmit={handleSubmit}
                      >
                        <div className="form-field col-lg-6">
                          <input
                            name="name"
                            className="input-text js-input"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required=""
                          />
                          <label className="label" htmlFor="name">
                            Food Name
                          </label>
                        </div>
                        <div className="form-field col-lg-6 ">
                          <input
                            name="price"
                            className="input-text js-input"
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required=""
                          />
                          <label className="label" htmlFor="">
                            Price
                          </label>
                        </div>
                        <div className="form-field col-lg-6 ">
                          <input
                            type="text"
                            className='input-text js-input'
                            value={subcategorys}
                            onChange={(e) => setSubcategorys(e.target.value)}
                            required=""
                          />
                          <label className="label" htmlFor="">
                            Sub Category
                          </label>
                        </div>
                        <div className="form-field col-lg-6">
                          <select
                            className="input-text"
                            name="foodcategory"
                            value={foodcategory}
                            onChange={(e) => setFoodcategory(e.target.value)}
                          >
                            <option value=""></option>
                            {foodList.map((food) => (
                              <option key={food._id} value={food.foodname}>
                                {food.foodname}
                              </option>
                            ))}
                          </select>
                          <label className="label pb-2" htmlFor="">
                            Category
                          </label>
                        </div>
                        <div className="form-field col-lg-6">
                          <input
                            name="discount"
                            className="input-text js-input"
                            type="text"
                            value={discount}
                            onChange={(e) => setDiscount(e.target.value)}
                          />
                          <label className="label" htmlFor="">
                            Discount
                          </label>
                        </div>

                        <div className="form-field col-lg-6 ">
                          <select
                            className="input-text"
                            name="foodtype"
                            value={foodtype}
                            onChange={(e) => setFoodtype(e.target.value)}
                          >
                            <option value=""></option>
                            <option value="veg">Veg</option>
                            <option value="nonVeg">Non-Veg</option>
                          </select>
                          <label className="label" htmlFor="">
                            Food Type
                          </label>
                        </div>
                        <div className="form-field col-lg-6">
                          <input
                            name="description"
                            className="input-text js-input"
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                          <label className="label" htmlFor="">
                            Description
                          </label>
                        </div>
                        <div className="form-field col-lg-6">
                          <input
                            name="foodimg"
                            className="form-control"
                            type="file"
                            value={foodimg}
                            onChange={(e) => setFoodimg(e.target.value)}
                          />
                        </div>
                        <div className="form-field col-lg-12 mt-3">
                          <div class="d-grid gap-2 col-3 ">
                            <button class="btn btn-danger" type="submit">Button</button>
                          </div>
                        </div>
                      </form> */}
                      </section>
                    </div>
                  </div>
                </div>
                    {/* ))} */}


              </div>
            </div>
          </div>
        </div>
        {/* <Footer />   */}
      </div>

      {/* </div> */}
    </>

  );
};

export default BurgerPage;