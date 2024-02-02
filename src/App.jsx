import { useState } from 'react'
import './App.css'
import SelectGuide from './SelectGuide'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StaffLogin from './StaffLogin';
import About from './About';
import SingleRegisterForm from './SingleRegisterForm';
import Success from './Success';
import StaffDashboard from './StaffDashboard';
import StudentLogin from './StudentLogin';
import StudentDashboard from './StudentDashboard';
import StudentInfoBar from './components/studentInfoBar';
import EventsItems from './components/EventsItems';

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

          <Route path="/studentlogin" element={<StudentLogin />} ></Route>
          <Route path="/studentdashboard" element={<StudentDashboard />} ></Route>

          {/* creating student INfo Common bar */}
          <Route path="/studentInfoBar" element={<StudentInfoBar/>}></Route>
          <Route path='/eventsInfo' element={<EventsItems/>}></Route>
        </Routes>
      </Router> 
    </>
  )
}

export default App
