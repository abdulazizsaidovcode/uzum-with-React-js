import android from "../assets/icons/Android.png"
import mac from "../assets/icons/mac.png"
import youtube from "../assets/icons/youtube.png"
import telegram from "../assets/icons/telegram.png"
import instagram from "../assets/icons/instgaram.png"
import facebook from "../assets/icons/facebook.png"


function Footer() {
    return (
        <footer class="bg-white text-sm">
            <div class="mx-auto w-full max-w-screen-xl">
                <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                    <div>
                        <h2 class="mb-6 text-sm font-semibold  uppercase ">О нас</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Пункты выдачи</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Вакансии</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold  uppercase ">Пользователям</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Связаться с нами</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Вопрос - Ответ</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold  uppercase ">Legal</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Продавайте на Uzum</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Вход для продавцов</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold  uppercase ">Скачать приложение</h2>
                        <ul class="font-medium">
                            <li class="mb-10 divide-fuchsia-50 flex w-full text-sm">
                                <div className="flex items-center mr-5">
                                    <img src={mac} alt="" className="w-5" />
                                    <a href="#" class="hover:underline">Apple</a>
                                </div>
                                <div className="flex items-center">
                                    <img src={android} alt="" className="w-5" />
                                    <a href="#" class="hover:underline">Android</a>
                                </div>
                            </li>
                            <li>
                                <h1>Uzum в соцсетях</h1>
                                <div className="flex">
                                    <img src={telegram} alt="" className="w-10" />
                                    <img src={youtube} alt="" className="w-10" />
                                    <img src={instagram} alt="" className="w-10" />
                                    <img src={facebook} alt="" className="w-10" />
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
                <div class="px-4 py-6  md:flex md:items-center md:justify-between">
                    <span class="text-sm sm:text-center">Соглашение о конфиденциальности
                        Пользовательское соглашение
                    </span>
                    <p className="text-gray-600 text-sm">2024© ООО «UZUM MARKET». ИНН 309376127. Все права защищены»</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;