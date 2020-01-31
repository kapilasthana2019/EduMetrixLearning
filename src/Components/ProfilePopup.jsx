import React, { Component } from 'react'
import { Dialog, InputBase } from '@material-ui/core'
import '../CssFiles/MyProfile.css'

class ProfilePopup extends Component {


    constructor(props) {
        super(props)
        this.state = {
            open: this.props.open,
            Description: this.props.data.description,
            father: this.props.data.fatherName,
            mother: this.props.data.motherName,
            university: this.props.data.University,
            collage: this.props.data.collage,
            courseName: this.props.data.courseName,
            Specialization: this.props.data.Specialization,
            courseYear: this.props.data.courseYear,
            ambition: this.props.data.ambition,
            data: this.props.data
        }
    }

    dialogtoggle = (event) => {
        this.props.dialogtoggle()
    }

    input = (event) => {

    }
    render() {

        console.log("data", this.props);

        return (
            <div>
                <Dialog open={this.state.open} onClose={event => this.dialogtoggle(event)}>
                    <div className="profile-popup">
                        <div id="update-title">
                            <div>
                                Update your Profile
                        </div>
                            <div>
                                <button
                                    onClick={this.dialogtoggle}
                                    className="btn btn-default">
                                    X
                            </button>
                            </div>
                        </div>
                        <div className="profile-table">

                            <table id="table" className="table table-striped table-bordered detail-view">
                                <tr>
                                    <th>Description</th>
                                    <td>
                                        <InputBase
                                            defaultValue={this.state.Description}
                                            onFocus={true}
                                            onChange={event => this.input(event)}

                                            multiline
                                            fullWidth
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <th>Family</th>
                                    <td>
                                        <table id="table" className="table table-striped table-bordered detail-view">
                                            <tr>
                                                <th>Father Name</th>
                                                <td>
                                                    <InputBase
                                                        defaultValue={this.state.father}
                                                        onChange={event => this.input(event)}
                                                        multiline
                                                        fullWidth

                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Mother Name</th>
                                                <td>
                                                    <InputBase
                                                        defaultValue={this.state.mother}
                                                        onChange={event => this.input(event)}
                                                        multiline
                                                        fullWidth
                                                    />
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                                <tr>
                                    <th>Educational Details</th>
                                    <td>
                                        <table id="table" className="table table-striped table-bordered detail-view">
                                            <tr>
                                                <th>University</th>
                                                <td>
                                                    <InputBase
                                                        defaultValue={this.state.university}
                                                        onChange={event => this.input(event)}
                                                        multiline
                                                        fullWidth
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Collage Name</th>
                                                <td>
                                                    <InputBase
                                                        defaultValue={this.state.collage}
                                                        onChange={event => this.input(event)}
                                                        multiline
                                                        fullWidth
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Course Name</th>
                                                <td>
                                                    <InputBase
                                                        defaultValue={this.state.courseName}
                                                        onChange={event => this.input(event)}
                                                        multiline
                                                        fullWidth
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Specialization</th>
                                                <td>
                                                    <InputBase
                                                        defaultValue={this.state.Specialization}
                                                        onChange={event => this.input(event)}
                                                        multiline
                                                        fullWidth
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Course Year</th>
                                                <td>
                                                    <InputBase
                                                        defaultValue={this.state.courseYear}
                                                        onChange={event => this.input(event)}
                                                        multiline
                                                        fullWidth
                                                    />
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="update-close-div">
                            <div id = "update-close-btns">
                            <div>
                                <button
                                 className = "btn btn-primary">Update</button>
                            </div>
                            <button
                              onClick={this.dialogtoggle}
                            className = "btn btn-danger">Close</button>
                            </div>
            </div>
                    </div>
                </Dialog>
            </div>
        )
    }

}

export default ProfilePopup