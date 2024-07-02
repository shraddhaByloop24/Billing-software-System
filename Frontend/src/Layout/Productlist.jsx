import React, { useState, useEffect } from 'react';
import Header from './dashboard/Header';
import axios from 'axios';
import Editmenu from './Editmenu';

const Productlist = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    itemname: '',
    baseprice: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://eafb-2405-201-301d-f872-a5f7-bfbe-80a9-e3f9.ngrok-free.app/api/getproducts',
          {
            headers: {
              'ngrok-skip-browser-warning': '69420'
            }
          });
        setProducts(response.data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, []);

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setFormData({
      itemname: product.itemname,
      baseprice: product.baseprice,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://eafb-2405-201-301d-f872-a5f7-bfbe-80a9-e3f9.ngrok-free.app/api/products/:id`,
        formData,
        {
          headers: {
            'ngrok-skip-browser-warning': '69420'
          }
        }
      );
      console.log('Product updated:', response.data);
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === selectedProduct._id ? response.data : product
        )
      );
      setSelectedProduct(null);
      setFormData({
        itemname: '',
        baseprice: 0,
      });
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <>
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
                <h4 className="page-title">Tables</h4>
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
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <h1 className="card-title heading mb-0">Product List Table</h1>
                  </div>
                  <table className="table">
                    <thead>
                      <tr className='bg-light shadow-sm'>
                        <th scope="col">S.no</th>
                        <th scope="col">Item Name</th>
                        <th scope="col">Base Price</th>
                        <th scope="col">Category</th>
                        <th scope="col">Subcategory</th>
                        <th scope="col">Discount</th>
                        <th scope="col">QA</th>
                        <th scope="col">Image</th>
                        <th scope='col'>Cuisine</th>
                        <th scope="col">Customizations</th>
                        <th scope="col">Filters</th>
                        <th scope="col">Description</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(products) && products.map((product, index) => (
                        <tr key={product._id}>
                          <th scope="row">{index + 1}</th>
                          <td>{product.itemname}</td>
                          <td>${product.baseprice}</td>
                          <td>{product.category}</td>
                          <td>{product.subcategory}</td>
                          <td>{product.discount}</td>
                          <td>{product.quantityavailable}</td>
                          <td><a href={product.image} className='text-dark'>image{index + 1} </a> </td>
                          <td>{product.cuisine}</td>
                          <td>
                            {product.customizations.map((customization, index) => (
                              <span key={index}>
                                <td>{customization.customizationsType}</td>
                              </span>
                            ))}
                          </td>
                          <td>{product.filters.GlutenFree} <br /> {product.filters.Spicy} </td>
                          <td>{product.description}</td>
                          <td className='d-flex '>
                            <i
                              className="fa-solid fa-pen-to-square btn btn-info shadow"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                              onClick={() => handleEditClick(product)}
                            ></i>
                            <i className="fa-solid fa-trash-can btn btn-danger mx-1 shadow"></i>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex={-1}
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">
                        Edit Product
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <form onSubmit={handleFormSubmit}>
                        <div className="row">
                          <label className='w-100 col-lg-6'>
                            Item Name:
                            <input
                              className="form-control border"
                              type="text"
                              name="itemname"
                              value={formData.itemname}
                              onChange={handleInputChange}
                              required
                            />
                          </label>
                          <br />
                          <label className='w-100 col-lg-6'>
                            Base Price:
                            <input
                              className="form-control border"
                              type="number"
                              name="baseprice"
                              value={formData.baseprice}
                              onChange={handleInputChange}
                              required
                            />
                          </label>
                        </div>
                        <div className="row">
                          <label className='w-100 col-lg-6'>
                          category
                            <input
                              className="form-control border"
                              type="text"
                              name="category"
                              value={formData.category}
                              onChange={handleInputChange}
                              required
                            />
                          </label>
                          <br />
                          <label className='w-100 col-lg-6'>
                            Subcategory
                            <input
                              className="form-control border"
                              type="text"
                              name="baseprice"
                              value={formData.subcategory}
                              onChange={handleInputChange}
                              required
                            />
                          </label>
                        </div>
                        <div className="row">
                          <label className='w-100 col-lg-6'>
                          Quantityavailable
                            <input
                              className="form-control border"
                              type="text"
                              name="quantityavailable"
                              value={formData.quantityavailable}
                              onChange={handleInputChange}
                              required
                            />
                          </label>
                          <br />
                          <label className='w-100 col-lg-6'>
                            Subcategory
                            <input
                              className="form-control border"
                              type="file"
                              name="image"
                              value={formData.image}
                              onChange={handleInputChange}
                              required
                            />
                          </label>
                        </div>
                        <div className="row">
                          <label className='w-100 col-lg-6'>
                           Cuisine
                            <input
                              className="form-control border"
                              type="text"
                              name="quantityavailable"
                              value={formData.cuisine}
                              onChange={handleInputChange}
                              required
                            />
                          </label>
                          <br />
                          <label className='w-100 col-lg-6'>
                          Foodtype
                            <input
                              className="form-control border"
                              type="text"
                              name="foodtype"
                              value={formData.foodtype}
                              onChange={handleInputChange}
                              required
                            />
                          </label>
                        </div>



                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="submit" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productlist;
