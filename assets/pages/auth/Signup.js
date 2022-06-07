import React, { Component, useRef, useState, useEffect } from "react";
import axios from "axios";

const instance = axios.create({
    baseURL: "/api",
    headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
    }
});

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';



class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            message: ""
        }

        this.handleRegister = this.handleRegister.bind(this);
    }
    
    

    handleRegister(e) {
        e.preventDefault();

        this.setState({
            isLoading: true,
            message: ""
        })

        console.log('Cliqué', this.state.isLoading);

        instance
            .post("/test", {
                email: "",
                password: ""
            })
            .then(response => {
                console.log(response);
                console.log(response.data);
                console.log(response.message);
                console.log(response.path);
            }).catch(error => {
                console.log(error.response.data);
            })
    }
    render() {
        return (
            <div className="container">
                <h2 className="mt-5 mb-3">Inscription</h2>
                <form method={"POST"}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword" 
                            autoComplete="on" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleRegister}>Submit</button>
                </form>
                <button type="submit" className="btn btn-primary" onClick={this.handleRegister}>
                    <span className="spinner-border spinner-border-sm"></span>
                    Submit
                </button>
                
            </div>
        );
    }
}

export default Register;