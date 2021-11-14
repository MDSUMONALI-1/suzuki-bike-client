import React,{useState, useEffect} from 'react';



const ManageProducts = () => {
    const [services,setServices] = useState([])
useEffect( () => {
    fetch(`https://damp-shore-20321.herokuapp.com/bikes`)
    .then(res=>res.json())
    .then(data => setServices(data))
},[])

const handleDelete = id =>  {
    const proceed = window.confirm('Are you sure, you want to delete?');
    if (proceed) {
        const url = `https://damp-shore-20321.herokuapp.com/bikes/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }
            });
    }
}

    return (
        <div>
            <h2> Manage Products</h2>
         
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.name}</h3>
                    <button onClick={()=> handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageProducts;