// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LogIn/log_in";
import "./App.css";
import AgencyDashboard from "./components/Agency/dashboard";
import CreateDecition from "./components/Agency/create_decision";
import AdminDashboard from "./components/Admain/dashboard";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/agency-dashboard" element={<AgencyDashboard />} />
        {<Route path="/create decition" element={<CreateDecition />} />}
      </Routes>
    </Router>
  );
}

export default App;
