import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const RegisterModal = ({ isOpen, onClose }) => {
    const [phoneNumber, setPhoneNumber] = useState('+998');
    const phoneNumberPattern = /^\+998\s\d{2}\s\d{3}-\d{2}-\d{2}$/;

    const handleChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (phoneNumberPattern.test(phoneNumber)) {
            console.log('Telefon raqami to\'g\'ri');
        } else {
            console.log('Telefon raqami noto\'g\'ri');
        }
    };

    return (
        <div className={`fixed inset-0 z-10 bg-gray-600 bg-opacity-50 ${isOpen ? 'flex' : 'hidden'} items-end sm:items-center justify-center p-4 transition-opacity duration-300 ease-out`}>
            <div className="bg-white rounded-lg w-full sm:w-auto px-6 py-10 sm:m-8 transition-transform transform-gpu duration-300 ease-out translate-y-full sm:translate-y-0">
                <div className="flex justify-between items-start">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Введите номер телефона</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        &times;
                    </button>
                </div>
                <p className="text-sm text-gray-500 mb-4">Отправим sms с кодом подтверждения</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="number"
                        id="phone-number"
                        value={phoneNumber}
                        onChange={handleChange}
                        placeholder="+998 00 000-00-00"
                        pattern="\+998\s\d{2}\s\d{3}-\d{2}-\d{2}"
                        className='w-full px-4 py-2 rounded-md mb-3 border-none bg-gray-200 text-black'
                    />
                    <button type='submit' className="bg-purple-600 mt-5 text-white px-4 py-2 w-full rounded hover:bg-purple-700 transition-colors duration-300">
                        Получить код
                    </button>
                </form>

                <div className="text-xs text-gray-500 px-5 text-center mt-20">
                    <p>Авторизуясь, вы соглашаетесь</p>
                    <p className='text-blue-600'>с политикой обработки персональных данных</p>
                </div>
            </div>
        </div>
    );
};
export default RegisterModal;

// Ota komponent
const App = () => {

    return (
        <>


        </>
    );
};

