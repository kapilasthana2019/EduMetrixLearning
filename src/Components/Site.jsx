import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';


import '../CssFiles/AboutUs.css'

class Site extends Component {



    style() {

        const useStyle = createMuiTheme(({

            overrides: {
                MuiDrawer: {
                    paperAnchorLeft: {
                        top: "64px",
                        width: "205px",
                        height:"81vh"
                    }
                },

                MuiTypography: {
                    body1: {
                        color: "#007bff",
                        letterSpacing: "1px",
                        fontWeight: "700"
                    }
                }
,
                MuiPaper:{
                    elevation4:{
                        boxShadow:"none"
                    }
                }
            }
        }))
        return useStyle
    }

    render() {
        return (
            <div>
                <div>
                    <MuiThemeProvider theme = {this.style()}>
                    <AppBar>
                        <Toolbar className="toolbar">

                            <div>
                                <div id="image-container">
                                    <div>
                                        <img src={require('../Assets/logo.png')}
                                            id="comp-logo" />
                                    </div>

                                    <div id="title">
                                        Edumetrix
                            </div>
                                </div>

                            </div>
                            <div id="home">
                                Home
            </div>
                        </Toolbar>
                    </AppBar>
                    </MuiThemeProvider>
                    <MuiThemeProvider theme={this.style()}>
                        <Drawer variant="permanent"
                            anchor="left"
                        >
                            <List>
                                <ListItem button>
                                    <ListItemIcon>
                                        <div id="icon">
                                            <img src={require('../Assets/users.png')} id="stop-img" />
                                        </div>
                                    </ListItemIcon>
                                    <ListItemText primary="About Us" />
                                </ListItem>
                            </List>
                            <Divider />

                            <List>
                                <ListItem button>
                                    <ListItemIcon>
                                        <div id="icon2">
                                            <img src={require('../Assets/lock.png')} id="stop-img" />
                                        </div>
                                    </ListItemIcon>
                                    <ListItemText primary="Privacy Policy" />
                                </ListItem>
                            </List>
                            <Divider />

                            <List>
                                <ListItem button>
                                    <ListItemIcon>
                                        <div id="icon3">
                                            <img src={require('../Assets/list.png')} id="stop-img" />
                                        </div>
                                    </ListItemIcon>
                                    <ListItemText primary="Terms of Service" />
                                </ListItem>
                            </List>
                            <Divider />

                            <List>
                                <ListItem button>
                                    <ListItemIcon>
                                        <div id="icon4">
                                            <img src={require('../Assets/phone.png')} id="stop-img" />
                                        </div>
                                    </ListItemIcon>
                                    <ListItemText primary="Contact" />
                                </ListItem>
                            </List>
                            <Divider />
                            <List>
                                <ListItem button>
                                    <ListItemIcon>
                                        <div id="icon5">
                                            <img src={require('../Assets/stop.png')} id="stop-img" />
                                        </div>
                                    </ListItemIcon>
                                    <ListItemText primary="Disclaimer" />
                                </ListItem>
                            </List>
                        </Drawer>
                    </MuiThemeProvider>
                </div>
                <div className="footer">
                    Edumetrix © 2019
            </div>
            </div>
        )
    }
}

export default Site