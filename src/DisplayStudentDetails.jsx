import { useState } from "react";


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



      const [OpenCommentBox , setOpenCommentBox] = useState(false);
      const [comment, setComment] = useState("");



      const sendComment = async(e)=>{
        e.preventDefault();

        const response = axait axios.post()
      }





    return(
        <>

        <div className="flex flex-col items-center gap-5 p-10 lg:w-96 w-80 bg-white border  rounded-xl">


            <div className="w-40 h-40  overflow-hidden rounded-full">
                         <img 
                        // src={props.img}
                        src={getDirectLinkFromShareableLink(props.img)}
                        alt=""
                        className="" />
            </div>

        <div className="font-bold text-4xl flex flex-col break-words break-all md:pt-10">
          <p>{props.name}</p>
        </div>

        <div className="font-semibold text-xl">
          <p>{props.regNo}</p>
        </div>

        <div className="font-medium text-lg flex flex-col break-words break-all">
          <p>{props.mailId}</p>
        </div>

        <div className="font-medium text-lg">
          <p>{props.phoneNo}</p>
        </div>

        <div className="font-medium text-lg">
          <p>Section : {props.section}</p>
        </div>

        <div className="font-medium text-lg">
          <p>{props.address}</p>
        </div>

        {!OpenCommentBox && 
        <button 
        className="bg-red-900 flex justify-around text-white px-6 py-2 rounded-md my-2 text-lg"
        onClick={()=>{
          setOpenCommentBox(true);
        }}
        >
        Send Comment
        </button>}

        {OpenCommentBox && 
        <div>
        <input
            className="border-2 h-12 px-4 w-full bg-gray-200 mb-4"
            type="text"
            placeholder="Message"
            value={comment}
            required
            onChange={(e) => setComment(e.target.value)}
          />
          <button 
          onClick={sendComment}
          className="bg-red-900 flex justify-around text-white px-6 py-2 rounded-md my-2 text-lg"
          >Send</button>
          </div>
          }

        </div>
        </>
    )
}