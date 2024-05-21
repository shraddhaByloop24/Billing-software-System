import { useSelector } from 'react-redux';
import { isLoggedInSelector } from '../store/auth';
import Dashboard from './src/component/Dashboard/Dashboard';

function ConditionalDashboard() {
  const isLoggedIn = useSelector(isLoggedInSelector);

  return isLoggedIn ? <Dashboard/> : <Navigate to="/" />;
}


export default ConditionalDashboard()
    