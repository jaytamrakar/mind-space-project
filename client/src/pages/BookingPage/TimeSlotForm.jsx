import React, { useState } from 'react';

const TimeSlotForm = () => {
    const timeSlots = [
        { label: '9:00 AM - 10:00 AM', value: '9-10' },
        { label: '10:00 AM - 11:00 AM', value: '10-11' },
        { label: '11:00 AM - 12:00 PM', value: '11-12' },
        // Add more time slots as needed
    ];

    const [selectedTimeSlots, setSelectedTimeSlots] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    const handleTimeSlotChange = (event) => {
        const slotValue = event.target.value;
        if (event.target.checked) {
            setSelectedTimeSlots((prevSelectedTimeSlots) => [
                ...prevSelectedTimeSlots,
                slotValue,
            ]);
        } else {
            setSelectedTimeSlots((prevSelectedTimeSlots) =>
                prevSelectedTimeSlots.filter((slot) => slot !== slotValue)
            );
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform any additional logic or submit the selectedTimeSlots data
        setSubmitted(true);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-4">
                {timeSlots.map((slot) => (
                    <div key={slot.value}>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id={slot.value}
                                value={slot.value}
                                onChange={handleTimeSlotChange}
                                checked={selectedTimeSlots.includes(slot.value)}
                                className="form-checkbox h-5 w-5 text-indigo-600"
                            />
                            <span>{slot.label}</span>
                        </label>
                    </div>
                ))}
            </div>
            <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
            >
                Submit
            </button>
            {submitted && (
                <div className="mt-2">
                    <h2 className="text-lg font-semibold">Selected Time Slots:</h2>
                    <ul className="list-disc list-inside">
                        {selectedTimeSlots.map((slot) => (
                            <li key={slot}>{slot}</li>
                        ))}
                    </ul>
                </div>
            )}
        </form>
    );
};

export default TimeSlotForm;
