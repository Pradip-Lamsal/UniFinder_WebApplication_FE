import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import AddConsultancy from "./auth/private/AddConsultancies";
import AddCourses from "./auth/private/addCourses";
import AdminDashboard from "./auth/private/AdminDashboard";
import DisplayConsultancies from "./auth/private/DisplayConsultancies";
import NewAdditions from "./auth/private/NewAdditions";
import ComprehensiveInsights from "./auth/public/ComprehensiveInsights";
import LandingPage from "./auth/public/LandingPage";
import Login from "./auth/public/Login";
import Register from "./auth/public/Register";
import SmartSearch from "./auth/public/SmartSearch";
import TopUniversities from "./auth/public/TopUniversities";
import UniversityDetails from "./auth/public/UniversityDetails";
import Footer from "./compontents/Footer";
import Navbar from "./compontents/Navbar";
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
        <Route path="/university/:id" element={<UniversityDetails />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-university" element={<NewAdditions />} />
        <Route path="/admin/add-courses" element={<AddCourses />} />
        <Route path="/admin/add-consultancies" element={<AddConsultancy />} />
        <Route path="/admin/display-consultancies" element={<DisplayConsultancies />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </Router>
  );
}

export default App;
