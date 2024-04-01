import React from 'react';
import Dp1 from './Images/Dp1.jpg'
import Dp4 from './Images/Dp4.jpg'
import Dp2 from './Images/Dp2.jpeg'
import arrow from './Images/arrow.png'
import Red from './Images/Red.jpg'

const Team = () => {
  return (
    <>
    <div className="hd" id="team">
      <h2 className="text-center txt1 met"><u><img className="arr" src={arrow}/>Meet Our Team</u></h2>

      <div className="row ser">

<div className="cr col md-3">
    <div className="card mb-5 m-4 w-100 h-auto" style={{ width: "18rem",color:'maroon' }}>
        <img src={Dp1} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title text-center" style={{fontSize:"40px"}}>Isabella Costa</h5>
            
            <div className="text-center"><a href="#">More About Me<i class="fa-solid fa-arrow-up-right-from-square"></i></a></div>
        </div>
    </div>
</div>


<div className="cr col md-3">
    <div className="card mb-3 m-4 w-100 h-auto" style={{ width: "18rem",color:'maroon' }}>
        <img src={Dp4} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title text-center" style={{fontSize:"40px"}}>Sofia Rodriguez</h5>
  
            <div className="text-center"><a href="#">More About Me <i class="fa-solid fa-arrow-up-right-from-square"></i></a></div>
        </div>
    </div>
</div>



<div className="cr col md-3">
    <div className="card mb-3 m-4 w-100 h-auto" style={{ width: "18rem" }}>
        <img src={Dp2} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title text-center" style={{color:'maroon'}}>Leonardo Moretti</h5>
            
            <div className="text-center"><a href="#" >More About Me <i class="fa-solid fa-arrow-up-right-from-square"></i></a></div>
        </div>
    </div>
</div>
  


<div className=" col md-3">
     <img  className="more" src={Red}/>
</div>




  </div>
    </div>


    <hr size='90'/>
    </>
    
  );
}

export default Team;
