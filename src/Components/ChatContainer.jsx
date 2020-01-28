import React, { Component } from 'react'
import { Divider } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import { Popper } from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import '../CssFiles/LiveChat.css'

class ChatContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            emojibool: false,
            anchorEl: null,
            message:""
        }

    }


    emojiToggle = (event) => {

        this.setState({
            emojibool: !this.state.emojibool,
            anchorEl: event.currentTarget
        })

    }
    clickAway = () => {

        this.setState({
            emojibool: !this.state.emojibool,
        })
    }

    handleInput = (event) => {
        console.log("event",event.target.value);
        
        this.setState({
                [event.target.name]: event.target.value
        })
    }


    addEmoji = (e) => {
        let emoji = e.native;
       

        this.setState({
             message: this.state.message + emoji
        });
    }
    render() {
        return (
            <div>
                <div className="profile-container-div">
                    <div>
                        <img src={require('../Assets/kapil.jpg')} id="profile-img" />

                    </div>
                    <div id="username-div">
                        user Name
                   </div>
                </div>
                <Divider />
                <div className="message-display-div">
                    chat messages
                </div>
                <div id="message-input-div">

                    <div style={{ width: "85%", display: "flex" }}>

                        <span style={{ marginTop: "15px" }}>
                            <button
                                onClick={event => this.emojiToggle(event)}
                                id="msg-send-btn">
                                <img src={require('../Assets/grinning.png')} id="smiley" />
                            </button>
                        </span>

                        {(this.state.emojibool) ?
                            <ClickAwayListener onClickAway={this.clickAway}>
                                <Popper open={this.state.emojibool}
                                    anchorEl={this.state.anchorEl} transition placement="bottom-start"
                                >
                                    <Picker onSelect={this.addEmoji} />
                                </Popper>
                            </ClickAwayListener>
                            : null}

                        <InputBase
                            id="text-input"
                            type="text"
                            placeholder="Type a message..."
                            name="message"
                            value= {this.state.message}
                            fullWidth
                            onChange={this.handleInput}
                            autoFocus={true}
                        />

                    </div>
                    <div style={{ marginLeft: "10px" }}>
                        <button id="attach">
                            <img src={require('../Assets/attach.png')} id="msg-send-btn" />
                        </button>
                    </div >
                    <div style={{ marginLeft: "10px" }}>
                        <button id="attach">
                            <img src={require('../Assets/send-button.png')} id="msg-send-btn" />
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}

export default ChatContainer