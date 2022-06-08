function SearchBarRight({searchValue, updateValue}) {

    return <input id="search-bar-right" type="text" onChange={
        function(e){
            updateValue(e.target.value)
        }
    }/>
}

export default SearchBarRight