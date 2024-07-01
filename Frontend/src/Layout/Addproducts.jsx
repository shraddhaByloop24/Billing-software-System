import React, { useState } from 'react';
import axios from 'axios';
import Header from './dashboard/Header';
import './Style.css'
import Swal from 'sweetalert2';

const Addproducts = () => {
  const [itemname, setItemname] = useState('');
  const [description, setDescription] = useState('');
  const [baseprice, setBaseprice] = useState(0);
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [discount, setDiscount] = useState(0);
  const [quantityavailable, setQuantityavailable] = useState(0);
  const [image, setImage] = useState(null);
  const [cuisine, setCuisine] = useState('');
  const [foodtype, setFoodtype] = useState('');
  const [customizations, setCustomizations] = useState([{ customizationsType: '', customizations: [{ customizationName: '', additionalprice: 0 }] }]);
  const [filters, setFilters] = useState({ GlutenFree: '', Spicy: '' });

  const handleCustomizationsChange = (index, event) => {
    const newCustomizations = [...customizations];
    if (event.target.name === "customizationsType") {
      newCustomizations[index].customizationsType = event.target.value;
    } else {
      const customizationIndex = parseInt(event.target.dataset.index);
      newCustomizations[index].customizations[customizationIndex][event.target.name] = event.target.value;
    }
    setCustomizations(newCustomizations);
  };

  const handleAddCustomization = () => {
    setCustomizations([...customizations, { customizationsType: '', customizations: [{ customizationName: '', additionalprice: 0 }] }]);
  };

  const handleFiltersChange = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('itemname', itemname);
      formData.append('description', description);
      formData.append('baseprice', baseprice);
      formData.append('category', category);
      formData.append('subcategory', subcategory);
      formData.append('discount', discount);
      formData.append('quantityavailable', quantityavailable);
      formData.append('image', image);
      formData.append('cuisine', cuisine);
      formData.append('foodtype', foodtype);
      formData.append('customizations', JSON.stringify(customizations));
      formData.append('filters', JSON.stringify(filters));
      const response = await axios.post('https://0b75-2405-201-301d-f0d5-908b-552e-3045-d644.ngrok-free.app/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        Swal.fire('Success!', 'Product added successfully', 'uccess');
      } else {
        alert('Product addition failed. Please check your input and try again.');
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  }

  return (
    <div
      id="main-wrapper"
      data-layout="vertical"
      data-navbarbg="skin5"
      data-sidebartype="full"
      data-sidebar-position="absolute"
      data-header-position="absolute"
      data-boxed-layout="full"
    >
      <Header />

      <div className="page-wrapper">
        <div className="page-breadcrumb">
          <div className="row">
            <div className="col-12 d-flex no-block align-items-center">
              <h4 className="page-title">Add Product</h4>
              <div className="ms-auto text-end">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Library
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="page-breadcrumb"></div>

        <div className="container-fluid">
          <div className="row">
            <div className="card">
              <div className="row p-3">
                <div className="col-lg-8">
                  <form onSubmit={handleSubmit}>
                    {/* <h2 className='heading'>Create New Product</h2> */}
                    <div className="row">
                      <label className='w-100 col-lg-6'>
                        Item Name:
                        <input
                          className="form-control border"
                          type="text"
                          value={itemname}
                          onChange={(event) => setItemname(event.target.value)}
                          required
                        />
                      </label>
                      <br />

                      <label className='w-100 col-lg-6'>
                        Base Price:
                        <input
                          className="form-control border"
                          type="number"
                          value={baseprice}
                          onChange={(event) => setBaseprice(event.target.value)}
                          required
                        />
                      </label>
                    </div>
                    <br />
                    <div className="row">
                      <label className='w-100 col-lg-6'>
                        Category:
                        <input
                          className="form-control border"
                          type="text"
                          value={category}
                          onChange={(event) => setCategory(event.target.value)}
                          required
                        />
                      </label>
                      <br />
                      <label className="w-100 col-lg-6">
                        Subcategory:
                        <input
                          className="form-control border"
                          type="text"
                          value={subcategory}
                          onChange={(event) => setSubcategory(event.target.value)}
                          required
                        />
                      </label>
                    </div>
                    <br />
                    <div className="row">
                      <label className="w-100 col-lg-6">
                        Discount:
                        <input
                          className="form-control border"
                          type="number"
                          value={discount}
                          onChange={(event) => setDiscount(event.target.value)}
                        />
                      </label>
                      <br />
                      <label className="w-100 col-lg-6">
                        Quantity Available:
                        <input
                          className="form-control border"
                          type="number"
                          value={quantityavailable}
                          onChange={(event) => setQuantityavailable(event.target.value)}
                        />
                      </label>
                    </div>  
                    <br />
                    <div className="row">
                      <label className="w-100 col-lg-6">
                        Image:
                        <input
                          className="form-control border"
                          type="file"
                          onChange={(event) => setImage(event.target.files[0])}
                        />
                      </label>
                      <br />
                      <label className="w-100 col-lg-6">
                        Cuisine:
                        <input
                          className="form-control border"
                          type="text"
                          value={cuisine}
                          onChange={(event) => setCuisine(event.target.value)}
                        />
                      </label>
                    </div>
                    <br />
                    
                    <label className="w-100">
                      Food Type:
                      <input
                        className="form-control border"
                        type="text"
                        value={foodtype}
                        onChange={(event) => setFoodtype(event.target.value)}
                      />
                    </label>
                    <br />
                    {customizations.map((customization, index) => (
                      <div key={index}>
                        
                        <label className="w-100">
                          Customization Type:
                          <input
                            className="form-control border"
                            type="text"
                            name="customizationsType"
                            value={customization.customizationsType}
                            onChange={(event) => handleCustomizationsChange(index, event)}
                          />
                        </label>
                        <br />
                        {customization.customizations.map((cust, custIndex) => (
                          <div key={custIndex}>
                            <label className="w-100">
                              Customization Name:
                              <input
                                className="form-control border"
                                type="text"
                                name="customizationName"
                                data-index={custIndex}
                                value={cust.customizationName}
                                onChange={(event) => handleCustomizationsChange(index, event)}
                              />
                            </label>
                            <br />
                            <label className="w-100">
                              Additional Price:
                              <input
                                className="form-control border"
                                type="number"
                                name="additionalprice"
                                data-index={custIndex}
                                value={cust.additionalprice}
                                onChange={(event) => handleCustomizationsChange(index, event)}
                              />
                            </label>
                            <br />
                          </div>
                        ))}
                      </div>
                    ))}
                    <button type="button" className="custom btn-2 " onClick={handleAddCustomization}> Customization</button>
                    <br />
                    <div className="row mt-3">
                      <label className="w-100 col-lg-6">
                        Gluten Free:
                        <select className="form-control border" name="GlutenFree" value={filters.GlutenFree} onChange={handleFiltersChange}>
                          <option value="">Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </label>
                      <br />
                      <label className="w-100 col-lg-6">
                        Spicy:
                        <select className="form-control border" name="Spicy" value={filters.Spicy} onChange={handleFiltersChange}>
                          <option value="">Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </label>
                    </div>
                    <br />
                    <label className="w-100">
                      Description:
                      <textarea
                        className="form-control border"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                      />
                    </label>
                    <br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
                </div>
                <div className="col-lg-4">
                  <div className='shadow'>
                    <img src="image/30727.jpg" height={520} alt="" />
                  </div>
                  <div className='mt-3 shadow p-3'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam atque alias laboriosam quos aliquid neque repudiandae odit, sunt expedita excepturi nesciunt, nam modi enim? Cupiditate optio ducimus excepturi quos saepe. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente maxime quo molestias voluptatibus iste perferendis consectetur tenetur consequatur quas, possimus beatae quisquam debitis facilis unde mollitia! Quas et dolor maiores!</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Addproducts;