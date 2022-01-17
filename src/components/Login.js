import React from 'react'

const Login = () => {
    return (
        <form className='row'>
            <div className="col-12 mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail3" />
            </div>
            <div className="col-12 mb-3">
                <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword3" />
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
        </form>
    )
}

export default Login
