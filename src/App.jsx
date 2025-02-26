
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />  

      </Routes>
    </Router>
    
  );
}

export default App;
