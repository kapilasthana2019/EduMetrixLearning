import React, { Component } from 'react'
import { Dialog, InputBase } from '@material-ui/core'
import Slide from '@material-ui/core/Slide';
import '../CssFiles/withdraw.css'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="Down" ref={ref} {...props} />;
});
class BackAccountPopup extends Component {

    constructor(props) {
        super(props)

        this.state = {
            open: this.props.open,
            data: "",
        }
    }

    handleClose = (event) => {
        this.props.refresh()
    }

    render() {
        return (
            <div>
                <Dialog open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={event => this.handleClose(event)}>

                    <div className="bankAcntContainer">

                        <div id="bank-header">
                            <div id="heading">Wallet Details</div>
                            <div>
                                <button
                                    onClick={this.handleClose}
                                    className="btn btn-default">
                                    X
                                </button>
                            </div>
                        </div>
                        <hr />
                        <div className="details-table">

                            <table id="table" className="table table-striped table-bordered detail-view">
                                <tr>
                                    <th>Wallet Name</th>
                                    <td>
                                        <InputBase
                                            id="username"
                                            // value = {""}
                                            autoFocus={true}

                                            fullWidth
                                        />

                                    </td>
                                </tr>
                                <tr>
                                    <th>Wallet</th>
                                    <td>
                                        <InputBase
                                            id="upi"
                                            // value = {""}
                                           

                                            fullWidth
                                        />
                                    </td>
                                </tr>
                            </table>
                        </div>
           <hr/>
            <div className = "update-close-btns">
                <div id = "btns-contain">
                    <div>
                    <button className = "btn btn-primary">
                    Update
                    </button>
                     </div>
                    <div>
                        <button
                         onClick={this.handleClose}
                        className = "btn btn-danger">
                        Close
                        </button>
                        </div>
                </div>
            </div>
                    </div>
                </Dialog>
            </div>
        )
    }
}

export default BackAccountPopup