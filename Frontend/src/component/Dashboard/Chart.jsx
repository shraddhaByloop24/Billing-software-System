import React from 'react'
import { Link } from 'react-router-dom'
import './floatChart.css'
import Backbtn from './Backbtn';
const Chart = () => {
  return (
    <>
      {/* Cards */}
      <div
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin5"
        data-sidebartype="full"
        data-sidebar-position="absolute"
        data-header-position="absolute"
        data-boxed-layout="full"
      >

        <div class="page-wrapper p-2 pb-4">
          <div class="page-breadcrumb">

            <div class="row">
              <div class="col-12 d-flex no-block align-items-center">
                <h4 class="page-title">Dashboard</h4>
                <div class="ms-auto text-end">
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item">
                        <Link to="/Dashboard">
                          Home  <i className="fa-solid fa-chevron-right"></i>
                        </Link>
                      </li>
                      <li class="breadcrumb-item ">
                        Library
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>


          </div>
        </div>
        <div class="page-wrapper p-2 pb-4 bg-white">
          <div class="page-breadcrumb">
            {/* Higlight Billing */}
            <div className='container-fluid w-100 mt-2 mb-4 text-white shadow higlight-content'>
              <div className="row p-3 ">
                <div className="col-lg-10 ">
                  <h3>Lets make a Bill</h3>
                  <p className='pt-2'>Lorem ipsum dolor, sit amet consectetur <br />adipisicing elit. Ex ipsum velit asperiores reiciendis voluptas sapiente. </p>
                </div>
                <div className="col-lg-2">
                  <div className='d-flex justify-content-center align-items-center '>
                    <button class="custom-btn btn-13 mt-3">
                      <Link to='/payment' className='text-white'>Generate Bill</Link>
                    </button>

                  </div>
                </div>
              </div>
            </div>
            <Backbtn />

            <div className='d-flex justify-content-center align-items-center row mt-4'>
              <div className="col-lg-6">
                <div className="card w-100 ">
                  <div className="card-header">
                    <div className="header-left">
                      <h3>weekly report</h3>
                      <p>01.Feb-07.Feb</p>
                    </div>
                    <div className="header-right">
                      <h3>Revenue</h3>
                      <p>$3,621.79</p>
                    </div>
                  </div>
                  <div className="card-info">
                    <div>
                      <span className="color" />
                      <p>Views</p>
                    </div>
                    <div>
                      <span className="color color2" />
                      <p>Purchases</p>
                    </div>
                  </div>
                  <div className="chart">
                    <div className="line">
                      <span>
                        <span>
                          <span>150</span>
                        </span>
                      </span>
                      <span>
                        <span>
                          <span>250</span>
                        </span>
                      </span>
                      <span>
                        <span>
                          <span>230</span>
                        </span>
                      </span>
                      <span>
                        <span>
                          <span>250</span>
                        </span>
                      </span>
                      <span>
                        <span>
                          <span>140</span>
                        </span>
                      </span>
                      <span>
                        <span>
                          <span>135</span>
                        </span>
                      </span>
                    </div>
                    <div className="line">
                      <span>
                        <span>
                          <span>165</span>
                        </span>
                      </span>
                      <span>
                        <span>
                          <span>210</span>
                        </span>
                      </span>
                      <span>
                        <span>
                          <span>200</span>
                        </span>
                      </span>
                      <span>
                        <span>
                          <span>210</span>
                        </span>
                      </span>
                      <span>
                        <span>
                          <span>160</span>
                        </span>
                      </span>
                      <span>
                        <span>
                          <span>140</span>
                        </span>
                      </span>
                    </div>
                    <div className="line">
                      <p>MON</p>
                      <p>TUE</p>
                      <p>WED</p>
                      <p>THU</p>
                      <p>FRI</p>
                      <p>SAT</p>
                      <p>SUN</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card w-100 ">
                  <div className="card-header">
                    <div className="header-left">
                      <h3>weekly report</h3>
                      <p>01.Feb-07.Feb</p>
                    </div>
                    <div className="header-right">
                      <h3>Revenue</h3>
                      <p>$3,621.79</p>
                    </div>
                  </div>
                  <div className="card-info">
                    <div>
                      <span className="color" />
                      <p>Views</p>
                    </div>
                    <div>
                      <span className="color color2" />
                      <p>Purchases</p>
                    </div>
                  </div>
                  <div className="chart">
                    <div className="line">
                      <span>
                        <span>
                          <span>150</span>
                        </span>
                      </span>
                      <span>
                        <span>
                          <span>250</span>
                        </span>
                      </span>
                      <span>
                        <span>
                          <span>230</span>
                        </span>
                      </span>
                      <span>
                        <span>
                          <span>250</span>
                        </span>
                      </span>
                      <span>
                        <span>
                          <span>140</span>
                        </span>
                      </span>
                      <span>
                        <span>
                          <span>135</span>
                        </span>
                      </span>
                    </div>
                    <div className="line">
                      <span>
                        <span>
                          <span>165</span>
                        </span>
                      </span>
                      <span>
                        <span>
                          <span>210</span>
                        </span>
                      </span>
                      <span>
                        <span>
                          <span>200</span>
                        </span>
                      </span>
                      <span>
                        <span>
                          <span>210</span>
                        </span>
                      </span>
                      <span>
                        <span>
                          <span>160</span>
                        </span>
                      </span>
                      <span>
                        <span>
                          <span>140</span>
                        </span>
                      </span>
                    </div>
                    <div className="line">
                      <p>MON</p>
                      <p>TUE</p>
                      <p>WED</p>
                      <p>THU</p>
                      <p>FRI</p>
                      <p>SAT</p>
                      <p>SUN</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>


  )
}

export default Chart