import React from 'react';
import STPL from './Images/STPL.jpeg'
import Cm from './Images/Cm.jpeg'
import Aud from './Images/Aud.jpeg'
import arrow from './Images/arrow.png'

const Services = () => {
    return (
        <>
        <div className="hd" id="services">
            <h2 className="text-center txt1"><u><img className="arr" src={arrow}/>Our Services</u></h2>

            <div className="row ser">

                <div className="cr col-sm-4">
                    <div className="card mb-5 m-4 w-100 h-auto">
                        <img src={STPL} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Strategy and Planning</h5>
                            <p className="card-text">Transform your business with our strategic marketing expertise. We craft tailored plans, identify key opportunities, and execute impactful campaigns to accelerate your growth.Transform your business with our strategic marketing expertise.</p>
                            <div className="text-center"><a href="#">Learn More <i class="fa-solid fa-arrow-up-right-from-square"></i></a></div>
                        </div>
                    </div>
                </div>


                <div className=" cr col-sm-4">
                    <div className="card mb-3 m-4 w-100 h-auto " style={{ width: "18rem" }}>
                        <img src={Cm} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Content Marketing</h5>
                            <p className="card-text">Elevate your brand with our content marketing prowess. We create compelling stories, engage your audience, and drive results that matter.</p>
                            <div className="text-center"><a href="#">Learn More <i class="fa-solid fa-arrow-up-right-from-square"></i></a></div>
                        </div>
                    </div>
                </div>



                <div className="cr col-sm-4">
                    <div className="card mb-3 m-4 w-100 h-auto" style={{ width: "18rem" }}>
                        <img src={Aud} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">SEO Audits and Strategy</h5>
                            <p className="card-text">Boost your online visibility with our expert SEO audits and strategies. We analyze, optimize, and elevate your search rankings for impactful results.</p>
                            <div className="text-center"><a href="#" >Learn More <i class="fa-solid fa-arrow-up-right-from-square"></i></a></div>
                        </div>
                    </div>
                </div>


                <div className="cr col-sm-4">
                    <div className="card mb-3 m-4 w-100 h-auto" style={{ width: "18rem" }}>
                        <img src={Cm} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Content Marketing</h5>
                            <p className="card-text">Elevate your brand with our content marketing prowess. We create compelling stories, engage your audience, and drive results that matter.</p>
                            <div className="text-center"><a href="#" >Learn More <i class="fa-solid fa-arrow-up-right-from-square"></i></a></div>
                        </div>
                    </div>
                </div>

                <div className="cr col-sm-4">
                    <div className="card mb-3 m-4 w-100 h-auto" style={{ width: "18rem" }}>
                        <img src={Aud} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">SEO Audits and Strategy</h5>
                            <p className="card-text">Boost your online visibility with our expert SEO audits and strategies. We analyze, optimize, and elevate your search rankings for impactful results.</p>
                            <div className="text-center"><a href="#" >Learn More <i class="fa-solid fa-arrow-up-right-from-square"></i></a></div>
                        </div>
                    </div>
                </div>


                <div className="cr col-sm-4">
                    <div className="card mb-3 m-4 w-100 h-auto" style={{ width: "18rem" }}>
                        <img src={STPL} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Strategy and Planning</h5>
                            <p className="card-text">Transform your business with our strategic marketing expertise. We craft tailored plans, identify key opportunities, and execute impactful campaigns to accelerate your growth.Transform your business with our strategic marketing expertise.</p>
                            <div className="text-center"><a href="#">Learn More <i class="fa-solid fa-arrow-up-right-from-square"></i></a></div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
        

        <hr size="90"/>
        </>

    );
}

export default Services;
