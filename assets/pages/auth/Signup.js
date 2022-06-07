import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

function Register() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [isSaving, setIsSaving] = useState(false);

    const handleRegister = () => {
        setIsSaving(true);
        let formData = new FormData();
        formData.append("name", name);
        formData.append("password", password);
        axios
        .post("/api/register", formData)
        .then(function (response) {
            Swal.fire({
            icon: "success",
            title: "compte crée avec succès!",
            showConfirmButton: false,
            timer: 1500,
            });
            setIsSaving(false);
            setName("");
            setPassword("");
        })
        .catch(function (error) {
            Swal.fire({
            icon: "error",
            title: "Une erreur est survenue!",
            showConfirmButton: false,
            timer: 1500,
            });
            setIsSaving(false);
        });
    };
    return (
        <div className="container">
          <h2 className="text-center mt-5 mb-3">Créer un nouveau compte</h2>
          <div className="card">
            <div className="card-header">
              <Link className={"btn btn-outline-info float-right"} to={"/projects"}>
                {" "}
                Voir tous les comptes{" "}
              </Link>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                    value={name}
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <textarea
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    className="form-control"
                    id="password"
                    rows="3"
                    name="password"
                  ></textarea>
                </div>
                <button
                  disabled={isSaving}
                  onClick={handleRegister}
                  type="button"
                  className="btn btn-outline-primary mt-3"
                >
                  Sauvegarder
                </button>
              </form>
            </div>
          </div>
        </div>
      );
}

export default Register;
