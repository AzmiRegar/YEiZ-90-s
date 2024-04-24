import { Outlet, Link } from "react-router-dom";
import logo from "../components/YEiZ.png";
import logo1 from "../components/90’s.png";

import '../index.css'

import React from 'react';

const SearchInput = ({ onChange }) => {
    return (
        <div className="search-input">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="555F61"
                className="bi bi-search"
                viewBox="0 0 16 16"
                style={{ marginRight: "20px"}}
            >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <input
                type="text"
                className="search-input-field"
                placeholder="Search"
                onChange={onChange}
            />
        </div>
    );
};

const Layout = () => {
    return (
        <>
            <div className="gray-list"></div>
            <div className="navbar navbar-expand-lg bg-white shadow p-3 mb-5">

                <button className="navbar-toggler" data-toggle="collapse" data-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div id="menu" className="navbar-collapse collapse">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Tshirt" className="nav-link">T-shirt</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/outerwear" className="nav-link">Outerwear</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Pants" className="nav-link">Pants</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/accecories" className="nav-link">Accecories</Link>
                        </li>
                    </ul>
                    <div className="col-6 text-center">
                        <img src={logo} alt="logo" />
                        <img src={logo1} alt="logo" />
                    </div>
                </div>

                <div className="search-container">
                    <SearchInput />
                </div>
                <div>
                    <Link to="/profile">    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="555F61" class="bi bi-person" viewBox="0 0 16 16" style={{ marginRight: '20px' }}>
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                    </svg> </Link>
                    <Link to="/cart"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="555F61" class="bi bi-cart2" viewBox="0 0 16 16" style={{ marginRight: '20px' }}>
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                    </svg> </Link>
                </div>
            </div>

            <Outlet />
        </>
    )
};

export default Layout;  