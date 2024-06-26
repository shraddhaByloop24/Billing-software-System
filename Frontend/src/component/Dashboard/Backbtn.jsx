import React from 'react'
import './Chart.css'

const Backbtn = () => {
  return (
  <>
  
  <div className="row stats">
  <div className="col-lg-3">
    <div className="statContainer blue shadow">
      
      <div className="d-flex">
        <div className="p-2 flex-fill text-center">
          TOTAL <br />
          <h5 className="font-weight-bold">20</h5>
        </div>
        <div className="p-2 flex-fill text-center status">
          COMPLETED <br />
          <h5 className="ont-weight-bold">20</h5>
        </div>
      </div>
      <div className="title text-center">TODAY INCREMENT</div>
    </div>
  </div>

  <div className="col-lg-3">
    <div className="statContainer fountainBlue shadow">
      
      <div className="d-flex">
        <div className="p-2 flex-fill text-center">
          TOTAL <br />
          <h5 className="font-weight-bold">20</h5>
        </div>
        <div className="p-2 flex-fill text-center status">
          COMPLETED <br />
          <h5 className="font-weight-bold">20</h5>
        </div>
      </div>
      <div className="title text-center">MONTH INCREMENT</div>
    </div>
  </div>

  <div className="col-lg-3">
    <div className="statContainer lightBlue shadow">
      <div className="d-flex">
        <div className="p-2 flex-fill text-center">
          TOTAL <br />
          <h5 className="font-weight-bold">20</h5>
        </div>
        <div className="p-2 flex-fill text-center status">
          COMPLETED <br />
          <h5 className="font-weight-bold">20</h5>
        </div>
      </div>
      <div className="title text-center">YEAR INCREMENT</div>
    </div>
  </div>

  <div className="col-lg-3">
    <div className="statContainer pink shadow">
      <div className="d-flex">
        <div className="p-2 flex-fill text-center">
          TOTAL <br />
          <h5 className="font-weight-bold">20</h5>
        </div>
        <div className="p-2 flex-fill text-center status">
          COMPLETED <br />
          <h5 className="font-weight-bold">20</h5>
        </div>
      </div>
      <div className="title text-center">CORRESPONDENCES</div>
    </div>
  </div>


</div>

  </>
  )
}

export default Backbtn