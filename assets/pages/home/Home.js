// ./assets/js/components/Home.js

import React, { Component } from "react";
import { Link /*, withRouter */ } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="css-typing">
                    <h2 className="mt-5 mb-2">
                    BIENVENUE <i className="fa-solid fa-face-smile"></i>
                    </h2>
                    <p>Sur le site de :</p>
                
                    <p>Manuel</p>
                    <p>Kevin</p>
                    <p>Thomas</p>
                    <p>Elliot</p>
                    <p className="line-1 anim-typewriter">LA TEAM POTENCIER</p>
                </div>
            </div>
        );
    }
}

export default Home;
