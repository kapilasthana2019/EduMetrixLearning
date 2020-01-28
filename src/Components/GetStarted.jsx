import React, { Component } from 'react'
import InputBase from '@material-ui/core/InputBase';
import '../CssFiles/GetStarted.css'
import { Tooltip } from '@material-ui/core';

const countryOptions = [
    { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
    { key: 'af', value: 'af', flag: 'af', text: 'India' },
    { key: 'ax', value: 'ax', flag: 'ax', text: 'Malaysia' },
    { key: 'al', value: 'al', flag: 'al', text: 'New York' },
    { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
    { key: 'af', value: 'af', flag: 'af', text: 'India' },
    { key: 'ax', value: 'ax', flag: 'ax', text: 'Malaysia' },
    { key: 'al', value: 'al', flag: 'al', text: 'New York' },
    { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
    { key: 'af', value: 'af', flag: 'af', text: 'India' },
    { key: 'ax', value: 'ax', flag: 'ax', text: 'Malaysia' },
    { key: 'al', value: 'al', flag: 'al', text: 'New York' },
]

const states = ["andaman nicobar", "karnataka", "telangana", "tamilnadu"]
const imagesParts = ['Change picture', 'Upload Id front ', 'Upload Id back ']


class GetStarted extends Component {

    constructor(props) {
        super(props)

        this.state = {
            mobileDigit: "6388",
            date: "",
            value: "India",
            disable: true,
            stateValue: " Choose state"
        }
    }

    componentDidMount = async () => {

        var date = (new Date()).toLocaleString()
        date = date.slice(10, 2)
        await this.setState({

        })

        console.log("date in mount", date);

    }
    dropdownHandle = async (event) => {
        await this.setState({
            value: event.target.value
        })

    }

    stateHandle = async (event) => {
        await this.setState({
            stateValue: event.target.value
        })
    }

    render() {
        return (
            <div className="get-started-container">

                <div className="get-sub-container">

                    <div id="instruction-title">
                        Please complete the following steps
                    </div>

                    <div id="otp-message">
                        Please enter OTP passwords which already send to your email and mobile no :-6388xxxxx89
                    </div>
                    <hr />
                    <div id="otp-fields">
                        <div>
                            <div id="email-otp-head">
                                email OTP
                                </div>
                            <div id="email-otp-field">
                                <InputBase
                                    id="email-otp"
                                />
                            </div>
                        </div>
                        <div id = "mobile-otp">
                            <div id="mobile-otp-head">
                                mobile OTP
                                </div>
                            <div id="mobile-otp-field">
                                <InputBase
                                    id="email-otp"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default GetStarted