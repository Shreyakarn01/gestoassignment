import React,{useEffect} from 'react';
import { Link,useLocation } from "react-router-dom";

const Navbar = () => {
    let location=useLocation();
    useEffect(()=>{
        console.log(location.pathname);
    },[location])
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><i class="fa-solid fa-chart-simple"></i> GESTO</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/'?"active":""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${location.pathname==='/services'?"active":""}`} href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${location.pathname==='/careers'?"active":""}`} href="#careers">Careers</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${location.pathname==='/team'?"active":""}`} href="#team">Our Team</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${location.pathname==='/contact'?"active":""}`} href="#contact">Contact Us</a>
        </li>
        
        
      </ul>
      <form className="d-flex" role="search">
      <button type="button" class="btn btn-danger"><i class="fa-solid fa-phone"></i> Book Call</button>
      </form>
    </div>
  </div>
</nav>
  );
}

export default Navbar;
