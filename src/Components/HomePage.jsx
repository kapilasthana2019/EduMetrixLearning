import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Divider, MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import '../CssFiles/HomePage.css'

class HomePage extends Component {


    constructor(props) {
        super(props)

        this.state = {

        }
    }

    style = () => {

        const useStyle = createMuiTheme(({

            overrides: {
                MuiDrawer: {

                    paper: {
                        width: "300px",
                        backgroundColor: "#323232",
                        color: "white",

                    }
                },
                MuiTypography: {
                    body1: {
                        fontSize: "16px",
                        // fontWeight: "900",

                    }
                },
                MuiListItem: {
                    button: {
                        backgroundColor: "",
                        "&:hover": {
                            backgroundColor: "#5b9ba7",
                            transition: "1.5s"
                        }
                    }
                },
                MuiListItemIcon: {
                    root: {
                        marginLeft: "50px"
                    }
                },
                MuiListItemText: {
                    root: {
                        marginLeft: "-10px"
                    }
                }

            }
        }))
        return useStyle
    }

    Home = (event) => {
        this.props.history.push("/HomePage/home")
    }

    LiveChat = (event) => {
        this.props.history.push("/HomePage/LiveChat")
    }

    TopPics = (event) => {
        this.props.history.push("/HomePage/TopPics")
    }

    FindFrieds = (event) => {
        this.props.history.push("/HomePage/FindFrieds")
    }

    Earning = (event)=>{
        
        this.props.history.push("/HomePage/Earning")
    }

    chatBot = (event)=>{
        this.props.history.push("/HomePage/ChatBotPage")
    }

    Profile = (event)=>{
        this.props.history.push("/HomePage/MyProfile")

    }

    render() {
        return (
            <div>
                <MuiThemeProvider theme={this.style()}>

                    <Drawer
                        className={""}
                        variant="permanent"
                        anchor="left"
                    >
                        <Divider />

                        <div className="comp-logo">
                            <div style={{ display: "flex", marginLeft: "50px" }}>
                                <div>
                                    {" 8 Followers"}
                                </div>
                                <div style={{ marginLeft: "20px" }}>
                                    {" 8 Following"}
                                </div>
                            </div>

                            <div id="coin-div">
                                <img src={require("../Assets/whiteCoin.png")}
                                    style={{ height: "157px" }} />
                            </div>

                            <div id="company-name">
                                EduMetrix.io
                            </div>
                        </div>
                        <Divider />
                        <List>

                            <ListItem
                                onClick={event => this.Home(event)}
                                button>
                                <ListItemIcon>
                                    <img src={require('../Assets/home.png')} id="homeImg" />
                                </ListItemIcon>
                                <ListItemText primary={"Home"} />
                            </ListItem>

                            <ListItem onClick={event => this.TopPics(event)} button>
                                <ListItemIcon>
                                    <img src={require('../Assets/search.png')} id="homeImg" />
                                </ListItemIcon>
                                <ListItemText primary={"Top Pics For You"} />
                            </ListItem>

                            <ListItem button onClick={event => this.LiveChat(event)}>
                                <ListItemIcon>

                                    <img src={require('../Assets/speech-bubble.png')} id="homeImg" />
                                </ListItemIcon>
                                <ListItemText primary={"Live Chat"} />
                            </ListItem>

                            <ListItem
                                onClick={event => this.FindFrieds(event)}
                                button>
                                <ListItemIcon>
                                    <img src={require('../Assets/group.png')} id="homeImg" />
                                </ListItemIcon>
                                <ListItemText primary={"Find Friends"} />
                            </ListItem>

                            <ListItem 
                            onClick = {event=>this.Earning(event)}
                            button>
                                <ListItemIcon>
                                    <img src={require('../Assets/dollar.png')} id="homeImg" />
                                </ListItemIcon>
                                <ListItemText primary={"Earnings"} />
                            </ListItem>

                            <ListItem
                            onClick = {event=>this.chatBot(event)}
                            button>
                                <ListItemIcon>
                                    <img src={require('../Assets/chat.png')} id="homeImg" />
                                </ListItemIcon>
                                <ListItemText primary={"Chatbot"} />
                            </ListItem>

                            <ListItem
                            onClick ={event=>this.Profile(event)}
                            button>
                                <ListItemIcon>
                                    <img src={require('../Assets/setting.png')} id="homeImg" />
                                </ListItemIcon>
                                <ListItemText primary={"My Profile"} />
                            </ListItem>

                            <ListItem button>
                                <ListItemIcon>
                                    <img src={require('../Assets/history.png')} id="homeImg" />
                                </ListItemIcon>
                                <ListItemText primary={"Logout"} />
                            </ListItem>
                        </List>

                        <Divider />

                        <div>
                            <div id="comp">
                                Edumetrix © 2019
                           </div>
                            <div id="discriptions">
                                <div>Disclaimer.</div>
                                <div>Privacy policy.</div>
                                <div>Terms of services</div>
                                <div>Contact</div>
                            </div>

                        </div>

                    </Drawer>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default HomePage