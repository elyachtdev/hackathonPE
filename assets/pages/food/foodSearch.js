import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { element } from "prop-types";

function FoodSearch() {
    const [keyword, setKeyword] = useState("");
    const [productsResult, setProductResult] = useState([]);
    const [isSaving, setIsSaving] = useState(false);
    const  [productsList, setProductsList] = useState([]);
    const [websiteResult, setWebsiteResult] = useState([]);

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
                productsResult.push({

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
                    productsResult.forEach(product => {
                        // LA c'est sensé marcher mais ça marche pas
                        if(element.url.includes(product.product.stores)) {
                            websiteResult.push(element);
                            // console.log("ça marche pas", element.url.includes(product.stores));
                        }
                    })
                })
                console.log('market', response);
                console.log('website', websiteResult);
            });

            console.log(response.data);
            console.log("PRODUCTS LIST", productsList);
            console.log("RESULT", productsResult);
            setProductResult([]);
            setProductsList(response.data.products);
            setWebsiteResult([]);
            setProductsList(response.data);
            setIsSaving(false);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

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
            <table>
                {websiteResult.forEach(element => {
                    return (
                        <tr key={element.id}>
                            <td>{element.id}</td>
                            <td>{element.title}</td>
                            <td>{element.price}</td>
                        </tr>
                    );
                })}
            </table>
            
        </div>
    );
}

export default FoodSearch;
