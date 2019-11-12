import React from 'react'

function SearchBar () {
    return (
        <div className = 'search-box'> 
            <input 
                className = 'search-text' 
                type = 'text' 
                name = 'location' 
                placeholder = 'Type your location'>

            </input>
            <button> <img draggable = 'false' src = 'https://cdn2.iconfinder.com/data/icons/media-and-navigation-buttons-round/512/Button_15-512.png' 
            alt = 'search button' /></button>

        </div>
    )
}

export default SearchBar