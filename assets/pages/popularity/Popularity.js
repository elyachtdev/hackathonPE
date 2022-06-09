import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { element } from "prop-types";

function FoodSearch() {
    const [keyword1, setKeyword1] = useState("");
    const [keyword2, setKeyword2] = useState("");
    const [productsResult1, setProductResult1] = useState([]);
    const [productsResult2, setProductResult2] = useState([]);
    const [isSaving, setIsSaving] = useState(false);
    const  [productsList, setProductsList] = useState([]);
    const [rankResult, setRankResult] = useState([]);
    const [rankResult2, setRankResult2] = useState([]);

    let apiCall1 = `https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=categories&tag_contains_0=contains&tag_0=${keyword1}&json=true`;
    let apiCall2 = `https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=categories&tag_contains_0=contains&tag_0=${keyword2}&json=true`;

    const fetchProductsList = () => {
        setIsSaving(true);

        let formData1 = new FormData();
        formData1.append("name1", keyword1);

        let formData2 = new FormData();
        formData2.append("name2", keyword2);

        axios.get(apiCall1, formData1)
        .then(function (response) {
            
            let productsList1 = response.data.products;

            productsList1.forEach(element => {
                // Pour changer de recherche
                productsResult1.push({

                    product:{
                        name: element.brands,
                        keywordList: element._keywords,
                        stores: element.stores
                    }

                });
            });
            
            axios.get('/api/market2')
            .then(response => {
                let rankList = response.data;

                console.log("RKLIST", rankList);
                rankList.forEach(element => {

                    if(element.keyword.includes(productsResult1.forEach(product => {
                        rankResult.push(product.product.stores);
                    }))) {
                        
                    }
                })
                console.log('market', response);
                console.log('rank', rankResult);
            });

            console.log(response.data);
            console.log("PRODUCTS LIST", productsList1);
            // console.log("PRODUCTS LIST", productsList2);
            console.log("RESULT1", productsResult1);
            
            setProductResult1([]);
            
            setProductsList(response.data.products);
            setRankResult([]);
            setProductsList(response.data);
            setIsSaving(false);
        }),
        axios.get(apiCall2, formData2)
            .then(function (response) {
                
                let productsList2 = response.data.products;

                productsList2.forEach(element => {
                    // Pour changer de recherche
                    productsResult2.push({

                        product:{
                            name: element.brands,
                            keywordList: element._keywords,
                            stores: element.stores
                        }

                    });
                });
                axios.get('/api/market2')
                    .then(response => {
                        let rankList2 = response.data;
                        console.log("RK2", rankList2)

                        if(element.keyword.includes(productsResult2.forEach(product => {
                            rankResult2.push(product.product.stores);
                        }))) 

                        console.log('market', response);
                        console.log('rank1', rankResult);
                        console.log('rank2', rankResult2);
                    });
                console.log("RESULT2", productsResult2),
                setProductResult2([])
            },
            
        )
        .catch(function (error) {
            console.log(error);
        })
    }

    return (
        <div className="container">
            <h2 className="text-center mt-5 mb-3">Produits alimentaires</h2>
            <div className="card">
                <div className="card-header">
                    Comparez des produits pour savoir quel est le plus populaire parmis une liste de grandes surfaces connues.
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label className="my-2" htmlFor="name">Nom/Marque du produit n°1</label>
                            <input
                                onChange={(event) => {
                                    setKeyword1(event.target.value);
                                }}
                                value={keyword1}
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                            />
                        </div>

                        <div className="form-group">
                            <label className="my-2" htmlFor="name">Nom/Marque du produit n°2</label>
                            <input
                                onChange={(event) => {
                                    setKeyword2(event.target.value);
                                }}
                                value={keyword2}
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
                            className="btn btn-outline-primary mt-4"
                        >
                            Rechercher
                        </button>

                    </form>
                </div>
            </div>
            <table>
                {rankResult.forEach(element => {
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
