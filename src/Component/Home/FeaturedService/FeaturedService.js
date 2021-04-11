import { Button } from 'react-bootstrap';
import React from 'react';
import Featured from '../../../images/Featured.png'
const FeaturedService = () => {
    return (
        <section className=' pb-0 pb-md-5 my-5'>
            <div className="container mb-5" >
                <div className="row mb-5">
                    <div className="col-md-5 ">
                        <img className='img-fluid' src={Featured} alt="" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental <br /> Care, on Your Term</h1>
                        <p className='text-secondary mt-5 mb-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus impedit, aliquam, corrupti illo ad harum dolores facere ducimus iste blanditiis repellat repellendus quos odit error fuga, quam consectetur dolor ab ipsam? Debitis necessitatibus accusamus harum dolor velit error tempora assumenda placeat totam facilis earum veniam, natus tempore porro et sapiente eaque praesentium omnis rem tenetur laboriosam voluptatem eum. Quo deserunt possimus facere nobis nisi facilis nihil ullam. Cupiditate vero quos, dolor nisi optio libero earum mollitia sapiente consequatur, voluptatum esse voluptate ratione, corporis impedit eligendi quia eveniet obcaecati quae! Qui ad in eos quia quae architecto laudantium exercitationem reprehenderit aliquam.
                        </p>
                        <Button className='mt-5' style={{ backgroundColor: '#1CC7C1', border: '0px' }}>Learn More</Button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default FeaturedService;