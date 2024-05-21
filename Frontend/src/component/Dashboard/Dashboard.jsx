import React from 'react';
import './Dashboard.css';
import Navbar from '../../Layout/Navbar';
import Header from '../../Layout/Header';
import Calculated from '../../Layout/Calculated';
import Footer from '../../Layout/Footer';

const Dashboard = () => {
  return (
    <>
      <div id="wrapper">
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
                  <i className="fas fa-download fa-sm text-white-50" /> Generate Report
                </a>
              </div>
              <Calculated />
              <div className="row">
                <div className="col-xl-8 col-lg-7">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Earnings Overview 
                      </h6>
                      <div className="dropdown no-arrow">
                        <a
                          className="dropdown-toggle"
                          href="#"
                          role="button"
                          id="dropdownMenuLink"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <div className="dropdown-header">Dropdown Header:</div>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="chart-area">
                        <canvas id="myAreaChart" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-5">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Revenue Sources
                      </h6>
                      <div className="dropdown no-arrow">
                        <a
                          className="dropdown-toggle"
                          href="#"
                          role="button"
                          id="dropdownMenuLink"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <div className="dropdown-header">Dropdown Header:</div>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="chart-pie pt-4 pb-2">
                        <canvas id="myPieChart" />
                      </div>
                      <div className="mt-4 text-center small">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
