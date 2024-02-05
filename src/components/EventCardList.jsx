import React, { useState } from 'react';

const EventDetailCard = ({ eventData }) => {
    const [eventName] = useState(eventData.eventName || 'Event Information');
    const [eventType] = useState(eventData.eventType || 'Type of Event');
    const [eventDate] = useState(eventData.eventDate || 'Select event date');
    const [eventTime] = useState(eventData.eventTime || 'Select event time');
    const [eventVenue] = useState(eventData.eventVenue || 'Enter event venue');
    const [eventSummary] = useState(eventData.eventSummary || 'Enter event summary');
    const [file, setFile] = useState(null);

    const handleViewFile = () => {
        // Handle file viewing logic here
        // For simplicity, this example opens the file in a new tab
        if (file) {
            window.open(file.fileURL, '_blank');
        }
    };

    const handleDownloadFile = () => {
        // Handle file downloading logic here
        if (file) {
            const downloadLink = document.createElement('a');
            downloadLink.href = file.fileURL;
            downloadLink.download = file.fileName; // You can customize the filename
            downloadLink.click();
        }
    };

    return (
        <div className="max-w-md bg-[#efebea] rounded-xl shadow-md overflow-hidden md:max-w-xl mt-8">
            <div className="p-3">
                <div className="flex mb-2">
                    <label className="w-1/2 pr-2">
                        Event Name:
                        <div className="mt-1 p-2 border rounded-md border-gray-700 rounded-xl bg-gray-300 w-full">{eventName}</div>
                    </label>

                    <label className="w-1/2 pl-2">
                        Type of Event:
                        <div className="mt-1 p-2 border rounded-md border-gray-700 rounded-xl bg-gray-300 w-full">{eventType}</div>
                    </label>
                </div>

                <div className="flex flex-wrap mb-4">
                    <div className="w-full sm:w-1/2 pr-2">
                        <label className="block mb-4">
                            Date of Event:
                            <div className="mt-1 p-2 border rounded-md border-gray-700 rounded-xl bg-gray-300 w-full">{eventDate}</div>
                        </label>
                    </div>

                    <div className="w-full sm:w-1/2 pr-2">
                        <label className="block mb-4">
                            Venue:
                            <div className="mt-1 p-2 border rounded-md border-gray-700 rounded-xl bg-gray-300 w-full">{eventVenue}</div>
                        </label>
                    </div>

                    <label className="block mb-4">
                        Event Summary:
                        <div className="mt-1 p-2 border rounded-md border-gray-700 rounded-xl bg-gray-300 w-full">{eventSummary}</div>
                    </label>

                </div>


                {file && (
                    <div className="mt-4">
                        <button
                            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-700 mr-2"
                            onClick={handleViewFile}
                        >
                            View File
                        </button>

                        <button
                            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
                            onClick={handleDownloadFile}
                        >
                            Download File
                        </button>
                    </div>
                )}

                {!file && (
                    <div className="mt-4">
                        <p>No file submitted yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

const App = () => {
    const eventDataArray = [
        {
            eventName: 'Event 1',
            eventType: 'Conference',
            eventDate: '2024-02-10',
            eventTime: '18:00',
            eventVenue: 'Venue 1',
            eventSummary: 'Summary 1',
        },
        {
            eventName: 'Event 2',
            eventType: 'Workshop',
            eventDate: '2024-02-15',
            eventTime: '20:00',
            eventVenue: 'Venue 2',
            eventSummary: 'Summary 2',
        },
        // Add more events as needed
    ];

    return (
        <div>
            {eventDataArray.map((event, index) => (
                <EventDetailCard key={index} eventData={event} />
            ))}
        </div>
    );
};

export default App;