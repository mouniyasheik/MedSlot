import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

const Doctors = () => {
  const navigate = useNavigate();
  const { specialization } = useParams(); // Get the 'specialization' parameter from the URL
  const [showFilter, setshowFilter] = useState(false)
  const [filterDoc, setFilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);

  // Function to apply filter
  const applyFilter = () => {
    if (specialization) {
      // If there's a specialization, filter the doctors list
      setFilterDoc(doctors.filter(doc => doc.speciality === specialization));
    } else {
      // If there's no specialization, show all doctors
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter(); // Apply the filter whenever 'doctors' or 'specialization' changes
  }, [doctors, specialization]);

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        {/* <button onClick={()=>setshowFilter(prev=>!prev)} className={`py-1 px-3 border text-sm transition-all  ${showFilter?'bg-primary text-white':''}`}>Filters</button> */}
        {/* ${showFilter?'flex':'hidden sm:flex ' } */}
        <div className={`flex flex-col gap-4 text-sm text-gray-600  `}>
          <p 
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
            onClick={() => navigate('/doctors/General physician')}
          >
            General physician
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
            onClick={() => navigate('/doctors/Gynecologist')}
          >
            Gynecologist
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
            onClick={() => navigate('/doctors/Dermatologist')}
          >
            Dermatologist
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
            onClick={() => navigate('/doctors/Pediatricians')}
          >
            Pediatricians
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
            onClick={() => navigate('/doctors/Neurologist')}
          >
            Neurologist
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
            onClick={() => navigate('/doctors/Gastroenterologist')}
          >
            Gastroenterologist
          </p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => {
                navigate(`/appointment/${item._id}`);
              }}
              key={index}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              <img src={item.image} className="bg-blue-50" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-gray-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
