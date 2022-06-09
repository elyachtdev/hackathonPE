import React from "react"

function Positionnement(objArray){
    const magasin = objArray;

    return <ul id="liste-pos">
        {()=> magasin.forEach( store => {
            <li key={store._id}>
                <p>{store.product_name}</p>
                <p>{store.stores}</p>
                <img src={store.image_thumb_url} alt={store.product_name}>{store.product_name}</img>
            </li>
        })}
    </ul>
}

export default Positionnement