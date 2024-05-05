import React, { Component } from 'react';

import '../../Assets/Styles/_main.scss';
import '../Home/home.css'
import DropdownHandeler from '../DropdownHandeler';
import Marquee from "react-marquee-slider";
import times from "lodash/times";
import { Navigate, useNavigate } from "react-router-dom";
import 'animate.css';
import Headers from '../shared/Header';


class Home extends Component {


    constructor(props) {

        super(props)

        this.state = {
            events: [],
            redirection: false,
            myNavigations: [{ name: "Home", path: "/" }, { name: "Service", path: "/service" }, { name: "About", path: "/about" }],
            activePath: "Home"
        };
    }

    componentDidMount() {

    }
     redirectUpcomingEvents = async () => {

        await this.setState({
            redirection: true
        })

        if (this.state.redirection) {


            fetch('https://web-five-dusky.vercel.app/getAllEvent')
              .then(response => response.json())
              .then(data => this.setState({events:data}))
             .catch(error => console.error('Error fetching events:', error));


            window.location.href = '/events'
        }


    }
    handelPath = (element) => {
        this.setState({
            activePath: element.name
        });
        window.location.href = element.path
    }

    redirectLogin = async () => {
        console.log("Clicked on login")
        await this.setState({
            redirection: true
        })
        if (this.state.redirection) {
            window.location.href = '/login'
        }}

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
    
    

    redirectSignup = async () => {
        console.log("Clicked on login")
        await this.setState({
            redirection: true
        })
        if (this.state.redirection) {
            window.location.href = '/signup'
        }

    }
    // redirectToDropDown = async (e) => {

    //     window.location.href = '/' + e.target.value.toLowerCase()
    //     console.log("e.target.value" ,e.target.value)

    // }
    ImportAllImages(r) {
        let images = {};
        r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
        return images;
    }



    render() {
        const images = this.ImportAllImages(require.context('../../Assets/Images/', false, /\.(png|jpe?g|svg)$/));
        const { events, redirection } = this.state
        // const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';



        return (
            <div className='main_container'>
                <div className='section_hero'>
                   <Headers/>
                    <div className='home_desc_wrap'>
                        <p className='animate__animated animate__pulse'>Top 1% events happen here</p>
                        <h1 className='animate__animated animate__pulse'>Your events, spotlighted</h1>
                        {/* <button onClick={() => this.redirectLogin()}>Login</button> */}
                        {/* {localStorage.getItem("token") !== ""  && ( */}
                            <button onClick={this.redirectUpcomingEvents}>Upcoming Events</button>
                        {/* ) } */}



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
                            <h4>Spotlight all events you've brought to life in one dynamic space</h4>
                            <p>Showcase and inspire others with your event portfolio while building
                                credibility through testimonials and ratings</p>
                        </div>
                        <div className='feature_img col-md-7'>
                            <img src={images['feature1.png']} alt='no-img' />
                        </div>
                    </div>
                </div>
                <div className='feature_section1 type'>
                    {/* <div className='feature_heading'>
                        <h3>FEATURES 2</h3>
                    </div> */}
                    <div className='feature_wrap row'>
                        <div className='feature_content col-md-5'>
                            <h4>Ditch boring invites with personalized event pages</h4>
                            <p>Create visually captivating event pages to ignite FOMO from day one. Share event details,
                                images, videos, and hashtags for guests to revisit anytime. The simplest way to ensure
                                everyone's on the same page!</p>
                        </div>
                        <div className='feature_img col-md-7'>
                            <img src={images['feature3.png']} alt='no-img' />
                        </div>
                    </div>
                </div>
                <div className='feature_section1'>
                    {/* <div className='feature_heading'>
                        <h3>FEATURES 3</h3>
                    </div> */}
                    <div className='feature_wrap row'>
                        <div className='feature_content col-md-5'>
                            <h4>Snap, tag, and cherish your memories</h4>
                            <p>Your go-to destination for storing and sharing cherished moments. Upload event photos and videos, tag them with hashtags, and create a personalized archive for easy retrieval and long-term storage</p>
                        </div>
                        <div className='feature_img col-md-7'>
                            <img src={images['feature2.png']} alt='no-img' />
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
                            <h6><a href='/service'>Contact Us</a></h6>
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

export default Home;