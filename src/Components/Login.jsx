import React, { Component } from 'react'
import InputBase from '@material-ui/core/InputBase';
import Checkbox from '@material-ui/core/Checkbox';
import { Typography } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';

import '../CssFiles/Login.css'

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }

    }

    rememberCheck = (event) => {


    }

    signup = (event)=>{
        this.props.history.push("/signup")
    }

    SignUpBtn = (event)=>{

    console.log("sign in ",this.props);

    this.props.history.push("/HomePage")
    
    }



    render() {

        return (
            <div className="Login-Container">
                <div className="login-sub-container">

                    <div className="login-part">
                       
                        <div id="company">
                            <div id="company-logo">
                                <img src={require('../Assets/coin.png')} />
                            </div>
                            <div>
                                <div className="headings">
                                    <div id="title1">
                                        Share Your Knowledge
                            </div>
                                    <div id="title1">
                                        Learn More From Your Friends
                            </div>
                                    <div id="title1">
                                        Chat With Friends
                            </div>
                                    <div id="title1">
                                        Chat With Experts
                            </div>
                                    <div id="title1">
                                        Earn Money
                            </div>
                                </div>
                            </div>
                        </div>
                        <div id="content-part">
                            <div className="logo-aboutus">
                                <div id="edumetrix-logo">
                                    <img src={require('../Assets/logo.png')} id="edu-img" />
                                </div>
                                <div>
                                
                                    <Link to = "/Site/AboutUs">
                                    <div id="about-us">about us</div>
                                    </Link>
                                    
                                </div>

                            </div>

                            <div id="comp-title">
                                Edumetrix
                 </div>
                            <div id="student-heading-container">
                                <div id="student-heading">Student</div>
                                <hr />

                                <div id="input">
                                    <InputBase id="text"
                                        placeholder="User name"
                                        margin="normal"
                                        fullWidth />
                                </div>
                                <div id="input">
                                    <InputBase id="text"
                                        type="password"
                                        placeholder="Password"
                                        margin="normal"
                                        fullWidth />
                                </div>
                                <div id="remember-checkbox">

                                    <Checkbox

                                        onChange={event => this.rememberCheck(event)}
                                        color="default"
                                        value="default"
                                        checked={this.state.checkVal}
                                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                                    />
                                    <div>

                                        <Typography id="remember">
                                            Remember me
                                        </Typography>
                                    </div>
                                </div>

                                <div id="signIn-btn">

                                    <button id="sign-in" onClick={event=>this.SignUpBtn(event)} >
                                        Sign in
                             </button>

                                </div>

                                <div id="create-title">
                                    <button id="sign-up" onClick={event=>this.signup(event)}>
                                        Not yet an account? Sign up!
                       </button>
                                </div>

                                <div id="forgot">
                                   <Tooltip title = "Forgot Password">
                                    <div>
                                        Forgot Password
                                    </div>
                                    </Tooltip>
                                </div>
                            </div>

                        </div>
                    </div>
               <div id = "disclaimer">
                   <div id = "edu"> Edumetrix © 2018 |</div>
                   <div id = "disclaimer-heading"> Disclaimer .</div>
              <div id = "Privacy"> Privacy Policy .</div>
               <div id = "terms">Terms of Service .</div> 
               <div id = "contact">Contact</div>
               </div>
                </div>

            </div>
        )
    }
}

export default Login