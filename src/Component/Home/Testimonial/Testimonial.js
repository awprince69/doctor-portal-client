import React from 'react';
import winson from '../../../images/winson.png'
import ema from '../../../images/ema.png'
import julie from '../../../images/Julie.png'
import './Testimonial.css'
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';
const Testimonial = () => {
    const quoteData = [
        {
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur ex totam consequatur magni deleniti assumenda, maiores expedita nobis non!',
            name: 'Winson Herry',
            form: 'California',
            img: winson
        },
        {
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur ex totam consequatur magni deleniti assumenda, maiores expedita nobis non!',
            name: 'Ema Cutter',
            form: 'California',
            img: ema
        },
        {
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur ex totam consequatur magni deleniti assumenda, maiores expedita nobis non!',
            name: 'Julie Ninja',
            form: 'California',
            img: julie
        }

    ]
    return (
        <section className='testimonial my-5 py-5'>
            <div className='container'>
                <div>
                    <h5 style={{ color: '#1CC7C1' }}>TESTIMONIAL</h5>
                    <h1>What's Our Patients <br /> Says</h1>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className='row mt-5'>
                        {
                            quoteData.map(quote => <TestimonialDetails quote={quote}></TestimonialDetails>)
                        }
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Testimonial;