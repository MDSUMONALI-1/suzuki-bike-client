import React, { useState } from 'react';

const Reviews = () => {
   
    const [review, setReview] = useState('');
  
  

    const handleOnBlur = e => {
        setReview(e.target.value);
    }
    const handleReviewSubmit = e => {
        const userReview = { review};
      
        fetch('https://damp-shore-20321.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReview )
        })
            .then(res => res.json())
            .then(data => {
                
                    console.log(data);
                   
               
            })

        e.preventDefault()
    }
    return (
        <div>
            <h2>please give your opinion:</h2>
            <form onSubmit={handleReviewSubmit}>
            <div class="mb-3">
    <textarea type="name" placeholder="give your review"
    name="name"
    onBlur={handleOnBlur}
    class="form-control" />
  </div>
  <button type="submit" class="btn btn-primary">submit</button>
            </form>
        </div>
    );
};

export default Reviews;