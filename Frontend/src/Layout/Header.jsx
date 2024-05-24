import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
  const [isCollapsedTwo, setIsCollapsedTwo] = useState(false);

  const toggleCollapseTwo = () => {
    setIsCollapsedTwo(!isCollapsedTwo);
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <ul className='header-menus text-center  w-100'>
        <li className={`nav-item ${isCollapsedTwo ? 'active' : ''} menus  pt-4  `}>
          <div className="nav-link" onClick={toggleCollapseTwo}>
            <div className='d-flex justify-content-between'>
              <span className='text-white sidenav-menu'>Product</span>
              <i className={`fas fa-angle-${isCollapsedTwo ? 'down' : 'right'} ml-auto text-white`}></i>
            </div>
          </div>

          <div className={`collapse ${isCollapsedTwo ? 'show' : ''} list-menu pt-5 list-box`} style={{ transition: 'height 2.3s ease !important' }}>
            <div className=" collapse-inner rounded d-flex border-none header-menu py-5">

              <div className="Products-type">
                <div className='d-flex justify-content-center align-items-center '><img src="/icons/product.png"className='img-fluid img-w px-1' alt="" /> <h5 className=''> Products</h5></div> 
                <Link to="/Addproducts" className=" list-group-item-action "> Add Product</Link>
                <Link to="/Productlist" className=" list-group-item-action ">List Product</Link>
                <Link to="/addfood" className=" list-group-item-action">Add Category </Link>
                <Link to="#" className=" list-group-item-action">other</Link>
              </div>

            
              <div className="Billing-type">
              <div className='d-flex justify-content-center align-items-center'>  <h5 className=''> <img src="/icons/bill.png"className='img-fluid  img-w px-1' alt="" />View Billing</h5></div>
                <Link to="#" className=" list-group-item-action ">Add Table</Link>
                <Link to="#" className="list-group-item-action">Booked Table </Link>
                <Link to="#" className=" list-group-item-action">Remaining Table </Link>
                <Link to="#" className=" list-group-item-action ">List Table</Link>
              </div>


              <div className="Table-type">
              <div className='d-flex justify-content-center align-items-center '>  <img src="/icons/table.png"className='img-fluid img-w px-1' alt="" /><h5 className=''>Book Tables</h5></div>
                <Link to="#" className=" list-group-item-action ">Add Product</Link>
                <Link to="#" className=" list-group-item-action ">List Product</Link>
                <Link to="#" className=" list-group-item-action">Add Category </Link>
                <Link to="#" className=" list-group-item-action">other</Link>
              </div>

            </div>
          </div>
        </li>
        <li>
          <div className="position-fixed bottom-0 end-0 p-3" >
            <div id="liveToast" className="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
              <div className="toast-header">
                <img src="..." className="rounded me-2" alt="..." />
                <strong className="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
              </div>
              <div className="toast-body">
                Hello, world! This is a toast message.
              </div>
            </div>
          </div>
        </li>
      </ul>
   



































      {/* <form className="d-none d-sm-inline-block form-inline mb-lg-2 p-0 mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input
            type="text"
            className="form-control bg-light border-0 small"
            placeholder="Search for..."
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn bg-gradient-danger" type="button">
              <i className="fas fa-search fa-sm text-white" />
            </button>
          </div>
        </div>
      </form>
       */}
      {/* <ul className="navbar-na ml-auto">

        <li className="nav-item dropdown no-arrow">
          <div className='dropdown'>
            <a
              className="nav-link  dropdown-toggle"
              href="#"
              id="userDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-2 text-gray-600 small">
                Douglas McGee
              </span>
              <img
                className="img-profile rounded-circle"
                src="/icons/logo.png"
                alt="Logo"
                id="dropdownMenuButton1"
              />
            </a>

            <ul className="dropdown-menu" aria-labelledby="userDropdown">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </li>
      </ul> */}

    </nav>
  )
}

export default Header


