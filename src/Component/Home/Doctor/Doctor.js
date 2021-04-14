import React from 'react';
import doctorImg from '../../../images/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Doctor = ({ doctor }) => {
    return (
        <div className='col-md-4 text-center'>
            {
                doctor.image ?
                <img style={{height:'200px'}} className='img-fluid mb-3' src={`data:image/jpeg;base64,${doctor.image.img}`} />
                :
                <img style={{height:'200px'}}  src={`http://localhost:5050/${doctor.file.name}`} alt=""/>
            }
            <h4>{doctor.name}</h4>
            <p><FontAwesomeIcon style={{ color: '#1CC7C1' }} icon={faPhoneAlt} /> +8615508893563</p>
        </div>
    );
};

export default Doctor;