import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import InputBase from '@material-ui/core/InputBase';
import '../CssFiles/HomePage.css'
import UploadMedia from './UploadMedia';

class CreatePost extends Component {

    constructor(props) {
        super(props)

        this.state = {
        
            medialBool:false
        }
    }

    mediaUpload = (event) => {

        this.setState({
            medialBool: !this.state.medialBool
        })

    }

    render() {
        return (
            <div>
                <div id="card-container">
                    <Card style={{ borderRadius: "15px" }}>

                        <div id="create-post-heading">
                            Create Post</div>
                        <div className="writing-post">
                            <div>
                                <img src={require('../Assets/coin.png')} id="coin" />
                            </div>
                            <div id="inputbase">
                                <InputBase
                                    id="input-text"
                                    placeholder="write something here..."
                                    multiline
                                    fullWidth
                                />
                            </div>
                        </div>
                        <hr />
                        <div className="upload-media-container">

                            <div id="photo-upload" onClick={event => this.mediaUpload(event)}>
                                <div>
                                    <button id="attach-btn">
                                        <img src={require('../Assets/photo-camera.png')}
                                            id="attach-pic" />
                                    </button>
                                </div>

                                <div id="upload-title">Upload Media / Documents</div>
                            </div>
                        </div>


                        <div id="post-btn">
                            <div>
                                <button id="postbutton">
                                    Post
                        </button>
                            </div>
                        </div>
                    </Card>
                </div>
            {
                (this.state.medialBool) ? <UploadMedia
                refreshBool={this.mediaUpload}
                open = {this.state.medialBool}/>:null
            }
            </div>
        )
    }

}

export default CreatePost