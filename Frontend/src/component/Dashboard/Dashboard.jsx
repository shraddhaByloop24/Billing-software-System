import React from 'react';
import './Dashboard.css';
import './stylemin.css'
import Header from '../../Layout/dashboard/Header';
// import Addproducts from '../../Layout/Addproducts';
// import Calculated from '../../Layout/Calculated';

import Chart from './Chart';


const Dashboard = () => {
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
    <Header/>
    <Chart/>
    
    </div>
    </>
  );
}

export default Dashboard;
