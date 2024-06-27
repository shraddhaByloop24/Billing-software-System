
// import Swal from 'sweetalert2';


const Addproducts = () => {


  return (
    <>
   
    <div class="page-wrapper">
    <div class="page-breadcrumb">
    <div class="row">
      <div class="col-12 d-flex no-block align-items-center">
        <h4 class="page-title">Dashboard</h4>
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
  <div className="container-fluid">
  {/* ============================================================== */}
  {/* Sales Cards  */}
  {/* ============================================================== */}
  <div className="row">
    {/* Column */}
    <div className="col-md-6 col-lg-2 col-xlg-3">
      <div className="card card-hover bg-cyan  p-4">
        <div className="box text-center">
          <h1 className="font-light text-white">
            <i className="mdi mdi-view-dashboard" />
          </h1>
          <h6 className="text-white">Dashboard</h6>
        </div>
      </div>
    </div>
    {/* Column */}
    <div className="col-md-6 col-lg-4 col-xlg-3 ">
      <div className="card card-hover bg-success  p-4">
        <div className="box text-center">
          <h1 className="font-light text-white">
            <i className="mdi mdi-chart-areaspline" />
          </h1>
          <h6 className="text-white">Charts</h6>
        </div>
      </div>
    </div>
    {/* Column */}
    <div className="col-md-6 col-lg-2 col-xlg-3">
      <div className="card card-hover bg-warning p-4">
        <div className="box  text-center">
          <h1 className="font-light text-white">
            <i className="mdi mdi-collage" />
          </h1>
          <h6 className="text-white">Widgets</h6>
        </div>
      </div>
    </div>
    {/* Column */}
    <div className="col-md-6 col-lg-2 col-xlg-3">
      <div className="card card-hover bg-danger p-4">
        <div className="box  text-center">
          <h1 className="font-light text-white">
            <i className="mdi mdi-border-outside" />
          </h1>
          <h6 className="text-white">Tables</h6>
        </div>
      </div>
    </div>
    {/* Column */}
    <div className="col-md-6 col-lg-2 col-xlg-3">
      <div className="card card-hover bg-info p-4">
        <div className="box text-center">
          <h1 className="font-light text-white">
            <i className="mdi mdi-arrow-all" />
          </h1>
          <h6 className="text-white">Full Width</h6>
        </div>
      </div>
    </div>
    {/* Column */}
    {/* Column */}
    <div className="col-md-6 col-lg-4 col-xlg-3">
      <div className="card card-hover bg-danger p-4">
        <div className="box  text-center">
          <h1 className="font-light text-white">
            <i className="mdi mdi-receipt" />
          </h1>
          <h6 className="text-white">Forms</h6>
        </div>
      </div>
    </div>
    {/* Column */}
    <div className="col-md-6 col-lg-2 col-xlg-3">
      <div className="card card-hover bg-info p-4">
        <div className="box text-center">
          <h1 className="font-light text-white">
            <i className="mdi mdi-relative-scale" />
          </h1>
          <h6 className="text-white">Buttons</h6>
        </div>
      </div>
    </div>
    {/* Column */}
    <div className="col-md-6 col-lg-2 col-xlg-3">
      <div className="card card-hover bg-cyan p-4">
        <div className="box  text-center">
          <h1 className="font-light text-white">
            <i className="mdi mdi-pencil" />
          </h1>
          <h6 className="text-white">Elements</h6>
        </div>
      </div>
    </div>
    {/* Column */}
    <div className="col-md-6 col-lg-2 col-xlg-3">
      <div className="card card-hover bg-success p-4">
        <div className="box  text-center">
          <h1 className="font-light text-white">
            <i className="mdi mdi-calendar-check" />
          </h1>
          <h6 className="text-white">Calnedar</h6>
        </div>
      </div>
    </div>
    {/* Column */}
    <div className="col-md-6 col-lg-2 col-xlg-3">
      <div className="card card-hover bg-warning p-4">
        <div className="box  text-center">
          <h1 className="font-light text-white">
            <i className="mdi mdi-alert" />
          </h1>
          <h6 className="text-white">Errors</h6>
        </div>
      </div>
    </div>
    {/* Column */}
  </div>
  
</div>
</div>
    </>
  );
};

export default Addproducts;