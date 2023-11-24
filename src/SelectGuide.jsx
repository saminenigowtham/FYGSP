
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import jwtDecode from "jwt-decode";
import axios from "axios";
import DisplayGuide from "./shared/DisplayGuide";
import Loginnavbar from "./shared/Loginnavbar";
import Footer from "./shared/Footer";

import LoadingScreen from "./shared/Loader";





export default function SelectGuide() {


  // const serverPath1 = "http://127.0.0.1:5000"
  const serverPath1 = "https://fgspserver.onrender.com"


  const [searchQuery, setSearchQuery] = useState("");
  const [filteredGuides, setFilteredGuides] = useState([]);

  const [guideDict, setGuideDict] = useState([]);


  const [isLoading, setIsLoading] = useState(false);



  const location = useLocation();
  const currentPath = location.pathname;

  const navigate = useNavigate();

  const getData = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get(serverPath1+'/guidelist');
      console.warn(response.data);
      // setGuideDict(response.data);
      setGuideDict(response.data.sort((a, b) => a.SL - b.SL));
    } catch (err) {
      console.warn(err);
    }
    setIsLoading(false)
  };

  useEffect(() => {
//     const checkToken = async () => {
//       const token = localStorage.getItem('token_for_first_time');

//       if (token) {
//         const decodedToken = jwtDecode(token);
//         const expirationTime = decodedToken.exp * 1000;

//         if (expirationTime < Date.now()) {
//           localStorage.removeItem('token');
//           localStorage.removeItem('GuideName');
//           localStorage.removeItem("GuideMailId")
//           localStorage.removeItem("userMailId")
//           localStorage.removeItem('newpassword')
//           navigate('/login');
//         }
//       } else {
//         navigate('/login');
//       }
//     };

//     checkToken();

      if(localStorage.getItem('GuideName')){

          localStorage.removeItem('GuideName');
          localStorage.removeItem("GuideMailId")
      }

    getData();
  }, [navigate]);




  useEffect(() => {
    // Filter guides based on the search query
    const filteredGuides = guideDict.filter((guide) =>
      guide["NAME"].toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredGuides(filteredGuides);
  }, [searchQuery, guideDict]);


  let guideSerialNumber = 1;

  function capitalizeEachWord(str) {
    return str.replace(/\w+/g, (word) => {
      const firstLetter = word.charAt(0).toUpperCase();
      const restOfWord = word.slice(1).toLowerCase();
      return firstLetter + restOfWord;
    });
  }


  function capitalizeNameOnly(name) {
    const words = name.split(' ');

    const capitalizedWords = words.map((word, index) => {
      const titleMatch = word.match(/^(Mr\.|Mrs\.|Dr\.|Ms\.)(.*)/i);
  
      if (titleMatch) {
        // If there is a title, keep it unchanged
        const title = titleMatch[1];
        const capitalizedRest = titleMatch[2] ? titleMatch[2][0].toUpperCase() + titleMatch[2].slice(1).toUpperCase() : '';
        
        return title + capitalizedRest;
      } else {
        // If no title, capitalize the entire word
        return word.toUpperCase();
      }
    });
  
    return capitalizedWords.join(' ');
  }
  


  return (
    <>


<div className='flex flex-col min-h-screen'>

    <div className='flex-grow'>

    {isLoading &&  <LoadingScreen />}
    <Loginnavbar />
      {/* {console.warn("dict" + guideDict)} */}
      


      {/* <h1>Single Registration Form</h1> */}



      <div className="bg-[#9e1c3f] flex items-center justify-between mt-5 mb-5">




      <div className="flex flex-row items-center justify-center">

      <h1 className='p-4 text-white leading-loose  font-semibold text-2xl items-center'></h1>
      </div>





      <div className="flex flex-row items-center justify-center">

      <h1 className='p-4 text-white leading-loose  font-semibold lg:text-2xl md:text-2xl items-center text-sm'>Select Your Mentor</h1>
      </div>
      <div className="flex flex-row items-center">

      <input
        type="text"
        placeholder="Search mentor..."
        className="border-2 border-solid border-black rounded-lg px-2 h-12 my-4 mr-10 lg:w-fit md:w-fit w-40"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      </div>

      </div>

      <div className="lg:flex md:flex-row lg:flex-row justify-between border-2 m-0 hidden lg:text-lg text-sm">
        <div className="lg:w-1/12 sm:w-1/10 flex justify-center p-5 border-x-2 font-semibold lg:text-lg sm:text-sm">
          <p>Sr. No.</p>
        </div>
        <div className="lg:w-4/12 sm:w-6/10 flex justify-center p-5 border-x-2 font-semibold">
          <p>Mentor's Details</p>
        </div>
        <div className="lg:w-4/12 justify-center  p-5 border-x-2 font-semibold hidden md:flex">
          <p>Area of Specialization</p>
        </div>
        <div className="lg:w-2/12 flex sm:w-1/10 justify-center p-5 border-x-2 font-semibold">
          <p>Available Mentor Slots</p>
        </div>
        <div className="lg:w-2/12 sm:w-2/10 flex justify-center p-5 border-x-2 font-semibold">
          <p>Select</p>
        </div>
      </div>



      {filteredGuides.map((item)=>{
        return <DisplayGuide 
        key={item['id']} 
        serialNumber={guideSerialNumber++} 
        empid={item['EMPID']} 
        name={capitalizeNameOnly(item['NAME'])} 
        img = {item["IMAGE"]} 
        vacancies={item['VACANCIES']} 
        designation={capitalizeEachWord(item['DESIGNATION'])} 
        dm1={item["DOMAIN1"]} 
        dm2={item["DOMAIN2"]} 
        dm3={item["DOMAIN3"]} 
        mailid={item["UniversityEMAILID"].toLowerCase()} 
        im="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb3m_AEpNzWsxMYF_W3DiheGuLfRH9hTb4SA&usqp=CAU"/>
      })}

      </div>


      <Footer />
      </div>
    </>
  );
}
