import React from 'react';
import logo from '../layouts/images/logo.svg';
import { Link } from 'react-router-dom';



const Navbar = () => {


    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <Link className="navbar-brand ml-5" to="/home">
                <img className='logo' src={logo} alt='logo' />

            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span>
                    <img src='../layouts/images/bars.svg' alt='menu logo' style={{ color: '#fff' }} />
                </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item active">
                        <Link className="nav-link text-white text-uppercase ml-5" to="/">Home<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-uppercase ml-5" to="/news">news</Link>

                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-uppercase ml-5" to="/contact">contact us</Link>

                    </li>

                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}



export default Navbar;