import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PeopleSuggestion from './PeopleSuggestion'
import ChatContainer from './ChatContainer'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import '../CssFiles/LiveChat.css'

class LiveChat extends Component {

    constructor(props) {
        super(props)
    }



    render() {

        return (

            <div>
                <AppBar>
                    <Toolbar className="profile-header">
                        <div className="header-profile-container">
                            <div>
                                details
                        </div>
                            <div>
                                chat
                        </div>
                            <div>
                                profile
                        </div>
                        </div>
                    </Toolbar>
                </AppBar>

                <div className="main-div-container">
                    <div className="users-list-div">

                        <div className="searchbar">
                            <div className="searchIcon">
                                <SearchIcon />
                            </div>
                            <InputBase
                                id = "searchfield"
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                       <hr/>
                       
                        <PeopleSuggestion />
                        <PeopleSuggestion /><PeopleSuggestion />
                        <PeopleSuggestion /><PeopleSuggestion />
                        <PeopleSuggestion /><PeopleSuggestion />
                        <PeopleSuggestion />
                        <PeopleSuggestion /><PeopleSuggestion />
                        <PeopleSuggestion /><PeopleSuggestion />
                        <PeopleSuggestion /><PeopleSuggestion />
                    </div>
                    <div className="chat-container-div">

                        <ChatContainer />
                    </div>
                    <div className="people-suggestion-div">
                        <div id="divider-heading">
                            People Suggestion

                        </div>
                        <PeopleSuggestion />
                        <PeopleSuggestion /><PeopleSuggestion />
                        <PeopleSuggestion /><PeopleSuggestion />
                        <PeopleSuggestion /><PeopleSuggestion />
                        <PeopleSuggestion />
                        <PeopleSuggestion /><PeopleSuggestion />
                        <PeopleSuggestion /><PeopleSuggestion />
                        <PeopleSuggestion /><PeopleSuggestion />
                    </div>
                </div>


            </div>
        )
    }
}

export default LiveChat