import { useSelector } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';

import SignUp from './components/SignUp';

function App() {
  const token = useSelector(store => store.loginUser);
  console.log('🚀 ~ file: App.js ~ line 15 ~ App ~ token', token)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
          {token !== '' ? <Navigate to='/home' /> : <Navigate to='/login' />}
        </>} />
        <Route path="/home" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {/* <Navigate to='/login' replace /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
