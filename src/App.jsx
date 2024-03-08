import Home from "./Pages/home/Home"
import Profile from "./Pages/profilePage/Profile"
import { BrowserRouter as Router , Routes, Route } from "react-router-dom"
import Register from "./Pages/register/Register"
import Login from "./Pages/login/Login"


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>

      </Routes>
      </Router>
    </>
  )
}

export default App
