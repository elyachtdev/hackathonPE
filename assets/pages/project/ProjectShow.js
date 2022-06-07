import React, {useState, useEffect} from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
  
function ProjectShow() {
    const [id, setId] = useState(useParams().id)
    const [project, setProject] = useState({name:'', description:''})
    useEffect(() => {
        axios.get(`/api/project/${id}`)
        .then(function (response) {
          setProject(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    }, [])
  
    return (
        <div className="container">
            <h2 className="text-center mt-5 mb-3">{project.name}</h2>
            <div className="card">
                <div className="card-header">
                    <Link className={"btn btn-outline-info float-right"} to={"/projects"}>
                        {" "}
                        Voir tous les projets{" "}
                    </Link>
                </div>
                <div className="card-body">
                    <b className="text-muted">Nom:</b>
                    <p>{project.name}</p>
                    <b className="text-muted">Description:</b>
                    <p>{project.description}</p>
                </div>
            </div>
        </div>
    );
}
  
export default ProjectShow;