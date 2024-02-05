// YourComponent.js
// // YourComponent.jsx

//  import {useState} from 'react';
// react icons


// small bar
import { useState } from 'react';


const MentorMeetings = () => {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({
        serialNumber: '',
        semester: '',
        remarks: '',
        mentorName: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleAddData = () => {
        if (formData.semester && formData.remarks && formData.mentorName) {
            setData((prevData) => [...prevData, { ...formData }]);
            setFormData({
                serialNumber: '',
                semester: '',
                remarks: '',
                mentorName: '',
            });
        }
    };
    // const dataStudent = [
    //     { label: 'Name', value: 'John Doe' },
    //     { label: 'Age', value: 25 },
    //     { label: 'Location', value: 'City, Country' },
    //     // Add more data as needed
    // ];

    return (

        <div className='sm:flex '>
            <div className="p-4 sm:h-screen border-b-slate-50 shadow-md  border-2 m-2 ml-6 bg-[#e9d8de] lg:max-w-xl rounded-md shadow-md relative">
                <div className='w-full rounded-t-md bg-[#811338] h-20 absolute top-0 left-0 right-0'></div>
                {/* Large Box */}
                <div className="flex flex-col ">
                    <div className="flex justify-center py-4 px-20">
                        <div className="rounded-full overflow-hidden h-20 w-20 flex-shrink-0 mr-4">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3RFDZM21teuCMFYx_AROjt-AzUwDBROFww&usqp=CAU"
                                alt="User Avatar"
                                className="rounded-full absolute overflow-hidden h-20 w-20 flex-shrink-0 mr-4 object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Header Design */}
                <div className="mb-10 text-center">
                    <h2 className="text-2xl font-bold" style={{ wordBreak: 'break-all' }}>Jeevan S</h2>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col p-0 text-left ">
                        <p className="mb-4 text-sm font-semibold whitespace-nowrap" style={{ color: 'rgba(0,0,0)' }}>Register Number</p>
                        <p className=" text-sm font-semibold" style={{ color: 'rgba(0,0,0)' }}>Section</p>
                    </div>
                    <div className="flex flex-col p-0 text-left">
                        <p className="mb-4 text-sm text-gray-600">43110001</p>
                        <p className="text-sm text-gray-600" >E3</p>
                    </div>
                    <div className="flex flex-col text-left">
                        <p className="text-sm font-semibold" style={{ color: 'rgba(0,0,0)' }}>Email</p>
                    </div>
                    <div className="flex flex-col p-0 text-left">
                        <p className=" text-sm text-gray-600" style={{ wordBreak: 'break-all' }}>jeevan@gmail.com</p>
                    </div>
                    <div className="flex flex-col p-0 text-left">
                        <p className=" text-sm font-semibold" style={{ color: 'rgba(0,0,0)' }}>Phone</p>
                    </div>
                    <div className="flex flex-col p-0 text-left">
                        <p className="text-sm text-gray-600">07676308768</p>
                    </div>
                </div>
                <div className="flex justify-center mt-4">
                    <button className="bg-[#811338] text-white px-4 py-2 rounded-md">
                        BACK
                    </button>
                </div>
            </div>


            {/* Largest Table */}
            <div className='flex w-full justify-center items-center my-2 mx-0 '>
                <div className="flex-col  bg-[#edeef2] space-y-10 border-b-slate-50 shadow-md rounded-lg border-2 m-2 ml-4 mr-4 w-full h-full ">
                    {/* First Box */}
                    <div className='w-full rounded-t-md bg-[#811338] h-20'>
                        <div className='text-xl pt-7 px-6 font-semibold'>Rewards</div>
                    </div>

                    <div className='flex bg-[#edeef2]  justify-center items-center'>

                        <div>

                            <div className=" p-4 rounded-md w-full">
                                {/* Buttons arranged in 4 rows and 2 columns */}
                                <div className="flex-col space-y-8">
                                    {/* add the code here  */}
                                    <div className="p-4 w-full max-w-screen-lg mx-auto rounded-md overflow-hidden ">
                                        <table className="w-full border-collapse border border-gray-400 whitespace-normal text-center border-opacity-100 border-none">
                                            <thead>
                                                <tr className='bg-[#811338]'>
                                                    <th className="border border-gray-400 p-0">S.no</th>
                                                    <th className="border border-gray-400 p-2">Semester</th>
                                                    <th className="border border-gray-400 p-2">Remarks</th>
                                                    <th className="border border-gray-400 p-2">Mentor Name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.map((item, index) => (
                                                    <tr key={index} className={index % 2 === 0 ? 'rounded-lg' : 'bg-[#f9afb0] rounded-lg'}>
                                                        <td className="border border-gray-400 p-2">{index + 1}</td>
                                                        <td className="border border-gray-400 p-2">{item.semester}</td>
                                                        <td className="border border-gray-400 p-2 text-left">{item.remarks}</td>
                                                        <td className="border border-gray-400 p-2">{item.mentorName}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                        <div className="mt-4">
                                            {/* <h2 className="text-lg font-bold mb-2">add the date </h2> */}
                                            <form className="flex flex-wrap m-8">
                                                <div className="w-full sm:w-1/3 mb-2 sm:mb-0">
                                                    {/* <label className="block text-sm font-semibold text-gray-600 mb-1">Semester</label> */}
                                                    <input
                                                        type="text"
                                                        name="semester"
                                                        placeholder='Semester'
                                                        value={formData.semester}
                                                        onChange={handleInputChange}
                                                        className="w-full border rounded-md px-3 py-2"
                                                    />
                                                </div>

                                                <div className="w-full sm:w-1/3 mb-2 sm:mb-0">
                                                    {/* <label className="block text-sm font-semibold text-gray-600 mb-1">Remarks</label> */}
                                                    <input
                                                        type="text"
                                                        name="remarks"
                                                        placeholder='Remarks'
                                                        value={formData.remarks}
                                                        onChange={handleInputChange}
                                                        className="w-full border rounded-md px-3 py-2"
                                                    />
                                                </div>

                                                <div className="w-full sm:w-1/3 mb-2 sm:mb-0">
                                                    {/* <label className="block text-sm font-semibold text-gray-600 mb-1">Mentor Name</label> */}
                                                    <input
                                                        type="text"
                                                        name="mentorName"
                                                        placeholder='Mentor Name'
                                                        value={formData.mentorName}
                                                        onChange={handleInputChange}
                                                        className="w-full border rounded-md px-3 py-2"
                                                    />
                                                </div>

                                                <button
                                                    type="button"
                                                    onClick={handleAddData}
                                                    className="bg-blue-500 text-white px-4 py-2 rounded-md ml-auto "
                                                >
                                                    Add
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Second Box */}
                </div>
            </div>
        </div>
    );
};

export default MentorMeetings;