import React, { Component } from 'react'
import InputBase from '@material-ui/core/InputBase';
import { Picker } from 'emoji-mart'
import { Popper } from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import '../CssFiles/FindFriends.css'

class TopPicsBot extends Component {

    constructor(props) {
        super(props)

        this.state = {
            emojibool: false,
            anchorEl: null,
            attachBool: false,
            anchorElAttach: null
        }
    }

    messangerHandle = (event) => {
        this.props.changebotState()
    }

    emojiSelect = (event) => {

        this.setState({
            emojibool: !this.state.emojibool,
            anchorEl: event.currentTarget
        })

    }

    addEmoji = (e) => {
        let emoji = e.native;

        // this.setState({
        //      message: this.state.message + emoji
        // });
    }
    clickAway = () => {

        this.setState({
            emojibool: !this.state.emojibool,
        })
    }

    attachHandle = (event) => {

        this.setState({
            attachBool: !this.state.attachBool,
            anchorElAttach: event.currentTarget
        })

    }

    clickAwayForAttach = () => {
        this.setState({
            attachBool: !this.state.attachBool
        })
    }
    render() {
        return (
            <div>
                <div className="top-pics-prompt-container">
                    <div>
                        Live Chat
                </div>
                    <div>
                        <button onClick={event => this.messangerHandle(event)}
                            className="btn btn-default">
                            X
                     </button>
                    </div>
                </div>
                <div className="top-pics-messages">
                    Messages
                    </div>

                <div className="top-pics-bot-input">

                    <div style={{ width: "80%", display: "flex" }}>
                        <span>
                            <button onClick={event => this.emojiSelect(event)} id="smiley-btn">
                                <img src={require('../Assets/grinning.png')}
                                    id="smiley-livechat" />
                            </button>
                        </span>

                        {
                            (this.state.emojibool) ?
                                <ClickAwayListener onClickAway={this.clickAway}>
                                    <Popper open={this.state.emojibool}
                                        anchorEl={this.state.anchorEl} transition placement="bottom-start">
                                        <Picker onSelect={this.addEmoji} />

                                    </Popper>
                                </ClickAwayListener>
                                : null
                        }
                        <InputBase placeholder="Type your Message..." />
                    </div>
                    <div>
                        <button onClick={event => this.attachHandle(event)}
                            id="attach-btn">
                            <img src={require('../Assets/attach.png')} id="attach-img" />
                        </button>

                        {
                            (this.state.attachBool) ?
                                <ClickAwayListener onClickAway={this.clickAwayForAttach}>
                                    <Popper open={this.state.attachBool}
                                        id="top-pics-attach-popper"
                                        anchorEl={this.state.anchorElAttach}
                                        transition placement="bottom-start">
                                        <div>
                                            Upload Your Documents
                                 </div>
                                        <hr />

                                        <div id="attach-div">

                                            <div style={{ marginLeft: "10px" }}>
                                                <button id="attach-btn">
                                                    <img src={require('../Assets/photo-camera.png')}
                                                        id="attach-pic" />
                                                </button>
                                                <div>Photo</div>
                                            </div>
                                            <div style={{ marginLeft: "10px" }}>
                                                <button id="attach-btn">
                                                    <img src={require('../Assets/video-camera.png')}
                                                        id="attach-pic" />
                                                </button>
                                                <div>Videos</div>
                                            </div>
                                            <div style={{ marginLeft: "10px" }}>
                                                <button id="attach-btn">
                                                    <img src={require('../Assets/document.png')}
                                                        id="attach-pic" />
                                                </button>
                                                <div>Documents</div>
                                            </div>

                                        </div>
                                    </Popper>
                                </ClickAwayListener> : null

                        }
                    </div>
                    <div>
                        <button id="attach-btn">
                            <img src={require('../Assets/send-button.png')} id="attach-img" />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopPicsBot