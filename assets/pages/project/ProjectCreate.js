import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

function ProjectCreate() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    let formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    axios
      .post("/api/project", formData)
      .then(function (response) {
        Swal.fire({
          icon: "success",
          title: "Projet crée avec succès!",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsSaving(false);
        setName("");
        setDescription("");
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
      <h2 className="text-center mt-5 mb-3">Créer un nouveau projet</h2>
      <div className="card">
        <div className="card-header">
          <Link className={"btn btn-outline-info float-right"} to={"/projects"}>
            {" "}
            Voir tous les projets{" "}
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
              <label htmlFor="description">Description</label>
              <textarea
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
                className="form-control"
                id="description"
                rows="3"
                name="description"
              ></textarea>
            </div>
            <button
              disabled={isSaving}
              onClick={handleSave}
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

export default ProjectCreate;
