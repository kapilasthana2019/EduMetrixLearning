import React from 'react'
import {  BrowserRouter, Route} from 'react-router-dom'
import Login from './Components/Login'
import signup from './Components/SignUp'
import Site from './Components/Site'
import AboutUs from './Components/AboutUs'
import GetStarted from './Components/GetStarted'
import HomePage from './Components/HomePage'
import Home from './Components/Home'
import LiveChat from './Components/LiveChat'
import TopPics from './Components/TopPics'
import FindFrieds from './Components/FindFrieds'
import Earning from './Components/Earning'
import ChatBotPage from './Components/ChatBotPage'
import MyProfile from './Components/MyProfile'
import Desclaimer from './Components/Desclaimer'
import Policy from './Components/TermsPolicy'
import TermsServices from './Components/TermsService'
import Contact from './Components/Contact'
const Routes = () => (

    <BrowserRouter>

        <div>
            <switch>
            <Route path="/" component={Login} exact={true}/>
            <Route path = "/signup" component= {signup} exact = {true}/>
            <Route path = "/GetStarted" component = {GetStarted} exact = {true}/>
            <Route path = "/HomePage" component = {HomePage}/>
            <Route path = "/HomePage/home" component = {Home} exact = {true}/>
            <Route path = "/HomePage/LiveChat" component = {LiveChat} exact = {true}/>
            <Route path = "/HomePage/TopPics" component = {TopPics} exact = {true}/>
            <Route path = "/HomePage/FindFrieds" component = {FindFrieds} exact ={true}/>
            <Route path = "/HomePage/Earning" component = {Earning} exact = {true}/>
            <Route path = "/HomePage/ChatBotPage" component = {ChatBotPage} exact = {true}/>  
            <Route path = "/HomePage/MyProfile" component = {MyProfile} exact ={true}/>
             <Route path = "/Site" component = {Site} />
             <Route path="/Site/AboutUs" component={AboutUs} exact = {true}/>
             <Route path="/Site/Desclaimer" component={Desclaimer} exact = {true}/>
             <Route path="/Site/policy" component={Policy} exact = {true}/>
             <Route path="/Site/TermsServices" component={TermsServices} exact = {true}/>
             <Route path="/Site/contact" component={Contact} exact = {true}/>
            
            </switch>

        </div>
    </BrowserRouter>


)

export default Routes