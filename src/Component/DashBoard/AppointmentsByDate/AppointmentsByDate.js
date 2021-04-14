import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({appointments}) => {
    console.log(appointments);
    return (
        <div>
            <h1 className='text-center'>appointment</h1>
            {
                appointments.length ? 
                <AppointmentShortList appointments={appointments}></AppointmentShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
                
            }
        </div>
    );
};

export default AppointmentsByDate;