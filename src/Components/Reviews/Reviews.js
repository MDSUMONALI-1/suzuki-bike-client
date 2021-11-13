import React from 'react';

const Reviews = () => {
    return (
        <div>
            <h2>please give your opinion:</h2>
            <form onSubmit>
            <div class="mb-3">
    <textarea type="name" placeholder="give your review"
    name="name"
    class="form-control" />
  </div>
  <button type="submit" class="btn btn-primary">submit</button>
            </form>
        </div>
    );
};

export default Reviews;