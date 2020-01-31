import React, { Component } from 'react'
import { Divider } from '@material-ui/core';
import ProfilePopup from './ProfilePopup'
import PdfPopup from './PdfPopup'
import '../CssFiles/MyProfile.css'

class UserBio extends Component {

    constructor(props) {
        super(props)

        this.state = {
            description: "This is a great alternative to the answer I accepted and deserves the upvotes, but I feel I should mention that I tried it and had problems with layout overflow rendering; none of the whitespace options seemed to work right in all the cases I needed a fix at the time, while the accepted answer",
            fatherName: "Kapil asthana",
            motherName: "Priyanka Gandhi",
            hobbies: ["Cricket", "Football", "travelling"],
            skills: ["PHP", "C++", "Python", "React", "Adobe Photoshop"],
            University: "Ignou",
            collage: "st. Xaviours Inter Collage",
            courseName: "Computer Science",
            Specialization: "Computer Science",
            courseYear: "2014-2018",
            ambition: "becoming master in React",
            dialogtoggle: false,
            Pdftoggle: false
        }

        this.profileObject = ""

    }


    dialogtoggle = () => {

        this.setState({
            dialogtoggle: !this.state.dialogtoggle
        })
    }

    profileDialoge = async (event) => {


        var profileObj = {
            description: this.state.description,
            fatherName: this.state.fatherName,
            motherName: this.state.motherName,
            hobbies: this.state.hobbies,
            skills: this.state.skills,
            University: this.state.University,
            collage: this.state.collage,
            courseName: this.state.courseName,
            Specialization: this.state.Specialization,
            courseYear: this.state.courseYear,
            ambition: this.state.ambition
        }
        this.profileObject = profileObj

        console.log("created obj", this.state.dialogtoggle);

        await this.dialogtoggle()


    }

    pdfState = () => {

        this.setState({
            Pdftoggle: !this.state.Pdftoggle
        })
    }

    Pdftoggle = async (event) => {

        var profileObj = {
            description: this.state.description,
            fatherName: this.state.fatherName,
            motherName: this.state.motherName,
            hobbies: this.state.hobbies,
            skills: this.state.skills,
            University: this.state.University,
            collage: this.state.collage,
            courseName: this.state.courseName,
            Specialization: this.state.Specialization,
            courseYear: this.state.courseYear,
            ambition: this.state.ambition
        }

        this.profileObject = profileObj
        await this.pdfState()
    }


    render() {
        return (
            <div>

                <div id="edu-id">
                    EduMetrix ID: {"AA00AA00"}
                </div>
                <div id="profile-score">
                    Edumetrix profile score: {"100%"}
                </div>

                <div id="followers-div">

                    <div id="followers">
                        <div>Followers</div>
                        <div id="follow-no">46.45k</div>
                    </div>

                    <div id="followers">
                        <div>Following</div>
                        <div id="follow-no">46.5k</div>
                    </div>
                </div>

                <div className="profile-img-part">
                    <div>
                        <img src={require('../Assets/kapil.jpg')}
                            id="profile-img-contain" />
                    </div>
                    <div id="profile-detail">
                        <div id="profile-name">Kapil asthana</div>
                        <div id="user-state">Karnatka, India</div>
                        <div id="usr-dob">Date of birth: {"3rd June 1991"}</div>
                    </div>
                    <div id="edit-profile-div">

                        <div>
                            <button
                                onClick={event => this.profileDialoge(event)}
                                id="edit-profile-btn">
                                <span id="pencil-img">
                                    <img src={require('../Assets/edit.png')} id="pencil" />
                                </span>
                                edit profile</button>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: "5px" }}>
                    <Divider />
                </div>

                <div id="user-describe">
                    How Do You Describe Yourself:
                </div>
                <div id="about-description">
                    {this.state.description}
                </div>
                <div id="user-describe">
                    Family:
                </div>
                <div id="about-description">
                    <div id="subtitle">
                        Father Name: {"kapil asthana"}
                    </div>
                    <div id="subtitle">
                        Mother Name: {"Priyanka Gandhi"}
                    </div>
                </div>

                <div id="user-describe">
                    Hobbies:
                </div>
                <div id="about-description">
                    {
                        this.state.hobbies.map((item, key) => (
                            <div id="subtitle">
                                {item}
                            </div>
                        ))
                    }
                </div>
                <div id="user-describe">
                    Skills:
                </div>
                <div id="about-description">
                    {
                        this.state.skills.map((item, key) => (
                            <div id="subtitle">
                                {item}
                            </div>
                        ))
                    }
                </div>
                <div id="user-describe">
                    Educational Details:
                </div>
                <div id="about-description">
                    <div id="subtitle">
                        University : {this.state.University}
                    </div>
                    <div id="subtitle">
                        Collage Name: {this.state.collage}
                    </div>
                    <div id="subtitle">
                        Course Name: {this.state.courseName}
                    </div>
                    <div id="subtitle">
                        Specialization: {this.state.Specialization}
                    </div>
                    <div id="subtitle">
                        Course Year: {this.state.courseYear}
                    </div>
                </div>
                <div id="user-describe">
                    Life Ambition:
                </div>
                <div id="about-description">
                    <div id="subtitle">
                        {this.state.ambition}
                    </div>

                </div>

                <div id="pdf-btn-div">
                    <button onClick={event => this.Pdftoggle(event)} id="pdf-btn">
                        <span id="pdf-img">
                            <img src={require('../Assets/pdf.svg')} id="pdf" />
                        </span>
                        Generate PDF
                    </button>
                </div>
                <div>
                    {
                        (this.state.dialogtoggle) ?
                            <ProfilePopup
                                dialogtoggle={this.dialogtoggle}
                                open={this.state.dialogtoggle}
                                data={this.profileObject} />
                            : null
                    }
                </div>

                <div>
                    {
                        (this.state.Pdftoggle) ?
                         <PdfPopup open ={this.state.Pdftoggle}
                         togglePopup = {this.pdfState}
                         data={this.profileObject}
                         />:null
                    }
                </div>

            </div>
        )
    }
}

export default UserBio