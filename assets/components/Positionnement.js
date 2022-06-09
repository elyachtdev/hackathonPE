import React from "react";
import PosLI from "./PosLI";

function Positionnement(objArray){
    const magasin = objArray;

    return <ul id="liste-pos">
        {()=>{ magasin.map(function (mag){
            <PosLI id={mag._id} name={mag.product_name} store={mag.stores} />
        }
    )}}
    </ul>
}

export default Positionnement