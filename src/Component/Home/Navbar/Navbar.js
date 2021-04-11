import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <button className="navbar-toggler ml-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <a className="nav-link mr-5 active" aria-current="page" href="#">Home</a>
                        <a className="nav-link mr-5 active" href="#">About</a>
                        <a className="nav-link mr-5 active" href="#">Dental Services</a>
                        <a className="nav-link mr-5 active text-white" href="#">Reviews</a>
                        <a className="nav-link mr-5 active text-white" href="#">Blog</a>
                        <a className="nav-link mr-5 active text-white" href="#">Contact Us</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;