import axios from "axios";
import { useEffect,useState } from "react";
import './Navbar.css'; 
import { FiMenu } from 'react-icons/fi'; // Assuming you want to use the Feather icon pack
import { useNavigate } from "react-router-dom";
import sistlogologin from './assets/sistlogologin.png';
import LoadingScreen from "./shared/Loader";
import DisplayStudentDetails from "./DisplayStudentDetails";
import Footer from "./shared/Footer";

export default function StaffDashboard()
{

    // const serverPath1 = "http://127.0.0.1:5000"
      const serverPath1 = "https://fgspserver.onrender.com"
    
    const [isLoading, setIsLoading] = useState(false);

    const GuideMailId = localStorage.getItem("GuideMailId");
    const [AllStudents, setAllStudents] = useState();
    const [GuideDetails, setGuideDetails] = useState();
    const [img, setImg] = useState();
    const navigate = useNavigate()

    const getGuideData = async(e)=>{
        setIsLoading(true);
        const response = await axios.post(serverPath1+"/getGuideData",{"GuideMailId":GuideMailId})
        console.warn(response.data);
        setGuideDetails(response.data.GuideDetails);
        setAllStudents(response.data.AllStudents);
        // setImg(GuideDetails.IMAGE);
        setIsLoading(false);
    }

    useEffect(()=>{

        if(!GuideMailId){
            navigate("/stafflogin")
        }

          // Function to close the sidebar initially
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  // Close the sidebar on component mount
  closeSidebar();

        getGuideData();
    },[]);




    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const handleMenuClick = () => {
      setSidebarOpen(!isSidebarOpen);
    };
  
    const handleLogout = () => {
      // Implement your logout logic here
      console.log('Logout clicked!');
    };



    // if(GuideMailId){

    return(


        <>
        {isLoading && <LoadingScreen />}
        
        <div className='flex flex-col min-h-screen'>
        
        <div className="">


            <nav className="flex items-center justify-between bg-[#9e1c3f] p-10 py-5">
                    <div className="flex items-center">
                    <a href="/">
                        <img
                        src={sistlogologin}
                        alt="Logo"
                        className="object-scale-down h-35 w-80 px-3 pt-3"
                        />
                    </a>
                    </div>
                    <div className={`lg:flex items-center space-x-10 text-white `}>
                    
                    </div>
                    <div className="flex items-center">
                    <button
                        onClick={handleMenuClick}
                        className="text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#9e1c3f] focus:ring-white"
                    >
                        <FiMenu size={36} />
                    </button>
                    </div>
            </nav>


                {GuideDetails && ( // Check if GuideDetails is not null or undefined
                <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
                    <div className="sidebar-content pt-20">

                    <div className="w-40 h-40  overflow-hidden rounded-full">
                        {GuideDetails.IMAGE && <img 
                        src={GuideDetails.IMAGE} 
                        alt=""
                        className="" />}
                    </div>

                    <div className="pt-10 font-bold text-2xl">
                        <p>{GuideDetails.NAME}</p>
                    </div>

                    <div className="pt-4 pb-10 font-semibold">
                        <p>{GuideDetails.UniversityEMAILID}</p>
                    </div>
                    
                    <button
                    className="bg-red-900 text-white px-6 py-2 rounded-md my-2 text-lg"
                     onClick={()=>{
                        localStorage.removeItem("GuideMailId")
                        navigate("/")
                    }}>Logout</button>
                    </div>
                </div>
                )}
        </div>

        <div className={`flex-grow  pt-24 pb-10 px-10  bg-red-50 md:blur-0 ${isSidebarOpen ? "blur-sm":""}`}>

        <div className={`bg-red-50 flex  flex-wrap gap-8   ${isSidebarOpen ? "lg:px-52 justify-start":"justify-center"}`}>

             {AllStudents &&
                
                AllStudents.map((item)=>{
                    return(
                    <DisplayStudentDetails key={item.mailId} img={item.image} name={item.name} regNo={item.regNo} mailId={item.mailId} phoneNo={item.phoneNo} />
                )})
                

             }       
            {/* <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"></img> */}
            {/* <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"></img> */}

        </div>

        </div>
        {/* <Footer /> */}
        </div>
        </>
    )
    // }
    // else{
    //     navigate("/stafflogin")
    // }
}