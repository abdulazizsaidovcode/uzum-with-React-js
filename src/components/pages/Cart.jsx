import { useEffect, useState } from "react"
import DeliveryButton from "../tools/btns/delivery"
import ProductCard from "../tools/cards"
import { Api } from "../../api/api"
import axios from "axios"
import Empty from "../tools/empty"
import EmptyImg from "../../assets/img/empty/empty.png"


function Cart() {
    const [products, getGroduct] = useState([])
    const [basket, getBasket] = useState([])
    const [nowmonth, getMonths] = useState(null)
    const [nowday, getDays] = useState(null)
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November, December",]

    useEffect(() => {
        getProducts()
        getBaskets()
        getCurrentDate()
    }, [])

    // --------- get current date ------------
    function getCurrentDate() {
        let data = new Date()
        let day = data.getDate()
        let month = data.getMonth()
        getDays(day)
        getMonths(months[month])
    }

    // --------- get groducts from api -------------
    function getProducts() {
        axios.get(Api + "product")
            .then((res) => {
                getGroduct(res.data.splice(0, 5))
                console.log(basket);
            }).catch((err) => {
                console.error(err)
            })
    }

    // --------- get baskets from api -------------
    function getBaskets() {
        axios.get(Api + "product")
            .then((res) => {
                getBasket(res.data.filter((item) => item.cart))
                console.log(basket);
            }).catch((err) => {
                console.error(err)
            })
    }

    // --------- delete product from basket ---------
    function deletetocart(id, cart) {
        const data = {
            cart: !cart
        }
        axios.patch(`${Api}product/${id}`, data)
            .then((res) => {
                console.log(res.data);
                getProducts()
                getBaskets()
            }).catch((err) => {
                console.error(err)
            })
    }
    // ---------- add to wishes ----------
    async function setwishes(id, wishes) {
        const data = {
            wishes: !wishes
        };
        try {
            const response = await axios.patch(`${Api}product/${id}`, data);
            getProducts()
            getBaskets()
        } catch (error) {
            console.error(error);
        }
    }

    // ---------- add to cart products -------
    async function addCart(id, cart) {
        const data = {
            cart: !cart
        };
        try {
            const response = await axios.patch(`${Api}product/${id}`, data);
            getProducts()
            getBaskets()
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <section className="container ">

            {/* Your cart */}
            {
                basket.length > 0 ? <div className="w-full py-5">
                    <h1 className="py-10 text-2xl">Ваша корзина,</h1>
                    <div className="grid grid-cols-7 gap-2 h-max">

                        {/* left part in cart */}
                        <div className="border p-5 col-span-5 rounded-lg h-max">
                            <div className="flex justify-between">
                                <div className="flex items-center">
                                    <input className="mr-3 w-4" type="checkbox" />
                                    <p>Выбрать все</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="mr-2">Ближайшая дата доставки:</p>
                                    <DeliveryButton text={`${nowday} ${nowmonth} (Завтра)`} />
                                </div>
                            </div>
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
                                                <button onClick={() => {
                                                    deletetocart(item.id, item.cart)
                                                }} className="flex text-gray-500 text-md">
                                                    <i class="ri-delete-bin-6-line"></i>
                                                    <p className="ml-2">Удалить</p>
                                                </button>
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
                                <DeliveryButton text={`${nowday} ${nowmonth} (Завтра)`} />
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
                </div> : <div>
                    <Empty img={EmptyImg} tite={'Добавьте то, что понравилось'} description={'Нажмите на ♡ в товаре. Войдите в аккаунт и всё избранное сохранится'} btnText={'Войти в аккаунт'} />
                    <p className="text-2xl mb-5">Популярные товары</p>
                    <div className={`grid w-full  lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 `}>
                        {products && products.map((item, index) => (
                            <ProductCard
                                key={index}
                                img={item.img}
                                describtion={item.describtion}
                                comments={item.comments}
                                rate={item.rate}
                                monthpay={item.monthpay}
                                price={item.price}
                                oldprice={item.oldprice}
                                imgWishes={item.wishes}
                                setwishes={() => {
                                    setwishes(item.id, item.wishes)
                                }}
                                setcart={() => {
                                    addCart(item.id, item.cart)
                                }} />
                        ))}
                    </div>
                </div>
            }


            {/* similar product */}
            <div className="py-10">
                <h1 className="text-2xl mb-5">С этими товарами покупают</h1>
                <div className="w-full grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 ">
                    {products && products.map((item) => (
                        <ProductCard
                            img={item.img}
                            describtion={item.describtion}
                            comments={item.comments}
                            rate={item.rate}
                            monthpay={item.monthpay}
                            price={item.price}
                            oldprice={item.oldprice}
                            discount={item.discount}
                            sale={item.sale}
                            imgWishes={item.wishes}
                            setwishes={() => {
                                setwishes(item.id, item.wishes)
                            }}
                            setcart={() => {
                                addCart(item.id, item.cart)
                            }} />
                    ))}
                </div>
            </div>

            <div className="py-10">
                <h1 className="text-2xl mb-5">Просмотренные товары</h1>
                <div className="w-full grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 ">
                    {products && products.map((item) => (
                        <ProductCard
                            img={item.img}
                            describtion={item.describtion}
                            comments={item.comments}
                            rate={item.rate}
                            monthpay={item.monthpay}
                            price={item.price}
                            oldprice={item.oldprice}
                            imgWishes={item.wishes}
                            setwishes={() => {
                                setwishes(item.id, item.wishes)
                            }}
                            setcart={() => {
                                addCart(item.id, item.cart)
                            }} />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Cart