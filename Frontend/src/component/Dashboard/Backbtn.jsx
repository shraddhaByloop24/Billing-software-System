import React from 'react'
import { Link } from 'react-router-dom'
const Backbtn = () => {
  return (
    <>
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
    </>
  )
}

export default Backbtn