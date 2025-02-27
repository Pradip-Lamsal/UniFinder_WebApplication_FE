import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./compontents/Footer";
import Navbar from "./compontents/Navbar";
import ComprehensiveInsights from "./pages/ComprehensiveInsights";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SmartSearch from "./pages/SmartSearch";
import TopUniversities from "./pages/TopUniversities";

function App() {
  return (
    <Router>
      <Navbar /> {/* Transparent Navbar - Auto-Hides on Login & Register */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/smart-search" element={<SmartSearch />} />
        <Route path="/top-universities" element={<TopUniversities />} />
        <Route path="/comprehensive-insights" element={<ComprehensiveInsights />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
