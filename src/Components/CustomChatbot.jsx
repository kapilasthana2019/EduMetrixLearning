import React from "react";
import ChatBot from "react-simple-chatbot";

function CustomChatbot(props) {

    const config = {
        width: "300px",
        height: "400px",
        floating: true
      };


      const steps = [
        {
          id: "Greet",
          message: "Hello, Welcome in Edumetrix.io",
          trigger: "Ask Name"
        },
        {
          id: "Ask Name",
          message: "Please type your name?",
          trigger: "Waiting user input for name"
        },
        {
            id :"Waiting user input for name",
           user:true,
           trigger:"Asking option to eat"
        },
        {
            id:"Asking option to eat",
            message:"hi {previousValue} ,please click what you want to eat?",
            trigger:"Display option to eat"
        },{
            id:"Display option to eat",
            options:[
                {
                    value:"pizza",
                    label:"Pizza",
                    trigger:"Asking for Tomatoes in Pizza"
                },
                {
                    value:"burger",
                    label:"Burger",
                    trigger:"Burger not available"
                }
            ]
        },
        {
            id:"Burger not available",
            message:"Sorry, We don't have burger available at the moment. Would you like to try our pizza? ",
            trigger:"Asking for pizza after burger"
        },
        {
            id:"Asking for pizza after burger",
           options:[
               {
                   value:true,
                   label:"yes",
                   trigger:"Asking for Tomatoes in Pizza"
               },
               { 
                value: "false",
                label: "No",
                trigger: "Done"
              } 
           ]
        },
        {
            id:"Asking for Tomatoes in Pizza",
            message: "Would you like to have tomatoes in your pizza",
            trigger:"Adding Tomatoes in Pizza"
        },
        {
            id:"Adding Tomatoes in Pizza",
            options:[
                {
                    value:true,
                    label:"yes",
                    trigger:"Done"
                },
                {
                    value:false,
                    label:"No",
                    trigger:"Done"
                }
            ]
        },
        {
            id:"Done",
            message:"Have a great day!",
            end:true

        }
      
        
        
     ];
  return <ChatBot steps={steps}  {...config} />;
}
export default CustomChatbot;