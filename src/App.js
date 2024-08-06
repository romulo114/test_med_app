import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Components/Landing_Page/Landing_Page";
import SignUp from "./Components/Sign_Up/Sign_Up";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign_up" element={<SignUp />} />

          {/* 
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/login" element={<Login />} />*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
