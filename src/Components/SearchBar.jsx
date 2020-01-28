import React, { Component } from 'react'
import { InputBase } from '@material-ui/core';
import '../CssFiles/FindFriends.css'

class SearchBar extends Component {

    render() {
        return (
            <div className = "search-container">
                
                <div className="page-search-bar">

                    <div id="search-name">
                        <InputBase
                            id="search-text"
                            placeholder="search via Name"
                            fullWidth
                        />

                    </div>
                    <div id="search-name">
                        <InputBase
                            id="search-text"
                            placeholder="search via Course"
                            fullWidth
                        />
                    </div>
                    <div id="search-name">
                        <InputBase
                            id="search-text"
                            placeholder="search via University"
                            fullWidth
                        />
                    </div>
                    <div id="search-name">
                        <InputBase
                            id="search-text"
                            placeholder="search via Skill"
                            fullWidth
                        />

                    </div>
                    <div id="search-name">
                        <InputBase
                            id="search-text"
                            placeholder="search via Coutry"
                            fullWidth
                        />
                    </div>
                    <div id="search-name">
                        <InputBase
                            id="search-text"
                            placeholder="search via state"
                            fullWidth
                        />
                    </div>

                </div>
               
               
               
                <div id = "search-btn">
                    <button id ="search" className = "btn btn-primary">
                        <span id = "search-icon">
                            <img src ={require('../Assets/search.png')} id ="search-img"/>
                        </span>
                        Search
                    </button>
                </div>
            </div>
        )
    }
}

export default SearchBar