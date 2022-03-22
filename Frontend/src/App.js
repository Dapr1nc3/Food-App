import "bootstrap/dist/css/bootstrap.css";
import Navigation from "./components/Navbar/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/logIn";

const App = () => {
//   const [data, setData] = useState(null);

//  // fetching the GET route from the Express server which matches the GET route from server.js
//  const callBackendAPI = async () => {
//   const response = await fetch("/express_backend");
//   const body = await response.json();

//   if (response.status !== 200) {
//     throw Error(body.message);
//   }
//   return body;
// };

//   useEffect(()=>{
//     callBackendAPI()
//     .then((res) => setData({res.express}))
//     .catch((err) => console.log(err))
//   }, [])
 
    return (
      <>
        <div className="App">
          <Navigation />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </>
    );
  }


export default App;