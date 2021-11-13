import React,{ useState} from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
  

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
      
        fetch('https://damp-shore-20321.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                   
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <h2>make admin</h2>
            <form onSubmit={handleAdminSubmit}>
            <div class="mb-3">
    <label for="Email" class="form-label">Email address</label>
    <input type="email" 
    name="email"
    onBlur={handleOnBlur}
    class="form-control" id="exampleInputEmail1"/>
   
  </div>
  <button type="submit" class="btn btn-primary">MakeAdmin</button>
                </form>
                {success && <div class="alert alert-success" role="alert">
  This is a success alert—check it out!
</div>
}
        </div>
    );
};

export default MakeAdmin;