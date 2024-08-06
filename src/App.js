import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Components/Landing_Page/Landing_Page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />

          {/* <Route path="/" element={<Home />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
