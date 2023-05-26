import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';

const CheckAvailability = () => {
    const { doctorId } = useParams();
    console.log(doctorId);
    const selectedDate = new Date();
    const [selectedTime, setSelectedTime] = useState(null);
    const [isTimeSlotAvailable, setIsTimeSlotAvailable] = useState(false);
    const [availabilityMessage, setAvailabilityMessage] = useState('');
    const [selected, setSelected] = useState(new Date());

    const timeSlots = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM'];

    // const handleDateChange = (date) => {
    //     console.log(date);
    //     setSelectedDate(date);
    //     setSelectedTime(null);
    //     setIsTimeSlotAvailable(false);
    //     setAvailabilityMessage('');
    // };

    const handleTimeChange = (time) => {
        setSelectedTime(time);
    };

    const checkAvailability = () => {
        if (selectedTime) {
            // Make the request to the server to check availability for the selected doctor, date, and time
            // You can use an API or mock data for this example
            const isAvailable = true // Replace with the actual response from the server

            if (isAvailable) {
                setIsTimeSlotAvailable(true);
                setAvailabilityMessage('Selected time slot is available for you. Please go to the payment page.');
            } else {
                setIsTimeSlotAvailable(false);
                setAvailabilityMessage('Selected time slot is not available. Please choose another time.');
            }
        } else {
            setAvailabilityMessage('Please select a time slot.');
        }
    };
    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }
    const handlePayment = () => {
        // Proceed to the payment page
        console.log('Proceeding to payment...');
    };
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col w-1/2 bg-gray-100 p-8 rounded-md">
                <h1 className="text-3xl font-bold mb-4">Check Availability</h1>

                <div className="flex items-center justify-center mb-4  bg-green-100">
                    {/* <label className="mr-4 ">Date:</label> */}
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                        value={selectedDate}
                    // footer={footer}
                    />

                    <div className="flex items-center mb-4">
                        {/* <label className="mr-4">Time:</label> */}
                        <div className="flex flex-wrap">
                            <div className="">
                                {footer}
                                Now chose the time
                            </div>
                            <div>


                                {timeSlots.map((time, index) => (
                                    <button
                                        key={index}
                                        className={`${selectedTime === time ? "bg-purple-600 text-white" : "bg-white text-gray-700"
                                            } border rounded-md py-2 px-3 mr-4 mb-4`}
                                        onClick={() => handleTimeChange(time)}
                                    >
                                        {time}
                                    </button>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="bg-purple-600 text-white rounded-md py-2 px-4"
                    onClick={checkAvailability}
                >
                    Check Availability
                </button>
                {availabilityMessage && <p className="mt-4 text-red-500">{availabilityMessage}</p>}
                {isTimeSlotAvailable && (
                    <button
                        className="bg-green-500 text-white rounded-md py-2 px-4 mt-4"
                        onClick={handlePayment}
                    >
                        Proceed to Payment
                    </button>
                )}
            </div>
        </div>
    );



};

export default CheckAvailability;

// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const CheckAvalibility = () => {

//     const [selectedDate, setSelectedDate] = useState(null);
//     const [selectedTime, setSelectedTime] = useState('');

//     const handleDateChange = (date) => {
//         setSelectedDate(date);
//         setSelectedTime('');
//     };

//     const handleTimeChange = (time) => {
//         setSelectedTime(time);
//     };

//     const handleAvailabilityCheck = () => {
//         if (selectedDate && selectedTime) {
//             alert(`Availability Check: Date: ${selectedDate.toLocaleDateString()}, Time: ${selectedTime}`);
//         } else {
//             alert('Please select a date and time before checking availability.');
//         }
//     };

//     return (
//         <div className="container mx-auto px-4 py-8">
//             <h1 className="text-3xl font-bold mb-4">Booking Page</h1>
//             <div className="mb-4">
//                 <label className="block mb-2 font-bold" htmlFor="date">Select a Date:</label>
//                 <DatePicker
//                     id="date"
//                     selected={selectedDate}
//                     onChange={handleDateChange}
//                     dateFormat="dd/MM/yyyy"
//                     className="border border-gray-300 rounded p-2"
//                 />
//             </div>
//             {selectedDate && (
//                 <div className="mb-4">
//                     <label className="block mb-2 font-bold" htmlFor="time">Select a Time Slot:</label>
//                     <select
//                         id="time"
//                         value={selectedTime}
//                         onChange={(e) => handleTimeChange(e.target.value)}
//                         className="border border-gray-300 rounded p-2"
//                     >
//                         <option value="">-- Select Time Slot --</option>
//                         <option value="9:00 AM">9:00 AM</option>
//                         <option value="10:00 AM">10:00 AM</option>
//                         <option value="11:00 AM">11:00 AM</option>
//                         {/* Add more time slots as needed */}
//                     </select>
//                 </div>
//             )}
//             <button
//                 onClick={handleAvailabilityCheck}
//                 disabled={!selectedDate || !selectedTime}
//                 className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${!selectedDate || !selectedTime ? 'opacity-50 cursor-not-allowed' : ''
//                     }`}
//             >
//                 Check Availability
//             </button>
//         </div>
//     );
// };

// export default CheckAvalibility

