


import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Loginnavbar from "./shared/Loginnavbar";
import Footer from "./shared/Footer";
import { BiImageAdd } from "react-icons/bi";

import LoadingScreen from "./shared/Loader";








export default function SingleRegisterForm() {

  // const serverPath1 = "http://127.0.0.1:5000"
  const serverPath1 = "https://fgspserver.onrender.com"


    const navigate = useNavigate()
    const currentPath = location.pathname;

  const [projTitle, setprojTitle] = useState("");
  const [projDomain, setprojDomain] = useState("");
  const [projDesc, setprojDesc] = useState("");

  const [userName, setuserName] = useState("");
  const [userRegNo, setuserRegNo] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userPhone, setuserPhone] = useState("");
  const [userSection ,setuserSection] = useState("");
  const [userAddress, setuserAddress] = useState("");

  const [guideName, setguideName] = useState(localStorage.getItem("GuideName"));
  const [guideMailId, setguideMailId] = useState(
    localStorage.getItem("GuideMailId")
  );


  const handleRadioChange = (e) => {
    setuserAddress(e.target.value);
  };

  const [getvacancies, setgetvacancies] = useState("")
  const [isnotRegisterd, setisnotRegisterd]  = useState("")



  const [isLoading, setIsLoading] = useState(false);

  const [Error1, setError1] = useState('');
  const [Error2, setError2] = useState('');



  const [isMailVerified, setisMailVerified] = useState(false);

  const [isVerificationSuccess, setisVerificationSuccess] = useState(false)
  const [verificationInitiated, setVerificationInitiated] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);

  const [recievedOTP, setrecievedOTP] = useState("")
  const [userotpcontainer,setuserotpcontainer] = useState(false)
  const [userotp,setuserotp] = useState();

  const [isVerifying, setIsVerifying] = useState(false);
  const [verifystatus, setverifystatus] = useState(false);


  const startResendTimer = () => {
    setIsVerifying(true);
    setResendTimer(30); // Set the initial timer value
    const interval = setInterval(() => {
      setResendTimer(prevTimer => prevTimer - 1);
    }, 1000); // Decrease the timer every second
  
    // Stop the timer after 30 seconds
    setTimeout(() => {
      clearInterval(interval);
      setIsVerifying(false); // Enable the verify button
    }, 30000);
  };

  const checkMailId = async(e) => {
    e.preventDefault();
    // console.warn("Im clicked")
    setIsLoading(true)
    if (userEmail){
    try{
        setIsVerifying(true);
        setVerificationInitiated(true);

        const response = await axios.get(serverPath1+"/checkMail/"+userEmail);
        console.warn(response.data)
        if (response.data.message=="SENT"){
            startResendTimer();
            setrecievedOTP(response.data.OTP)
            setuserotpcontainer(true)
            // setisMailVerified(true)
        }
        else{
          setError1("Something went wrong! Try again.");
          setVerificationInitiated(false);
          setIsVerifying(false);

          setTimeout(() => {
            setError1("")
          }, 2000);
        }
    }catch(err){
        setIsLoading(false)
        console.warn(err)
        setIsVerifying(false)
        setVerificationInitiated(false);
    } finally {
        setIsVerifying(false)
        // setVerificationInitiated(false);
    }

    setIsLoading(false)


  }else{
    // alert("No duplicate entries allowed!")
    setError2("Enter mail ID first.")

    setTimeout(() => {
      setError2("")
    }, 2000);
    setIsLoading(false)

  }
  
}


//   useEffect(() => {
//     const checkToken = async () => {
//       const token = localStorage.getItem('token_for_first_time');

//       if (token) {
//         const decodedToken = jwtDecode(token);
//         const expirationTime = decodedToken.exp * 1000;

//         if (expirationTime < Date.now()) {
//           localStorage.removeItem('token');
//           localStorage.removeItem('GuideName');
//           localStorage.removeItem("GuideMailId")
//           navigate('/login');
//         }
//       } else {
//         navigate('/login');
//       }
//     };
//     checkToken();
//   }, [guideMailId,navigate]);

  useEffect(() => {

    if(localStorage.getItem("GuideMailId")){

    }else{
      navigate("/selectguide")
    }
    // Call getData() when the component mounts or when guideMailId changes
    getData();
    if(userEmail){
    checkRegistered();
    }
  }, [userEmail,getvacancies,guideMailId]);
  

  const getData = async () => {
    try {
      const response = await axios.get(serverPath1+'/checkVacancies/'+guideMailId);
      setgetvacancies(response.data);
    //   console.warn(getvacancies)
    } catch (err) {
      console.warn(err);
    }
  };


  const checkRegistered = async () => {
    try{
      const response = await axios.get(serverPath1+"/checkStudent/"+userEmail)
      setisnotRegisterd(!response.data.registered)
      console.warn(response.data)

    }catch (err){
      console.warn(err)
    }
  }



  

  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState('');
  const [uploading, setUploading] = useState(false);
  const [filename, setfilename] = useState("");

  const handleImageChange = (event) => {
      const file = event.target.files[0];
  
      if (file) {
        if (file.size <= 100000) { // 20KB in bytes
          setSelectedImage(file);
          setError('');
        } else {
          setSelectedImage(null);
          setError('Image size must be less than 100KB.');
        }
        setTimeout(() => {
          setError("")
        }, 2000);
      }
    };



  


  const Submit = async (e) => {
    e.preventDefault();
  


    

    const vacancies = parseInt(getvacancies['vacancies']);

    if ( userPhone.length!=10)
    {
        setError1("Phone number must have 10 digits.")
        setTimeout(() => {
          setError1("")
        }, 2000);
        return
    }
    if (userRegNo.length!=8)
    {
        setError1("Register number must have 8 digits.")
        setTimeout(() => {
          setError1("")
        }, 2000);
        return
    }

    if(!isMailVerified){
      setError1("Please verify the mail id!");
      setTimeout(() => {
        setError1("")
      }, 2000);
      return
    }

    if(userSection!="A1" || userSection!="A2" || userSection!="A3" || userSection!="A4" || userSection!="A5" || 
       userSection!="B1" || userSection!="B2" || userSection!="B3" || userSection!="B4" || userSection!="B5" || 
       userSection!="C1" || userSection!="C2" || userSection!="C3" || userSection!="C4" || userSection!="C5" || 
       userSection!="D1" || userSection!="D2" || userSection!="D3" || userSection!="D4" || userSection!="D5" || 
       userSection!="E1" || userSection!="E2" || userSection!="E3" || userSection!="E4" || userSection!="E5"  )
       {
          setError1("Enter valid section name!")
          setTimeout(() => {
            setError1("")
          }, 2000);
       }

    setIsLoading(true);


    if (vacancies > 0 && isnotRegisterd && selectedImage) {
      
      try {
        
            
                
    
                const addNewStudentData = {
                    name : userName,
                    regNo : userRegNo,
                    phoneNo : userPhone,
                    mailId : userEmail,
                    selectedGuide: guideName,
                    selectedGuideMailId: guideMailId,
                    address : userAddress,
                    section : userSection

                }

                const responseOfAddNewStudent = axios.put(serverPath1+"/addNewStudent", addNewStudentData);
                console.warn(responseOfAddNewStudent.data);

        
    
        
                const updatedVacanciesData = {
                    collection_name: 'allstaff', // Replace 'my_collection' with the desired collection name
                    filter_data: { "University EMAIL ID": guideMailId }, // Replace with the filter to identify the data you want to update
                    updated_data: {
                    "TOTAL BATCHES": parseInt(getvacancies['vacancies'])-1
                    },
                };

                axios.put(serverPath1+'/update_vacancies_data', updatedVacanciesData, {
                    headers: {
                    'Content-Type': 'application/json',
                    },
                })
                    .then((response) => {
                    console.log(response.data);
                    })
                    .catch((error) => {
                    console.error('Error:', error);
                    });


                

                

                const updatedGuidesStudentsData = new FormData();
                    updatedGuidesStudentsData.append('image', selectedImage);
                    updatedGuidesStudentsData.append('regNo', userRegNo); // Replace with the actual value
                    updatedGuidesStudentsData.append('mailId', userEmail); // Replace with the actual value
                    updatedGuidesStudentsData.append('phoneNo', userPhone); // Replace with the actual value
                    updatedGuidesStudentsData.append('name', userName);
                    updatedGuidesStudentsData.append('GuideMailId', guideMailId);
                    updatedGuidesStudentsData.append('address', userAddress);
                    updatedGuidesStudentsData.append('section', userSection);


                    // Make a POST request to your server endpoint
                const updatedGuidesStudentsResponse = axios.put(serverPath1+'/updateGuidesStudentsData', updatedGuidesStudentsData, {
                    headers: {
                    'Content-Type': 'multipart/form-data',
                    },
                });

                console.warn(updatedGuidesStudentsResponse.data);



        
                // alert("Success")
                navigate(currentPath + "/success");
              
            } catch (error) {
              console.warn(error, "Account Already Registered");
              setisnotRegisterd(false);
            //   alert("Account already Registered");
            setError1("Account already registered");
            }
            finally
            {
                console.warn("Submitted")
            }


          } else if (!isnotRegisterd) {
            // alert("Account is already registered");
            setError1("Account already registered.");

          }
          else if(!selectedImage){
            // alert("Image size is too big");
            setError1("Image size is too big.");

          } else {
            // alert("No Vacancy Select Another Staff");
            setError1("No Vacancy! Select Another Staff.");

          }
          setTimeout(() => {
            setError1("")
          }, 2000);
        
          setIsLoading(false);
        };







  return (
    <>

<div className='flex flex-col min-h-screen'>

    <div className='flex-grow'>

    <Loginnavbar />


      {isLoading &&  <LoadingScreen />}

      


      {/* <h1>REGISTRATION FORM</h1> */}

      <form onSubmit={Submit}>




      <div className="m-4 border-solid border-2 rounded-lg">
        <div className="bg-[#330716] m-4 rounded-lg  flex justify-center items-center font-bold text-white lg:text-4xl text-lg lg:py-16 py-20">
          <p>Confirmation Details</p>
        </div>

        












        <div className="border-solid border-2 m-4 p-5">

        <div className="flex justify-center lg:space-y-0 space-y-2">
          <p className="lg:text-2xl text-xl font-bold pb-4">Mentee Details</p>
        </div>


        <div className="lg:flex justify-evenly lg:space-y-0 space-y-2">

        <div className="lg:w-full lg:mx-12">
          <div>
          <label>Full Name</label>
          <input
            className="border-2 h-12 px-4 w-full bg-gray-200 mb-4"
            type="text"
            placeholder="Name"
            value={userName}
            required
            onChange={(e) => setuserName(e.target.value)}
          />
          </div>
        </div>

        <div className="lg:w-full lg:mx-12">
          <div>
          <label>Register Number</label>
          <input
            className="border-2 h-12 px-4 w-full bg-gray-200 mb-6"
            type="number"
            placeholder="Reg No"
            value={userRegNo}
            required
            minLength={8}
            maxLength={8}
            onChange={(e) => setuserRegNo(e.target.value)}
          />
            </div>
          </div>


         

        </div> 





        <div className="lg:flex justify-evenly lg:space-y-0 space-y-2">

        <div className="lg:w-full lg:mx-12">
          <div>
          <label>Email</label>
          {verifystatus ? <input
            className="border-2 h-12 px-4 w-full bg-gray-200 mb-4"
            type="email"
            placeholder="Email Id"
            value={userEmail}
            required
            readOnly
            onChange={(e) => setuserEmail(e.target.value)}
          />:
          <input
            className="border-2 h-12 px-4 w-full bg-gray-200 mb-4"
            type="email"
            placeholder="Email Id"
            value={userEmail}
            required
            onChange={(e) => setuserEmail(e.target.value)}
          />}
          </div>
        </div>

        <div className="lg:w-full lg:mx-12">
          <div>
          <label>Phone Number</label>
          <input
            className="border-2 h-12 px-4 w-full bg-gray-200 mb-4"
            type="tel"
            placeholder="Phone No"
            value={userPhone}
            minLength={10}
            maxLength={10}
            required
            onChange={(e) => setuserPhone(e.target.value)}
          />
            </div>
          </div>

        </div> 



        <div className="lg:flex justify-evenly lg:space-y-0 space-y-2">

<div className="lg:w-full lg:mx-12">
  <div>
  <label>Section</label>
  <input className="border-2 h-12 px-4 w-full bg-gray-200 mb-4"
   type="text"
   value={userSection} 
   required 
   placeholder="Section (Ex: A5)" 
   onChange={(e) => {setuserSection(e.target.value)}}
   />
  </div>
</div>

<div className="lg:w-full lg:mx-12">
  {/* <div>
  <label>Hosteller or Day Scholar</label>
  <input
    className="border-2 h-12 px-4 w-full bg-gray-200 mb-4"
    type="radio"
    placeholder="phone"
    value={userAddress}
    minLength={10}
    maxLength={10}
    required
    onChange={(e) => setuserAddress(e.target.value)}
  />
    </div> */}
    <label>Choose : </label>
    <div className="flex space-x-4 pt-2 text-lg font-semibold">
      <label>Hosteller</label>
      <input
        type="radio"
        required
        name="userAddress"
        value="Hosteller"
        checked={userAddress === "Hosteller"}
        onChange={handleRadioChange}
      />

      <label>Day Scholar</label>
      <input
      required
        type="radio"
        name="userAddress"
        value="Day Scholar"
        checked={userAddress === "Day Scholar"}
        onChange={handleRadioChange}
      />
    </div>

  </div>

</div> 





        <div className="custom-file-upload lg:pl-12 py-4">
        
            {!selectedImage && <div>
              <label for="photo-upload" class="custom-button">
              <div className="flex space-x-1"><span>Upload Your Photo</span><BiImageAdd  className="text-2xl flex justify-center items-center"/></div>
            </label>
            <input
            id="photo-upload"
            required
            className="border-0 h-12  px-4 w-fit max-w-min"
            type="file" 
            onChange={handleImageChange} 
            accept="image/*" />
            </div>}
            {error && <p style={{ color: 'red' }} className="lg:pl-4">{error}</p>}
            {selectedImage && (
                <div
                className="">
                <p>{selectedImage.name}</p>
                <p className="text-green-500 pb-2">Image Uploaded Successfully</p>
                {/* <p>Selected Image:</p>
                <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
                <button  disabled={uploading}>
                    {uploading ? 'Uploading...' : 'Upload Image'}
                </button> */}



                <label for="photo-upload" class="custom-button">
              <div className="flex space-x-1"><span>Change Photo</span><BiImageAdd  className="text-2xl flex justify-center items-center"/></div>
            </label>
            <input
            id="photo-upload"
            required
            className="border-0 h-12  px-4 w-fit max-w-min"
            type="file" 
            onChange={handleImageChange} 
            accept="image/*" />




                </div>
            )}
            </div>

          














            <div className="flex justify-around">
        <div className={userotpcontainer ? "visible":"hidden"}> 
        <input
          className="border-2 h-12 px-4 w-min bg-gray-200 m-4"
          type="number"
          placeholder="Enter OTP"
          value={userotp}
          required
          onChange={(e) => {
            setuserotp(e.target.value);
            if (recievedOTP == e.target.value)
            {
        setIsVerifying(true)
        setverifystatus(true)
        setuserotpcontainer(false)
        setisMailVerified(true)
        setisVerificationSuccess(true)
            }
            }}
        />


        {/* <button className="p-4 bg-red-700 text-white text-lg"
        onClick={checkSecondOtp}
        disabled={isotpVerifying}>
        submit</button> */}
          

        </div>
        </div>
        

        <div className="flex justify-around">
        <div className={isVerificationSuccess ? "hidden":"block"}>
        <button
          className="bg-red-900 text-white px-6 py-2 rounded-md my-2 text-lg"
          onClick={checkMailId}
          disabled={verificationInitiated && (isVerifying || resendTimer > 0)}
        >
          {verificationInitiated
            ? resendTimer > 0
              ? `Resend in ${resendTimer}s`
              : 'Resend'
            : 'Verify Your Mail'}
        </button>
        <div className="flex justify-around pb-2">
    {Error2 && <p style={{ color: 'red' }} className="">{Error2}</p>}

    </div>
        </div>
        </div>

        <p className={verifystatus ? "visible text-lg pt-2 lg:pl-12":"hidden"}><b>VERIFIED MAIL ID ✔</b></p>




        
        </div>











        <div className="border-solid border-2 m-4 p-5">

<div className="flex justify-center lg:space-y-0 space-y-2">
  <p className="lg:text-2xl text-xl font-bold pb-4">Mentor Details</p>
</div>


<div className="lg:flex justify-evenly lg:space-y-0 space-y-2">

<div className="lg:w-full lg:mx-12">
  <div>
  <label>Mentor Name</label>
          <input className="border-2 h-12 px-4 w-full bg-gray-200 mb-4" type="text" value={guideName} readOnly />
  </div>
</div>

<div className="lg:w-full lg:mx-12">
  <div>
  <label>Mentor Email Id</label>
          <input
            className="border-2 h-12 px-4 w-full bg-gray-200 mb-4"
            type="text"
            value={guideMailId}
            readOnly
          />
    </div>
  </div>

</div> 



</div>



        
    <div className="flex justify-around pb-2">
    
    <button type="submit" className="bg-red-900 flex justify-around text-white px-6 py-2 rounded-md my-2 text-lg">
        {isLoading ? "Loading..." : "SUBMIT"}
        </button>
    </div>
    <div className="flex justify-around pb-2">
    {Error1 && <p style={{ color: 'red' }} className="">{Error1}</p>}

    </div>



      </div>

      </form>
    </div>
      

      <Footer />
    </div>
    </>
  );
}
