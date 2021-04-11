import { Button } from 'react-bootstrap';
import React from 'react';
import Doctor from '../../../images/Doctor.png'
import './MakeAppointment.css'
const MakeAppointment = () => {
    return (
        <section className='makeAppointment '>
        <div className="container" >
            <div className="row">
                <div className="col-md-5 d-none d-md-block ">
                    <img src={Doctor} alt="" />
                </div>
                <div className="col-md-7  text-white py-5">
                    <h5 style={{color:'#1CC7C1'}}>APPOINTMENT</h5>
                    <h1 className='my-4'>Make an appointment <br/> Today</h1>
                    <p >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its</p>
                    <Button className='mt-5' style={{ backgroundColor: '#1CC7C1', border: '0px' }}>Learn More</Button>
                </div>
            </div>
        </div>
    </section>
    );
};

export default MakeAppointment;