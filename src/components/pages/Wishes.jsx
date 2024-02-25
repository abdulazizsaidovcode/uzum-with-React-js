import ProductCard from "../tools/cards"
import product from "../json/product"
import Empty from "../tools/empty"
import EmptyImg from "../../assets/empty/not found.png"
import { useEffect, useState } from "react"


function Wishes() {

    const [products, getProduct] = useState()

    useEffect(() => {
        getProducts()
    }, [])

    function getProducts() {
        getProduct(product.splice(0, 1))
    }

    return (
        <section className="container">

            {/* products */}
            {products &&
                <div className="mb-5">
                    <p>Мои желания</p>
                    <div className="w-full border"></div>
                </div>}
            <div className={`${products ? "grid" : ""} w-full  lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 `}>
                {products ? products.map((item, index) => (
                    <ProductCard img={item.img} describtion={item.describtion} comments={item.comments} rate={item.rate} monthpay={item.monthpay} price={item.price} oldprice={item.oldprice} />
                )) : <Empty img={EmptyImg} tite={'Добавьте то, что понравилось'} description={'Нажмите на ♡ в товаре. Войдите в аккаунт и всё избранное сохранится'} btnText={'Войти в аккаунт'} />}
            </div>

            {/* populary products */}
            <div className={`grid w-full  lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 `}>
                {products && products.map((item, index) => (
                    <ProductCard img={item.img} describtion={item.describtion} comments={item.comments} rate={item.rate} monthpay={item.monthpay} price={item.price} oldprice={item.oldprice} />
                ))}
            </div>
        </section>
    )
}
export default Wishes;