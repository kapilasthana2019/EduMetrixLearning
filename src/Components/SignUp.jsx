import React, { Component } from 'react'
import InputBase from '@material-ui/core/InputBase';
import Checkbox from '@material-ui/core/Checkbox';
import { Typography ,TextField} from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import ReactTelInput from 'react-telephone-input'
import 'react-telephone-input/lib/withStyles'
import { Link } from 'react-router-dom';

import '../CssFiles/Login.css'

class SignUp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dialCode:"",
            country:""
        }

    }

    rememberCheck = (event) => {

    }

    signup = (event)=>{
        this.props.history.push("/signup")
    }

    handleInputChange = (telNumber, selectedCountry) => {
        var telno = telNumber
        var country = selectedCountry

        this.setState({
            dialCode:telNumber,
            country:selectedCountry.name
        })
    }
    handleInputBlur = (telNumber, selectedCountry) => {
        
        console.log("in state",this.state.dialCode , "&& country",this.state.country); 
    }
    GetStarted = ()=>{
        this.props.history.push("/GetStarted")
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

                                <div id = "tele-input">
                                <ReactTelInput
                                    defaultCountry="in"
                                    flagsImagePath={require('../Assets/flags.png')}

                                    onChange={this.handleInputChange}
                                    onBlur={ this.handleInputBlur}
                                />
                                </div>
                                <div id="input">
                                    <InputBase id="text"
                                        type="email"
                                        placeholder="Email"
                                        margin="normal"
                                        fullWidth />
                                </div>

                                <div id="usernamewithpass">
                                <div id="justName">
                                    <InputBase
                                        error={this.state.nameError}
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="name"
                                        helperText={this.state.nameError}
                                        defaultValue={this.state.name}
                                        // onChange={event => this.input(event)}
                                        variant="outlined"
                                        margin="dense"
                                        fullWidth
                                    />
                                </div>
                                <div id="surName">
                                    <InputBase
                                        error={this.state.surNameError}
                                        type="text"
                                        id="surnameid"
                                        name="surName"
                                        placeholder="Surname"
                                        helperText={this.state.surNameError}
                                        defaultValue={this.state.surName}
                                        // onChange={event => this.input(event)}
                                        variant="outlined"
                                        margin="dense"
                                        fullWidth
                                    />
                                </div>


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
                                        I read and agree to Terms & Conditions
                                        </Typography>
                                    </div>
                                </div>

                                <div id="signIn-btn">

                                    <button id="sign-in" onClick={event=>this.GetStarted(event)} >
                                       Get Started
                             </button>

                                </div>


                                <div id="forgot">
                                   <Tooltip title = "Login">
                                    <div>
                                    Already have an account? Sign in!
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

export default SignUp