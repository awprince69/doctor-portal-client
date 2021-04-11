import React from 'react';

const ServiceDetail = ({ service }) => {
    return (
        <div className='col-md-4 text-center'>
            <img style={{height:'50px'}} src={service.img} alt="" />
            <h5 className='mt-4 mb-4'>{service.name}</h5>
            <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nemo fuga et nesciunt, non quaerat facere quia, odio laboriosam enim tempora ipsa corrupti at sed, distinctio voluptatem? Odio, aperiam rem!</p>
        </div>
    );
};

export default ServiceDetail;