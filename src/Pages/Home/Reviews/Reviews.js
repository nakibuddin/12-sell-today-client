import React from 'react';
import './Reviews.css'

const Reviews = () => {
    return (
        <div>
            <h1 className='text-3xl text-center font-bold mt-24 mb-6'>Customer's Review</h1>
            <section>
                <div className="video_div1">
                    {/* <iframe width="500" height="250" src="https://www.youtube.com/embed/Lu2O9pM3SjI" title="YouTube video player" frameBorder="0"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                    <iframe width="500" height="250" src="https://www.youtube.com/embed/tOwjEOt1zYU" title="Customer Testimonial Video Examples | Video Marketing Ideas" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <iframe width="500" height="250" src="https://www.youtube.com/embed/8LSt8_11wbQ" title="Client Testimonial Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    
                </div>           
                <div className="video_div2">
                    <iframe width="500" height="250" src="https://www.youtube.com/embed/ppawFI1u6Po" title="Hubspot Customer Testimonial" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <iframe width="500" height="250" src="https://www.youtube.com/embed/JRDu7FPad7s" title="Unilever (APAC) Customer Testimonial Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>        
                 
            </section>
        </div>
    );
};

export default Reviews;