import React, { Component } from 'react'
import { Slide } from 'react-slideshow-image';
import ReactPlayer from 'react-player'


const slideImages = [
    '../Assets/kapil.jpg',

]
const properties = {
    duration: 3000,
    transitionDuration: 300,
    infinite: true,

    // onChange: (oldIndex, newIndex) => {
    //     console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    // }
}

class Slideshow extends Component {

    render() {
        return (
            <div>
                <div className="slide-container">

                    <Slide {...properties}>
                        <div className="each-slide">
                            <div >
                                <img src={require('../Assets/fox.jpg')} id="slide-img" />
                            </div>
                        </div>

                        <div className="each-slide">
                            <div >
                                <img src={require('../Assets/cat.jpg')} id="slide-img" />
                            </div>
                        </div>

                        <div className="each-slide">
                            <div >
                                <img src={require('../Assets/lion.jpg')} id="slide-img" />
                            </div>
                        </div>

                        <div className="each-slide">
                            <div >
                                <img src={require('../Assets/muzzle.jpg')} id="slide-img" />
                            </div>
                        </div>
                        <div className="each-slide">
                            <div >
                            <ReactPlayer
                                width="99%"
                                height="280px"
                                url="https://www.youtube.com/watch?v=Ka1N5WY4QGI"
                                controls={true} />
                            </div>
                        </div>

                    </Slide>
                        </div>
            </div>
                    )
                }
            }
            
export default Slideshow