import React, { Component } from 'react'
import ChatUserList from './ChatUserList'
import UserChatPrompt from './UserChatPrompt'
import '../CssFiles/HomePage.css'

const users = [1, 2, 3, 4, 5, 6, 7, 8]

class ChatBot extends Component {

    constructor(props) {
        super(props)

        this.state = {
            botbool: true,
            userState:""
        }
    }

    changebotState = ()=>{
        
        this.setState({
            botbool: !this.state.botbool
        })
    }
    chatboxtoggle = async(UserState) => {

       await this.changebotState()
        // console.log("user state ",);
        
       await this.setState({
            userState:UserState
        })

    }


    botToggle = (event) => {

        this.props.botToggle()
    }

    render() {


        const chatbot = (
            <div>
                <div className="bot-container">

                    <div onClick={event => this.botToggle(event)}
                        id="bot-header">
                        <div>Live Chat</div>
                        <div>
                            <button
                                onClick={event => this.botToggle(event)}
                                className="btn btn-default">
                                X
        </button>
                        </div>
                    </div>
                    <div className="message-display-field">

                        {
                                users.map((item, key) => (<ChatUserList props={item}
                                    chatboxtoggle={this.chatboxtoggle} />))
                        }

                    </div>

                </div>

            </div>
        )
        return (
            <div>
                {(!this.state.botbool)? <UserChatPrompt 
                changebotState={this.changebotState}
                userItem={this.state.userState}/> : chatbot}
            </div>
        )
    }
}

export default ChatBot