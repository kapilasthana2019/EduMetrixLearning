import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ProgressBar from 'react-bootstrap/ProgressBar'
import EarningTable from './EarningTable'
import TotalPaybleTable from './TotalPaybleTable'
import WithdrawTable from './WithdrawTable'
import '../CssFiles/Earning.css'

const now = 10.33;

let arr = [
    {date:"22 March 2019",amount:"107",paid:"25 March 2019	",status:"paid"},
    {date:"22 March 2019",amount:"107",paid:"25 March 2019	",status:"paid"},
    {date:"22 March 2019",amount:"107",paid:"25 March 2019	",status:"paid"},
    {date:"22 March 2019",amount:"107",paid:"25 March 2019	",status:"paid"}

]
class Earning extends Component {


    render() {
        return (
            <div>
                <AppBar>
                    <Toolbar className="profile-header">
                        <div className="header-profile-container">
                            <div>
                                details
                        </div>
                            <div>
                                chat
                        </div>
                            <div>
                                profile
                        </div>
                        </div>
                    </Toolbar>
                </AppBar>

                <div className="earning-container">
                    <div className="earning-part-container">

                        <div className="country-container">
                            <div>Country</div>
                            <div>Currency</div>
                        </div>

                        <div id="earning-details">

                            <div id="coins-detail">

                                <div>
                                    <img src={require('../Assets/whiteCoin.png')} id="get-coins" />
                                </div>

                                <div id="no-coins">
                                    <div id="no">5</div>
                                    <div id="coin-head">Coins</div>
                                </div>

                            </div>

                            <div id="coins-detail">
                                <div>
                                    <img src={require('../Assets/like.png')}
                                        id="get-coins" />
                                </div>

                                <div>
                                    <div id="no-coins">
                                        <div id="no">5</div>
                                        <div id="coin-head">Likes</div>
                                    </div>
                                </div>
                            </div>

                            <div id="coins-detail">
                                <div>
                                    <img src={require('../Assets/thumb-up.png')}
                                        id="get-coins" />
                                </div>

                                <div>
                                    <div id="no-coins">
                                        <div id="no">5</div>
                                        <div id="coin-head">Refers</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="progressBar-container">
                            <ProgressBar
                                style={{ height: "25px", borderRadius: "20px" }}
                                animated={true}

                                now={now} label={` Earnings ${now}%`} />
                        </div>
                        <div id="payment-title">Payment threshold: EMC 100.00</div>

                        <div id="withdraw-btn">
                            <button id="withdraw">
                                Withdraw
                        </button>
                        </div>
                        <div className="earning-table-container">
                            <EarningTable />
                            <TotalPaybleTable />
                        </div>


                    </div>
                    {/* sharing Details Div part */}

                    <div className="sharing-part-container">


                        <div id="coin-symbol">
                            <div>
                                <img src={require('../Assets/whiteCoin.png')} id="earning-coin" />
                            </div>
                            <div id="value">
                                Value : 5 INR
                        </div>
                        </div>

                        <div id="refer-area">
                            <div id="referFrnds-title">
                                Refer your friends and earn more coins
                        </div>

                            <div id="refer-btns-area">
                                <div>Edumetrix02942</div>
                                <div id="copy-share-btn">
                                    <div>
                                        <button id="copy-btn">Copy</button>
                                    </div>
                                    <button id="copy-btn">Share</button>
                                </div>
                            </div>
                        </div>

                        <div className="social-media-container">
                            <div id="facebook-div">
                                <div>
                                    <button id="fb-btn">
                                        <span id="fb-icon">
                                            <div id="fb-background">
                                                <img src={require('../Assets/facebook.png')}
                                                    id="fb-img" />
                                            </div>

                                        </span>
                                        share on facebook
                                     </button>
                                </div>
                                <div>
                                    <button id="fb-btn">
                                        <span id="fb-icon">
                                            <div id="fb-background">
                                                <img src={require('../Assets/facebook.png')}
                                                    id="fb-img" />
                                            </div>

                                        </span>
                                        share on facebook group
                                     </button>
                                </div>
                            </div>

                            <div id="insta-tiktok-div">
                                <div>
                                    <button id="insta-tik-tok-btns">
                                        <span id="insta-icon">
                                            <div id="fb-background">
                                                <img src={require('../Assets/instagram.png')}
                                                    id="fb-img" />
                                            </div>

                                        </span>
                                        share on your Instagram
                                     </button>
                                </div>
                                <div>
                                    <button id="tik-tok-btn">
                                        <span id="fb-icon">
                                            <div id="fb-background">
                                                <img src={require('../Assets/tiktok.jpeg')}
                                                    id="fb-img" />
                                            </div>

                                        </span>
                                        share on Tik Tok
                                     </button>
                                </div>
                            </div>

                            <div id="insta-tiktok-div">
                                <div>
                                    <button id="twitter-in-btns">
                                        <span id="insta-icon">
                                            <div id="fb-background">
                                                <img src={require('../Assets/twitter.png')}
                                                    id="fb-img" />
                                            </div>

                                        </span>
                                        share on your Twitter
                                     </button>
                                </div>
                                <div>
                                    <button id="linkedIn-btn">
                                        <span id="fb-icon">
                                            <div id="fb-background">
                                                <img src={require('../Assets/linkedin.png')}
                                                    id="fb-img" />
                                            </div>

                                        </span>
                                        share on LinkedIn
                                     </button>
                                </div>
                            </div>

                        </div>
                        <div id="withdraw-table-header">
                            Withdraw To
                         </div>
                         <div id ="withdraw-table"> 
                         <WithdrawTable/>
                         </div>
                         <div className = "status-table-container">
                         <table  className ="table text-center table-bordered">
                             <tr className="heading">
                                 <th > Data</th>
                                <th>Amount (EMC)</th>
                                <th>Paid</th>
                                <th>Status</th>
                             </tr>
                        {
                            arr.map((item)=>(
                                <tr>
                                <td>{item.date}</td>
                            <td>{item.amount}</td>
                            <td>{item.paid}</td>
                            <td>{item.status}</td>
                            </tr>
                            ))
                        }
                            
                             

                             </table>
                         </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Earning