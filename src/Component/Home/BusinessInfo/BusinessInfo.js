import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
const BusinessInfo = () => {
    const infoData = [
        {
            title: 'Opening Hours',
            description: 'we are open 7days',
            icon: faClock,
            background: 'primary'
        },
        {
            title: 'Visit our location',
            description: 'Brooklyn,NY10036,United State',
            icon: faMapMarker,
            background: 'light'
        },
        {
            title: 'Contact us now',
            description: '+000 123 456789',
            icon: faPhoneAlt,
            background: 'dark'
        }
    ]
    return (
        <section className="d-flex justify-content-center">
            <div className="row w-75">
                {
                    infoData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;