import React, { Component } from 'react'



class TeamUsers extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: this.props.TeamMembers
        }
    }
    render() {
        return (
            <div>
                <div className="profile-container">
                    {/* <div id = "social-logo">.in</div> */}
                    <img src={require('../Assets/coin.png')} />
                </div>
              
                <div>
                    {this.state.user.name}
                </div>
                <div style={{marginTop:"5px"}}>
                    {this.state.user.post}
                </div>

            </div>
        )
    }
}

export default TeamUsers