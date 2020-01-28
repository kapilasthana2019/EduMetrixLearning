import React, { Component } from 'react'
import InputBase from '@material-ui/core/InputBase';
import { Picker } from 'emoji-mart'
import { Popper } from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import '../CssFiles/HomePage.css'
import 'emoji-mart/css/emoji-mart.css'

class UserChatPrompt extends Component {

    constructor(props) {
        super(props)

        this.state = {
            emojibool: false,
            anchorEl: null,
            message:"",
            attachBool:false,
            anchorElAttach:null
        }
    }


    handleInput = (event) => {
       
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    botToggle = (event) => {
        this.props.changebotState()
    }

    attachFile = (event) => {
        
        this.setState({
            attachBool:!this.state.attachBool,
            anchorElAttach:event.currentTarget
        })
    }

    emojiToggle = async(event) => {

       await this.setState({
            emojibool: !this.state.emojibool,
            anchorEl: event.currentTarget
        })

        
        
    }

    addEmoji = (e) => {
        let emoji = e.native;

        this.setState({
             message: this.state.message + emoji
        });
    }

    clickAway = () => {

        this.setState({
            emojibool: !this.state.emojibool,
        })
    }

    clickAwayForAttach =()=>{

       this.setState({
           attachBool:!this.state.attachBool 
       })
   }

    render() {

        // console.log("getting state",this.props.userItem);

        return (
            <div className="useChatBox">

                <div id="bot-header">
                    <div> <img src={require('../Assets/whiteComment.png')}
                        id="bot-comment-img" /></div>
                    <div id="live-heading">Live Chat</div>
                    <div>
                        <button
                            onClick={event => this.botToggle(event)}
                            className="btn btn-default">
                            X
                     </button>
                    </div>

                </div>
                <div className="message-area">
                    message displ
            </div>

                <div className="input-area">
                    <div style={{ width: "80%", display: "flex" }}>

                        <span>
                           
                            <button
                                onClick={event => this.emojiToggle(event)}
                                id="live-emoji-btn">

                                <img src={require('../Assets/grinning.png')}
                                 id="smiley-livechat" />
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
                            id="msg-input"
                            name = "message"
                            value = {this.state.message}
                            onChange = {event=>this.handleInput(event)}
                            fullWidth
                            placeholder="Type Message..." />
                    </div>
                    <div>
                        <button onClick={event => this.attachFile(event)}
                            id="attach-btn">
                            <img src={require('../Assets/attach.png')} id="attach-img" />
                        </button>
                        
                        {
                            (this.state.attachBool) ? 
                         <ClickAwayListener onClickAway={this.clickAwayForAttach}>
                            <Popper
                            id = "attach-popper"
                            open = {this.state.attachBool}
                             anchorEl={this.state.anchorElAttach}
                             transition placement="bottom-start">
                                 <div>
                                     Upload Your Documents
                                 </div>
                                 <hr/>
                            <div id= "attach-div">
                            <div>
                                  <button  id="attach-btn">
                                      <img src={require('../Assets/photo-camera.png')}
                                       id ="attach-pic"/>
                                  </button>
                                  <div>Photo</div>
                               </div>
                               <div style={{marginLeft:"10px"}}>
                                  <button  id="attach-btn">
                                      <img src={require('../Assets/video-camera.png')}
                                       id ="attach-pic"/>
                                  </button>
                                  <div>Videos</div>
                               </div>
                               <div style={{marginLeft:"10px"}}>
                                  <button  id="attach-btn">
                                      <img src={require('../Assets/document.png')}
                                       id ="attach-pic"/>
                                  </button>
                                  <div>Documents</div>
                               </div>
                            </div>
                          </Popper>
                            </ClickAwayListener>
                             :null
                            
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
    // 
}

export default UserChatPrompt