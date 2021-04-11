import React from 'react';
import Doctor from '../Doctor/Doctor';
const Doctors = () => {
    return (
        <section>
            <div className='container'>
                <h5 className='text-center' style={{color:'#1CC7C1'}} >Our Doctors</h5>
                <div className='row'>
                    <Doctor></Doctor>
                    <Doctor></Doctor>
                    <Doctor></Doctor>
                </div>
            </div>
        </section>
    );
};

export default Doctors;