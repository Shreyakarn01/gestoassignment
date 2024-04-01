import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <>
     <Router>
      <Navbar/>
      
      <Home/>
      
    
     </Router>
     <Footer/>
    </>
  );
}

export default App;
