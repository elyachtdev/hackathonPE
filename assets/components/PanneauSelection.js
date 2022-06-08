import React from "react"
import {useState} from 'react'
import SearchBarLeft from './SearchBarLeft'
import SearchBarRight from './SearchBarRight'

function PanneauSelection() {
    //useState pour récupérer le contenu des inputs et faire des trucs rigolol avec
    const [searchValueLeft, updateSearchValueLeft] = useState(" ");
    const [searchValueRight, updateSearchValueRight] = useState(" ");

    return <div id="panneau-selection">
        <SearchBarLeft searchValue={searchValueLeft} updateValue={updateSearchValueLeft} />
        <p>Comparer avec un autre produit : </p>
        <SearchBarRight searchValue={searchValueRight} updateValue={updateSearchValueRight} />
    </div>
}

export default PanneauSelection