import React from "react";
import { Outlet } from "react-router-dom";
import HomePict from "../components/Home.png";
import Wave from "../components/wave.png";


const Home = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="slogan">
                            We highly recommend checking out YEiZ 90's for an amazing selection of stylish clothing, outstanding customer service, great deals, and a promise that you'll find something you love.
                        </div>
                    </div>
                    <div className="col-6 position-absolute" style={{ top: '125px', left: '350px' }}>
                        <img src={HomePict} alt="Home" />
                    </div>
                </div>
                <img src={Wave} alt="Wave" className="img-fluid position-absolute start-0 end-0 mt-3" style={{ width: "calc(100% + 20px)", top: '600px' }} />
            </div>
            <div className="bg-ijo button-container position-absolute w-100">
                <button className="oval-button col-2" style={{ marginLeft: '125px', marginTop: '35px' }}>Shop Now!</button>
            </div>
            <Outlet />
        </>
    )
};

export default Home;
