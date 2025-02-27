import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ComprehensiveInsights from './pages/ComprehensiveInsights';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import SmartSearch from './pages/SmartSearch';
import TopUniversities from './pages/TopUniversities';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/smart-search" element={<SmartSearch />} />
        <Route path="/top-universities" element={<TopUniversities />} />
        <Route path="/comprehensive-insights" element={<ComprehensiveInsights />} />
      </Routes>
    </Router>
  );
}

export default App;
