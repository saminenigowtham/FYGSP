// YourComponent.js
// // YourComponent.jsx

//  import {useState} from 'react';
// react icons


// small bar
import { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';

const ExtraCredits = () => {
    // const [data, setData] = useState([]);
    // const [formData, setFormData] = useState({
    //     serialNumber: '',
    //     courseId: 'adxfgchjvytdr3456yfhgfdxcg',
    //     courseName: 'byeaucinovbyuiancowmysbevnrcbsvencmbyosvenrbyvunseirmibvosunecvbensf',
    //     yearOfStudy: '234567654323456765432345678765432',
    //     grade: '3434343'
    // });

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    // };

    // const handleAddData = () => {
    //     if (formData.courseId && formData.courseName && formData.grade) {
    //         setData((prevData) => [...prevData, { ...formData }]);
    //         setFormData({
    //             serialNumber: '',
    //             courseId: '',
    //             courseName: '',
    //             yearOfStudy: '',
    //             grade: ''
    //         });
    //     }
    // };
    // const dataStudent = [
    //     { label: 'Name', value: 'John Doe' },
    //     { label: 'Age', value: 25 },
    //     { label: 'Location', value: 'City, Country' },
    //     // Add more data as needed
    // ];
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);
    const data = [
        {
            "courseId": "101",
            "courseName": "Introduction to Computer Science",
            "yearOfStudy": "1st",
            "grade": "A"
        },
        {
            "courseId": "202",
            "courseName": "Data Structures and Algorithms",
            "yearOfStudy": "2nd",
            "grade": "B+"
        },
        {
            "courseId": "303",
            "courseName": "Database Management Systems",
            "yearOfStudy": "3rd",
            "grade": "A-"
        },
        {
            "courseId": "404",
            "courseName": "Software Engineering",
            "yearOfStudy": "4th",
            "grade": "A+"
        }
    ]


    return (
        <>
            <div className='sm:flex '>
                <div className="p-4 sm:h-screen border-b-slate-50  border-2 lg:my-0 m-2 lg:ml-6 bg-[#e9d8de] lg:max-w-xl rounded-md shadow-md relative">
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
                <div className='flex w-full justify-center h-screen overflow-y-scroll lg:my-0 items-center my-2 mx-0 '>
                    <div className="flex-col  bg-[#edeef2] space-y-10 border-b-slate-50 shadow-md rounded-lg border-2 m-2 ml-4 mr-4 w-full h-full ">
                        {/* First Box */}
                        <div className='w-full rounded-t-md bg-[#811338] h-20 '>
                            <div className='text-xl pt-7 px-6 font-semibold'>Additional Cedits</div>
                        </div>
                        <div className="flex bg-[#edeef2]">
                            <div className="p-4 rounded-md w-full max-w-screen-lg mx-auto mt-45">
                                {/* Buttons arranged in 2 rows and 1 column */}
                                <div className="flex-col space-y-8">
                                    {/* First row */}
                                    <div className="flex flex-wrap mb-4">
                                        <div className="w-full  mb-4">
                                            <div className="flex-col">
                                                <div className="flex-col justify-center ml-auto">
                                                    <label className="block text-xl font-semibold text-gray-600 rounded-md p-2 flex space-x-5" onClick={() => setShowDropdown(!showDropdown)}>
                                                        Curricular
                                                        <MdArrowDropDown />
                                                    </label>
                                                </div>
                                            </div>
                                            <select className={`w-full border-2 border-gray-800 rounded-md sm:w-1/2 px-3 py-2 mt-4 ${showDropdown ? '' : 'hidden'}`}>
                                                <option value="option1">Semester 1</option>
                                                <option value="option2">Semester 2</option>
                                                <option value="option3">Semester 3</option>
                                                <option value="option4">Semester 4</option>
                                                <option value="option5">Semester 5</option>
                                                <option value="option6">Semester 6</option>
                                                <option value="option7">Semester 7</option>
                                                <option value="option8">Semester 8</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Second row */}
                                    <div className="flex flex-wrap mb-4">
                                        <div className="w-full  mb-4">
                                            <div className="flex-col">
                                                <div className="flex-col justify-center ml-auto">
                                                    <label className="block text-xl font-semibold text-gray-600 rounded-md p-2 flex space-x-5" onClick={() => setShowDropdown2(!showDropdown2)}>
                                                        Co-Curricular
                                                        <MdArrowDropDown />
                                                    </label>
                                                </div>
                                            </div>
                                            <select className={`w-full border-2 border-gray-800 rounded-md sm:w-1/2 px-3 py-2 mt-4 ${showDropdown2 ? '' : 'hidden'}`}>
                                                <option value="option1">Semester 1</option>
                                                <option value="option2">Semester 2</option>
                                                <option value="option3">Semester 3</option>
                                                <option value="option4">Semester 4</option>
                                                <option value="option5">Semester 5</option>
                                                <option value="option6">Semester 6</option>
                                                <option value="option7">Semester 7</option>
                                                <option value="option8">Semester 8</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Third row */}
                                    <div className="flex flex-wrap mb-4">
                                        <div className="w-full mb-4">
                                            <label className="block text-xl font-semibold text-gray-600  rounded-md p-2">Extra Curricular</label>
                                            <div className="p-4 w-full max-w-screen-lg mx-auto rounded-md overflow-hidden">
                                                <div className="overflow-auto max-h-[calc(100vh-8rem)] sm:max-h-full">
                                                    {/* Your table content goes here */}
                                                    <table className="w-full  my-4 border-collapse border border-gray-400 whitespace-normal text-center border-opacity-100 border-none">
                                                        <thead>
                                                            <tr className='bg-[#811338]'>
                                                                <th className="p-0 rounded-tl-2xl">S.no</th>
                                                                {/* <th className="p-2">Course ID</th> */}
                                                                <th className="p-2">Course Name</th>
                                                                <th className="p-2">Year of Study</th>
                                                                <th className="p-2 rounded-tr-xl">grade</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {data.map((item, index) => (
                                                                <tr key={index} className={index % 2 === 0 ? 'rounded-lg' : 'bg-[#f9afb0] rounded-lg'}>
                                                                    <td><p className="px-5 py-2 lg:max-w-md lg:break-all">{index + 1}</p></td>
                                                                    {/* <td><p className="px-5 py-2 lg:max-w-md lg:break-all">{item.courseId}</p></td> */}
                                                                    <td><p className="px-5 py-2 lg:max-w-md lg:break-all">{item.courseName}</p></td>
                                                                    <td><p className="px-5 py-2 lg:max-w-md lg:break-all">{item.yearOfStudy}</p></td>
                                                                    <td><p className="px-5 py-2 lg:max-w-md lg:break-all">{item.grade}</p></td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Second Box */}
                    </div>
                </div>
            </div></>
    );
};

export default ExtraCredits;