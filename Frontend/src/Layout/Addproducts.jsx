import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import './style.css';
// import Swal from 'sweetalert2';

const Addproducts = () => {
  const [formData, setFormData] = useState({
    itemname: '',
    description: '',
    baseprice: '',
    categoryId: '',
    subcategoryId: '',
    discount: '',
    quantityavailable: '',
    image: '',
    cuisine: '',
    foodtype: '',
    customizations: [
      {
        customizationsType: '',
        customizations: [
          {
            customizationName: '',
            additionalprice: ''
          }
        ]
      }
    ],
    filters: {
      GlutenFree: '',
      Spicy: ''
    }
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCustomizationChange = (index, e) => {
    const { name, value } = e.target;
    const customizations = [...formData.customizations];
    customizations[index][name] = value;
    setFormData({
      ...formData,
      customizations
    });
  };

  const addCustomization = () => {
    setFormData({
      ...formData,
      customizations: [
        ...formData.customizations,
        {
          customizationsType: '',
          customizations: [
            {
              customizationName: '',
              additionalprice: ''
            }
          ]
        }
      ]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await axios.post('https://7c63-2405-201-301d-f83a-45c9-fb6f-ac2c-fafb.ngrok-free.app/products', formData);
      setLoading(false);
      setSuccess('Product added successfully!');
      setFormData({
        itemname: '',
        description: '',
        baseprice: '',
        categoryId: '',
        subcategoryId: '',
        discount: '',
        quantityavailable: '',
        image: '',
        cuisine: '',
        foodtype: '',
        customizations: [
          {
            customizationsType: '',
            customizations: [
              {
                customizationName: '',
                additionalprice: ''
              }
            ]
          }
        ],
        filters: {
          GlutenFree: '',
          Spicy: ''
        }
      });
    } catch (err) {
      setLoading(false);
      setError('Error adding product. Please try again.');
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
                <h1 className="h3 mb-0 text-gray-800">Add Products</h1>
                <a
                  href="#"
                  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                >
                  <i className="fas fa-download fa-sm text-white-50" />{' '}
                  Generate Report
                </a>
              </div>
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <div className="card shadow mb-4">
                    <div className="card-body">
                      {error && <div className="alert alert-danger">{error}</div>}
                      {success && <div className="alert alert-success">{success}</div>}
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label htmlFor="itemname">Item Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="itemname"
                            name="itemname"
                            value={formData.itemname}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="description">Description</label>
                          <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="baseprice">Base Price</label>
                          <input
                            type="number"
                            className="form-control"
                            id="baseprice"
                            name="baseprice"
                            value={formData.baseprice}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="categoryId">Category</label>
                          <input
                          type='text'
                            className="form-control"
                            id="categoryId"
                            name="categoryId"
                            value={formData.categoryId}
                            onChange={handleChange}
                          />
                            {/* <option value="">Select Category</option> */}
                            {/* <option value="1">Desserts</option>
                            <option value="2">Main Dishes</option>
                            <option value="3">Drinks</option> */}
                          {/* </select> */}
                        </div>
                        <div className="form-group">
                          <label htmlFor="subcategoryId">Subcategory</label>
                          <input
                          type='text'
                            className="form-control"
                            id="subcategoryId"
                            name="subcategoryId"
                            value={formData.subcategoryId}
                            onChange={handleChange}
                          />
                            {/* <option value="">Select Subcategory</option> */}
                            {/* <option value="1">Cakes</option>
                            <option value="2">Pizzas</option>
                            <option value="3">Soda</option> */}
                          {/* </select> */}
                        </div>
                        <div className="form-group">
                          <label htmlFor="discount">Discount</label>
                          <input
                            type="number"
                            className="form-control"
                            id="discount"
                            name="discount"
                            value={formData.discount}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="quantityavailable">Quantity Available</label>
                          <input
                            type="number"
                            className="form-control"
                            id="quantityavailable"
                            name="quantityavailable"
                            value={formData.quantityavailable}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="image">Image</label>
                          <input
                            type="file"
                            className="form-control"
                            id="image"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="cuisine">Cuisine</label>
                          <input
                            type="text"
                            className="form-control"
                            id="cuisine"
                            name="cuisine"
                            value={formData.cuisine}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="foodtype">Food Type</label>
                          <input
                            type="text"
                            className="form-control"
                            id="foodtype"
                            name="foodtype"
                            value={formData.foodtype}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="customizations">Customizations</label>
                          {formData.customizations.map((customization, index) => (
                            <div key={index}>
                              <div className="form-group">
                                <label htmlFor={`customizationsType-${index}`}>Type</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id={`customizationsType-${index}`}
                                  name="customizationsType"
                                  value={customization.customizationsType}
                                  onChange={(e) => handleCustomizationChange(index, e)}
                                />
                              </div>
                              {customization.customizations.map((option, optionIndex) => (
                                <div key={optionIndex}>
                                  <div className="form-group">
                                    <label htmlFor={`customizationName-${optionIndex}`}>Name</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id={`customizationName-${optionIndex}`}
                                      name="customizationName"
                                      value={option.customizationName}
                                      onChange={(e) => handleCustomizationChange(index, e)}
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor={`additionalprice-${optionIndex}`}>Additional Price</label>
                                    <input
                                      type="number"
                                      className="form-control"
                                      id={`additionalprice-${optionIndex}`}
                                      name="additionalprice"
                                      value={option.additionalprice}
                                      onChange={(e) => handleCustomizationChange(index, e)}
                                    />
                                  </div>
                                </div>
                              ))}
                              <button
                                type="button"
                                className="btn btn-danger my-4"
                                onClick={() => {
                                  const updatedCustomizations = [...formData.customizations];
                                  updatedCustomizations.splice(index, 1);
                                  setFormData({ ...formData, customizations: updatedCustomizations });
                                }}
                              >
                                Remove Customization
                              </button>
                            </div>
                          ))}
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={addCustomization}
                          >
                            Add Customization
                          </button>
                        </div>



                    {/*Radio  */}


                        <div className="form-group">
                          <label htmlFor="filters">GlutenFree</label>
                          <div className="form-check">
                          <input
                              className="form-check-input"
                              type="radio"
                              name="GlutenFree"
                              id="GlutenFreeYes"
                              value="Yes"
                              checked={formData.filters.GlutenFree === 'Yes'}
                              onChange={(e) => setFormData({ ...formData, filters: { ...formData.filters, GlutenFree: e.target.value } })}
                            />
                            <label className="form-check-label" htmlFor="GlutenFreeYes">
                              Yes
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="GlutenFree"
                              id="GlutenFreeNo"
                              value="No"
                              checked={formData.filters.GlutenFree === 'No'}
                              onChange={(e) => setFormData({ ...formData, filters: { ...formData.filters, GlutenFree: e.target.value } })}
                            />
                            <label className="form-check-label" htmlFor="GlutenFreeNo">
                              No
                            </label>
                          </div>
                          <div className="form-check mt-3">
                          <label htmlFor="filters">Spicy</label>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="Spicy"
                              id="SpicyYes"
                              value="Yes"
                              checked={formData.filters.Spicy === 'Yes'}
                              onChange={(e) => setFormData({ ...formData, filters: { ...formData.filters, Spicy: e.target.value } })}
                            />
                            <label className="form-check-label" htmlFor="SpicyYes">
                              Yes
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="Spicy"
                              id="SpicyNo"
                              value="No"
                              checked={formData.filters.Spicy === 'No'}
                              onChange={(e) => setFormData({ ...formData, filters: { ...formData.filters, Spicy: e.target.value } })}
                            />
                            <label className="form-check-label" htmlFor="SpicyNo">
                              No
                            </label>
                          </div>
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Addproducts;