import React, { useState } from 'react';
import axios from 'axios';


const SignUp = () => {
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const handleApiData = async body => {
        try {
            const response = await axios.post('http://localhost:4000/users/signup', body);
            const data = await response.data;
            setMessage(data.message)
            setError(null);
        } catch (e) {
            const { error } = e.response.data;
            setError(error)
            setMessage(null)
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        handleApiData({
            name,
            email,
            password
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='row'>
                <div className="col-12 mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                    <input type="text" className="form-control" id="inputEmail3" name='name' />
                </div>
                <div className="col-12 mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail3" name='email' />
                </div>
                <div className="col-12 mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword3" name='password' />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign up</button>
                </div>
            </form>
            {error && <p>{error}</p>}
            {message && <p>{message}</p>}
        </>
    )
}

export default SignUp
