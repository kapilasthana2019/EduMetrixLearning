import React, { Component } from 'react'
import Collapse from '@material-ui/core/Collapse';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import '../CssFiles/ChatBot.css'

class AdvertiseCards extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showText: false
        }
    }
    componentToggle = (event) => {
        this.setState({
            showText: !this.state.showText
        })
    }

    onClickAway = ()=>{
        this.setState({
            showText:false
        })
    }
    render() {
        return (
            <ClickAwayListener onClickAway={this.onClickAway}>
            <div
            onClick={event => this.componentToggle(event)}
            className="advertisement-post-container">
                {/* <ClickAwayListener onClickAway={this.onClickAway}> */}
                <div id="add-post">
                    <div>
                        <img src={require('../Assets/kapilnew.jpg')} id="link-post-img" />
                    </div>

                    <div id="advertisement-content">
                        <div>Vote for your favourite clare
                    Machentosh story & win exciting prizes on every weeks
                    <Collapse in={this.state.showText}>
                                <div>
                                    <span>
                                        Some more texts here...
                                        Some more texts here...
                                        Some more texts here...
                                        Some more texts here...
                                        Some more texts here...
           </span>
                                </div>
                            </Collapse>
                            {/* <span>
                                
                                <button
                                   
                                    id="moreBtn">
                                        {(this.state.showText) ? "Less":"More"}
                                    </button>
                            </span> */}

                            
                        </div>
                    </div>
                </div>
                {/* </ClickAwayListener> */}
            </div>
          </ClickAwayListener>
        )
    }
}
export default AdvertiseCards