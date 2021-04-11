import React from 'react';

const BlogPost = ({ post }) => {
    const { title, description, author, authorImg, date } = post
    return (
        <div className='col-md-4'>
            <div className='card shadow'>
                <div className=' card-header d-flex align-items-center  '>
                    <img className='mr-3' src={authorImg} alt="" width='60' />
                    <div>
                        <h6>{author}</h6>
                        <small>{date}</small>
                    </div>
                </div>
                <div className='card-body' >
                    <h5 className='cardTitle mt-5'>{title}</h5>
                    <small className='text-secondary'>{description}</small>

                </div>

            </div>
        </div>
    );
};

export default BlogPost;