import React, { Component } from 'react'
import BackAccountPopup from './BackAccountPopup'
import CryptoPopup from './CryptoPopup'

class WithdrawTable extends Component {

    constructor(props) {
        super(props)

        this.state = {
            bankAcntBool: false,
            cryptoBool: false,

        }
    }

    BankAcntHandle = (event) => {

        this.setState({
            bankAcntBool: !this.state.bankAcntBool
        })
    }

    CryptoWallet = (event) => {

        this.setState({
            cryptoBool: !this.state.cryptoBool
        })
    }


    render() {
        return (
            <div>
                <table id="table" className="table table-striped table-bordered detail-view">

                    <tr>
                        <th style={{ backgroundColor: "#164e64" }}>
                            <button
                                onClick={event => this.BankAcntHandle(event)}
                                id="bank-acnt-btn">
                                Bank Account
                            </button>
                        </th>
                        <td style={{ width: "400px" }}>
                            0
                        </td>
                    </tr>

                    <tr>
                        <th style={{ backgroundColor: "#164e64" }}>
                            <button
                                onClick={event => this.CryptoWallet(event)}
                                id="bank-acnt-btn">
                                Crypto Wallet
                            </button>
                        </th>
                        <td>
                            0
                        </td>
                    </tr>
                </table>

                {(this.state.bankAcntBool) ?
                    <BackAccountPopup
                        open={this.state.bankAcntBool}
                        refresh={this.BankAcntHandle}
                    /> : null}

                {(this.state.cryptoBool) ?
                    <CryptoPopup
                        open={this.state.cryptoBool}
                        refresh={this.CryptoWallet}
                    /> : null}
            </div>
        )
    }

}

export default WithdrawTable