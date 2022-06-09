import React from 'react';

import { Link } from "react-router-dom";

const Layout =({children}) =>{
    return(
        <div className='layout'>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                <Link className={"navbar-brand"} to={"/"}>
                    {" "}
                    <h1>Hackathon 2022</h1>{" "}
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between"  id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {/* <li className="nav-item">
                            <Link className={"nav-link"} to={"/projects"}>
                            {" "}
                            Projets{" "}
                            </Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className={"nav-link"} to={"/food"}>
                            {" "}
                            Recherche alimentaire{" "}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link"} to={"/popularity"}>
                            {" "}
                            Comparatif produits{" "}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link"} to={"/compare"}>
                            {" "}
                            Comparer produits{" "}
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className={"nav-link"} to={"/signup"}>
                            {" "}
                            Inscription/Connexion{" "}
                            </Link>
                        </li>

                    {/* <li className="nav-item">
                        <Link className={"nav-link"} to={"/users"}>
                        {" "}
                        Users{" "}
                        </Link>
                    </li> */}
                    </ul>
                </div>
                </nav>
            </div>

            <div className='container'>
                {children}
            </div>
            
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2 fixed-bottom">
                    <p className='text-white px-3 m-0'>© Team Potencier 2022 || Hackathon Pôle Emploi, édition 2022.</p>
                </nav>
            </div>
        </div>
    )
}
    
export default Layout;