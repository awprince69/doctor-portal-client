import React from 'react';
import doctorImg from '../../../images/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Doctor = () => {
    return (
        <div className='col-md-4 text-center'>
            <img className='img-fluid mb-3' src={doctorImg} alt=""/>
            <h4>Dr. Coudi</h4>
            <p><FontAwesomeIcon style={{color:'#1CC7C1'}} icon={faPhoneAlt}/> +8615508893563</p>
        </div>
    );
};

export default Doctor;