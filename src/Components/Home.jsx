import React, { Component } from 'react'
import CreatePost from './CreatePost'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PeopleSuggestion from './PeopleSuggestion'
import PostCards from './PostCards'
import ChatBot from './ChatBot'

import '../CssFiles/HomePage.css'

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            botToggle: false
        }

    }

    chatbottoggle = (event) => {

        this.setState({
            botToggle: !this.state.botToggle
        })
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

                <div className="main-container">
                    <div className="post-container">
                        <div id="post">
                            <CreatePost />
                        </div>
                        <div>
                            <PostCards />
                            <PostCards />
                            <PostCards />
                            <PostCards />
                            <PostCards />
                            <PostCards />
                            <PostCards />
                            <PostCards />
                        </div>

                    </div>
                    <div className="suggetion-container">
                        <div id="suggestion-part">

                            <div id="suggestion-heading">
                                People Suggestion
                         </div>
                            <div>
                                <PeopleSuggestion />
                                <PeopleSuggestion />
                                <PeopleSuggestion />
                                <PeopleSuggestion />
                                <PeopleSuggestion />
                                <PeopleSuggestion />
                                <PeopleSuggestion />
                                <PeopleSuggestion />
                                <PeopleSuggestion />
                            </div>
                        </div>

                        <div >

                            {
                                (this.state.botToggle) ? <ChatBot botToggle={this.chatbottoggle} />
                                    : <div onClick={event => this.chatbottoggle(event)} className="chatbot-div">

                                        <div className ="bot-logo-header">
                                        <div id = "bot-image">
                                            <img src={require('../Assets/whiteComment.png')}
                                             id = "bot-comment-img"/>
                                        </div>
                                        <div id = "boat-heading">Live Chat</div>
                                        </div>

                                    </div>
                            }

                        </div>


                    </div>
                </div>



            </div>
        )
    }
}


export default Home