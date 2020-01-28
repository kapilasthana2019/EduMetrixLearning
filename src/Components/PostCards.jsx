import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import InputBase from '@material-ui/core/InputBase';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import '../CssFiles/HomePage.css'
import { createMuiTheme, MuiThemeProvider, Popper } from '@material-ui/core';

class PostCards extends Component {

    constructor(props) {
        super(props)

        this.state = {
            menuToggle: false,
            anchorEl: null
        }
    }


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

    postMenu = async (event) => {

        await this.setState({
            menuToggle: !this.state.menuToggle,
            anchorEl: event.currentTarget
        })

    }

    clickAway = () => {

        this.setState({
            menuToggle: !this.state.menuToggle,
        })
    }
    render() {
        return (
            <div>

                <div className="postcard-container">

                    <MuiThemeProvider theme={this.style()}>
                        <Card id="postCard">
                            <div id="post-header">

                                <div id="userPic-time">

                                    <div>
                                        <img src={require('../Assets/coin.png')}
                                            alt={require('../Assets/userDefault.png')} id="user-pic" />
                                    </div>
                                    <div id="post-date">
                                        January 16 12:58pm
                                </div>
                                </div>

                                <div id="menusymbol">
                                    <button
                                        onClick={event => this.postMenu(event)}
                                        id="post-menu-btn">

                                        <img src={require('../Assets/menu.png')}
                                            id="menu-pic" />
                                    </button>

                                    {
                                        (this.state.menuToggle) ?
                                            <ClickAwayListener onClickAway={this.clickAway}>

                                                <Popper open={this.state.menuToggle}
                                                    anchorEl={this.state.anchorEl}
                                                    transition placement="bottom-start"
                                                    id="menu-popper"
                                                >
                                                 <div id="popper-items">
                                                       
                                                        <button id="report-btn">
                                                            Report
                                                         </button>
                                                    </div>
                                                </Popper>
                                            </ClickAwayListener>
                                            : null
                                    }
                                </div>
                            </div>
                            <div id="post-image-div">

                                <img src={require('../Assets/post.jpg')} id ="post-img" />
                            </div>
                            <div id="image-content">
                                About Image
                        </div>
                            <div id="like-comment-div">
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

                            <div className="comment-div">
                                <div id="user-image">
                                    <img src={require('../Assets/coin.png')} id="user-pic" />
                                </div>
                                <div id="comment-section">
                                    <InputBase
                                        id="post-message"
                                        placeholder="Write Your Comment"
                                        fullWidth
                                        multiline="4"
                                    />
                                </div>
                                <div id="comment-post">
                                    <button id="comment-post-btn">
                                        Post
                        </button>
                                </div>
                            </div>


                        </Card>
                    </MuiThemeProvider>
                </div>

            </div>
        )
    }

}

export default PostCards