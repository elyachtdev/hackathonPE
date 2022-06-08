import React from "react"

function SearchBarLeft({searchValue, updateValue}) {

    return <input id="search-bar-left" type="text" size="12" maxLength="16" onChange={
        function(e){
            updateValue(e.target.value)
        }
    }/>
}

export default SearchBarLeft