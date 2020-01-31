import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ProfilePostCards from './ProfilePostCards'
import ProfileChatBot from './ProfileChatBot'
import UserBio from './UserBio'
import '../CssFiles/MyProfile.css'

class MyProfile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            botToggle: false,
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

                <div className="profile-container">
                    <div className="profile-sub-container">

                        <div className="user-profile">
                                <UserBio/>
                        </div>



                        <div className="user-posts">
                            <ProfilePostCards />
                            <ProfilePostCards />
                            <ProfilePostCards />
                            <ProfilePostCards />
                        </div>
                        <div className="profile-ad">
                            advertisement
                   </div>
                    </div>
                </div>
            
                <div className="profile-bottom">

                    {
                        (this.state.botToggle) ? <ProfileChatBot
                            chatbottoggle={this.chatbottoggle} /> :
                            <div onClick={event => this.chatbottoggle(event)} id="find-frnd-chatbot">
                                <div className="bot-logo-header">
                                    <div id="bot-image">
                                        <img src={require('../Assets/whiteComment.png')}
                                            id="bot-comment-img" />
                                    </div>
                                    <div id="boat-heading">Live Chat</div>
                                </div>
                            </div>
                    }

                </div>

            </div>
        )
    }
}

export default MyProfile