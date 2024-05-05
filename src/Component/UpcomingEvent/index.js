import React, { Component } from 'react';
import '../../Assets/Styles/_main.scss';
import '../Home/home.css';
import '../../Assets/Styles/upcomingevent.scss';
import DropdownHandeler from '../DropdownHandeler';
import Marquee from 'react-marquee-slider';
import times from 'lodash/times';
import { Navigate, useNavigate } from 'react-router-dom';
import birthdayImage from '../../Assets/Images/birthday.jpg'; // Import the image directly
import weddingImage from '../../Assets/Images/aboutbg.jpg';
import anniversary from '../../Assets/Images/anniversary.jpg';
import corporate from '../../Assets/Images/corporate.jpg';
import concert from '../../Assets/Images/concert.jpg';
import Headers from '../shared/Header';
import { RiAccountPinCircleFill } from "react-icons/ri";

class UpcomingEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            redirection: false,
            birthDay: [],
            musicConcert: [],
            anniversary: [],
            wedding: [],
            corporate: [],

        }
    }

    componentDidMount() {

        this.MyEvents();
    }
    MyEvents = () => {
        fetch("https://web-five-dusky.vercel.app/getAllEvent")
            .then((response) => response.json())
            .then((jsonResponse) => {
                if (jsonResponse?.events.length > 0) {
                    // Initialize empty arrays for different event types
                    const birthdayEvents = [];
                    const weddingEvents = [];
                    const corporateEvents = [];
                    const anniversaryEvents = [];
                    const musicEvents = [];
                    // Iterate over the events array and categorize events based on eventType
                    jsonResponse.events.forEach(event => {
                        if (event.eventType[0].includes("birthday")) {
                            birthdayEvents.push(event);
                        } else if (event.eventType[0].includes("wedding")) {
                            weddingEvents.push(event);
                        }
                        else if (event.eventType[0].includes("Corporate")) {
                            corporateEvents.push(event);
                        }
                        else if (event.eventType[0].includes("anniversary")) {
                            anniversaryEvents.push(event);
                        }
                        else {
                            musicEvents.push(event);
                        }
                    });
                    this.setState({
                        birthDay: birthdayEvents,
                        wedding: weddingEvents,
                        corporate: corporateEvents,
                        anniversary: anniversaryEvents,
                        musicConcert: musicEvents
                    })
                }
                else {
                    this.setState({
                        birthDay: [],
                        wedding: [],
                        corporate: [],
                        anniversary: [],
                        musicConcert: []
                    })
                }
            })
    }

    redirectviewEvents = async (id) => {
        await this.setState({
            redirection: true
        })
        window.location.href = `/viewevents/${id}`
    }



    render() {
        const { data = [] } = this.state;
        console.log("birthDay", this.state.birthDay)

        return (
            <><Headers />
                { this.state.birthDay.length>0 &&<div className="row">
                <h3 className='mx-5 my_event_heading'>Birthday Events</h3>
                    <div className="My_container">
                     
                        {this.state.birthDay.map((ele, ind) => (
                            <section key={ele._id}>
                                <div className="card">
                                    <div className="gust_count" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                        {ele.guest}
                                        <RiAccountPinCircleFill style={{ height: "25px", width: "25px", marginLeft: "5px" }} />
                                    </div>
                                    <div className="content">
                                        <div className="imgBx">
                                            <img src={birthdayImage} alt="Birthday" /> {/* Use imported image */}
                                        </div>
                                        <div className="contentBx">
                                            <h3>
                                                {ele.eventName}
                                                <br />
                                                <h6>{ele.eventType}</h6>
                                            </h3>
                                        </div>
                                    </div>
                                    <ul className="sci">
                                        <li>
                                            <a href="">
                                                Date : {ele.dateTime.split("T")[0]} | {ele.dateTime.split("T")[1]}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">Phone no : {ele.phone}</a>
                                        </li>
                                        <li>
                                            <a href="">Food : {ele.food}</a>
                                        </li>
                                        <button className="handel_view" onClick={() => this.redirectviewEvents(ele._id)}>View Event</button>
                                    </ul>

                                </div>
                            </section>
                        ))}
                    </div>
                </div>}
             
             { this.state.wedding.length>0 &&
                   <div className="row">
                   <h3 className='mx-5 my_event_heading'>Wedding Events</h3>
   
                       <div className="My_container">
                           {this.state.wedding.map((ele, ind) => (
                               <section key={ele._id}>
                                   <div className="card">
                                       <div className="gust_count" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                           {ele.guest}
                                           <RiAccountPinCircleFill style={{ height: "25px", width: "25px", marginLeft: "5px" }} />
                                       </div>
                                       <div className="content">
                                           <div className="imgBx">
                                               <img src={weddingImage} alt="wedding" /> {/* Use imported image */}
                                           </div>
                                           <div className="contentBx">
                                               <h3>
                                                   {ele.eventName}
                                                   <br />
                                                   <h6>{ele.eventType}</h6>
                                               </h3>
                                           </div>
                                       </div>
                                       <ul className="sci">
                                           <li>
                                               <a href="">
                                                   Date : {ele.dateTime.split("T")[0]} | {ele.dateTime.split("T")[1]}
                                               </a>
                                           </li>
                                           <li>
                                               <a href="">Phone no : {ele.phone}</a>
                                           </li>
                                           <li>
                                               <a href="">Food : {ele.food}</a>
                                           </li>
                                           <button className="handel_view" onClick={() => this.redirectviewEvents(ele._id)}>View Event</button>
                                       </ul>
   
                                   </div>
                               </section>
                           ))}
                       </div>
                   </div>
                   
             }

                { this.state.anniversary.length>0 &&
                    <div className="row">
                    <h3 className='mx-5 my_event_heading'>Anniversary Events</h3>
                        <div className="My_container">
                            {this.state.anniversary.map((ele, ind) => (
                                <section key={ele._id}>
                                    <div className="card">
                                        <div className="gust_count" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                            {ele.guest}
                                            <RiAccountPinCircleFill style={{ height: "25px", width: "25px", marginLeft: "5px" }} />
                                        </div>
                                        <div className="content">
                                            <div className="imgBx">
                                                <img src={anniversary} alt="anniversary" /> {/* Use imported image */}
                                            </div>
                                            <div className="contentBx">
                                                <h3>
                                                    {ele.eventName}
                                                    <br />
                                                    <h6>{ele.eventType}</h6>
                                                </h3>
                                            </div>
                                        </div>
                                        <ul className="sci">
                                            <li>
                                                <a href="">
                                                    Date : {ele.dateTime.split("T")[0]} | {ele.dateTime.split("T")[1]}
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">Phone no : {ele.phone}</a>
                                            </li>
                                            <li>
                                                <a href="">Food : {ele.food}</a>
                                            </li>
                                            <button className="handel_view" onClick={() => this.redirectviewEvents(ele._id)}>View Event</button>
                                        </ul>
    
                                    </div>
                                </section>
                            ))}
                        </div>
                    </div>
                }
               
                 { this.state.musicConcert.length >0 &&
                     <div className="row">
                     <h3 className='mx-5 my_event_heading'>Music Concert </h3>
                         <div className="My_container">
                             {this.state.musicConcert.map((ele, ind) => (
                                 <section key={ele._id}>
                                     <div className="card">
                                         <div className="gust_count" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                             {ele.guest}
                                             <RiAccountPinCircleFill style={{ height: "25px", width: "25px", marginLeft: "5px" }} />
                                         </div>
                                         <div className="content">
                                             <div className="imgBx">
                                                 <img src={concert} alt="concert" /> {/* Use imported image */}
                                             </div>
                                             <div className="contentBx">
                                                 <h3>
                                                     {ele.eventName}
                                                     <br />
                                                     <h6>{ele.eventType}</h6>
                                                 </h3>
                                             </div>
                                         </div>
                                         <ul className="sci">
                                             <li>
                                                 <a href="">
                                                     Date : {ele.dateTime.split("T")[0]} | {ele.dateTime.split("T")[1]}
                                                 </a>
                                             </li>
                                             <li>
                                                 <a href="">Phone no : {ele.phone}</a>
                                             </li>
                                             <li>
                                                 <a href="">Food : {ele.food}</a>
                                             </li>
                                             <button className="handel_view" onClick={() => this.redirectviewEvents(ele._id)}>View Event</button>
                                         </ul>
     
                                     </div>
                                 </section>
                             ))}
                         </div>
                     </div>
                 }

                { this.state.corporate.length > 0 &&<div className="row">
                <h3 className='mx-5 my_event_heading'>Corporate Events</h3>
                    <div className="My_container">
                        {this.state.corporate.map((ele, ind) => (
                            <section key={ele._id}>
                                <div className="card">
                                    <div className="gust_count" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                        {ele.guest}
                                        <RiAccountPinCircleFill style={{ height: "25px", width: "25px", marginLeft: "5px" }} />
                                    </div>
                                    <div className="content">
                                        <div className="imgBx">
                                            <img src={corporate} alt="corporate" /> {/* Use imported image */}
                                        </div>
                                        <div className="contentBx">
                                            <h3>
                                                {ele.eventName}
                                                <br />
                                                <h6>{ele.eventType}</h6>
                                            </h3>
                                        </div>
                                    </div>
                                    <ul className="sci">
                                        <li>
                                            <a href="">
                                                Date : {ele.dateTime.split("T")[0]} | {ele.dateTime.split("T")[1]}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">Phone no : {ele.phone}</a>
                                        </li>
                                        <li>
                                            <a href="">Food : {ele.food}</a>
                                        </li>
                                        <button className="handel_view" onClick={() => this.redirectviewEvents(ele._id)}>View Event</button>
                                    </ul>

                                </div>
                            </section>
                        ))}
                    </div> 
                </div>}
                
            </>
        );
    }

}
export default UpcomingEvent;
