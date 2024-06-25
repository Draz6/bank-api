import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import Users from "./Users";

export default function HomeRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </Router>
  );
}
