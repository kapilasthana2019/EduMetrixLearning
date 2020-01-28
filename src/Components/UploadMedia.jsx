import React, { Component } from 'react'
import { Dialog } from '@material-ui/core'
import '../CssFiles/HomePage.css'
class UploadMedia extends Component {

    constructor(props) {
        super(props)

        this.state = {
            open: this.props.open,
            imgUpload: ""
        }
    }

    handleClose = () => {
        this.props.refreshBool()
    }

    fileHandle = (event) => {

        var reader = new FileReader()
        let file = event.target.files
        reader.readAsDataURL(file[0])

        reader.onload = (event) => {

            this.setState({
                imgUpload: event.target.result
            })

        }




    }
    render() {
        return (
            <div>
                <Dialog open={this.state.open}

                    onClose={event => this.handleClose(event)}>

                    <div className="media-upload-container">

                        <div id="media-title">
                            <input type="file"
                                name="file"
                                onChange={event => this.fileHandle(event)} />
                        </div>
                        <hr />

                        <div style={{ display: "flex", margin: "auto 20px" }}>
                            {
                                (this.state.imgUpload !== "") ?
                                    <div>
                                        <img src={this.state.imgUpload} id="post-img" />
                                        <hr />
                                    </div>
                                    : null
                            }
                        </div>
                        <div id="post-btn">
                            <div>
                                <button id="postbutton">
                                    Post
                        </button>
                            </div>
                        </div>

                    </div>
                </Dialog>
            </div>
        )
    }
}

export default UploadMedia