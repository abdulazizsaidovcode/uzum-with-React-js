import ProductCard from "../tools/cards"
import Empty from "../tools/empty"
import EmptyImg from "../../assets/empty/not found.png"
import { useEffect, useState } from "react"
import axios from "axios"
import { Api } from "../../api/api"


function Wishes() {

    const [products, getProduct] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    function getProducts() {
        axios.get(Api + "product")
            .then((res) => {
                getProduct(res.data.splice(0, 5))
            }).catch((err) => {
                console.error(err)
            })

            axios.get("http://localhost:3000/product" )
            .then((res) => {
                console.log(res.data)
            }).catch((err) => {
                console.error(err)
            })
    }



    return (
        <section className="container">

            {/* products */}
            {products &&
                <div className="mb-5">
                    <p>Мои желания</p>
                    <div className="w-full border"></div>
                </div>
            }

            <div className={`${products ? "grid" : ""} w-full  lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 `}>
                {products.length ? products.map((item,) => (
                    <ProductCard img={item.img} describtion={item.describtion} comments={item.comments} rate={item.rate} monthpay={item.monthpay} price={item.price} oldprice={item.oldprice} />
                )) :
                    <div>
                        <Empty img={EmptyImg} tite={'Добавьте то, что понравилось'} description={'Нажмите на ♡ в товаре. Войдите в аккаунт и всё избранное сохранится'} btnText={'Войти в аккаунт'} />
                        <p className="text-2xl mb-5">Популярные товары</p>
                        <div className={`grid w-full  lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 `}>
                            {products.map((item, index) => (
                                <ProductCard key={index} img={item.img} describtion={item.describtion} comments={item.comments} rate={item.rate} monthpay={item.monthpay} price={item.price} oldprice={item.oldprice} />
                            ))}
                        </div>
                    </div>}
            </div>
        </section>
    )
}
export default Wishes;