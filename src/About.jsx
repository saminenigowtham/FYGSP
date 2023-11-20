


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
            

        <p className="font-bold flex items-center justify-center text-xl">Welcome to the Guide Selection Portal for First-Year Students!</p><br></br>            
        
        <p className="font-semibold text-lg">This website is designed to help first-year students choose a guide who will support them throughout the academic year. Here's a step-by-step guide:</p>

        <ol className=" pt-2 text-lg pl-4 list-decimal">
            <li>Select a staff member as your guide. Each guide has 20 vacancies available.</li>
            <li>After selecting your guide, provide the following information:</li>
            <ul className="pt-2 pl-8 list-disc">
                <li>Name</li>
                <li>Registration number</li>
                <li>Email</li>
                <li>Phone number</li>
            </ul>
            <li>No duplicates are allowed, so ensure the information is unique.</li>
            <li>Upload a passport-size photo, which must be less than 100KB in size.</li>
            <li>After entering the details, submit your information.</li>
        </ol>

        <p className="flex pt-4 justify-center">That's all for the student registration process!</p>
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