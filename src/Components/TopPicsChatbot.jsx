import React, { Component } from 'react'
import TopPicsBotUsers from './TopPicsBotUsers'
import TopPicsBot from './TopPicsBot'

const users = [1, 2, 3, 4, 5, 6, 7, 8]

class TopPicsChatbot extends Component {


    constructor(props) {
        super(props)

        this.state = {
            botbool: false,
            userState: ""
        }
    }

    botToggle = (event) => {

        this.props.chatbottoggle()
    }

    changebotState = () => {

        this.setState({
            botbool: !this.state.botbool
        })
    }

    chatboxtoggle = async (UserState) => {

        await this.changebotState()
        // console.log("user state ",);

        await this.setState({
            userState: UserState
        })

    }

    render() {

        const ChatBot = (

            <div>
                <div
                    onClick={event => this.botToggle(event)}
                    id="top-pics-bot-header">
                    <div>Live Chat</div>
                    <div>
                        <button
                            onClick={event => this.botToggle(event)}
                            className="btn btn-default">
                            X
                     </button>
                    </div>
                </div>

                <div>
                    <div id="top-pics-bot-frnds">

                        {
                            users.map((item, key) => (<TopPicsBotUsers props={item}
                                chatboxtoggle={this.chatboxtoggle} />))
                        }

                    </div>
                </div>

            </div>
        )
        return (
            <div className="frnd-chatbot">
               {
                   (this.state.botbool)?
                   <TopPicsBot changebotState = {this.changebotState}
                   userState = {this.state.userState}/>
                   :ChatBot
               }
            </div>
        )
    }
}

export default TopPicsChatbot