import Home from "./HomeCompo/Home";
import SignIn from "./SignInCompo/SignIn";
import MainPage from "./MainPageCompo/MainPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <meta name="google-site-verification" content="pslAFLWLOXNbtadX2CegdllEQ6gIblMbizE32mxJSSg" />
      <ToastContainer 
      position="top-center"
      />
      <Router basename="/Netflix-Clone">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/MainPage" element={<MainPage />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
