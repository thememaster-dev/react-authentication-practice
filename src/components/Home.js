import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Home = () => {
    // const navigate = useNavigate();
  const token = useSelector(store => store.loginUser);


    const handleClick = () => {
        return <Navigate to="/login" replace />
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>
                    <button onClick={handleClick} type="submit" className="btn btn-primary">logout</button>
                </div>
            </nav>
            <p>sabbir sweet home</p>
        </div>
    )
}

export default Home
