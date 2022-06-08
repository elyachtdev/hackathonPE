import React from 'react'
import AffichageData from '../../components/AffichageData'
import PanneauSelection from '../../components/PanneauSelection'

function Compare(){
    return <div id="comp-container">
        <PanneauSelection />
        <AffichageData />
    </div>
}

export default Compare