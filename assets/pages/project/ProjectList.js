import React,{ useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import axios from 'axios';
 
function ProjectList() {
    const  [projectList, setProjectList] = useState([])
  
    useEffect(() => {
        fetchProjectList()
    }, [])
  
    const fetchProjectList = () => {
        axios.get('/api/project')
        .then(function (response) {
          setProjectList(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Êtes vous sûrs?',
            text: "Vous ne pourrez pas revenir en arrière!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, supprimez ça!',
            cancelButtonText: "Annuler"
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/api/project/${id}`)
                .then(function (response) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Projet supprimé avec succès!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    fetchProjectList()
                })
                .catch(function (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Une erreur est survenue!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                });
            }
          })
    }
  
    return (
        <div className="container">
            <h2 className="text-center mt-5 mb-3">Symfony Project Manager</h2>
            <div className="card">
                <div className="card-header">
                    <Link className={"btn btn-outline-primary"} to={"/projects/create"}>
                        {" "}
                        Créer un projet{" "}
                    </Link>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Description</th>
                                    <th width="240px">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projectList.map((project, key)=>{
                                    return (
                                        <tr key={key}>
                                            <td>{project.name}</td>
                                            <td>{project.description}</td>
                                            <td>
                                                <div className='d-flex'>
                                                    <Link
                                                        to={`/projects/show/${project.id}`}
                                                        className="btn btn-outline-info mx-1">
                                                        <i className="fa-solid fa-plus"></i>
                                                    </Link>
                                                    <Link
                                                        className="btn btn-outline-success mx-1"
                                                        to={`/projects/edit/${project.id}`}>
                                                        <i className="fa-solid fa-file-pen"></i>
                                                    </Link>
                                                    <button 
                                                        onClick={()=>handleDelete(project.id)}
                                                        className="btn btn-outline-danger mx-1">
                                                        <i className="fa-solid fa-trash-can"></i>
                                                    </button>
                                                </div>
                                                
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default ProjectList;