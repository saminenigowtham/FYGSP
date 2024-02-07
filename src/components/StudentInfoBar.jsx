// YourComponent.jsx

import React from 'react';
// small bar
const PersonalInfo = () => {
  const data = [
    { label: 'Name', value: 'John Doe' },
    { label: 'Age', value: 25 },
    { label: 'Location', value: 'City, Country' },
    // Add more data as needed
  ];

  return (
    <div className='flex flex-col sm:flex-row'>
      <div className="p-4 sm:h-screen border-b-slate-50 border-2 m-2 ml-6 bg-[#e9d8de] lg:max-w-xl rounded-md shadow-md relative" style={{ flex: '1 1 0%' }}>
        <div className='w-full rounded-t-md bg-[#811338] h-20 absolute top-0 left-0 right-0'></div>
        {/* Large Box */}
        <div className="flex flex-col ">
          <div className="flex justify-center py-4 px-20">
            <div className="rounded-full overflow-hidden h-20 w-20 flex-shrink-0 mr-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3RFDZM21teuCMFYx_AROjt-AzUwDBROFww&usqp=CAU"
                alt="User Avatar"
                className="rounded-full absolute  border-white shadow-lg border-2 overflow-hidden h-20 w-20 flex-shrink-0 mr-4 object-cover"
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
      <div className='flex w-full justify-center h-screen overflow-y-scroll  items-center my-2 mx-0 '>
        <div className="flex-col  bg-[#edeef2] space-y-4 border-b-slate-50 shadow-md rounded-lg border-2 m-2 ml-1 mr-0 w-full h-full ">
          {/* First Box */}
          <div className='w-full rounded-t-md bg-[#811338] h-20'>
            <h1 className="text-3xl text-white font-mono italic font-thin  mb-4 pt-8 pb-8 px-2">Personal Information</h1>
          </div>

          <div className='flex bg-[#edeef2]  justify-center items-center'>

            <div className="flex-col">
              <div className='h-full rounded-xl  lg:px-10 px-2 '>
                <h1 className="text-lg rounded-md font-bold shadow-md h-12 justify-items-center mb-4 mt-4 bg-red-200 px-1 py-2">Personal Details</h1></div>

              <form>


                {/* Flex layout with 4 rows, 2 columns */}
                <div className="flex flex-wrap">
                  {/* First column */}

                  <div className="w-full sm:w-1/2 mb-4 ">

                    <label className="block text-sm font-semibold pr-1 text-gray-600 pl-10">Name</label>
                    <input type="text" className="lg:w-2/4 mx-10 w-4/5 border rounded-md px-3 py-2" />
                  </div>

                  {/* Second column */}
                  <div className="w-full sm:w-1/2 mb-4">
                    <label className="block text-sm font-semibold pr-1 text-gray-600 pl-10">Department Name</label>
                    <input type="text" className="lg:w-2/4 mx-10 w-4/5 border rounded-md px-3 py-2" />
                  </div>

                  {/* Third column */}
                  <div className="w-full sm:w-1/2 mb-4">
                    <label className="block text-sm font-semibold px-10 text-gray-600">Section</label>
                    <input type="text" className="lg:w-2/4 w-4/5  mx-10 border rounded-md px-3 py-2" />
                  </div>

                  {/* Fourth column */}
                  <div className="w-full sm:w-1/2 mb-4">
                    <label className="block text-sm font-semibold px-10 text-gray-600">Register Number</label>
                    <input type="text" className="lg:w-2/4 w-4/5 mx-10  border rounded-md px-3 py-2" />
                  </div>

                  {/* Fifth column */}
                  <div className="w-full sm:w-1/2 mb-4">
                    <label className="block text-sm font-semibold px-10 text-gray-600">Religion</label>
                    <input type="text" className="lg:w-2/4 w-4/5  mx-10 border rounded-md px-3 py-2" />
                  </div>

                  {/* Sixth column */}
                  <div className="w-full sm:w-1/2 mb-4">
                    <label className="block text-sm font-semibold text-gray-600 px-10">Community</label>
                    <input type="text" className="lg:w-2/4 w-4/5  border rounded-md  mx-10 px-3 py-2" />
                  </div>

                  {/* Seventh column */}
                  <div className="w-full sm:w-1/2 mb-4">
                    <label className="block text-sm font-semibold text-gray-600 px-10">Life Goal</label>
                    <input type="text" className="lg:w-2/4 w-4/5  border rounded-md mx-10 px-3 py-2" />
                  </div>

                  {/* Eighth column */}
                  <div className="w-full sm:w-1/2 mb-4">
                    <label className="block text-sm font-semibold px-10 text-gray-600">Blood Group</label>
                    <input type="text" className="lg:w-2/4 w-4/5 mx-10  border rounded-md px-3 py-2" />
                  </div>
                </div>
              </form>

              {/* Parent Details Form */}
              {/* Parent Details Form */}
              <form className='w-full'>
                <div className='h-full rounded-xl lg:px-10 px-2'>
                  <h1 className="text-lg rounded-md font-bold shadow-md h-12 justify-items-center mb-4 mt-4 bg-red-200 px-2 py-2">Parent Details</h1>
                </div>

                {/* Rounded rectangle around image and details */}
                <div className="rounded-xl lg:w-3/4 md:w-full px-4 bg-gray-100 p-4 mx-auto shadow-lg mb-5">
                  <div className="flex flex-col lg:flex-row">
                    {/* Left column for image */}
                    <div className="w-full lg:w-1/2 mb-2 flex justify-center">
                      <div className="rounded-full overflow-hidden">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3RFDZM21teuCMFYx_AROjt-AzUwDBROFww&usqp=CAU" alt="Parent Image" className="w-full h-full object-cover" />
                      </div>
                    </div>

                    {/* Right column for parent details */}
                    <div className="w-full lg:w-1/2 mb-4">
                      {/* First detail */}
                      <div className="w-full sm:w-3/4 mb-4">
                        <label className="block text-sm font-semibold px-10 text-gray-600">Father's Name</label>
                        <input type="text" className="w-full border mx-2 lg:mx-10 rounded-md px-3 py-2" />
                      </div>

                      {/* Second detail */}
                      <div className="w-full sm:w-3/4 mb-4">
                        <label className="block text-sm px-10 font-semibold text-gray-600">Phone Number</label>
                        <input type="text" className="w-full mx-2 lg:mx-10 border rounded-md px-3 py-2" />
                      </div>

                      {/* Third detail */}
                      <div className="w-full sm:w-3/4 mb-4">
                        <label className="block text-sm px-10 font-semibold text-gray-600">Occupation</label>
                        <input type="text" className="w-full mx-2 lg:mx-10 border rounded-md px-3 py-2" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rounded rectangle around image and details */}
                <div className="rounded-xl lg:w-3/4 md:w-full px-4 bg-gray-100 p-4 mx-auto shadow-lg mb-5">
                  <div className="flex flex-col lg:flex-row">
                    {/* Left column for image */}
                    <div className="w-full lg:w-1/2 mb-2 flex justify-center">
                      <div className="rounded-full overflow-hidden">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3RFDZM21teuCMFYx_AROjt-AzUwDBROFww&usqp=CAU" alt="Parent Image" className="w-full h-full object-cover" />
                      </div>
                    </div>

                    {/* Right column for parent details */}
                    <div className="w-full lg:w-1/2 mb-4">
                      {/* First detail */}
                      <div className="w-full sm:w-3/4 mb-4">
                        <label className="block text-sm font-semibold px-10 text-gray-600">Mother's Name</label>
                        <input type="text" className="w-full border mx-2 lg:mx-10 rounded-md px-3 py-2" />
                      </div>

                      {/* Second detail */}
                      <div className="w-full sm:w-3/4 mb-4">
                        <label className="block text-sm px-10 font-semibold text-gray-600">Phone Number</label>
                        <input type="text" className="w-full mx-2 lg:mx-10 border rounded-md px-3 py-2" />
                      </div>

                      {/* Third detail */}
                      <div className="w-full sm:w-3/4 mb-4">
                        <label className="block text-sm px-10 font-semibold text-gray-600">Occupation</label>
                        <input type="text" className="w-full mx-2 lg:mx-10 border rounded-md px-3 py-2" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rounded rectangle around image and details */}
                <div className="rounded-xl lg:w-3/4 md:w-full px-4 bg-gray-100 p-4 mx-auto shadow-lg">
                  <div className="flex flex-col lg:flex-row">
                    {/* Left column for image */}
                    <div className="w-full lg:w-1/2 mb-2 flex justify-center">
                      <div className="rounded-full overflow-hidden">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3RFDZM21teuCMFYx_AROjt-AzUwDBROFww&usqp=CAU" alt="Parent Image" className="w-full h-full object-cover" />
                      </div>
                    </div>

                    {/* Right column for parent details */}
                    <div className="w-full lg:w-1/2 mb-4">
                      {/* First detail */}
                      <div className="w-full sm:w-3/4 mb-4">
                        <label className="block text-sm font-semibold px-10 text-gray-600">Guardian's Name</label>
                        <input type="text" className="w-full border mx-2 lg:mx-10 rounded-md px-3 py-2" />
                      </div>

                      {/* Second detail */}
                      <div className="w-full sm:w-3/4 mb-4">
                        <label className="block text-sm px-10 font-semibold text-gray-600">Phone Number</label>
                        <input type="text" className="w-full mx-2 lg:mx-10 border rounded-md px-3 py-2" />
                      </div>

                      {/* Third detail */}
                      <div className="w-full sm:w-3/4 mb-4">
                        <label className="block text-sm px-10 font-semibold text-gray-600">Occupation</label>
                        <input type="text" className="w-full mx-2 lg:mx-10 border rounded-md px-3 py-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </form>





              <form>
                <div className='h-full rounded-xl  lg:px-10 px-2 '>
                  <h1 className="text-lg rounded-md font-bold shadow-md h-12 justify-items-center mb-4 mt-4 bg-red-200 px-2 py-2">Address</h1></div>

                {/* Flex layout with 2 rows, 2 columns for Address */}
                <div className="">
                  {/* First column */}
                  <div className="w-full sm:w-1/2 mb-4">
                    <label className="block text-sm font-semibold px-10 text-gray-600">Permanent Address</label>
                    <input type="text" className="w-4/5 border h-fit mx-10 lg:w-full rounded-md px-3 py-2" />
                  </div>

                  {/* Second column */}
                  <div className="w-full sm:w-1/2 mb-4">
                    <label className="block text-sm font-semibold px-10 text-gray-600">Communication Address</label>
                    <input type="text" className="w-4/5 border h-fit mx-10 lg:w-full rounded-md px-3 py-2" />
                  </div>
                  <div className='flex flex-wrap'>
                    {/* Third column */}
                    <div className="w-full sm:w-1/2 mb-4">
                      <label className="block text-sm font-semibold px-10 text-gray-600">Number</label>
                      <input type="text" className="sm:w-3/5 lg:w-2/5 border mx-10 rounded-md px-3 py-2" />
                    </div>

                    {/* Fourth column */}
                    <div className="w-full sm:w-1/2 mb-4">
                      <label className="block text-sm font-semibold px-10 text-gray-600">Alternative Number</label>
                      <input type="text" className="sm:w-3/5 lg:w-2/5  border mx-10 rounded-md px-3 py-2" />
                    </div></div>
                </div>
              </form>

              <form>
                <div className='h-full rounded-xl lg:px-10 px-2'>
                  <h1 className="text-lg rounded-md font-bold shadow-md h-12 justify-items-center mb-4 mt-4 bg-red-200 px-2 py-2">Academic Details</h1>
                </div>

                {/* Flex layout with 2 rows, 2 columns for Address */}
                <div className="">
                  {/* First column */}
                  {/* Second column */}
                  <div className="w-full sm:w-1/2 mb-4">
                    <label className="block text-sm font-semibold px-10 text-gray-600">12th/Previous Institution Name</label>
                    <input type="text" className="w-4/5 border h-fit mx-10 lg:w-full rounded-md px-3 py-2" />
                  </div>
                  <div className='flex flex-wrap'>
                    {/* Third column */}
                    <div className="w-full sm:w-1/2 mb-4">
                      <label className="block text-sm font-semibold px-10 text-gray-600">10th Percentage</label>
                      <input type="text" className="sm:w-3/5 lg:w-2/5 border mx-10 rounded-md px-3 py-2" />
                    </div>

                    {/* Fourth column */}
                    <div className="w-full sm:w-1/2 mb-4">
                      <label className="block text-sm font-semibold px-10 text-gray-600">12th Percentage</label>
                      <input type="text" className="sm:w-3/5 lg:w-2/5 border mx-10 rounded-md px-3 py-2" />
                    </div>
                  </div>
                </div>
              </form>


            </div>
          </div>
        </div>
        {/* Second Box */}
      </div>
    </div>


  );
};

export default PersonalInfo;
