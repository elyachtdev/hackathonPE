import React from "react"

//compo barre de recherche de gauche, prend le useState en props
function SearchBarLeft({searchValue, updateValue}) {

    return <input id="search-bar-left" type="text" size="12" maxLength="16" onChange={
        function(e){
            updateValue(e.target.value) //envoie l'input en props
        }
    }/>
}

export default SearchBarLeft