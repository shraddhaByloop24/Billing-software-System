import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from '../routes';

function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;