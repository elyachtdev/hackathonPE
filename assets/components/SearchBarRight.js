function SearchBarRight({searchValue, updateValue}) {

    return <input id="search-bar-right" type="text" size="12" maxLength="16" onChange={
        function(e){
            updateValue(e.target.value)
        }
    }/>
}

export default SearchBarRight