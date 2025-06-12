import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { assets } from '../assets/assets/assets_frontend/assets';
import RelatedDoctors from '../Components/RelatedDoctors';

const Appointment = () => {
  const [docInfo, setdocInfo] = useState(null);
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);

  const fetchDocInfo = async () => {
    const docInfo = await doctors.find(doc => doc._id === docId);
    setdocInfo(docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  const [docSlots, setdocSlots] = useState([]);
  const [slotIndex, setslotIndex] = useState(0);
  const [slotTime, setslotTime] = useState('');

  // Function to get available slots
  const getAvalilableSlots = async () => {
    setdocSlots([]);  // Clear existing slots
    let today = new Date();

    // Loop for the next 7 days
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);  // Get date with index

      // Set end time for the current day
      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);  // Set to 9 PM for each day

      // Adjust for today's slots
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10, 0, 0, 0); // Set to 10 AM for other days
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        // Add slot to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        // Increment current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setdocSlots(prev => [...prev, timeSlots]);
    }
  };

  // Fetch available slots when doctor info is set
  useEffect(() => {
    if (docInfo) {
      getAvalilableSlots();
    }
  }, [docInfo]);

  const dayOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return docInfo && (
    <div>
      {/* Doctor Details */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img src={docInfo.image} alt="" className="bg-primary w-full sm:max-w-72 rounded-lg" />
        </div>
        <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
            {docInfo.name}
            <img src={assets.verified_icon} alt="" className="w-5" />
          </p>
          <div>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className="py-0.5 px-2 border text-xs rounded-full">{docInfo.experience}</button>
          </div>
          {/* About Doctor */}
          <div>
            <p className="flex items-center gap-1 font-medium mt-3 text-sm text-gray-900">
              About
              <img src={assets.info_icon} alt="/" />
            </p>
            <p className="text-sm text-gray-900 mt-1 max-w-[700px]">{docInfo.about}</p>
          </div>
          <p className="text-gray-500 font-medium mt-4">
            Appointment fee: <span className="text-gray-600">{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>

      {/* Booking Slots */}
      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-900">
        <p>Booking Slots</p>
        <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
          {
            docSlots.length > 0 && docSlots.map((item, index) => (
              <div 
                onClick={() => { setslotIndex(index); }}  
                key={index} 
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`}
              >
                <p>{item[0] && dayOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))
          }
        </div>

        <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
          {
            docSlots.length > 0 && docSlots[slotIndex].map((item, index) => (
              <p 
                onClick={() => setslotTime(item.time)} 
                key={index} 
                className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`}
              >
                {item.time.toLowerCase()}
              </p>
            ))
          }
        </div>
        
        <button className="bg-primary text-white text-sm font-light px-14 py-3 my-6 rounded-full">Book an Appointment</button>
      </div>
      <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
    </div>
  );
};

export default Appointment;
