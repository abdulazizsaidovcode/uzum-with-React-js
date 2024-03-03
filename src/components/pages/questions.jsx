function Question() {
    return (
        <section className="container " >
            <h1 className="text-2xl mb-10">Вопрос-Ответ</h1>
            <div className="flex md:flex-row felx-col">
                <div className="w-2/6 pr-2 md:block hidden">
                    <div>
                        <h1 className=" font-bold">Регистрация</h1>
                        <div className="text-sm text-gray-500 flex flex-col gap-2 my-4 ">
                            <p >Как зарегистрироваться в приложении?</p>
                            <p>Как зарегистрироваться на сайте?</p>
                        </div>
                    </div>

                    <div>
                        <h1 className=" font-bold">Оформление заказа</h1>
                        <div className="text-sm text-gray-500 flex flex-col gap-2 my-4 ">
                            <p>Как заказать?</p>
                            <p>Как работает резерв заказа и промокода?</p>
                            <p>Как добавить или удалить товар из оформленного заказа?</p>
                            <p>Сколько хранится заказ?</p>
                            <p> Как отменить оформленный заказ?</p>
                            <p>Как зарегистрироваться на сайте?</p>
                        </div>
                    </div>

                    <div>
                        <h1 className=" font-bold">Доставка</h1>
                        <div className="text-sm text-gray-500 flex flex-col gap-2 my-4 ">
                            <p>Какие есть способы доставки?</p>
                            <p>Когда будет доставлен заказ?</p>
                            <p>Как изменить пункт выдачи для уже оформленного заказа?</p>
                            <p>Как изменить адрес курьерской доставки?</p>
                            <p>Как изменить дату курьерской доставки?</p>
                            <p>Как изменить номер телефона, указанный для курьерской доставки?</p>
                        </div>
                    </div>

                </div>
                <div className="md:w-5/6 w-full h-max border rounded-md p-5">
                    <div>
                        <div>
                            <h1 className="font-bold text-xl mb-5">Регистрация</h1>
                            <p className="text-gray-500">Регистрация аккаунта необходима для оформления и оплаты заказов. Благодаря ей вам не потребуется постоянно заполнять данные при оформлении заказа. Регистрация займет не более трех минут.</p>
                            <div className="mt-5">
                                <h1 className="font-bold text-xl mb-5 ">Как зарегистрироваться в приложении?</h1>
                                <div className="text-gray-500">
                                    <p> Cкачайте приложение Uzum Market:</p>
                                    <p>- в App Store: https://clck.ru/367gQC;</p>
                                    <p>- в Play Market: https://clck.ru/367gTR.</p>
                                </div>
                                <p className="py-5">Зайдите в приложение, нажмите «Войти». Затем введите ваш номер телефона и нажмите «Получить код». Вам поступит СМС с 4-значным кодом, после введения которого вы перейдете в личный кабинет.</p>
                                <div className="text-gray-500">
                                    <p>Далее нажмите на значок шестеренки⚙️в правом верхнем углу и заполните личные данные:</p>
                                    <p>- ФИО;</p>
                                    <p>- номер телефона;</p>
                                    <p>- электронную почту (при желании);</p>
                                    <p>- дату рождения;</p>
                                    <p>- и пол.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}
export default Question;