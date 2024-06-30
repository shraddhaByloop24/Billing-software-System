import React from 'react'
import './floatChart.css'

const Chart = () => {
  return (
    <>   
        {/* Cards */}
        <div className="row">
            <div className="col-md-3">
            <div className="card mt-0">
                <div className="row">
                <div className="col-md-6">
                    <div className="peity_line_neutral left text-center mt-2">
                    <span>
                        <span style={{ display: "none" }}>10,15,8,14,13,10,10</span>
                        <canvas width={50} height={24} />
                    </span>
                    <h6>10%</h6>
                    </div>
                </div>
                <div className="col-md-6 border-left text-center pt-2">
                    <h3 className="mb-0 fw-bold">150</h3>
                    <span className="text-muted">New Users</span>
                </div>
                </div>
            </div>
            </div>
            <div className="col-md-3">
            <div className="card mt-0">
                <div className="row">
                <div className="col-md-6">
                    <div className="peity_bar_bad left text-center mt-2">
                    <span>
                        <span style={{ display: "none" }}>3,5,6,16,8,10,6</span>
                        <canvas width={50} height={24} />
                    </span>
                    <h6>-40%</h6>
                    </div>
                </div>
                <div className="col-md-6 border-left text-center pt-2">
                    <h3 className="mb-0 fw-bold">4560</h3>
                    <span className="text-muted">Orders</span>
                </div>
                </div>
            </div>
            </div>
            <div className="col-md-3">
            <div className="card mt-0">
                <div className="row">
                <div className="col-md-6">
                    <div className="peity_line_good left text-center mt-2">
                    <span>
                        <span style={{ display: "none" }}>12,6,9,23,14,10,17</span>
                        <canvas width={50} height={24} />
                    </span>
                    <h6>+60%</h6>
                    </div>
                </div>
                <div className="col-md-6 border-left text-center pt-2">
                    <h3 className="mb-0">5672</h3>
                    <span className="text-muted">Active Users</span>
                </div>
                </div>
            </div>
            </div>
            <div className="col-md-3">
            <div className="card mt-0">
                <div className="row">
                <div className="col-md-6">
                    <div className="peity_bar_good left text-center mt-2">
                    <span>12,6,9,23,14,10,13</span>
                    <h6>+30%</h6>
                    </div>
                </div>
                <div className="col-md-6 border-left text-center pt-2">
                    <h3 className="mb-0 fw-bold">2560</h3>
                    <span className="text-muted">Register</span>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* End cards */}
    </>

   
  )
}

export default Chart