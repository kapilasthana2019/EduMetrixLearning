import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import { createMuiTheme, MuiThemeProvider, Popper } from '@material-ui/core';

class ImageCards extends Component {


    constructor(props) {
        super(props)

        this.state = {
            // imagePath: '../Assets/' + this.props.imagename
            imagePath:`../Assets/${this.props.imagename}`
        }
    }

    style = ()=>{

        const useStyle = createMuiTheme(({
            overrides:{
                MuiPaper: {
                    elevation1: {
                        boxShadow: "-1px 0px 20px -1px rgba(0,0,0,0.2), 5px 5px 10px 0px rgba(0,0,0,0.14), 5px 7px 3px 0px rgba(0,0,0,0.12)"

                    }
                }
            }
        }))
        return useStyle
    }
    render() {
       const path = this.state.imagePath
        
        return (
            <div style={{ marginLeft: "20px" }}>
                <MuiThemeProvider theme = {this.style()}>
                <Card style={{marginTop:"15px"}}>
                    <div>
                        <img src={require(`../Assets/${this.props.imagename}`)}  />

                    </div>
                   
                </Card>
                </MuiThemeProvider>

            </div>
        )
    }
}

export default ImageCards