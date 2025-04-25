
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./componets/Home";
import CreateAccount from "./componets/CreateAccount";
import Login from "./componets/Login";
import UserProfile from "./componets/UserProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;