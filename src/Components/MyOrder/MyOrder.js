import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyOrder = () => {
  
    return (
        <div>
            <h2>My Order items</h2>
            <h2>Your Order List:</h2>
            <Link to="/pay"><Button>Pay</Button></Link>
           
        </div>
    );
};

export default MyOrder;