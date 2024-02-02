import { useState } from 'react';
const StudentInfoBar = () => {
    const data = [
        { label: 'Name', value: 'John Doe' },
        { label: 'Age', value: 25 },
        { label: 'Location', value: 'City, Country' },
        // Add more data as needed
    ];
    // const eventNames = ["Events Conducted", "Events Attended"];
    // const semister = ["semister 1", "semister 2", "semister 3", "semister 4", "semister 5", "semister 6", "semister 7", "semister 8"]
    // State to track selected semester
    const [selectedSemester, setSelectedSemester] = useState(null);

    // State for event details in the form
    const [eventDetails, setEventDetails] = useState({
        eventName: "",
        eventDate: "",
        // Add more event details as needed
    });

    // Function to handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Process the form data as needed
        console.log("Event Details:", eventDetails);
    };
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
                <div className="mb-4 text-center">
                    <h2 className="text-2xl font-bold">Jeevan</h2>
                </div>

                <div className='flex space-x-10 justify-center items-center'>
                    <div className=''>

                        {data.map((item, index) => (
                            <div key={index} className="flex justify-items-center">
                                <div className="font-bold">{item.label}</div>
                                {/* <div className="text-gray-600">{item.value}</div> */}
                            </div>
                        ))}

                    </div>


                    <div className=''>

                        {data.map((item, index) => (
                            <div key={index} className="flex justify-items-center">
                                {/* <div className="font-bold">{item.label}</div> */}
                                <div className="text-gray-600">{item.value}</div>
                            </div>
                        ))}
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

                    </div>

                    <div className='flex bg-[#edeef2]'>
                        <div className="p-4 rounded-md w-full max-w-screen-lg mx-auto">
                            {/* Buttons arranged in 2 rows and 1 column */}
                            <div className="flex-col space-y-8">
                                {/* First row */}
                                <div className="flex flex-wrap mb-4">

                                    <div className="w-full  mb-4">
                                        <label className="block text-xl font-semibold text-gray-600 bg-red-200 rounded-md p-2">Events Attented</label>
                                        <select className="w-full border rounded-md sm:w-1/2 px-3 py-2 mt-4" onChange={(e) => setSelectedSemester(e.target.value)} >
                                            <option value="option1">Semester 1</option>
                                            <option value="option2">Semester 2</option>
                                            <option value="option1">Semester 3</option>
                                            <option value="option2">Semester 4</option>
                                            <option value="option1">Semester 5</option>
                                            <option value="option2">Semester 6</option>
                                            <option value="option1">Semester 7</option>
                                            <option value="option2">Semester 8</option>
                                            {/* Add options for Semesters 3-8 */}
                                        </select>
                                        {selectedSemester && (
                                            <form onSubmit={handleFormSubmit}>
                                                {/* Your form fields for event details */}
                                                <input
                                                    type="text"
                                                    placeholder="Event Name"
                                                    value={eventDetails.eventName}
                                                    onChange={(e) => setEventDetails({ ...eventDetails, eventName: e.target.value })}
                                                    className="w-full border rounded-md px-3 py-2 mb-2"
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Event Date"
                                                    value={eventDetails.eventDate}
                                                    onChange={(e) => setEventDetails({ ...eventDetails, eventDate: e.target.value })}
                                                    className="w-full border rounded-md px-3 py-2 mb-2"
                                                />
                                                {/* Add more form fields as needed */}
                                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                                                    Submit
                                                </button>
                                            </form>
                                        )}
                                    </div>
                                </div>
                                {/* Second row */}
                                <div className="flex flex-wrap">
                                    <div className="w-full mb-4">
                                        <label className="block text-xl font-semibold text-gray-600 bg-red-200 rounded-md p-2">Events Contriubted</label>
                                        <select className="w-full border rounded-md sm:w-1/2 px-3 py-2 mt-4">
                                            <option value="option1">Semester 1</option>
                                            <option value="option2">Semester 2</option>
                                            <option value="option1">Semester 3</option>
                                            <option value="option2">Semester 4</option>
                                            <option value="option1">Semester 5</option>
                                            <option value="option2">Semester 6</option>
                                            <option value="option1">Semester 7</option>
                                            <option value="option2">Semester 8</option>
                                            {/* Add options for Semesters 3-8 */}
                                        </select>
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

export default StudentInfoBar;