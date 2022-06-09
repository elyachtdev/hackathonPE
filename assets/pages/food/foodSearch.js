import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { element } from "prop-types";

function FoodSearch() {
    const [keyword, setKeyword] = useState("");
    const [result, setResult] = useState([]);
    const [isSaving, setIsSaving] = useState(false);
    const  [productsList, setProductsList] = useState([])

    let apiCall = `https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=categories&tag_contains_0=contains&tag_0=${keyword}&json=true`;

    const fetchProductsList = () => {
        setIsSaving(true);

        let formData = new FormData();
        formData.append("name", keyword);

        axios.get(apiCall, formData)
        .then(function (response) {
            
            let productsList = response.data.products;

            productsList.forEach(element => {
                // Pour changer de recherche
                result.push({
                    product:{
                        name: element.brands,
                        keywordList: element._keywords,
                        stores: element.stores
                    }
                    
                });
            });

            axios.get('/api/market')
            .then(response => {
                let websiteList = response.data;

                websiteList.forEach(element => {
                    result.forEach(product => {
                        // LA c'est sensé marcher mais ça marche pas
                        if(element.url.includes(product.name || product.stores) ) {
                            console.log("ça marche");
                        }
                    })
                })
                console.log('market', response)
            });

            console.log(response.data);
            console.log("PRODUCTS LIST", productsList);
            console.log("RESULT", result)
            setProductsList(response.data);
            setIsSaving(false);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    // const handleSave = () => {
    //     setIsSaving(true);
    //     let formData = new FormData();
    //     formData.append("name", keyword);
    //     formData.append("description", result);
        // axios
        //     .get(`https://fr.openfoodfacts.org/cgi/search.pl?search_terms=${keyword}&search_simple=1&action=process&json=1`
        //     , formData)
        //     .then(function (response) {
                // Swal.fire({
                //     icon: "success",
                //     title: "Mot clefs trouvés avec succès!",
                //     showConfirmButton: false,
                //     timer: 1500,
                // });

                // const productList = response.data.products

                // console.log("PRODUCTS LIST", productList);

                // productList.forEach(element => {
                //     element._keywords.forEach(keyword => {
                //         if (!result.includes(keyword)){
                //         result.push(keyword);
                //         }
                //     })
                // });

                // axios.post("api/food", formData)

            //     console.log(result);

            //     setIsSaving(false);
            //     setKeyword("");
            //     setResult("");
            // })
            // .catch(function (error) {
                // Swal.fire({
                //     icon: "error",
                //     title: "Une erreur est survenue!",
                //     showConfirmButton: false,
                //     timer: 1500,
                // });
            //     setIsSaving(false);
            // });
    // };

    return (
        <div className="container">
            <h2 className="text-center mt-5 mb-3">Produits alimentaires</h2>
            <div className="card">
                <div className="card-header">
                    Recherchez ici qui de vos concurrents vend le plus du produit de votre recherche.
                </div>
                <div className="card-body">
                    <form>

                        <div className="form-group">
                            <label htmlFor="name">Nom/Marque du produit</label>
                            <input
                                onChange={(event) => {
                                    setKeyword(event.target.value);
                                }}
                                value={keyword}
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                            />
                        </div>

                        <button
                            disabled={isSaving}
                            onClick={fetchProductsList}
                            type="button"
                            className="btn btn-outline-primary mt-3"
                        >
                            Rechercher
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default FoodSearch;
