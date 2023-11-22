import { useState } from "react";
import axios from "axios";


export default function DisplayStudentDetails(props){


    function getDirectLinkFromShareableLink(shareableLink) {
        try {
          const fileIdMatch = shareableLink.match(/\/file\/d\/(.*?)\//);
          if (fileIdMatch && fileIdMatch[1]) {
            const fileId = fileIdMatch[1];
            return `https://drive.google.com/uc?id=${fileId}`;
          } else {
            throw new Error("Invalid shareable link format");
          }
        } catch (error) {
          console.error("Error processing shareable link:", error.message);
          return null;
        }
      }


        // const serverPath1 = "http://127.0.0.1:5000"
  const serverPath1 = "https://fgspserver.onrender.com"




      const [OpenCommentBox , setOpenCommentBox] = useState(false);
      const [comment, setComment] = useState("");
      const [Error1, setError1] = useState("");
      const [isSending, setisSending] = useState(false);
      const [successMessage, setSuccessMessage] = useState("");


      const sendComment = async(e)=>{
        e.preventDefault();

        try{

           const data = {
            "message" : comment
           }

        setisSending(true);

        const response = await axios.post(serverPath1+"/sendMessage/"+props.mailId, data)
        console.warn(response.data);
        if(response.data.message == "SENT")
        {
          setSuccessMessage("Message sent successfully!");
          setOpenCommentBox(false);
          setisSending(false);
          setComment("");

          setTimeout(() => {
            setSuccessMessage("");
          }, 2000);
        }
        else{
          setError1("Not sent try again.")
        }
      }
      catch(error){
        setError1("Not sent try agin.")
      }
      }





    return(
        <>

        <div className="flex flex-col items-center  p-8 lg:w-96 w-80 bg-white border  rounded-xl">


            <div className="w-44 h-44  overflow-hidden rounded-full border-red-700 border-4">
                         <img 
                        // src={props.img}
                        src={getDirectLinkFromShareableLink(props.img)}
                        alt=""
                        className="" />
            </div>

        <div className=" flex flex-col items-center">
        <div className="font-bold text-3xl flex flex-col break-words break-all md:pt-10">
          <p>{props.name}</p>
        </div>

        <div className="font-semibold text-lg pt-2">
          <p>Register No : {props.regNo}</p>
        </div>

        <div className="font-medium text-lg">
          <p>Section : {props.section}&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </div>

        <div className="font-medium pt-6  flex flex-col break-words break-all">
          <p>{props.mailId}</p>
        </div>

        <div className="font-medium text-lg">
          <p>Phone No : {props.phoneNo}</p>
        </div>

        

        <div className="font-medium text-lg pb-6">
          <p>{props.address}</p>
        </div>

        {!OpenCommentBox && 
        
        <button 


        className={`bg-red-900 flex justify-around text-white px-6 py-2 rounded-md my-2 text-lg ${isSending ? 'cursor-none':'cursor-pointer'} `}
        onClick={()=>{
          setOpenCommentBox(true);
        }}
        >
        { isSending ? "Sending..." : "Send Comment"}
        </button>}

        {OpenCommentBox && 
        <div>
        <textarea
            className="border-2 h-16 px-4 w-full bg-gray-200 mb-4"
            type="text"
            rows={2}
            placeholder="Message"
            value={comment}
            required
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="flex justify-around">
          <button 
          onClick={sendComment}
          className="bg-red-900 flex justify-around text-white px-6 py-2 rounded-md my-2 text-lg"
          >Send</button>

          <button 
          onClick={()=>{
            setOpenCommentBox(false);
            setisSending(false);
            setComment("")
          }}
          className="bg-red-900 flex justify-around text-white px-6 py-2 rounded-md my-2 text-lg"
          >Cancel</button>
          </div>
          </div>
          }

          {successMessage && <p className="text-green-600">{successMessage}</p>}

          {Error1 && <p className="text-red-600">{Error1}</p>}


          </div>
        </div>
        </>
    )
}