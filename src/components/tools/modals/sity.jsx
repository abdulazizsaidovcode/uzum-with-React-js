import React, { useState } from 'react';
// Tailwind CSS classlari uchun importlar
import 'tailwindcss/tailwind.css';

const Modal = ({ isOpen, onClose, cities }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCities = searchTerm
    ? cities.filter(city => city.toLowerCase().includes(searchTerm.toLowerCase()))
    : cities;

  return (
    <div
      className={`fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full ${!isOpen && 'hidden'}`}
      onClick={onClose}
    >
      <div
        className="relative top-20 mx-auto p-5 border w-11/12 md:w-2/3 lg:w-1/2 shadow-lg rounded-md bg-white"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Выберите город доставки</h2>
          <button className="text-black" onClick={onClose}>
            &#x2715; {/* Bu yopish xochi */}
          </button>
        </div>

        <input
          type="text"
          placeholder="Найти город"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4 p-2 border rounded-md w-full"
        />

        <div className="grid grid-cols-2 gap-4">
          {filteredCities.map((city, index) => (
            <div key={index} className="border-b py-1 cursor-pointer hover:bg-gray-200" onClick={() => console.log(city)}>
              {city}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;


