import { React } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import Login from "./components/Login/login"
import Signup from "./components/Signup/signup"
import Home from "./components/Home/home"

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )

}


export default App