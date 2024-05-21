import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Calculated from './Calculated';
import Footer from './Footer';
import './style.css'
import Swal from "sweetalert2";

const Addproducts = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [foodtype, setFoodtype] = useState('');
  const [foodcategory, setFoodcategory] = useState('');
  const [subcategorys, setSubcategorys] = useState('');
  const [discount, setDiscount] = useState('');
  const [description, setDescription] = useState('');
  const [foodimg, setFoodimg] = useState('');
  const [foodList, setFoodList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/food', {
        name,
        price,
        foodtype,
        foodcategory,
        subcategorys,
        description,
        discount,
        foodimg
      });
      Swal.fire(
        'Submit!',
        'Your data is Submited.',
        'success'
      );
      console.log('Food item created successfully:', response.data);
      setName('');
      setPrice('');
      setFoodtype('');
      setFoodcategory('');
      setSubcategorys('');
      setDescription('');
      setDiscount('');
      setFoodimg('');
      // Refresh the food list
      fetchFoodList();
    } catch (error) {
      console.error('Error creating food item:', error);
    }
  };

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
    <>
      <div id="wrapper" className="sub-category">
        <Navbar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />      
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a
                  href="#"
                  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                >
                  <i className="fas fa-download fa-sm text-white-50" />{' '}
                  Generate Report
                </a>
              </div>
              <div className="row">
                <div className="col-xl-12 col-lg-12 ">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3 flex-row align-items-center justify-content-between">
                      <section className="mt-2 ">
                        <form
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
                            <div className="d-grid gap-2 col-3 ">
                              <button className="btn btn-danger" type="submit">Button</button>
                            </div>
                          </div>
                        </form>
                      </section>
                    </div>
                  </div>
                </div>

               
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

export default Addproducts;
