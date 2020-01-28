import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import InputBase from '@material-ui/core/InputBase';
import { createMuiTheme, MuiThemeProvider, Popper } from '@material-ui/core';

import '../CssFiles/MyProfile.css'

class ProfilePostCards extends Component {



    style() {
        const useStyle = createMuiTheme(({
            overrides: {
                MuiPaper: {
                    elevation1: {
                        boxShadow: "-1px 0px 20px -1px rgba(0,0,0,0.2), 5px 5px 10px 0px rgba(0,0,0,0.14), 5px 7px 3px 0px rgba(0,0,0,0.12)"

                    }
                }
            }
        }))
        return useStyle
    }


    render() {
        return (
            <div>

                <div className="profile-post">

                    <MuiThemeProvider theme={this.style()}>
                        <Card id="profile-post-card">

                            <div id="profile-user-pic">

                                <div id="profile-pic">

                                    <img src={require('../Assets/kapil.jpg')} id="profile-user-img" />

                                    <div id="profile-post-date">
                                        <div id="profile-username">
                                            Muhammad shafan (Admin)
                                    </div>
                                        <div id="profile-post-date">
                                            14 November 10:00 pm
                                    </div>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        id="post-menu-btn">
                                        <img src={require('../Assets/menu.png')}
                                            id="menu-pic" />
                                            
                                    </button>
                                </div>
                            </div>

                            <div className="profile-post-data">
                                <img src={require('../Assets/index.jpeg')} id="profile-post-img" />
                            </div>
                            <div id="profile-about-img">
                                About image
                   </div>
                            <div id="profile-like-comment">
                                <div id="like">
                                    <div>
                                        <img src={require('../Assets/like.png')} id="like-dimens" />
                                    </div>
                                    <div id="like-count">0</div>
                                </div>
                                <div id="comment-div">
                                    <div>
                                        <img src={require('../Assets/comment.png')} id="like-dimens" />
                                    </div>
                                    <div id="like-count">0</div>
                                </div>
                            </div>

                            <div className="profile-comment-div">

                                <div id="user-image">
                                    <img src={require('../Assets/kapil.jpg')} id="profile-user-img" />
                                </div>
                                <div id="profile-comment-section">
                                    <InputBase
                                        id="post-message"
                                        placeholder="Write Your Comment"
                                        fullWidth
                                        multiline="4"
                                    />
                                </div>
                                <div id="profile-post">
                                    <button id="comment-post-btn">
                                        Post
                                    </button>
                                </div>
                                {/* <div id="comment-post">
                                    <button id="comment-post-btn">
                                        Post
                        </button>
                                </div> */}
                            </div>

                        </Card>
                    </MuiThemeProvider>
                </div>
            </div>
        )
    }
}

export default ProfilePostCards