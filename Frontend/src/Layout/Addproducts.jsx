import React, { useState } from 'react';
import axios from 'axios';
import Header from './dashboard/Header';
import './Style.css'

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

      const response = await axios.post('https://06f6-2405-201-301d-f0d5-4087-a9fc-2f97-5ac1.ngrok-free.app/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        console.log('Product added successfully');
      } else {
        alert('Product addition failed. Please check your input and try again.');
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

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
                    <h2>Create New Product</h2>
                    <label>
                      Item Name:
                      <input
                        className="form-control"
                        type="text"
                        value={itemname}
                        onChange={(event) => setItemname(event.target.value)}
                        required
                      />
                    </label>
                    <br />
                    <label>
                      Description:
                      <textarea
                        className="form-control"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                      />
                    </label>
                    <br />
                    <label>
                      Base Price:
                      <input
                        className="form-control"
                        type="number"
                        value={baseprice}
                        onChange={(event) => setBaseprice(event.target.value)}
                        required
                      />
                    </label>
                    <br />
                    <label>
                      Category:
                      <input
                        className="form-control"
                        type="text"
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                        required
                      />
                    </label>
                    <br />
                    <label>
                      Subcategory:
                      <input
                        className="form-control"
                        type="text"
                        value={subcategory}
                        onChange={(event) => setSubcategory(event.target.value)}
                        required
                      />
                    </label>
                    <br />
                    <label>
                      Discount:
                      <input
                        className="form-control"
                        type="number"
                        value={discount}
                        onChange={(event) => setDiscount(event.target.value)}
                      />
                    </label>
                    <br />
                    <label>
                      Quantity Available:
                      <input
                        className="form-control"
                        type="number"
                        value={quantityavailable}
                        onChange={(event) => setQuantityavailable(event.target.value)}
                      />
                    </label>
                    <br />
                    <label>
                      Image:
                      <input
                        className="form-control"
                        type="file"
                        onChange={(event) => setImage(event.target.files[0])}
                      />
                    </label>
                    <br />
                    <label>
                      Cuisine:
                      <input
                        className="form-control"
                        type="text"
                        value={cuisine}
                        onChange={(event) => setCuisine(event.target.value)}
                      />
                    </label>
                    <br />
                    <label>
                      Food Type:
                      <input
                        className="form-control"
                        type="text"
                        value={foodtype}
                        onChange={(event) => setFoodtype(event.target.value)}
                      />
                    </label>
                    <br />
                    {customizations.map((customization, index) => (
                      <div key={index}>
                        <label>
                          Customization Type:
                          <input
                            className="form-control"
                            type="text"
                            name="customizationsType"
                            value={customization.customizationsType}
                            onChange={(event) => handleCustomizationsChange(index, event)}
                          />
                        </label>
                        <br />
                        {customization.customizations.map((cust, custIndex) => (
                          <div key={custIndex}>
                            <label>
                              Customization Name:
                              <input
                                className="form-control"
                                type="text"
                                name="customizationName"
                                data-index={custIndex}
                                value={cust.customizationName}
                                onChange={(event) => handleCustomizationsChange(index, event)}
                              />
                            </label>
                            <br />
                            <label>
                              Additional Price:
                              <input
                                className="form-control"
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
                    <button type="button" className="btn btn-secondary" onClick={handleAddCustomization}>Add Customization</button>
                    <br />
                    <label>
                      Gluten Free:
                      <select className="form-control" name="GlutenFree" value={filters.GlutenFree} onChange={handleFiltersChange}>
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </label>
                    <br />
                    <label>
                      Spicy:
                      <select className="form-control" name="Spicy" value={filters.Spicy} onChange={handleFiltersChange}>
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </label>
                    <br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
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