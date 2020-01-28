import React, { Component } from 'react'
import { Divider } from '@material-ui/core';
import '../CssFiles/HomePage.css'

class PeopleSuggestion extends Component {

    render() {
        return (
            <div>
                <Divider />
                <div className="suggest-user">
                    <div>
                        <img src={require('../Assets/coin.png')} id="userimg" />
                    </div>
                    <div id="user-det">
                        <div>
                            <div>Penuvel Josemon </div>
                            <div id="user-country">india </div>
                        </div>
                        <div style = {{marginLeft:"10px", marginTop:"-10px"}}>
                            <button id="follow-btn">
                                Follow
                       </button>
                        </div>
                    </div>

                </div>

            </div>
        )
    }

}

export default PeopleSuggestion