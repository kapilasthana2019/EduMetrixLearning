import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import { createMuiTheme, MuiThemeProvider, Popper } from '@material-ui/core';

class FriendCards extends Component {


    style() {
        const useStyle = createMuiTheme(({
            overrides: {
                MuiPaper: {
                    elevation1: {
                        boxShadow: "-1px 0px 20px -1px rgba(0,0,0,0.2), 5px 5px 10px 0px rgba(0,0,0,0.14), 5px 7px 3px 0px rgba(0,0,0,0.12)"

                    }
                }
            }
        }))
        return useStyle
    }

    render() {
        return (
            <div className="frnd-card-container">
                <MuiThemeProvider theme={this.style()}>

                    <Card id="frnd-card">

                        <div>
                            <div id="usr-img-container">
                                <img src={require('../Assets/kapil.jpg')} id="user-img" />
                            </div>

                        </div>
                        <div>
                            <div id="user-details">
                                <div id="user-name">Kapil asthana</div>
                                <div id="usr-state">Karnataka,india</div>
                            <div id = "follow">
                                8 followers
                            </div>
                            <div id = "join-head">
                                Join on 25 December 2019
                            </div>
                            </div>
                        </div>

                        <div>
                            <button id="follow-btn">
                                Follow
                       </button>
                        </div>
                    </Card>
                </MuiThemeProvider>
            </div>
        )
    }
}
export default FriendCards