
import React, { useState } from 'react';
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
  const [image, setImage] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [foodtype, setFoodtype] = useState('');
  const [customizations, setCustomizations] = useState([
    {
      customizationsType: '',
      customizations: [
        {
          customizationName: '',
          additionalprice: 0,
        },
      ],
    },
  ]);
  const [filters, setFilters] = useState({
    GlutenFree: '',
    Spicy: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://06f6-2405-201-301d-f0d5-4087-a9fc-2f97-5ac1.ngrok-free.app/api/product', {
        itemname,
        description,
        baseprice,
        category,
        subcategory,
        discount,
        quantityavailable,
        image,
        cuisine,
        foodtype,
        customizations,
        filters,
      });

      if (response.status === 200) {
        // Assuming the API returns a success status code
        console.log("food add sucessfully")
      } else {
        // Handle other potential response cases based on API behavior
        alert('Login failed. Please check your credentials and try again.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      if (error.response && error.response.status === 401) {
        alert('Invalid email or password');
      } else {
        alert('Login failed. Please try again later.');
      }
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


        <div class="page-wrapper">
          <div class="page-breadcrumb">
            <div class="row">
              <div class="col-12 d-flex no-block align-items-center">
                <h4 class="page-title">Add Product</h4>
                <div class="ms-auto text-end">
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item"><a href="#">Home</a></li>
                      <li class="breadcrumb-item active" aria-current="page">
                        Library
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div class="page-breadcrumb"></div>

          <div className="container-fluid">
            {/* ============================================================== */}
            {/* Start Page Content */}
            {/* ============================================================== */}

            <div className="row">

              <div className="card">

                <div className="row p-3">
                  {/* <h4 class="card-title">Personal Info</h4> */}
                  <div className="col-lg-8">
                    <form onSubmit={handleSubmit}>
                      <h2>Create New Product</h2>
                      <label>
                        Item Name:
                        <input className="form-control"
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
                          value={description}
                          onChange={(event) => setDescription(event.target.value)}
                        />
                      </label>
                      <br />
                      <label>
                        Base Price:
                        <input className="form-control"
                          type="number"
                          value={baseprice}
                          onChange={(event) => setBaseprice(event.target.value)}
                          required
                        />
                      </label>
                      <br />
                      <label>
                        Category:
                        <input className="form-control"
                          type="text"
                          value={category}
                          onChange={(event) => setCategory(event.target.value)}
                          required
                        />
                      </label>
                      <br />
                      <label>
                        Subcategory:
                        <input className="form-control"
                          type="text"
                          value={subcategory}
                          onChange={(event) => setSubcategory(event.target.value)}
                          required
                        />
                      </label>
                      <br />
                      <label>
                        Discount:
                        <input className="form-control"
                          type="number"
                          value={discount}
                          onChange={(event) => setDiscount(event.target.value)}
                        />
                      </label>
                      <br />
                      <label>
                        Quantity Available:
                        <input className="form-control"
                          type="number"
                          value={quantityavailable}
                          onChange={(event) => setQuantityavailable(event.target.value)}
                        />
                      </label>
                      <br />
                      <label>
                        Image:
                        <input className="form-control"
                          type="text"
                          value={image}
                          onChange={(event) => setImage(event.target.value)}
                        />
                      </label>
                      <br />
                      <label>
                        Cuisine:
                        <input className="form-control"
                          type="text"
                          value={cuisine}
                          onChange={(event) => setCuisine(event.target.value)}
                        />
                      </label>
                      <br />
                      <label>
                        Food Type:
                        <input className="form-control"
                          type="text"
                          value={foodtype}
                          onChange={(event) => setFoodtype(event.target.value)}
                        />
                      </label>
                      <br />
                      <h3>Customizations</h3>
                      {customizations.map((customization, index) => (
                        <div key={index}>
                          <label>
                            Customization Type:
                            <input className="form-control"
                              type="text"
                              value={customization.customizationsType}
                              onChange={(event) =>
                                setCustomizations(
                                  customizations.map((c, i) =>
                                    i === index
                                      ? { ...c, customizationsType: event.target.value }
                                      : c
                                  )
                                )
                              }
                            />
                          </label>
                          <br />
                          {customization.customizations.map((c, i) => (
                            <div key={i}>
                              <label>
                                Customization Name:
                                <input className="form-control"
                                  type="text"
                                  value={c.customizationName}
                                  onChange={(event) =>
                                    setCustomizations(
                                      customizations.map((custom, j) =>
                                        j === index
                                          ? {
                                            ...custom,
                                            customizations: custom.customizations.map(
                                              (cc, k) =>
                                                k === i
                                                  ? { ...cc, customizationName: event.target.value }
                                                  : cc
                                            ),
                                          }
                                          : custom
                                      )
                                    )
                                  }
                                />
                              </label>
                              <br />
                              <label>
                                Additional Price:
                                <input className="form-control"
                                  type="number"
                                  value={c.additionalprice}
                                  onChange={(event) =>
                                    setCustomizations(
                                      customizations.map((custom, j) =>
                                        j === index
                                          ? {
                                            ...custom,
                                            customizations: custom.customizations.map(
                                              (cc, k) =>
                                                k === i
                                                  ? { ...cc, additionalprice: event.target.value }
                                                  : cc
                                            ),
                                          }
                                          : custom
                                      )
                                    )
                                  }
                                />
                              </label>
                            </div>
                          ))}
                        </div>
                      ))}
                      <br />
                      <h3>Filters</h3>
                      <label>
                        Gluten Free:
                        <select
                          value={filters.GlutenFree}
                          onChange={(event) =>
                            setFilters({ ...filters, GlutenFree: event.target.value })
                          }
                        >
                          <option value="">Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </label>
                      <br />
                      <label>
                        Spicy:
                        <select
                          value={filters.Spicy}
                          onChange={(event) =>
                            setFilters({ ...filters, Spicy: event.target.value })
                          }
                        >
                          <option value="">Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </label>
                      <br />
                      <button type="submit">Create Product</button>
                    </form>
                  </div>
                  <div className="col-lg-4 bg-info p-0">
                    <img src="image/Addfood.jpg" alt="" />
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


          <footer className="footer text-center">
            All Rights Reserved by Matrix-admin. Designed and Developed by
            <a href="https://www.wrappixel.com">WrapPixel</a>.
          </footer>

        </div>

      </div >


    </>
  );
};

export default Addproducts;