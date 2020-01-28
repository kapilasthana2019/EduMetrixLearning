import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchBar from './SearchBar'
import FriendCards from './FriendCards'
import Masonry from 'react-masonry-component';

import '../CssFiles/FindFriends.css'

class FindFrieds extends Component {

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
                <div className="find-friend-container">
                    <SearchBar />

                    <div id="result-by-heading">
                        Result based on:- Name
                </div>

                    <div id = "friend-cards">
                        <Masonry id = "frnd-masonry">
                            <FriendCards/>
                            <FriendCards/>
                            <FriendCards/>
                            <FriendCards/>
                            <FriendCards/>
                            <FriendCards/>
                            <FriendCards/>
                            <FriendCards/>
                            <FriendCards/>
                            <FriendCards/>
                            <FriendCards/>
                            <FriendCards/>
                          
                        </Masonry>

                    </div>
                </div>
            </div>
        )
    }
}

export default FindFrieds