import React, { Component } from "react";

const axios = require('axios').default;


class RechercheApiBeauty extends Component {

                    constructor(props) {
                        super(props);
                        //this.handleChange = this.handleChange.bind(this);
                          this.state = {
                            // liste: []
                        }
                    }
        onClickRecherche(){
            console.log('click !')
            let searchInput = document.getElementById('searchInput').value;
            const params = new URLSearchParams();
            params.append('keyword', searchInput);
            var formData = new FormData();
            formData.append("searchInput", searchInput);
                        axios({
                            method: 'post',
                            data: params,
                            headers : {'Content-Type': 'multipart/form-data'},
                            url: 'beauty',
                                data: formData

                            })
                            .then(response => {
                                console.log("axios response:", response);
                                // let zones = response.data.pop();
                                // zones = Object.entries(zones);

                                // let tabZones = []
                                // Array.from(zones);
                                // tabZones = zones.forEach((index, value) => {
                                //     tabZones.push(value)
                                // });                       

                                // const liste = response.data;
                                
                                // this.refreshListe(liste);

                                        
                            })
                            .catch(function(error) {
                                // manipulate the error response here
                            });
        }



    render() {
        return (
            <div className="container">
                <div className="css-typing">
                    <div className="mt-5 mb-2">Recheche produit de beauté: </div>
                                <div className="input-group mb-2 dashboardFormFocus">
                                <span className="input-group-text"><i className="bi bi-search"></i></span>
                                <input id="searchInput" type="text" className="form-control" placeholder="Recherche" autoComplete="off" />
                                <button onClick={() => this.onClickRecherche()} className="btn btn-outline-secondary" type="button" id="btn-rechercher">Button</button>
                            </div>

                </div>
            </div>
        );
    }
}

export default RechercheApiBeauty;