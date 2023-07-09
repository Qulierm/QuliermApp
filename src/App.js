import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./style/main.css"
import Navbar from "./components/Navbar/Navbar.js"
import Footer from "./components/Footer/Footer.js"
import ScrollToTop from "./utilities/scrollToTop";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import ProjectView from "./pages/ProjectView";

function App() {
  return (
    <div className="App">
      <Router>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/project" element={<ProjectView/>}></Route>
        <Route path="/contacts" element={<Contacts/>}></Route>
        <Route path="/project/:id" element={<ProjectView/>}/>
      </Routes>
      <Footer/>
      </Router>
    
    </div>
  );}

export default App;
