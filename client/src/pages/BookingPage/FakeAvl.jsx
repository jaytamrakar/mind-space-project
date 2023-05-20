import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

function FakeAvl() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [availabilityStatus, setAvailabilityStatus] = useState('');
  const [isSlotAvailable, setIsSlotAvailable] = useState(false);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null);
    setAvailabilityStatus('');
    setIsSlotAvailable(false);
  };

  const handleTimeSlotSelect = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
    setAvailabilityStatus('Checking availability...');

    // Simulating API call to check availability
    setTimeout(() => {
      const isAvailable = Math.random() < 0.5; // Randomly determine availability

      setIsSlotAvailable(isAvailable);
      setAvailabilityStatus(isAvailable ? 'Slot is available!' : 'Slot is not available');
    }, 1000);
  };

  const handleBookAppointment = () => {
    // Perform the necessary actions to book the appointment, such as navigating to the payment page
    console.log(selectedDate);
    alert('Appointment booked! ');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col w-1/2 bg-gray-100 p-8 rounded-md">
        <h1 className="text-3xl font-bold mb-4">Check Availability</h1>
        <div className="mb-4 flex">
          <DayPicker
            selected={selectedDate}
            onSelect={handleDateSelect}
            mode="single"
          />

          <div >


            {selectedDate && (

              <div className="mb-4">
                <h2 className="text-lg font-bold">Time Slots</h2>
                <div className="flex flex-wrap">
                  {['10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM'].map((timeSlot) => (
                    <button
                      key={timeSlot}
                      className={`mr-4 mb-2 py-2 px-4 rounded ${selectedTimeSlot === timeSlot ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                        }`}
                      onClick={() => handleTimeSlotSelect(timeSlot)}
                    >
                      {timeSlot}
                    </button>
                  ))}
                </div>
              </div>
            )}

              <div className="mb-4">
                <h3 className="text-lg font-bold">Availability</h3>
            {selectedTimeSlot && (
                <p>{availabilityStatus}</p>
            )}
              </div>

            {isSlotAvailable && (
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                onClick={handleBookAppointment}
              >
                Book Appointment
              </button>
            )}
          </div>

        </div>
      </div>
    </div>

  );
}

export default FakeAvl;
