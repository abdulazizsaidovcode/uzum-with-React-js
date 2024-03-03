import { useState } from "react";
import russianflag from "../assets/img/Header/russia-flag-icon.svg"
import Modal from "./tools/modals/sity";

// Shaharlar ro'yxati


function Header() {
    const [modalOpen, setModalOpen] = useState(false);
    const cities = ["Аккуран", "Алмазар", "Андижан"]

    return (
        <header className=" h-9 bg-gray-100 flex items-center">
            <div className="container flex justify-between">
                <div className="flex w-[30%]">
                    <div className="flex">
                        <div className="flex">
                            <i class="ri-map-pin-line text-lg mr-1"></i>
                            <>
                                <p onClick={() => setModalOpen(true)} >
                                    <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} cities={cities} />
                                </p>
                            </>
                        </div>
                        <span className="ml-2 ">
                            <p className=" underline">Ташкент</p>
                        </span>
                    </div>
                    <div className="ml-5"> Пункты выдачи </div>
                </div>
                <div>
                    <p className="text-gray-500"> Доставим ваш заказ бесплатно — всего за 1 день! </p>
                </div>
                <div className="flex w-80 justify-between">
                    <p> Вопрос-ответ </p>
                    <p> Мои заказы </p>
                    <div className="flex">
                        <img className="w-5 h-5 rounded-full bg-contain mr-3" src={russianflag} alt="" />
                        <p>Русский </p>
                    </div>
                </div>
            </div>

        </header>
    )
}
export default Header;