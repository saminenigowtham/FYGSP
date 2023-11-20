


import Loginnavbar from "./shared/Loginnavbar";
import Footer from "./shared/Footer";
import { useNavigate } from "react-router-dom";


export default function About(){

    const navigate = useNavigate()

    const SelectGuide=(e)=>{
        e.preventDefault()
        navigate('/selectguide')
    }


    return(
        <>
            <Loginnavbar />



            <div className="loginbg md:px-0 px-10">
    <div className=' border p-6 bg-white bg-opacity-80 backdrop-filter rounded-lg shadow-lg font-semibold'>
            

            <p>If you are logging in for first time :</p><br></br>
            <li>Try any your mail as password and login.</li>
            <li>You will recieve otp to your mail. Enter and submit. Kindly check in your spam mails.</li>
            <li>Enter new password for future login and submit.</li>
            <li>Select Team or Single.</li>
            <li>Select a guide who have vacancies.</li>
            <li>Enter project Details.</li>
            <li>If you are doing project alone, Enter your details and submit.</li>
            <li>If not, Enter team member 1 details first.</li>
            <li>Enter second person details, click on verify.</li>
            <li>Otp is sent the second team member mail should be entered and submit.</li>
            <br></br><br></br>
            

          <div className=' flex justify-center'>


            <button onClick={SelectGuide} className="bg-red-900 text-white px-6 py-2 rounded-md my-2 text-lg">Select Guide</button>
            </div>
        
            </div>
            </div>


            
            <Footer />
        </>
    );
}