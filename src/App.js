import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';

import SignUp from './components/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
