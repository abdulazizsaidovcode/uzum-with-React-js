import { useEffect, useState } from "react"
import product from "../json/product"

function Cart() {
    const [products, getGroduct] = useState(null)
    const [similarproduct, getsimilarProduct] = useState(null)
    
    useEffect(() => {
        getGroduct(product.splice(0, 5))
    }, [])


    return (
        <section className="container ">

            {/* trade structure */}

            <div className="w-full py-5">
                <h1 className="py-10">Ваша корзина,</h1>
                <div className="grid grid-cols-7 gap-2 h-max">
                    <div className="border p-3 col-span-5 rounded-lg h-max">
                        <div className="flex justify-between">
                            <div className="flex">
                                <input className="mr-3" type="checkbox" />
                                <p>snyat vse</p>
                            </div>
                            <div className="flex">
                                <p>Ближайшая дата доставки:</p>
                                <span>25 февраля (Завтра)</span>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className="col-span-2  h-max">
                        <div className="border p-3 rounded-lg">
                            <p>Ваш заказ</p>
                            <div className="flex w-full justify-between mt-2" >
                                <p>Товары (0):</p>
                                <p> 0 сум</p>
                            </div>
                            <div className="mt-2 border text-center text-sm border-purple-700 text-purple-700">Доставка 25 февраля (Завтра)</div>
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
            <div className="">
                <h1>С этими товарами покупают</h1>
                <div className="w-full grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 ">
                    {products && products.map((item, index) => (
                        <div key={index} className="pb-10">
                            <div className="w-full h-full hover:shadow-md  overflow-hidden rounded-md">
                                <div className='w-full h-max relative overflow-hidden'>
                                    <img className='w-full h-84 bg-contain hover:scale-105 transition-all' src={item.img} alt="Image 1" />
                                    <button className="absolute bottom-0 left-0 bg-violet-700 text-white rounded-md px-3">Акция</button>
                                </div>
                                <div className="product-description p-3">
                                    <p className="text-sm">{item.describtion}</p>
                                    <div className="flex ">
                                        <p><i class="ri-star-fill text-yellow-400 mr-1"></i>`{item.comments}`</p>
                                        <p>{item.rate}</p>
                                    </div>
                                    <p>{item.monthpay}</p>
                                    <p>{item.price}</p>
                                    <p>{item.oldprice}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            {/*  seen products */}
            </div>
            <div>
                <h1>Просмотренные товары</h1>
                <div>

                </div>
            </div>
        </section>
    )
}
export default Cart