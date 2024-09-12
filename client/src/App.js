// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./components/Homepage/Login";
// import Navbar from "./components/navbar/Navbar";
// import Signup from "./components/Homepage/Signup";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/navbar" element={<Navbar />} />
//         {/* <Route path="/" element={<About />} /> */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/home" element={<Home />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Homepage/Login";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/Homepage/Signup";
import Logout from "./components/Homepage/Logout";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Default route to Home when navigating to "/" */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<About />} /> */}

        {/* Optional: Redirect any other paths to "/" */}
        <Route path="*" element={<Navigate to="/" />} />
      
      </Routes>
    </Router>
  );
}

export default App;

