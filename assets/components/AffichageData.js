import React from "react"
import Positionnement from "./Positionnement"
import { useState } from "react"

class ObjTest {
    constructor(_id,product_name,stores){
        this._id = _id;
        this.product_name = product_name;
        this.stores = stores;
    }
}

let objTest1 = new ObjTest("23354","objet test 01","auchan");
let objTest2 = new ObjTest("23354","objet test 02","carrefour");
let objTest3 = new ObjTest("23354","objet test 03","geant casino");

const objArrayTest = [];
objArrayTest.push(objTest1)
objArrayTest.push(objTest2)
objArrayTest.push(objTest3)

//le composant qui affiche les résultats de notre comparaison
function AffichageData(){
    //on passe la liste d'objets dans ce state : 
    const [listeMagasins, updateListeMagasins] = useState([]);

    return <div>
            <Positionnement objArray={objArrayTest} />
        </div>
}

export default AffichageData