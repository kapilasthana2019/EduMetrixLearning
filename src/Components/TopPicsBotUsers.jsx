import React, { Component } from 'react'
import { Divider } from '@material-ui/core';
import '../CssFiles/HomePage.css'

class TopPicsBotUsers extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userSelect: false
        }
    }

    userSelect = (event) => {
       
        this.props.chatboxtoggle(this.props)
        // console.log("user selected",this.props);     
    }

    render() {

        const userList = (

            <div>
                <div onClick={event => this.userSelect(event)}
                    className="suggest-user">
                    <div>
                        <img src={require('../Assets/coin.png')} id="userimg" />
                    </div>
                    <div id="user-det">
                        <div>Penuvel Josemon</div>
                        <div id="user-country">india </div>
                    </div>

                </div>
                <Divider />
            </div>
        )
        return (

            <div>

                {userList}
            </div>
        )
    }

}

export default TopPicsBotUsers