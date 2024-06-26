import Signup from './src/component/Signup/Signup';
import Dashboard from './src/component/Dashboard/Dashboard';
import Addproducts from './src/Layout/Addproducts';
// import Foodlist from './src/Layout/Foodlist';
import Productlist from './src/Layout/Productlist';
// import Editmenu from './src/Layout/Editmenu';
// import Addfood from './src/Layout/Addfood';
import Login from './src/component/Login/Login';
// import Demofood from './src/Layout/Demofood';
// import BurgerPage from './src/Layout/BurgerPage';
// import Newdashboard from './src/Layout/Newdashboard';

export const routes = [
  {
    path: '/',
    element: <Login/>,
    exact: true,
  },
  {
    path: '/Signup',
    element: <Signup/>,
  },
  {
    path: '/Dashboard',
    element: <Dashboard/>,
  },
  {
    path: '/Addproducts',
    element: <Addproducts />,
  },
  {
    path: '/Productlist',
    element: <Productlist />,
  },
  // {
  //   path: '/Foodlist',
  //   element: <Foodlist />,
  // },
  // {
  //   path: '/edit',
  //   element: <Editmenu />,
  // },
  // {
  //   path: '/addfood',
  //   element: <Addfood />,
  // },
  // {
  //   path: '/demo',
  //   element: <Demofood/>,
  // },

  // {
  //   path : '/newdashboard',
  //   element: <Newdashboard/>
  // }
];