import React, { Component } from 'react'

class TotalPaybleTable extends Component {

    render() {
        return (
            <div>
                <div id="heading-earning">
                    <div>
                        <li>Total Payble</li>
                    </div>
                </div>

                <div className="total-earning-tables">

                    <div id="total-table">

                       
                        <table id="table" className="table table-striped table-bordered detail-view">

                            <tr>
                                <th>Total Likes</th>
                                <td>0</td>
                            </tr>
                            <tr>
                                <th>Total Referrals</th>
                                <td>0</td>
                            </tr>
                            <tr>
                                <th>Total Shares</th>
                                <td>0</td>
                            </tr>
                            <tr>
                                <th>Total Additional Bonus</th>
                                <td>0</td>
                            </tr>
                            <tr id = "total-pay">
                                <th >Total Payble Amount</th>
                                <td>0</td>
                            </tr>
                        </table>

                    </div>

                </div>

            </div>
        )
    }

}

export default TotalPaybleTable