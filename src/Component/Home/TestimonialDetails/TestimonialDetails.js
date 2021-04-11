import React from 'react';

const TestimonialDetails = ({ quote }) => {

    return (
        <div className='col-md-4'>
            <div className='card shadow mr-5' style={{border:'0px',width:'18rem'}}>
                <div className='card-body'>
                    <p className='card-text text-center'>{quote.quote}</p>
                </div>
                <div className=' card-footer d-flex  align-items-center'>
                        <img className='mx-3' src={quote.img} alt="" width='60'/>
                    <div>
                        <h5>{quote.name}</h5>
                        <small>{quote.form}</small>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TestimonialDetails;