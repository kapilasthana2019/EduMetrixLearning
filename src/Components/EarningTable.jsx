import React, { Component } from 'react'
import '../CssFiles/Earning.css'

class EarningTable extends Component {

    render() {

        return (
            <div >
                <div id="heading-earning">
                    <div>
                        <li>Earning Details</li>
                    </div>
                    <div>
                        Life Time Earning:- 50.70
                    </div>
                </div>

                <div>
                    <div className="earning-tables">
                   <div id= "like-table">
                  
                   <div id = "likes-counter">Like Counters</div>
                       <table id = "table" className="table table-striped table-bordered detail-view">
                       
                           <tr>
                               <th>Total Likes</th>
                               <td>0</td>
                           </tr>
                           <tr>
                               <th>Paid Likes</th>
                               <td>0</td>
                           </tr>
                           <tr>
                               <th>Payble Likes</th>
                               <td>0</td>
                           </tr>
                           <tr>
                               <th>Lifetime earning coins</th>
                               <td>0</td>
                           </tr>
                           <tr>
                               <th>Payble coins</th>
                               <td>0</td>
                           </tr>
                       </table>
                  
                   </div>
                   <div id = "referal-table">
                   <div id = "likes-counter">Referral  Counters</div>
                   <table id = "table" className="table table-striped table-bordered detail-view">
                       
                       <tr>
                           <th>Total Referral</th>
                           <td>0</td>
                       </tr>
                       <tr>
                           <th>Paid Referral</th>
                           <td>0</td>
                       </tr>
                       <tr>
                           <th>Payble Referral</th>
                           <td>0</td>
                       </tr>
                       <tr>
                           <th>Lifetime earning coins</th>
                           <td>0</td>
                       </tr>
                       <tr>
                           <th>Payble coins</th>
                           <td>0</td>
                       </tr>
                   </table>
              
                   </div>
                   </div>
                   <div className="earning-tables">
                   <div id= "like-table">
                  
                   <div id = "likes-counter">Share Counters</div>
                       <table id = "table" className="table table-striped table-bordered detail-view">
                       
                           <tr>
                               <th>total Shares</th>
                               <td>0</td>
                           </tr>
                           <tr>
                               <th>Paid Shares</th>
                               <td>0</td>
                           </tr>
                           <tr>
                               <th>Payble Shares</th>
                               <td>0</td>
                           </tr>
                           <tr>
                               <th>Lifetime earning coins</th>
                               <td>0</td>
                           </tr>
                           <tr>
                               <th>Payble coins</th>
                               <td>0</td>
                           </tr>
                       </table>
                  
                   </div>
                   <div id = "referal-table">
                   <div id = "likes-counter">Aditional Bonus</div>
                   <table id = "table" className="table table-striped table-bordered detail-view">
                       
                       <tr>
                           <th>Aditional Bonus</th>
                           <td>0</td>
                       </tr>
                       <tr>
                           <th>Paid Bonus</th>
                           <td>0</td>
                       </tr>
                       <tr>
                           <th>Payble Bonus</th>
                           <td>0</td>
                       </tr>
                       <tr>
                           <th>Lifetime earning coins</th>
                           <td>0</td>
                       </tr>
                       <tr>
                           <th>Payble coins</th>
                           <td>0</td>
                       </tr>
                   </table>
              
                   </div>
                   </div>
                </div>
            </div>
        )
    }
}

export default EarningTable