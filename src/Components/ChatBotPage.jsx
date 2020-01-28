import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LinkedInPost from './LinkedInPost'
import Slideshow from './Slideshow'
import CustomChatbot from './CustomChatbot'
import AdvertiseCards from './AdvertiseCards'
import '../CssFiles/ChatBot.css'

// var imgArray = ["cat.jpg","fox.jpg","lion.jpg","muzzle.jpg"]
class ChatBotPage extends Component {

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

                <div className="chatbot-container">

                    <div className="chatbot-sub-container">
                        <div className="chatbot-section1">

                            <div id="whatsNew-div">
                                <div id="whatsNew">
                                    What's New today
                             </div>
                            </div>
                            <div>
                                <AdvertiseCards/>
                                <AdvertiseCards/>
                                <AdvertiseCards/>
                                <AdvertiseCards/>
                                <AdvertiseCards/>
                                <AdvertiseCards/>
                                <AdvertiseCards/>
                                <AdvertiseCards/>
                                
                            </div>

                        </div>
                        <div className="chatbot-section2">

                            <div className="social-follow">

                                <div id="follow-linked">

                                    <div id="linked-in">
                                        <div id="linkedIn-logo">
                                            <span id="follow-linkedIn">
                                                <img src={require('../Assets/follow-linked.png')}
                                                    id="link-img" />
                                            </span>
                                            <div style={{ marginTop: "4px", marginLeft: "5px", textAlign: "left", width: "180px" }}>
                                                Follow Us On LinkedIn</div>
                                        </div>
                                    </div>
                                    <div id="linkedIn-posts">
                                        <LinkedInPost />
                                        <LinkedInPost />
                                        <LinkedInPost />
                                        <LinkedInPost />
                                        <LinkedInPost />
                                    </div>
                                </div>

                                <div className="follow-facebook">

                                    <div id="facebook">
                                        <div id="fb-logo">
                                            <span id="follow-linkedIn">
                                                <img src={require('../Assets/follow-fb.png')}
                                                    id="link-img" />
                                            </span>
                                            <div style={{ marginTop: "4px", marginLeft: "5px", textAlign: "left", width: "180px" }}>
                                                Follow Us On Facebook</div>
                                        </div>

                                    </div>
                                    <div id="linkedIn-posts">
                                        <LinkedInPost />
                                        <LinkedInPost />
                                        <LinkedInPost />
                                        <LinkedInPost />
                                        <LinkedInPost />
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: "30px" }}>
                                <div className="social-follow">

                                    <div id="follow-linked">

                                        <div id="linked-in">
                                            <div id="twitter-logo">
                                                <span id="follow-linkedIn">
                                                    <img src={require('../Assets/follow-twit.png')}
                                                        id="link-img" />
                                                </span>
                                                <div style={{ marginTop: "4px", marginLeft: "5px", textAlign: "left", width: "160px" }}>
                                                    Follow Us On Twitter</div>
                                            </div>
                                        </div>
                                        <div id="linkedIn-posts">
                                            <LinkedInPost />
                                            <LinkedInPost />
                                            <LinkedInPost />
                                            <LinkedInPost />
                                            <LinkedInPost />
                                        </div>
                                    </div>
                                    <div className="follow-facebook">

                                        <div id="facebook">
                                            <div id="insta-logo">
                                                <span id="follow-linkedIn">
                                                    <img src={require('../Assets/instagram.png')}
                                                        id="link-img" />
                                                </span>
                                                <div style={{ marginTop: "4px", marginLeft: "5px", textAlign: "left", width: "185px" }}>
                                                    Follow Us On Instagram</div>
                                            </div>

                                        </div>
                                        <div id="linkedIn-posts">
                                            <LinkedInPost />
                                            <LinkedInPost />
                                            <LinkedInPost />
                                            <LinkedInPost />
                                            <LinkedInPost />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="slides-div">

                                <Slideshow />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="chatbot-bottom">
                    <CustomChatbot />
                </div>
            </div>
        )
    }
}

export default ChatBotPage