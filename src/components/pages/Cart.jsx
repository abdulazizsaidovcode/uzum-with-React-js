import { useEffect, useState } from "react"
import product from "../json/product"
import DeliveryButton from "../tools/btns/delivery"
import ProductCard from "../tools/cards"

function Cart() {
    const [products, getGroduct] = useState(null)
    const [similarproduct, getsimilarProduct] = useState(null)
    const [basket, getBasket] = useState(null)

    useEffect(() => {
        getGroducts()
        getBasketProduct()
    }, [])

    function getGroducts() {
        getGroduct(product.splice(0, 5))
    }
    function getBasketProduct() {
        getBasket(product.splice(0, 3))
        console.log(basket);
    }


    return (
        <section className="container ">

            {/* Your cart */}
            <div className="w-full py-5">
                <h1 className="py-10 text-2xl">Ваша корзина,</h1>
                <div className="grid grid-cols-7 gap-2 h-max">

                    {/* left part in cart */}
                    <div className="border p-5 col-span-5 rounded-lg h-max">

                        {basket && (
                            <div className="flex justify-between">
                                <div className="flex items-center">
                                    <input className="mr-3 w-4" type="checkbox" />
                                    <p>snyat vse</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="mr-2">Ближайшая дата доставки:</p>
                                    <DeliveryButton text={"25 февраля (Завтра)"} />
                                </div>
                            </div>
                        )}
                        {basket && basket.map((item, index) => (
                            <div className="mb-2" key={index}>
                                <div className="border w-full my-5"></div>
                                <div className="flex items-center w-full h-28 justify-between">
                                    <input type="checkbox" className="w-10" />
                                    <div className="w-full flex items-center justify-between">
                                        <img className="w-20 h-28 mr-3" src={item.img} alt="rasm" />
                                        <div className="w-72">
                                            <p>{item.name}Швейная машина Janome HomeDecor 2077</p>
                                            <div className="flex">
                                                <p className="text-gray-500 mr-3">Продавец:</p>
                                                <p> {item.advice}</p>
                                            </div>
                                        </div>
                                        <div className="h-12 w-36 border mr-3 p-2 rounded-md flex justify-between ml-4 items-center">
                                            <button className="text-gray-400 text-3xl">-</button>
                                            <p>0</p>
                                            <button className="text-gray-400 text-3xl">+</button>
                                        </div>
                                        <div className="w-max flex flex-col items-end">
                                            <div className="flex text-gray-500 text-md">
                                                <i class="ri-delete-bin-6-line"></i>
                                                <p className="ml-2">Удалить</p>
                                            </div>
                                            <p className="text-2xl text-end">{item.price} сум</p>
                                            <del className="text-gray-400">{item.oldprice} сум</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}



                    </div>

                    {/* right part in cart */}
                    <div className="col-span-2  h-max">
                        <div className="border p-3 rounded-lg">
                            <p>Ваш заказ</p>
                            <div className="flex w-full justify-between mt-2 mb-2" >
                                <p>Товары (0):</p>
                                <p> 0 сум</p>
                            </div>
                            <DeliveryButton text={"Доставка 25 февраля (Завтра)"} />
                            <div className="w-full flex justify-between mt-2">
                                <p>Итого:</p>
                                <p> 0 сум</p>
                            </div>
                            <div className="w-full flex justify-end">
                                <p className="text-green-500">Вы экономите: 0 сум</p>
                            </div>
                            <button className="bg-gray-100 py-3 w-full text-gray-400 rounded-xl mt-2" > Перейти к оформлению</button>
                        </div>

                        <div className="bg-gray-100 rounded-xl p-3 mt-6">
                            <div className="w-full flex justify-between items-center">
                                <p className="text-sm">Выберите хотя бы 1 товар</p>
                                <i class="ri-question-fill text-2xl text-gray-400"></i>
                            </div>
                            <p className="text-sm text-gray-500">Отметьте товары, которые вы хотите оформить в один заказ</p>
                            <div className="flex mt-3">
                                <div className="h-1 rounded-xl w-1/4 bg-white mr-1"></div>
                                <div className="h-1 rounded-xl w-3/4 bg-white"></div>
                            </div>
                            <div className="w-full flex justify-between mt-3 text-sm text-gray-500">
                                <div className="flex">
                                    <p>20 000 сум</p>
                                    <i class="ri-map-pin-line ml-2"></i>
                                </div>
                                <div className="flex">
                                    <p>20 000 сум</p>
                                    <i class="ri-home-4-line ml-2"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* similar product */}
            <div className="py-10">
                <h1 className="text-2xl mb-5">С этими товарами покупают</h1>
                <div className="w-full grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 ">
                    {products && products.map((item) => (
                        <ProductCard img={item.img} describtion={item.describtion} comments={item.comments} rate={item.rate} monthpay={item.monthpay} price={item.price} oldprice={item.oldprice} />
                    ))}
                </div>
            </div>

            <div className="py-10">
                <h1 className="text-2xl mb-5">Просмотренные товары</h1>
                <div className="w-full grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 ">
                    {products && products.map((item) => (
                        <ProductCard img={item.img} describtion={item.describtion} comments={item.comments} rate={item.rate} monthpay={item.monthpay} price={item.price} oldprice={item.oldprice} />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Cart