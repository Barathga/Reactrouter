import About from "./Aboutus";
import Adminlogin from './Adminlogin';
import Braches from "./Branches";
import Contact from './Contactus';
import Navbar from "./Navbar";
import Studentlogin from './Studentlogin';
import {
  BrowserRouter,
  Route,
  
  Routes

} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>}></Route>
      <Route path="/AdminLogin" element={<Adminlogin/>}></Route>
      <Route path="/StudentLogin" element={<Studentlogin/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Branches" element={<Braches/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;