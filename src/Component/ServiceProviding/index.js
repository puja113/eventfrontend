import React, { Component } from 'react';
import '../../Assets/Styles/_about.scss'; 
import '../Home/home.css'
import '../../Assets/Styles/_header.scss'

import DropdownHandeler from '../DropdownHandeler';
import Marquee from "react-marquee-slider";
import times from "lodash/times";
import { Navigate } from "react-router-dom";

import 'animate.css';
import { IoArrowBackCircleOutline } from "react-icons/io5";

import Headers from '../shared/Header';
class ServiceProviding extends Component {
    
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
        //     // Add more options as needed
        // ];
        return (
            <div className='aboutmain_container'>
                <div className='hero_section'>
                    
                    
                       <Headers/>
                   
                    
                    {/* <div className='service_back_button'>
                            <span className='button' onClick={() => {this.handelBackButton()}}><IoArrowBackCircleOutline /></span>
                    </div> */}
                    <div className='home_desc_wrap'>
                        
                      
                        <p className='animate__animated animate__pulse'>We Are The Event Management Specialist Here Are Some Services We Provide
                        </p>
                        <h1 className='animate__animated animate__pulse'>We Personalize Your Wedding Events</h1>
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
                            <h4>Wedding Events</h4>
                            <p>Sit amet consectetur elit sed lusm tempor incidant temdore ut labore dolore lorem ipsum dolor sit amet consectetur adipisicing elit sed do elusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                        <div className='feature_img col-md-7'>
                            <img src={images['wedding.jpg']} alt='no-img' />
                        </div>
                    </div>
                </div>
                <div className='feature_section1 type'>
                    {/* <div className='feature_heading'>
                        <h3>FEATURES 2</h3>
                    </div> */}
                    <div className='feature_wrap row'>
                        <div className='feature_content col-md-5'>
                            <h4>Birthday Parties</h4>
                            <p>Sit amet consectetur elit sed lusm tempor incidant temdore ut labore dolore lorem ipsum dolor sit amet consectetur adipisicing elit 
                                sed do elusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                        <div className='feature_img col-md-7'>
                            <img src={images['birthday.jpg']} alt='no-img' />
                        </div>
                    </div>
                </div>
                <div className='feature_section1'>
                    {/* <div className='feature_heading'>
                        <h3>FEATURES 3</h3>
                    </div> */}
                    <div className='feature_wrap row'>
                        <div className='feature_content col-md-5'>
                            <h4>Corporate Seminars</h4>
                            <p>Sit amet consectetur elit sed lusm tempor incidant temdore ut labore 
                                dolore lorem ipsum dolor sit amet consectetur adipisicing elit sed do elusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                        <div className='feature_img col-md-7'>
                            <img src={images['corporate.jpg']} alt='no-img' />
                        </div>
                    </div>
                </div>

                <div className='feature_section1 type'>
                    {/* <div className='feature_heading'>
                        <h3>FEATURES 2</h3>
                    </div> */}
                    <div className='feature_wrap row'>
                        <div className='feature_content col-md-5'>
                            <h4>Music Concert</h4>
                            <p>Sit amet consectetur elit sed lusm tempor incidant temdore ut labore dolore lorem ipsum dolor sit amet consectetur adipisicing elit 
                                sed do elusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                        <div className='feature_img col-md-7'>
                            <img src={images['concert.jpg']} alt='no-img' />
                        </div>
                    </div>
                </div>

                <div className='feature_section1'>
                    {/* <div className='feature_heading'>
                        <h3>FEATURES 3</h3>
                    </div> */}
                    <div className='feature_wrap row'>
                        <div className='feature_content col-md-5'>
                            <h4>Anniversary Parties</h4>
                            <p>Sit amet consectetur elit sed lusm tempor incidant temdore ut labore 
                                dolore lorem ipsum dolor sit amet consectetur adipisicing elit sed do elusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                        <div className='feature_img col-md-7'>
                            <img src={images['anniversary.jpg']} alt='no-img' />
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

export default ServiceProviding;