import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ReactPlayer from 'react-player'
import TeamUsers from './TeamUsers'

import '../CssFiles/Login.css'

const TeamMembers = [
    {
        name:"Muhammed Shafan",
        post:"FOUNDER & CEO"
    },
    {
        name:"Fiyas Ahammed",
        post:"DIRECTOR & COO"
    },
    {
        name:"Archana K R",
        post:"DIRECTOR & CFO"
    },
    {
        name:"Mubarak Ummer",
        post:"DIRECTOR"
    },
    {
        name:"Suchismita Priyadarshinee",
        post:"DIRECTOR"
    }
]
class AboutUs extends Component {




    render() {
        return (
            <div className="container">

                <div className="sub-container">
                    <div id="aboutus">

                        <div id="heading">
                            About Us
                      </div>

                        <div id="content">

                            <Typography style={{
                                lineHeight: "35px", color: "#323232",
                                fontWeight: "normal",
                                wordSpacing: "1px"
                            }}>
                                <Box textAlign="justify" m={1}>
                                    Founded in November 2017, EduMetrix is a
                                    revolutionary decentralized educational platform
                                    powered by the blockchain technology. Taking a detour
                                    from the rote method of imparting information and
                                    knowledge, EduMetrix aims to build the bridge between
                                    all the stakeholders in the global education ecosystem.
                                     Closing the knowledge gaps by improving accessibility
                                      to learning tools and resources in a secure environment
                                       offers EduMetrix its distinctive identity when it comes
                                        to education in the digital.
                    </Box>
                            </Typography>

                        </div>

                        <div id="video-part" >
                            <ReactPlayer
                                width="99%"
                                url="https://www.youtube.com/watch?v=Ka1N5WY4QGI"
                                controls={true} />
                        </div>


                        <div>
                            <div id="mission-heading">
                                Mission
                          </div>
                            <div id="content">

                                <Typography style={{
                                    lineHeight: "35px", color: "#323232",
                                    fontWeight: "normal",
                                    wordSpacing: "1px"
                                }}>
                                    <Box textAlign="justify" m={1}>
                                        To offer a decentralized digital platform for
                                         closing knowledge & learning gaps, connect with
                                          experts and incubate promising ideas.
</Box>
                                </Typography>

                            </div>
                        </div>
                        <div>
                            <div id="mission-heading">
                                Vision
                          </div>
                            <div id="content">

                                <Typography style={{
                                    lineHeight: "35px", color: "#323232",
                                    fontWeight: "normal",
                                    wordSpacing: "1px"
                                }}>
                                    <Box textAlign="justify" m={1}>
                                        To create a learning and knowledge
                                        exchange ecosystem that nurtures every
                                        learning journey and provides scope for
                                         entrepreneurship at global level.
</Box>
                                </Typography>

                            </div>
                        </div>
                        <div>
                            <div id="mission-heading">
                                The EduMetrix Network
                          </div>
                            <div id="content">

                                <Typography style={{
                                    lineHeight: "35px", color: "#323232",
                                    fontWeight: "normal",
                                    wordSpacing: "1px"
                                }}>
                                    <Box textAlign="justify" m={1}>
                                        There are five critical stakeholders
                                        in the entire EduMetrix network and they are:
                                    </Box>
                                </Typography>

                            </div>


                        </div>
                        <div>

                            <div id="content">

                                <Typography style={{
                                    lineHeight: "35px", color: "#323232",
                                    fontWeight: "normal",
                                    wordSpacing: "1px"
                                }}>
                                    <Box textAlign="justify" m={1}>
                                        <b>Students -</b>The ‘Student’ group right from KG
                                          to university hold a pivotal space in
                                          the entire network as this entire platform revolves
                                           around knowledge transfer and education. The students
                                           leverage this platform to connect with the best subject
                                            matter experts globally and close their information gaps.
                                            Here the students get an opportunity to showcase their skills
                                             through pilot projects that get funded at the platform level
                                    </Box>
                                </Typography>

                            </div>


                        </div>
                        <div>

                            <div id="content">

                                <Typography style={{
                                    lineHeight: "35px", color: "#323232",
                                    fontWeight: "normal",
                                    wordSpacing: "1px"
                                }}>
                                    <Box textAlign="justify" m={1}>
                                        <b>Subject Matter Experts -</b> The SMEs or the ‘Subject
                                         Matter Experts’ play a key role in closing the knowledge
                                          and information gaps through learning aids such as Live
                                           Chat, Live Video Tutoring, Social Media Platform, Online
                                            Library, Lecture Broadcasts, and Online Games.
                                             The experts who are a part of this niche web
                                             of knowledge transfer come with rich industry
                                              experience.
                                   </Box>
                                </Typography>

                            </div>


                        </div>
                        <div>

                            <div id="content">

                                <Typography style={{
                                    lineHeight: "35px", color: "#323232",
                                    fontWeight: "normal",
                                    wordSpacing: "1px"
                                }}>
                                    <Box textAlign="justify" m={1}>
                                        <b>Educational Institutions -</b> The
                                         third and important stakeholder is
                                         ‘Educational Institution’. The role
                                          of educational institutions is to
                                           help children onboard a platform
                                            that helps them access world class
                                           information.
                                   </Box>
                                </Typography>

                            </div>


                        </div>
                        <div>

                            <div id="content">

                                <Typography style={{
                                    lineHeight: "35px", color: "#323232",
                                    fontWeight: "normal",
                                    wordSpacing: "1px"
                                }}>
                                    <Box textAlign="justify" m={1}>
                                        <b>Enterprises - </b>The
                                        fourth important stakeholder
                                         is the enterprise or the
                                          companies who access the
                                           resource pool generated
                                            at the platform level.
                                   </Box>
                                </Typography>

                            </div>


                        </div>
                        <div>

                            <div id="content">

                                <Typography style={{
                                    lineHeight: "35px", color: "#323232",
                                    fontWeight: "normal",
                                    wordSpacing: "1px"
                                }}>
                                    <Box textAlign="justify" m={1}>
                                        <b>Parent - </b>The fifth stake
                                        holder is the ‘Parent’. The
                                         parents have an important
                                         role in activating a feedback
                                          mechanism in the system.
                                          They can log into the parent
                                           dashboard and have a clear
                                            understanding of their
                                             child’s academic progress
                                              through well-defined metrics
                                               developed by EduMetrix.
                                   </Box>
                                </Typography>

                            </div>


                        </div>
                        <div>

                            <div id="content">

                                <Typography style={{
                                    lineHeight: "35px", color: "#323232",
                                    fontWeight: "normal",
                                    wordSpacing: "1px"
                                }}>
                                    <Box textAlign="justify" m={1}>
                                        Very importantly,
                                        apart from all the stakeholders,
                                      there is an entity that brings
                                      in a convergence of all the action
                                       happening within the educational network.
                                        This is ‘Projects’. Projects are legal
                                         and well-defined entities that showcase
                                          the level of innovation of ‘Students’.
                                           These projects are developed with constant
                                                mentoring from the ‘Subject matter Experts’.
                                                 The projects listed and incubated at the
                                                  platform level grabs the attention of
                                                   the ‘Enterprises’. So the best ideas
                                                    get the funding and the support at a
                                                     greater level for further shaping as new
                                                      technology or a working principle.
                                   </Box>
                                </Typography>

                            </div>


                        </div>

                    </div>
                    <div className="active-users-div">
                        <div className="active-user-content">
                            <div id="active-heading">
                                Active Users
                          </div>

                            <div id="no-users-div">
                                <div id="user1">
                                    0
                             </div >
                                <div id="user1">
                                    0
                             </div >
                                <div id="user1">
                                    0
                             </div>
                                <div id="user1">
                                    0
                             </div>
                             <div id="user1">
                                    0
                             </div>
                             <div id="user1">
                                    0
                             </div>

                            </div>
                            <div id="team-heading">
                                Team
                            </div>
                            <div className = "members-list-div">
                                
                                <div id = "users-div"> 
                                {
                                   TeamMembers.map((item,key)=>
                                       <TeamUsers TeamMembers = {item}/>
                                   )
                                }
                                {/*  */}
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default AboutUs