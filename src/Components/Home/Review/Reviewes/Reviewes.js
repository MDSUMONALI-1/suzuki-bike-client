import React, { useEffect, useState } from 'react';
import Review from '../Review';
const Reviewes = () => {
    const [reviewes, setReviewes] = useState([])
    useEffect(() => {
        fetch('https://damp-shore-20321.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviewes(data));
    }, [])

    return (
        <div id="reviewes">
            <h2 className="text-success mt-8">Review</h2>
            <div className="service-container">
            {
                    reviewes.map(service => <Review
                        key={service.id}
                        service={service}
                    ></Review>)
                }
               
               
            </div>
        </div>
    );
};

export default Reviewes;