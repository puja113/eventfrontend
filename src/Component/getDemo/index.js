import React, { Component } from 'react';
import '../../Assets/Styles/_main.scss';
import '../../Assets/Styles/_header.scss';
import { Navigate } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react'
import 'animate.css';
import '../getDemo/getdemo.css'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Headers from '../shared/Header';
const options = [
    { key: '1', text: 'Creating a brand portfolio for my event management company', value: 'Creating a brand portfolio for my event management company' },
    { key: '2', text: 'Creating a personalized event page for my client', value: 'Creating a personalized event page for my client' },
    { key: '3', text: 'Creating a personalized event page for my personal event', value: ' Creating a personalized event page for my personal event' },
    { key: '4', text: 'Uploading and sharing photos post-event', value: 'Uploading and sharing photos post-event' },
    { key: '5', text: 'I have other inquiries', value: 'I have other inquiries', name: 'services' }
]

class getDemo extends Component {
    constructor(props) {

        super(props)
        this.state = {
            formSubmit: false,
            objError: { name: { err: false, value: '' }, email: { err: false, value: '' }, phone: { err: false, value: '' }, services: { err: false, value: [] } },
            cancelBtn: false
        }
    }
    componentDidMount() {
        console.log(this.state.objError)

    }
    ImportAllImages(r) {
        let images = {};
        r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    onFormChange(e) {
        let obj = this.state.objError
        obj[e.target.name].value = e.target.value
        obj[e.target.name].err = e.target.value !== '' ? false : true
        this.setState({
            objError: obj
        })
    }
    onHandleDropdown(e, { value }) {
        console.log(value)
        let obj = this.state.objError
        if (value.length) {
            obj.services.value = value
            obj.services.err = value.length? false : true
        }else{
            obj.services.err = value.length? false : true
        }
    }

    handelBackButton = async () => {
        await this.setState({
            redirection:true
        })

        if(this.state.redirection){
            window.location.href = '/'
        }
    }
    onFormSubmit() {
        let obj = this.state.objError
        if (obj.name.value && obj.email.value && obj.phone.value && obj.services.value.length) {
            fetch('https://web-five-dusky.vercel.app/api/v1/sendMail', {
                method: 'post',
                headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
                body: JSON.stringify({
                    "name": obj.name.value,
                    "email": obj.email.value,
                    "phone": obj.phone.value,
                    "services": obj.services.value
                })
            });
            obj.name.err = false
            obj.email.err = false
            obj.phone.err = false
            obj.services.err = false
            this.setState({ formSubmit: true })
        } else if (obj.name.value === '') {
            obj.name.err = true
        } else if (obj.email.value === '') {
            obj.email.err = true
        } else if (obj.phone.value === '') {
            obj.phone.err = true
        } else if (!obj.services.value.length) {
            obj.services.err = true
        }
        this.setState({ objError: obj })
    }
    handelCancelBtn() {
        this.setState({ cancelBtn: true })
    }
    render() {
        // const images = this.ImportAllImages(require.context('../../Assets/Images/', false, /\.(png|jpe?g|svg)$/));
        const { formSubmit, objError, cancelBtn } = this.state
        const borderStyle = {
            border: '1px solid red',
        };
        return (
            <div className='main_container'>
                <div className='section_demo_wrap'>
                    <Headers/>
                  
                    {!formSubmit ?
                        <div className='middle_section'>
                            <div className='form_heading'>
                                <h2 className='animate__animated animate__pulse'>Build the future of Events</h2>
                                <p className='animate__animated animate__pulse'>Please fill your details, Our team will contact you soon </p>
                            </div>
                            <div className='form_wrap'>
                                <div className='input_wrap'>
                                    <label>Full Name</label>
                                    <input type='text' name='name' onChange={(e) => this.onFormChange(e)} placeholder='Enter...' style={objError.name.err ? borderStyle : null} />
                                </div>
                                <div className='input_wrap'>
                                    <label>Email</label>
                                    <input type='email' name='email' placeholder='example@gmail.com' onChange={(e) => this.onFormChange(e)} style={objError.email.err ? borderStyle : null} />
                                </div>
                                <div className='input_wrap'>
                                    <label>Phone No.</label>
                                    <input type='text' name='phone' placeholder='+91 9833774XXX' onChange={(e) => this.onFormChange(e)} style={objError.phone.err ? borderStyle : null} />
                                </div>
                                <div className='input_wrap'>
                                    <label>What service are you interested in?</label>
                                    <Dropdown name="services" placeholder='Select' fluid multiple selection options={options} onChange={(e, { value }) => this.onHandleDropdown(e, { value })} style={objError.services.err ? borderStyle : null}/>
                                </div>
                                {cancelBtn && <Navigate from='/getDemo' to='/' />}
                                <div className='btn_wrap'>
                                    <button onClick={() => this.handelCancelBtn()}>Cancel</button>
                                    <button onClick={() => this.onFormSubmit()}>Submit</button>
                                </div>
                            </div>
                        </div> :
                        <div className='thankyou_wrap'>
                            <h2 className='animate__animated animate__pulse'>Thank You!</h2>
                            <p className='animate__animated animate__pulse'>Our team will contact you soon </p>
                        </div>
                    }
                </div>
            </div>
        )
    }

}

export default getDemo;