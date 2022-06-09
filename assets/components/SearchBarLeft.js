import React from "react"

//compo barre de recherche de gauche, prend le useState en props
function SearchBarLeft({searchValue, updateValue, /*display*/}) {
    //tentative d'affichage du compo onClick button ds parent
    //let displayStyle = display ? "display:block" : "display:none";

    return <input /*style={displayStyle}*/ id="search-bar-left" type="text" size="18" maxLength="16" onChange={
        function(e){
            updateValue(e.target.value) //envoie l'input en props
        }
    }/>
}

export default SearchBarLeft