import React from "react"
import Positionnement from "./Positionnement"
import { useState } from "react"

//le composant qui affiche les résultats de notre comparaison
//il est un peu vide pour l'instant :(
function AffichageData(){
    //on passe la liste d'objets dans ce state
    const [listeMagasins, updateListeMagasins] = useState([]);

    return <div>
            <Positionnement objArray={listeMagasins} />
        </div>
}

export default AffichageData