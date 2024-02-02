// import styles from "/src/components/styles.css"
export default function StudentInfoBar(){
    // functions



    return (
        // html tags
        <>
        <div className="flex">
        {/* this is the side info bar about student */}
        <div><h1>hello</h1></div>
        {/* this is the form about the info */}
        <div className="h-3/4 overflow-y-auto">
      <div className="flex justify-center items-center max-h-full bg-gray-200 max-w-full">
        <div className="bg-white p-8 shadow-md rounded-md w-max">
        <div className="w-full rounded-t-md bg-[#811338] h-20">
        <h1 className="text-3xl font-bold mb-4 pt-8 pb-8 px-2">Personal Information</h1>
        </div>
          <form>
            <h1 className="text-lg font-bold mb-4 mt-4 bg-red-200 px-2">Personal Details</h1>

            {/* Flex layout with 4 rows, 2 columns */}
            <div className="flex flex-wrap">
              {/* First column */}
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-sm font-semibold text-gray-600">Name</label>
                <input type="text" className="w-4/5 border rounded-md px-3 py-2" />
              </div>

              {/* Second column */}
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-sm font-semibold text-gray-600">Department Name</label>
                <input type="text" className="w-4/5 border rounded-md px-3 py-2" />
              </div>

              {/* Third column */}
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-sm font-semibold text-gray-600">Section </label>
                <input type="text" className="w-4/5 border rounded-md px-3 py-2" />
              </div>

              {/* Fourth column */}
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-sm font-semibold text-gray-600">Register Number</label>
                <input type="text" className="w-4/5 border rounded-md px-3 py-2" />
              </div>

              {/* Fifth column */}
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-sm font-semibold text-gray-600">Religion</label>
                <input type="text" className="w-4/5 border rounded-md px-3 py-2" />
              </div>

              {/* Sixth column */}
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-sm font-semibold text-gray-600">Community</label>
                <input type="text" className="w-4/5 border rounded-md px-3 py-2" />
              </div>

              {/* Seventh column */}
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-sm font-semibold text-gray-600">Life Goal</label>
                <input type="text" className="w-4/5 border rounded-md px-3 py-2" />
              </div>

              {/* Eighth column */}
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-sm font-semibold text-gray-600">Blood Group</label>
                <input type="text" className="w-4/5 border rounded-md px-3 py-2" />
              </div>
            </div>
          </form>

         <form>
            <h1 className="text-lg font-bold mb-4 bg-red-200 px-2">Parent Details</h1>

            {/* Flex layout with 3 rows, 3 columns for Parent Details */}
            <div className="flex flex-wrap">
              {/* First column */}
              <div className="w-full sm:w-1/3 lg:w-1/3 mb-4">
                <label className="block text-sm font-semibold text-gray-600">Father Name</label>
                <input type="text" className="w-4/5 border rounded-md px-3 py-2" />
              </div>

              {/* Second column */}
              <div className="w-full sm:w-1/3 lg:w-1/3 mb-4">
                <label className="block text-sm font-semibold text-gray-600">phone Number</label>
                <input type="text" className="w-4/5 border rounded-md px-3 py-2" />
              </div>

              {/* Third column */}
              <div className="w-full sm:w-1/3 lg:w-1/3 mb-4">
                <label className="block text-sm font-semibold text-gray-600">Occupation</label>
                <input type="text" className="w-4/5 border rounded-md px-3 py-2" />
              </div>

              {/* Fourth column */}
              <div className="w-full sm:w-1/3 lg:w-1/3 mb-4">
                <label className="block text-sm font-semibold text-gray-600">Mother Name</label>
                <input type="text" className="w-4/5 border rounded-md px-3 py-2" />
              </div>

              {/* Fifth column */}
              <div className="w-full sm:w-1/3 lg:w-1/3 mb-4">
                <label className="block text-sm font-semibold text-gray-600">Occupation</label>
                <input type="text" className="w-4/5 border rounded-md px-3 py-2" />
              </div>

              {/* Sixth column */}
              <div className="w-full sm:w-1/3 lg:w-1/3 mb-4">
                <label className="block text-sm font-semibold text-gray-600">Phone Number</label>
                <input type="text" className="w-4/5 border rounded-md px-3 py-2" />
              </div>
            </div>
          </form>

        <form>
            <h1 className="text-lg font-bold mb-4 bg-red-200 px-2">Address</h1>

            {/* Flex layout with 2 rows, 2 columns for Address */}
            <div className="flex flex-wrap">
              {/* First column */}
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-sm font-semibold text-gray-600">Permanent Address</label>
                <input type="text" className="w-4/5 border rounded-md px-3 py-2" />
              </div>

              {/* Second column */}
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-sm font-semibold text-gray-600">Communication Address</label>
                <input type="text" className="w-4/5 border rounded-md px-3 py-2" />
              </div>

              {/* Third column */}
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-sm font-semibold text-gray-600">Number</label>
                <input type="text" className="w-4/5 border rounded-md px-3 py-2" />
              </div>

              {/* Fourth column */}
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-sm font-semibold text-gray-600">Alternative Number</label>
                <input type="text" className="w-4/5 border rounded-md px-3 py-2" />
              </div>
            </div>
          </form>

      </div>
      
        </div>
        </div>
        </div>
        
        </>
    )
}