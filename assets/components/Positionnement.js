import React from "react";
//import PosLI from "./PosLI";

function Positionnement(objArray){
    const magasin = objArray;

    return <ul id="liste-pos">
        {magasin.map(function (mag){
            return <li key={mag._id}>
            <p>{mag.product_name}</p>
            <p>{mag.stores}</p>
        </li> /*<PosLI id={mag._id} name={mag.product_name} store={mag.stores} />*/
        }
    )}
    </ul>
}

export default Positionnement