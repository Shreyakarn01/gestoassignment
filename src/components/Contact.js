import React from 'react';

const Contact = () => {
  return (
    <> 
    <div className="container-lg con">
    <div className="row heading cont" id="contact">
      <div className="col sm-4">
      <h3 className="new">Want to stay Updated about events?</h3>
      <h2 className="new">Subscribe to our <u>Newsletter!</u></h2>
      <h4 className="new">Join our team of 100+ professionals, a passionate collective dedicated to innovation, growth and driving success in the marketing realm.</h4>
      </div>

      <div className="mb-3 col-sm-4" style={{margin:'50px'}}> 

      <div className="d-flex">
      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email"/>
      <button type="button" className="btn btn-outline-light mx-1">Submit</button>
      </div>

      <div className="my-3" style={{fontSize:'12px',lineHeight:0}}>
       <p>We care about the protection of your data.Read our</p><a style={{color:'white',fontSize:'12px'}} href="#"><u>Privacy Policy</u>.</a>
      </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Contact;
