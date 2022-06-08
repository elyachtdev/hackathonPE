import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

function FoodSearch() {
    const [keyword, setName] = useState("");
    const [result, setDescription] = useState([]);
    const [isSaving, setIsSaving] = useState(false);

    const handleSave = () => {
        setIsSaving(true);
        let formData = new FormData();
        formData.append("name", keyword);
        formData.append("description", result);
        axios
            .get(`https://fr.openfoodfacts.org/cgi/search.pl?search_terms=${keyword}&search_simple=1&action=process&json=1`
            , formData)
            .then(function (response) {
                Swal.fire({
                    icon: "success",
                    title: "Mot clefs trouvés avec succès!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                const productList = response.data.products
                console.log("hello");
                productList.forEach(element => {
                    element._keywords.forEach(keyword => {
                        if (!result.includes(keyword)){
                        result.push(keyword);
                        }
                    })
                });
                axios.post("api/food", formData)
                console.log(result);
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
                    <Link className={"btn btn-outline-info float-right"} to={"/food"}>
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
                                value={keyword}
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            {/* <select onChange={(event) => {
                                    setDescription(event.target.value);
                                }}>{result.map(el => <option value={el} key={el}> {el} </option>)}</select> */}
                            {/* <textarea
                                value=
                                
                                className="form-control"
                                id="description"
                                rows="3"
                                name="description"
                            ></textarea> */}
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

export default FoodSearch;
