import React from "react"
import {useState} from 'react'
import SearchBarLeft from './SearchBarLeft'
import SearchBarRight from './SearchBarRight'

function PanneauSelection() {
    //useState pour récupérer le contenu des inputs et faire des trucs rigolol avec
    const [searchValueLeft, updateSearchValueLeft] = useState(" ");
    const [searchValueRight, updateSearchValueRight] = useState(" ");
    //const [displayLeft, updateDisplayLeft] = useState(false);
    //const [displayRight, updateDisplayRight] = useState(false);

    return <div id="panneau-selection">
        <button id="left-but" type="submit" >Tester le référencement</button>
        <SearchBarLeft searchValue={searchValueLeft} updateValue={updateSearchValueLeft} /*display={displayLeft}*/ />
        <p> OU </p>
        <SearchBarRight searchValue={searchValueRight} updateValue={updateSearchValueRight} /*display={displayRight}*/ />
        <button id="right-but" type="submit" >Comparer avec un autre produit</button>
    </div>
}

export default PanneauSelection