import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import AddConsultancy from "./auth/private/AddConsultancies";
import AddCourses from "./auth/private/addCourses";
import AdminDashboard from "./auth/private/AdminDashboard";
import NewAdditions from "./auth/private/NewAdditions";
import ViewConsultancy from "./auth/private/ViewConsultancy";
import ViewCourses from "./auth/private/ViewCourses";
import ComprehensiveInsights from "./auth/public/ComprehensiveInsights";
import DisplayConsultancies from "./auth/public/DisplayConsultancies";
import DisplayCourses from "./auth/public/DisplayCourses";
import FetchAllUniversities from "./auth/public/FetchAllUniversities";
import LandingPage from "./auth/public/LandingPage";
import Login from "./auth/public/Login";
import Register from "./auth/public/Register";
import SmartSearch from "./auth/public/SmartSearch";
import TopUniversities from "./auth/public/TopUniversities";
import UniversityDetails from "./auth/public/UniversityDetails";
import Footer from "./compontents/Footer";
import Navbar from "./compontents/Navbar";


const AppWrapper = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/" || location.pathname === "/register";

  return (
    <div className="min-h-screen flex flex-col">
      {!hideNavbar && <Navbar />} {/* Navbar will not render on / (Login) and Register pages */}
      <div className="flex-grow">
        <Routes>
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/smart-search" element={<SmartSearch />} />
          <Route path="/top-universities" element={<TopUniversities />} />
          <Route path="/comprehensive-insights" element={<ComprehensiveInsights />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/university/:id" element={<UniversityDetails />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/add-university" element={<NewAdditions />} />
          <Route path="/admin/add-courses" element={<AddCourses />} />
          <Route path="/admin/add-consultancies" element={<AddConsultancy />} />
          <Route path="/display-consultancies" element={<DisplayConsultancies />} />
          <Route path="/fetch-all-universities" element={<FetchAllUniversities />} />
          <Route path="/display-courses" element={<DisplayCourses />} />
          <Route path="/admin/view-consultancies" element={<ViewConsultancy />} />
          <Route path="/admin/view-courses" element={< ViewCourses/>} />
          
          
        </Routes>
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
