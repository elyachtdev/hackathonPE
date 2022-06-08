import React from 'react'
import AffichageData from '../../components/AffichageData'
import PanneauSelection from '../../components/PanneauSelection'

//la page qui affichera notre bandeau input et l'affichage des résultats
// localhost:8000/compare pour l'afficher

function Compare(){
    return <div id="comp-container">
        <PanneauSelection />
        <AffichageData />
    </div>
}

export default Compare