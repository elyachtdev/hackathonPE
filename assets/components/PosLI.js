import React from "react";

function PosLI(id,name,stores){

    return <li key={id}>
            <p>{name}</p>
            <p>{stores}</p>
        </li>
}

export default PosLI