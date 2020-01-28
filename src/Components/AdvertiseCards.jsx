import React,{Component} from 'react'
import '../CssFiles/ChatBot.css'

class AdvertiseCards extends Component{

    render(){
        return(
            <div className = "linked-post-container">
               <div id = "link-post">
            <div>
                <img src={require('../Assets/kapilnew.jpg')} id = "link-post-img"/>
            </div>
            
            <div id= "post-content">
                <div>Vote for your favourite clare
                    Machentosh story & win exciting prizes on every weeks
                </div>
            </div>
               </div>
               <hr/>
            </div>
        )
    }
}
export default AdvertiseCards