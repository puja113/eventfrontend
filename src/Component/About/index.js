import React, { Component } from 'react';
import '../../Assets/Styles/_main.scss'; 
// import '../Home/home.css'
import Marquee from "react-marquee-slider";
import times from "lodash/times";
import DropdownHandeler from '../DropdownHandeler';
import { Navigate } from "react-router-dom";
import 'animate.css';

import { IoArrowBackCircleOutline } from "react-icons/io5";
import Headers from '../shared/Header';
import '../../Assets/Styles/_header.scss'

class About extends Component {
    
    constructor(props) {

        super(props)
        this.state = {
            redirection: false,

        };
    }

    componentDidMount() {

    }

   
    redirectGetDemo = async () => {
        console.log("Clicked on get started")
        await this.setState({
            redirection: true
        })
        if (this.state.redirection) {
            console.log("inside iff")
            window.location.href = '/getDemo'
        }
    }

    redirectUpcomingEvents = async () => {

        await this.setState({
            redirection: true
        })

        if(this.state.redirection){
            window.location.href = '/events'
        }
    }

    redirectLogin = async () => {
        console.log("Clicked on login")
        await this.setState({
            redirection: true
        })
        if (this.state.redirection) {
            window.location.href = '/login'
        }
        // redirection && <Navigate from='/' to='/login' />
    }

    handelBackButton = async () => {
        await this.setState({
            redirection:true
        })

        if(this.state.redirection){
            window.location.href = '/'
        }
    }


    ImportAllImages(r) {
        let images = {};
        r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    render() {
        const images = this.ImportAllImages(require.context('../../Assets/Images/', false, /\.(png|jpe?g|svg)$/));
        const { redirection } = this.state
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';


        // const options = [
        //     { value: 'Service', label: 'Service' },
        //     { value: 'About', label: 'About' },
        //     { value: 'Create Event', label: 'Create Event' },
        //     // Add more options as needed
        // ];
        return (
            <div className='main_container'>
                <div className='section_hero'>
                    <Headers/>
                        <div className='home_desc_wrap'>

                       
                        <p className='animate__animated animate__pulse'>We Create Event that Lasts </p>
                        <h1 className='animate__animated animate__pulse'>We offer Full Range of Events Management Service that scale to Your Need And Budget</h1>
                        {/* <button onClick={() => this.redirectLogin()}>Login</button> */}
                       


                    </div>
                    <div className='slider_wrapper'>
                        <Marquee velocity={25} minScale={0.7}>
                            {times(10, Number).map((id) => (
                                <div className='slider_inner' key={id}>
                                    <img src={images['image' + (id + 1) + '.png']} alt='no-img' style={{ height: "100%", width: '100%' }} />
                                </div>
                            ))}
                        </Marquee>
                    </div>

                </div>
                <div className='feature_section1'>
                    {/* <div className='feature_heading'>
                        <h3>FEATURES 1</h3>
                    </div> */}
                    <div className='feature_wrap row'>
                        <div className='feature_content col-md-5'>
                            <h4>Believe In Success</h4>
                            <p>But I must Explain to you how all this mistaken idea of denouncing pleasure and prasing pain was bom and i Will give you complete account of the system and expound the. </p>
                        </div>
                        <div className='feature_img col-md-7'>
                            <img src={images['slider3.png']} alt='no-img' />
                        </div>
                    </div>
                </div>
                <div className='feature_section1 type'>
                    {/* <div className='feature_heading'>
                        <h3>FEATURES 2</h3>
                    </div> */}
                    <div className='feature_wrap row'>
                        <div className='feature_content col-md-5'>
                            <h4>Who are We?</h4>
                            <p>But i must explain to you how all this mistaken idea of denouncing pleasure and praising pain was bor.</p>
                        </div>
                        <div className='feature_img col-md-7'>
                            <img src={images['gallery11.jpg']} alt='no-img' />
                        </div>
                    </div>
                </div>
                <div className='feature_section1'>
                    {/* <div className='feature_heading'>
                        <h3>FEATURES 3</h3>
                    </div> */}
                    <div className='feature_wrap row'>
                        <div className='feature_content col-md-5'>
                            <h4>Our Vision </h4>
                            <p>Sit amet consectetur elit sed lusm tempor incidant temdore ut labore 
                                dolore lorem ipsum dolor sit amet consectetur adipisicing elit sed do elusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                        <div className='feature_img col-md-7'>
                            <img src={images['concert.jpg']} alt='no-img' />
                        </div>
                    </div>
                </div>
                <div className='bottom_stripe'>
                    <p>Ready to claim your Spotlight for Agent account?</p>
                    <button onClick={() => this.redirectGetDemo()}>Get Started</button>
                </div>
                <div className='footer_wrap'>
                    <div className='top_section'>
                        <div className='logo_sec'>
                            <h4>Spotlight</h4>
                        </div>
                        <div className='helpful_links'>
                            <h5>Helpful links</h5>
                            <h6><a href='/'>About</a></h6>
                            <h6><a href='/'>Press & Media</a></h6>
                            <h6><a href='/'>Providers</a></h6>
                            <h6><a href='/'>Contact Us</a></h6>
                        </div>
                        <div className='helpful_links'>
                            <h5>Platform</h5>
                            <h6><a href='/'>Agents</a></h6>
                            <h6><a href='/'>Consumers</a></h6>
                        </div>
                        <div className='social_links'>
                            <a href='/'>
                                <img src={images['twitter.png']} alt='no-img' />
                            </a>
                            <a href='/'>
                                <img src={images['insta.png']} alt='no-img' />
                            </a>
                        </div>
                    </div>
                    <div className='bottom_section'>
                        <p>© Copyright 2024</p>
                        <p><a href='/'>Privacy & Terms</a></p>
                    </div>
                </div>
            </div>
        )
    }

}

export default About;