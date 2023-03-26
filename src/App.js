import {BrowserRouter as Router ,Routes ,Route}from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"
import Offers from "./pages/Offers"
import ForgotPassword from "./pages/ForgotPassword"
import Header from "./components/Header"
import Aboutus from "./pages/Aboutus"
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
function App() {
  return (
    <>
      <Router>
      <Header/>
        <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/offers" element={<Offers/>} />
        <Route path="/about-us" element={<Aboutus/>} />

        </Routes>
      </Router>
      <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>

    </>
  );
}
 
export default App;
