import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import axios from 'axios';
  
function ProjectEdit() {
    const [id, setId] = useState(useParams().id)
    const [name, setName] = useState('');
    const [description, setDescription] = useState('')
    const [isSaving, setIsSaving] = useState(false)
  
      
    useEffect(() => {
        axios.get(`/api/project/${id}`)
        .then(function (response) {
            let project = response.data
            setName(project.name);
            setDescription(project.description);
        })
        .catch(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'An Error Occured!',
                showConfirmButton: false,
                timer: 1500
            })
        })
          
    }, [])
  
  
    const handleSave = () => {
        setIsSaving(true);
        axios.patch(`/api/project/${id}`, {
            name: name,
            description: description
        })
        .then(function (response) {
            Swal.fire({
                icon: 'success',
                title: 'Project updated successfully!',
                showConfirmButton: false,
                timer: 1500
            })
            setIsSaving(false);
        })
        .catch(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'An Error Occured!',
                showConfirmButton: false,
                timer: 1500
            })
            setIsSaving(false)
        });
    }
  
  
    return (
        <div className="container">
            <h2 className="text-center mt-5 mb-3">Modification du projet</h2>
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
                            <label htmlFor="name">Name</label>
                            <input 
                                onChange={(event)=>{setName(event.target.value)}}
                                value={name}
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea 
                                value={description}
                                onChange={(event)=>{setDescription(event.target.value)}}
                                className="form-control"
                                id="description"
                                rows="3"
                                name="description"></textarea>
                        </div>
                        <button 
                            disabled={isSaving}
                            onClick={handleSave} 
                            type="button"
                            className="btn btn-outline-success mt-3">
                            Modifier
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
  
export default ProjectEdit;