
const Review = ({ service }) => {
    // const {service} = props;
    const {review, name } = service;
    return (
        <div className="service pb-3">
       
                   <p>{name}</p>

            <h3>{review}</h3>
          
        </div>
    );
};

export default Review;