import React from 'react';
import bus from './Images/bus.webp'
import arrow from './Images/arrow.png'

const Careers = () => {
  return (
    <>
    
    <div className="d-flex my-3  mb-3" id="careers" >

      

      <div className="container ct" style={{ marginRight: '30px' }}>
          <h2 className="my-3 heading">The Vital Experience</h2>
           <div className="hed">
          <h3 className="my-3 head"><img className="arr1" src={arrow}/>Seamless Outsourcing Solutions</h3>
          <p className="par">Trasition effortlessly from in-house operations to our specialized team, nsuring your brand thrives in local market without the overhead of an internal team. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda non in corrupti ad architecto aliquam neque amet eligendi id.</p>
          <h3 className="my-3 head"><img className="arr1" src={arrow}/>Proven Partnerships In Diverse Sectors</h3>
          <p className="par">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam provident dolores minima amet culpa illum inventore dolore nesciunt officia non recusandae voluptate doloribus, iure tempore odio? Magni corporis perspiciatis molestiae fugit odio ipsa? Nobis recusandae deserunt fugit dolores ipsam dolorum.</p>
      </div>
      </div>

      <div className=" xyz">
         <img className="car image" src={bus}/>
         <div className="overlay">
    <p style={{fontSize:'40px',fontWeight:'700'}}><u>Unlock Your Business Potential</u></p>
        </div>
      </div>

    </div>


   
   

    <hr size="90"/>

    
    </>
  );
}

export default Careers;
