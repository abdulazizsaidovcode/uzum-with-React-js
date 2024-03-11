import React, { useState } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const DeliveryPoints = () => {
  const [selectedCity, setSelectedCity] = useState('Tashkent');
  const cities = [
    { name: 'Tashkent', coordinates: [41.2995, 69.2401] },
  ];

  const currentCity = cities.find(city => city.name === selectedCity);

  return (
    <div className={`fixed inset-0 bg-gray-600 bg-opacity-50 `} >
      <div
        className="relative top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded p-4"
        style={{ width: '50%', height: '80%' }}
      >
        <div className="mb-4">
          <label htmlFor="city-select" className="block text-gray-700 text-sm font-bold mb-2">
            Выберите город доставки
          </label>
          <select
            id="city-select"
            value={selectedCity}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            {cities.map(city => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        <YMaps query={{ lang: 'ru_RU' }}>
          <Map defaultState={{ center: currentCity.coordinates, zoom: 12 }} width="100%" height="400px">
            <Placemark geometry={currentCity.coordinates} />
          </Map>
        </YMaps>

      </div>
    </div>
  );
};


export default DeliveryPoints;
