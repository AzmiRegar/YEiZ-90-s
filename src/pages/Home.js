import { Outlet } from "react-router-dom";
import HomeFront from "../components/HomeFront.png";
import HomeBack from "../components/HomeBack.png"

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
                        <div className="col-8">
                            <div className="img-container">
                                <img src={HomeFront} alt="Gambar Depan" />
                                <img src={HomeBack} alt="Gambar Belakang" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-ijo button-container position-absolute w-100">
                    <button className="oval-button col-2" style={{ marginLeft: '125px', marginTop: '35px' }}>Shop Now!</button>
                </div>


                <Outlet />
            </>
    )
};

export default Home;