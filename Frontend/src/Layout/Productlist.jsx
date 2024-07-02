import React, { useState, useEffect } from 'react';
import Header from './dashboard/Header';
import axios from 'axios';


const Productlist = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://eafb-2405-201-301d-f872-a5f7-bfbe-80a9-e3f9.ngrok-free.app/api/getproducts',
          {
            headers: {
              'ngrok-skip-browser-warning': '69420'
            }
          })
        setProducts(response.data.data);

      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, []);

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
            {/* ============================================================== */}
            {/* Start Page Content */}
            {/* ============================================================== */}
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
                        <th scope='col'>cuisine</th>
                        <th scope="col">Customizations </th>
                        {/* <th scope="col">customizationName</th> */}
                        {/* <th scope="col">additionalprice</th> */}
                        <th scope="col">filters</th>
                        <th scope="col">Description</th>
                        <th>up</th>
                        {/* <th>Del</th> */}
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
                                {/* <td>{customization.customizationsName}</td> */}
                                {/* <li>{customization.additionalprice}</li> */}

                              </span>
                            ))}
                          </td>

                          <td> {product.filters.GlutenFree} <br /> {product.filters.Spicy} </td>

                          <td>{product.description}</td>
                          <td className='d-flex ' >


                            <i className="fa-solid fa-pen-to-square btn btn-info shadow" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i>
                            <i className="fa-solid fa-trash-can btn btn-danger mx-1 shadow"></i> </td>

                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      Static Table With Checkboxes
                    </h5>
                  </div>
                  <div className="table-responsive">
                    <table className="table">
                      <thead className="thead-light">
                        <tr>
                          <th>
                            <label className="customcheckbox mb-3">
                              <input type="checkbox" id="mainCheckbox" />
                              <span className="checkmark" />
                            </label>
                          </th>
                          <th scope="col">Rendering engine</th>
                          <th scope="col">Browser</th>
                          <th scope="col">Platform(s)</th>
                          <th scope="col">Engine version</th>
                        </tr>
                      </thead>
                      <tbody className="customtable">
                        <tr>
                          <th>
                            <label className="customcheckbox">
                              <input type="checkbox" className="listCheckbox" />
                              <span className="checkmark" />
                            </label>
                          </th>
                          <td>Trident</td>
                          <td>Internet Explorer 4.0</td>
                          <td>Win 95+</td>
                          <td>4</td>
                        </tr>
                        <tr>
                          <th>
                            <label className="customcheckbox">
                              <input type="checkbox" className="listCheckbox" />
                              <span className="checkmark" />
                            </label>
                          </th>
                          <td>Trident</td>
                          <td>Internet Explorer 5.0</td>
                          <td>Win 95+</td>
                          <td>5</td>
                        </tr>
                        <tr>
                          <th>
                            <label className="customcheckbox">
                              <input type="checkbox" className="listCheckbox" />
                              <span className="checkmark" />
                            </label>
                          </th>
                          <td>Trident</td>
                          <td>Internet Explorer 4.0</td>
                          <td>Win 95+</td>
                          <td>4</td>
                        </tr>
                        <tr>
                          <th>
                            <label className="customcheckbox">
                              <input type="checkbox" className="listCheckbox" />
                              <span className="checkmark" />
                            </label>
                          </th>
                          <td>Trident</td>
                          <td>Internet Explorer 5.0</td>
                          <td>Win 95+</td>
                          <td>5</td>
                        </tr>
                        <tr>
                          <th>
                            <label className="customcheckbox">
                              <input type="checkbox" className="listCheckbox" />
                              <span className="checkmark" />
                            </label>
                          </th>
                          <td>Trident</td>
                          <td>Internet Explorer 5.5</td>
                          <td>Win 95+</td>
                          <td>5.5</td>
                        </tr>
                        <tr>
                          <th>
                            <label className="customcheckbox">
                              <input type="checkbox" className="listCheckbox" />
                              <span className="checkmark" />
                            </label>
                          </th>
                          <td>Trident</td>
                          <td>Internet Explorer 6</td>
                          <td>Win 98+</td>
                          <td>6</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Collspan Table Example</h5>
                  </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
              {/* <!-- Modal --> */}
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
                        Modal title
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">...</div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Understood
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            {/* ============================================================== */}
            {/* End PAge Content */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* Right sidebar */}
            {/* ============================================================== */}
            {/* .right-sidebar */}
            {/* ============================================================== */}
            {/* End Right sidebar */}
            {/* ============================================================== */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Productlist


