
const Review = ({ service }) => {
    // const {service} = props;
    const {review } = service;
    return (
        <div className="service pb-3">
       
            <h3>{review}</h3>
          
        </div>
    );
};

export default Review;