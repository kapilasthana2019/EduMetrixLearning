import React, { Component } from 'react'
import { Dialog } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { Document, Page, Text, View, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';

let userData = ""

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
        display: "flexDirection"
    },
    headerView: {
        // backgroundColor: "red",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    profileView: {
        // backgroundColor: "green",
        width: "30%",
        display: "flex",
        flexDirection: "row",
    },
    userName: {
        fontSize: 15,
        fontWeight: "bold",
        letterSpacing: 1
    },
    state: {
        fontSize: 11,
        color: "gray",
        letterSpacing: 1,
        marginTop: 2
    },
    dob: {
        fontSize: 11,
        color: "gray",
        letterSpacing: 1,
        marginTop: 2
    },
    companyLogoview: {
        // backgroundColor: "yellow",
        width: "40%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: 40,

    },
    id: {
        fontSize: 13,
    },
    score: {
        fontSize: 10,
        marginRight: 10
    },
    image: {
        height: 150,
        width: 150
    },
    coinImage: {
        height: 70,
        width: 70
    },
    email: {
        fontSize: 13,
        color: "blue",

    },
    phone: {
        fontSize: 13,
        marginTop: 10
    },
    description: {
        fontSize: 16,

    },
    describe: {
        margin: 12,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Times-Roman'
    },
    family:{
        margin:12,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Times-Roman'
    },
    fatherName:{
        marginTop:5
    },
    education:{
        marginTop:5,
        marginLeft:50 
    },
    collage:{
        marginTop:5,
        marginLeft:30  
    },
    course:{
        marginTop:5,
        marginLeft:33 
    },
    special:{
        marginTop:5,
        marginLeft:31 
    },
    courseyear:{
        marginTop:5,
        marginLeft:42 
    }

});

function setdata(data) {
    userData = data

}

const MyDocument = () => (

    <Document>

        <Page style={styles.body} size="A4">

            <View style={styles.section}>

                <View style={styles.headerView}>

                    <View style={styles.profileView}>
                        <View>
                            <Image style={styles.image} src={require('../Assets/kapil.jpg')} />
                        </View>

                        <View style={{ marginLeft: "10px", bottom: "5px" }}>
                            <View style={{ bottom: "-100px" }}>
                                <Text style={styles.userName}>Mohammad shafan(admin)</Text>
                                <Text style={styles.state}>Karnataka,India</Text>
                                <Text style={styles.dob}>03 june 1991</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.companyLogoview}>
                        <View style={{ marginLeft: "10px" }}>
                            <View style={{ marginTop: "10px", marginLeft: "30px" }}>
                                <Text style={styles.id}>EduMetrix ID: AA00AA00</Text>
                                <Text style={styles.score}>Edumetrix profile score: 100%</Text>

                            </View>
                            <View style={{ marginTop: "70px" }}>
                                <Text style={styles.email}>kapilasthana2008@gmail.com</Text>
                                <Text style={styles.phone}>Contact:- +91-6388064276</Text>

                            </View>
                        </View>
                        <View style={{ position: "relative" }}>
                            <Image style={styles.coinImage} src={require('../Assets/coin.png')} />
                        </View>
                    </View>

                </View>

                <View style={{ backgroundColor: "black", height: "1px", marginTop: "10px" }}>
                </View>

                <View style={{ marginTop: "10px" }}>
                    <Text style={styles.description}>{'\u2022'} How Do You Describe Yourself:</Text>
                    <Text style={styles.describe}>{userData.description}</Text>
                </View>
                <View style={{ marginTop: "10px" }}>
                    {

                    }
                    <Text style={styles.description}>{'\u2022'} Family:</Text>
                    <View style={styles.family}>
                        <Text>{`Father Name:  ${userData.fatherName}`}</Text>
                        <Text style={styles.fatherName}>{`Mother Name:  ${userData.motherName}`}</Text>
                    </View>
                    <Text style={styles.description}>{'\u2022'} Hobbies:</Text>
                    <View style={styles.family}>
                        {
                            userData.hobbies.map((item,key)=>(
                                <Text style={styles.fatherName}>{item}</Text>
                            ))
                        }
                       
                    </View>

                    <Text style={styles.description}>{'\u2022'} Skills:</Text>
                    <View style={styles.family}>
                        {
                            userData.skills.map((item,key)=>(
                                <Text style={styles.fatherName}>{item}</Text>
                            ))
                        }
                       
                    </View>
                    <Text style={styles.description}>{'\u2022'} Educational Details:</Text>
                    <View style={styles.family}>
                       
                        <View style={{ display:"flex",flexDirection:"row"}}>
                        <Text style={styles.fatherName}>{`University`}</Text>
                        <Text style={styles.education}>{` :  ${userData.University}`}</Text>
                        </View>
                   
                        <View style={{ display:"flex",flexDirection:"row"}}>
                        <Text style={styles.fatherName}>{`Collage Name`}</Text>
                        <Text style={styles.collage}>{` :  ${userData.collage}`}</Text>
                        </View>
                        <View style={{ display:"flex",flexDirection:"row"}}>
                        <Text style={styles.fatherName}>{`Course Name`}</Text>
                        <Text style={styles.course}>{` :  ${userData.courseName}`}</Text>
                        </View>
                        <View style={{ display:"flex",flexDirection:"row"}}>
                        <Text style={styles.fatherName}>{`Specialization`}</Text>
                        <Text style={styles.special}>{` :  ${userData.specialization}`}</Text>
                        </View>
                        <View style={{ display:"flex",flexDirection:"row"}}>
                        <Text style={styles.fatherName}>{`Course Year`}</Text>
                        <Text style={styles.courseyear}>{` :  ${userData.courseYear}`}</Text>
                        </View>
                    </View>
                    <Text style={styles.description}>{'\u2022'} Life Ambition:</Text>

                    <View style={styles.family}>
                        <Text style={styles.fatherName}>{userData.ambition}</Text>
                    </View>

                </View>
            </View>

        </Page>

    </Document>
);


class PdfPopup extends Component {

    constructor(props) {
        super(props)

        this.state = {
            open: this.props.open,
            data: this.props.data
        }
    }

    togglepop = (event) => {
        this.props.togglePopup()
    }

    render() {

        setdata(this.state.data)

        return (
            <div>
                <Dialog fullScreen open={this.state.open} onClose={this.togglepop}>
                    <AppBar style={{ backgroundColor: "transparent", border: "none", boxShadow: "none", width: "20%", position: "absolute", left: "0px" }}>
                        <Toolbar style={{ backgroundColor: "transparent" }}>
                            <IconButton edge="start" onClick={this.togglepop} color="inherit" aria-label="close">
                                <CloseIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <PDFViewer style={{ height: "5000px" }} >
                        <MyDocument data={this.state.data} />
                    </PDFViewer>
                </Dialog>
            </div>
        )
    }
}

export default PdfPopup