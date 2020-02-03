import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import '../CssFiles/Desclaimer.css'

class Desclaimer extends Component {


    render() {
        return (
            <div className="Desclaimer-container-div">
                <div id="Desclaimer-heading">
                    Desclaimer
               </div>
                <div>
                    <div id="content">

                        <Typography style={{
                            lineHeight: "35px", color: "#323232",
                            fontWeight: "normal",
                            wordSpacing: "1px"
                        }}>
                            <Box textAlign="justify" m={1}>
                                The information contained in this
                                 website is for general information purposes only.
                                 The information is provided by EduMetrix.io and
                                  while we endeavour to keep the information up
                                   to date and correct, we make no representations
                                   or warranties of any kind, express or implied,
                                   about the completeness, accuracy, reliability,
                                    suitability or availability with respect to the
                                     website or the information, products, services,
                                      or related graphics contained on the website for any purpose.
                                       Any reliance you place on such information is
                                       therefore strictly at your own risk.
   </Box>
                        </Typography>

                    </div>
                    <div id="content">

                        <Typography style={{
                            lineHeight: "35px", color: "#323232",
                            fontWeight: "normal",
                            wordSpacing: "1px"
                        }}>
                            <Box textAlign="justify" m={1}>
                                In no event will we be liable
                                for any loss or damage including
                                without limitation, indirect or consequential
                                 loss or damage, or any loss or damage
                                 whatsoever arising from loss of data or
                                  profits arise out of, or in connection with,
                                   the use of this website.
   </Box>
                        </Typography>

                    </div>
                    <div id="content">

                        <Typography style={{
                            lineHeight: "35px", color: "#323232",
                            fontWeight: "normal",
                            wordSpacing: "1px"
                        }}>
                            <Box textAlign="justify" m={1}>
                                Through this website you are able to
                                 link to other websites which are not
                                  under the control of EduMetrix.io.
                                  We have no control over the nature,
                                   content and availability of those sites.
                                    The inclusion of any links does not necessarily
                                     imply a recommendation or endorse the views expressed within them.
   </Box>
                        </Typography>

                    </div>
                    <div id="content">

                        <Typography style={{
                            lineHeight: "35px", color: "#323232",
                            fontWeight: "normal",
                            wordSpacing: "1px"
                        }}>
                            <Box textAlign="justify" m={1}>
                                Every effort is made to keep the website up and running smoothly.
                                 However, EduMetrix.io takes no responsibility for, and will not be liable for,
                                  the website being
                                temporarily unavailable due to technical issues beyond our control.
   </Box>
                        </Typography>

                    </div>
                    <div id="company-address-part">
                        <Typography style={{
                            lineHeight: "35px", color: "#323232",
                            fontWeight: "normal",
                            wordSpacing: "1px"
                        }}>
                            <Box textAlign="justify" m={1}>
                                EduMetrix.io is located at –
   </Box>
                        </Typography>

                    </div>
                    <div id="Address">
                        <Typography style={{
                            lineHeight: "35px", color: "#323232",
                            fontWeight: "normal",
                            wordSpacing: "1px"
                        }}>
                            <Box textAlign="justify" m={1}>
                                Address: 63,4th cross,Vysya Bank Coloney, Arekere, Bangalore, 560068
   </Box>
                        </Typography>

                    </div>
                    <div id="email-div">
                        <Typography style={{
                            lineHeight: "35px", color: "#323232",
                            fontWeight: "normal",
                            wordSpacing: "1px"
                        }}>
                            <Box textAlign="justify" m={1}>
                                Email:<a href="mailto:support@edumetrix.io">support@edumetrix.io</a>
                         </Box>
                        </Typography>

                    </div>
                    <div id="email-div">
                        <Typography style={{
                            lineHeight: "35px", color: "#323232",
                            fontWeight: "normal",
                            wordSpacing: "1px"
                        }}>
                            <Box textAlign="justify" m={1}>
                                website:<a href="http://edumetrix.io/site/login">www.eduemtrix.io</a>
                         </Box>
                        </Typography>

                    </div>

                </div>
            </div>
        )
    }
}

export default Desclaimer