import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoCard.css'

const InfoCard = ({ info }) => {
    return (
        <div className='col-md-4 text-white px-2'>
            <div className={`d-flex info-container justify-content-center info-${info.background}`}>
                <div className='mr-4'>
                    <FontAwesomeIcon className='info-icon' icon={info.icon} />
                </div>
                <div>
                    <h4>{info.title}</h4>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;