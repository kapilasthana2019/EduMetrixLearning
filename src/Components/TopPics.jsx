import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Masonry from 'react-masonry-component';
import PeopleSuggestion from './PeopleSuggestion'
import ImageCards from './ImageCards'
import TopPicsChatbot from './TopPicsChatbot'
import '../CssFiles/FindFriends.css'

var imgArray = ["addvertise.jpeg","ironman.jpeg",
 "index.jpeg","ironman.jpeg","kapilnew.jpg","ironman.jpeg","addvertise.jpeg"]

class TopPics extends Component {

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

                <div className="find-frnd-container">

                    <div id="find-frnd-images">
                        {/* kapil */}
                        <Masonry style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
                            {
                                imgArray.map((item, key) => (
                                    <ImageCards imagename={item} />
                                ))
                            }
                        </Masonry>
                    </div>
                    <div id="find-frnd-suggestion">
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


                <div className="find-frnd-bottom">
                    {
                        (this.state.botToggle) ? <TopPicsChatbot
                         chatbottoggle = {this.chatbottoggle}/> :
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

export default TopPics