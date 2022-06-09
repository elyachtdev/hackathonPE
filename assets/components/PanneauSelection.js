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
        <button id="left-but" type="submit">Tester le référencement</button>
        <p> OU </p>
        <button id="right-but" type="submit">Comparer avec un autre produit</button>
        <SearchBarRight searchValue={searchValueRight} updateValue={updateSearchValueRight} />
    </div>
}

export default PanneauSelection