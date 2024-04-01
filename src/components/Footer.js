import React from 'react'
import LI1 from './Images/LI1.png'
import insta from './Images/insta.png'
import fb3 from './Images/fb3.png'
import twit2 from './Images/twit2.png'

export default function Footer() {
  return (
    <div className="footer">
      <footer className="bd-footer py-4 py-md-5 bg-body-tertiary mt-5 my-footer">
  <div className=" py-4 py-md-5 px-4 px-md-3 text-body-secondary" >
    <div className="row">
      <div className="col-lg-3 mb-3">
        <a className="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" href="/" aria-label="Bootstrap">
        <i class="fa-solid fa-chart-simple"></i>
          <span className="fs-5 text">Gesto</span>
        </a>
        <ul className="list-unstyled small">
          <li className="mb-2 text">Connecting talent to opportunity, one hire at a time <a classNameName="text" href="/docs/5.3/about/team/">Gesto team</a> with the help of <a classNameName="text" href="/">our contributors</a>.</li>
          <li className="mb-2 text">Unlocking potential, transforming careers</li>
          <li className="mb-2 text">Empowering businesses with the right talent.</li>
        </ul>
      </div>
      <div className="col-6 col-lg-2 offset-lg-1 mb-3 text">
        <h5 className="mod">Contact Information</h5>
        <ul className="list-unstyled">
          <li className="mb-2">Address: Hinjewadi,Pune : 401177</li>
          <li className="mb-2">Phone: 6287444945, 7654321987</li>
          <li className="mb-2">Email: Gesto@gmail.com</li>
        </ul>
      </div>
      <div className="col-6 col-lg-2 mb-3 text">
        <h5 className="mod">Quick Links</h5>
        <ul className="list-unstyled">
          <li className="mb-2"><a className="text" href="/">Home</a></li>
          <li className="mb-2"><a className="text" href="/">Job Listings</a></li>
          <li className="mb-2"><a className="text" href="/">Candidate Registration</a></li>
          <li className="mb-2"><a className="text" href="/">Employer Registration</a></li>
          <li className="mb-2"><a className="text" href="/">About Us</a></li>
        </ul>
      </div>
      <div className="col-6 col-lg-2 mb-3 text">
        <h5 className="mod">Privacy Policy and Terms of Service</h5>
        <ul className="list-unstyled">
          <li className="mb-2"><a className="text" href="/" target="_blank" rel="noreferrer" >Terms and Conditions</a></li>
        </ul>
      </div>
      <div className="col-6 col-lg-2 mb-3 text">
        <h5 className="mod">Social Media Links:</h5>
        <ul className="list-unstyled">
          <li className="mb-2"><a className="text" href="/" target="_blank" rel="noreferrer" ><img src={LI1} alt="" /> : Gesto@linkedIn.com</a> </li>
          <li className="mb-2"><a className="text" href="/" target="_blank" rel="noreferrer" ><img src={fb3} alt="" /> : Gesto@facebook.com</a></li>
          <li className="mb-2"><a className="text" href="/" target="_blank" rel="noreferrer" ><img src={insta} alt=""/> : Gesto@instagram.com</a></li>
          <li className="mb-2"><a className="text" href="/" target="_blank" rel="noreferrer" ><img src={twit2} alt=""/> : Gesto@twitter.com</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="text text-center">Copyright © 2024 Gesto. All rights reserved.
</div>
</footer>
    </div>
  )
}
