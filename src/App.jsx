import { useState } from 'react'
import './App.css'
import SelectGuide from './SelectGuide'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StaffLogin from './StaffLogin';
import About from './About';
import SingleRegisterForm from './SingleRegisterForm';
import Success from './Success';
import StaffDashboard from './StaffDashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element={<About />} ></Route>
          <Route path="/selectguide" element={<SelectGuide />} ></Route>
          <Route path="/stafflogin" element={<StaffLogin />} ></Route>
          <Route path='/selectguide/:id' element={<SingleRegisterForm />}></Route>
          <Route path='/selectguide/:id/success' element={<Success />}></Route>
          <Route path="/staffdashboard" element={<StaffDashboard />} ></Route>

        </Routes>
      </Router> 
    </>
  )
}

export default App
