import React, { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };


  return (
    <>

      {/* ============================================================== */}
      {/* Topbar header - style you can find in pages.scss */}
      {/* ============================================================== */}
      <header className="topbar" data-navbarbg="skin5">
        <nav className="navbar top-navbar navbar-expand-md navbar-dark">
          <div className="navbar-header "  data-logobg="skin5">
            {/* ============================================================== */}
            {/* Logo */}
            {/* ============================================================== */}
            <a className="navbar-brand" href="">
              {/* Logo icon */}
              <b className="logo-icon ps-2">
                {/*You can put here icon as well // <i className="wi wi-sunset"></i> //*/}
                {/* Dark Logo icon */}
                {/* <img
                    src="icons/Byloop.png"
                    alt="homepage"
                    className="light-logo"
                    width={25}
                  /> */}
              </b>
              {/*End Logo icon */}
              {/* Logo text */}
              <span className="logo-text  ms-1 pt-0 ">
                {/* dark Logo text */}
                <img
                  src="icons/main-logo.png"
                  alt="homepage"
                  className="light-logo text-center img-fluid"
                  width={60}
                />Billing System
              </span>

            </a>
            {/* ============================================================== */}
            {/* End Logo */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* Toggle which is visible on mobile only */}
            {/* ============================================================== */}
            <a className="nav-toggler waves-effect waves-light d-block d-md-none" onClick={handleSidebarToggle} >
              <i className={sidebarOpen ? 'ti-close' : 'ti-menu'} />
            </a>
          </div>
          {/* ============================================================== */}
          {/* End Logo */}
          {/* ============================================================== */}
          <div
            className="navbar-collapse collapse  "
            id="navbarSupportedContent"
            data-navbarbg="skin5"
          >
            {/* ============================================================== */}
            {/* toggle and nav items */}
            {/* ============================================================== */}
            <ul className="navbar-nav float-start me-auto ">
              <li className="nav-item d-none d-lg-block">
                <a
                  className="nav-link sidebartoggler waves-effect waves-light"
                  
                  data-sidebartype="mini-sidebar"
                >
                  <i className="fa-solid fa-bars"></i>
                </a>
              </li>
              {/* ============================================================== */}
              {/* create new */}
              {/* ============================================================== */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="d-none d-md-block">
                    Create New <i className="fa fa-angle-down" />
                  </span>
                  <span className="d-block d-md-none">
                    <i className="fa fa-plus" />
                  </span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              {/* ============================================================== */}
              {/* Search */}
              {/* ============================================================== */}
              <li className="nav-item search-box">
                <a
                  className="nav-link waves-effect waves-dark"
                  href="javascript:void(0)"
                >
                 <i className="fa-solid fa-magnifying-glass"></i>
                </a>
                <form className="app-search position-absolute">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search & enter"
                  />
                  <a className="srh-btn">
                  <i className="fa-solid fa-bars"></i>
                  </a>
                </form>
              </li>
            </ul>
            {/* ============================================================== */}
            {/* Right side toggle and nav items */}
            {/* ============================================================== */}
            <ul className="navbar-nav float-end">
              {/* ============================================================== */}
              {/* Comment */}
              {/* ============================================================== */}
              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="font-22 fa-solid fa-bell"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              {/* ============================================================== */}
              {/* End Comment */}
              {/* ============================================================== */}
              {/* ============================================================== */}
              {/* Messages */}
              {/* ============================================================== */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle waves-effect waves-dark"
                  href="#"
                  id={2}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="font-22 fa-solid fa-message"></i>
                </a>
                <ul
                  className="
              dropdown-menu dropdown-menu-end
              mailbox
              animated
              bounceInDown
            "
                  aria-labelledby={2}
                >
                  <ul className="list-style-none">
                    <li>
                      <div className="">
                        {/* Message */}
                        <a href="javascript:void(0)" className="link border-top">
                          <div className="d-flex no-block align-items-center p-10">
                            <span
                              className="
                          btn btn-success btn-circle
                          d-flex
                          align-items-center
                          justify-content-center
                        "
                            >
                              <i className="mdi mdi-calendar text-white fs-2" />
                            </span>
                            <div className="ms-2">
                              <h5 className="mb-0">Event today</h5>
                              <span className="mail-desc">
                                Just a reminder that event
                              </span>
                            </div>
                          </div>
                        </a>
                        {/* Message */}
                        <a href="javascript:void(0)" className="link border-top">
                          <div className="d-flex no-block align-items-center p-10">
                            <span
                              className="
                          btn btn-info btn-circle
                          d-flex
                          align-items-center
                          justify-content-center
                        "
                            >
                              <i className="mdi mdi-settings fs-4" />
                            </span>
                            <div className="ms-2">
                              <h5 className="mb-0">Settings</h5>
                              <span className="mail-desc">
                                You can customize this template
                              </span>
                            </div>
                          </div>
                        </a>
                        {/* Message */}
                        <a href="javascript:void(0)" className="link border-top">
                          <div className="d-flex no-block align-items-center p-10">
                            <span
                              className="
                          btn btn-primary btn-circle
                          d-flex
                          align-items-center
                          justify-content-center
                        "
                            >
                              <i className="mdi mdi-account fs-4" />
                            </span>
                            <div className="ms-2">
                              <h5 className="mb-0">Pavan kumar</h5>
                              <span className="mail-desc">
                                Just see the my admin!
                              </span>
                            </div>
                          </div>
                        </a>
                        {/* Message */}
                        <a href="javascript:void(0)" className="link border-top">
                          <div className="d-flex no-block align-items-center p-10">
                            <span
                              className="
                          btn btn-danger btn-circle
                          d-flex
                          align-items-center
                          justify-content-center
                        "
                            >
                              <i className="mdi mdi-link fs-4" />
                            </span>
                            <div className="ms-2">
                              <h5 className="mb-0">Luanch Admin</h5>
                              <span className="mail-desc">
                                Just see the my new admin!
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                  </ul>
                </ul>
              </li>
              {/* ============================================================== */}
              {/* End Messages */}
              {/* ============================================================== */}
              {/* ============================================================== */}
              {/* User profile and search */}
              {/* ============================================================== */}
              <li className="nav-item dropdown">
                <a
                  className="
              nav-link
              dropdown-toggle
              text-muted
              waves-effect waves-dark
              pro-pic
            "
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="icons/1.jpg"
                    alt="user"
                    className="rounded-circle pb-2"
                    width={31}
                  />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end user-dd animated"
                  aria-labelledby="navbarDropdown"
                >
                  <a className="dropdown-item" href="javascript:void(0)">
                    <i className="mdi mdi-account me-1 ms-1" /> My Profile
                  </a>
                  <a className="dropdown-item" href="javascript:void(0)">
                    <i className="mdi mdi-wallet me-1 ms-1" /> My Balance
                  </a>
                  <a className="dropdown-item" href="javascript:void(0)">
                    <i className="mdi mdi-email me-1 ms-1" /> Inbox
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="javascript:void(0)">
                    <i className="mdi mdi-settings me-1 ms-1" /> Account Setting
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="javascript:void(0)">
                    <i className="fa fa-power-off me-1 ms-1" /> Logout
                  </a>
                  <div className="dropdown-divider" />
                  <div className="ps-4 p-10">
                    <a
                      href="javascript:void(0)"
                      className="btn btn-sm btn-success btn-rounded text-white"
                    >
                      View Profile
                    </a>
                  </div>
                </ul>
              </li>
              {/* ============================================================== */}
              {/* User profile and search */}
              {/* ============================================================== */}
            </ul>
          </div>
        </nav>
      </header>
      {/* ============================================================== */}
      {/* End Topbar header */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* Left Sidebar - style you can find in sidebar.scss  */}
      {/* ============================================================== */}
      <aside className={`left-sidebar ${sidebarOpen ? '' : 'closed'}`}
        data-sidebarbg="skin5">
        {/* Sidebar scroll*/}
        <div className="scroll-sidebar">
          {/* Sidebar navigation*/}
          <nav className="sidebar-nav">
            <ul id="sidebarnav" className="pt-4">
              <li className="sidebar-item px-2">
                <Link to="/Dashboard"
                  className="sidebar-link waves-effect waves-dark sidebar-link"

                  aria-expanded="false"
                >
                  <img src="icons/Dashoard.png" className='img-fluid' width={25} alt="" />

                  <span className="hide-menu px-2">Dashboard</span>
                </Link>
              </li>
              <li className="sidebar-item px-2">
                <Link to="/Addproducts" className="sidebar-link waves-effect waves-dark sidebar-link">
                  <img src="icons/addfood.png" className='img-fluid' width={20} alt="" />
                  <span className="hide-menu px-2">Add Product</span>
                </Link>

              </li>
              <li className="sidebar-item px-2">
                <Link to="/Dashboard"
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  href="widgets.html"
                  aria-expanded="false"
                >
                  <img src="icons/table.png" className='img-fluid' width={25} alt="" />
                  <span className="hide-menu px-1">Book Table</span>
                </Link>
              </li>

              <li className="sidebar-item px-2">
                <Link to="/Productlist"
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  href="widgets.html"
                  aria-expanded="false"
                >
                  <img src="icons/table.png" className='img-fluid' width={25} alt="" />
                  <span className="hide-menu px-1">Product List</span>
                </Link>
              </li>
              <li className="sidebar-item px-2">
                <Link to='/payment'
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  href="tables.html"
                  aria-expanded="false"
                >
                  <img src="icons/wallet_8015936.png" className='img-fluid' width={25} alt="" />
                  <span className="hide-menu px-2">Payment</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-receipt" />
                  <span className="hide-menu">Forms </span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="form-basic.html" className="sidebar-link">
                      <i className="mdi mdi-note-outline" />
                      <span className="hide-menu"> Form Basic </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="form-wizard.html" className="sidebar-link">
                      <i className="mdi mdi-note-plus" />
                      <span className="hide-menu"> Form Wizard </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  href="pages-buttons.html"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-relative-scale" />
                  <span className="hide-menu">Buttons</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-face" />
                  <span className="hide-menu">Icons </span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="icon-material.html" className="sidebar-link">
                      <i className="mdi mdi-emoticon" />
                      <span className="hide-menu"> Material Icons </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="icon-fontawesome.html" className="sidebar-link">
                      <i className="mdi mdi-emoticon-cool" />
                      <span className="hide-menu"> Font Awesome Icons </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  href="pages-elements.html"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-pencil" />
                  <span className="hide-menu">Elements</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-move-resize-variant" />
                  <span className="hide-menu">Addons</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="index2.html" className="sidebar-link">
                      <i className="mdi mdi-view-dashboard" />
                      <span className="hide-menu"> Dashboard-2 </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="pages-gallery.html" className="sidebar-link">
                      <i className="mdi mdi-multiplication-box" />
                      <span className="hide-menu"> Gallery </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="pages-calendar.html" className="sidebar-link">
                      <i className="mdi mdi-calendar-check" />
                      <span className="hide-menu"> Calendar </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="pages-invoice.html" className="sidebar-link">
                      <i className="mdi mdi-bulletin-board" />
                      <span className="hide-menu"> Invoice </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="pages-chat.html" className="sidebar-link">
                      <i className="mdi mdi-message-outline" />
                      <span className="hide-menu"> Chat Option </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-account-key" />
                  <span className="hide-menu">Authentication</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="authentication-login.html" className="sidebar-link">
                      <i className="mdi mdi-all-inclusive" />
                      <span className="hide-menu"> Login </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="authentication-register.html"
                      className="sidebar-link"
                    >
                      <i className="mdi mdi-all-inclusive" />
                      <span className="hide-menu"> Register </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-alert" />
                  <span className="hide-menu">Errors </span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="error-403.html" className="sidebar-link">
                      <i className="mdi mdi-alert-octagon" />
                      <span className="hide-menu"> Error 403 </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="error-404.html" className="sidebar-link">
                      <i className="mdi mdi-alert-octagon" />
                      <span className="hide-menu"> Error 404 </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="error-405.html" className="sidebar-link">
                      <i className="mdi mdi-alert-octagon" />
                      <span className="hide-menu"> Error 405 </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="error-500.html" className="sidebar-link">
                      <i className="mdi mdi-alert-octagon" />
                      <span className="hide-menu"> Error 500 </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item p-3">
                <a
                  href="https://github.com/wrappixel/matrix-admin-bt5"
                  target="_blank"
                  className="
              w-100
              btn btn-cyan
              d-flex
              align-items-center
              text-white
            "
                >
                  <i className="mdi mdi-cloud-download font-20 me-2" />
                  Download Free
                </a>
              </li>
            </ul>
          </nav>
          {/* End Sidebar navigation */}
        </div>
        {/* End Sidebar scroll*/}
      </aside>
      {/* ============================================================== */}
      {/* End Left Sidebar - style you can find in sidebar.scss  */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* Page wrapper  */}
      {/* ============================================================== */}


    </>
  )
}

export default Header