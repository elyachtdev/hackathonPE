import React from "react"

//compo barre de recherche de droite, prend le useState en props
function SearchBarRight({searchValue, updateValue}) {

    return <input id="search-bar-right" type="text" size="18" maxLength="16" onChange={
        function(e){
            updateValue(e.target.value) //envoie l'input en props
        }
    }/>
}

export default SearchBarRight