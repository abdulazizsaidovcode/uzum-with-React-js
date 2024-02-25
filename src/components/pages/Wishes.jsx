import ProductCard from "../tools/cards"
import product from "../json/product"
import Empty from "../tools/empty"
import EmptyImg from "../../assets/empty/not found.png"
import { useEffect, useState } from "react"


function Wishes() {

    const [products, getProduct] = useState(product)
    const [productLength, getProductLength] = useState(false)

    useEffect(() => {
        getProducts()
        getProductLengths()
    }, [])

    function getProducts() {
        getProduct(product.splice(0, 5))
    }
    function getProductLengths() {
        if (product < 1) {
            getProductLength(true)
        } else {
            getProductLength(false)
        }
    }

    return (
        <section className="container">

            {/* products */}
            {products &&
                <div className="mb-5">
                    <p>Мои желания</p>
                    <div className="w-full border"></div>
                </div>}
            <div className={`${productLength ? "grid" : ""} w-full  lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 `}>
                {productLength ? products.map((item, index) => (
                    <ProductCard img={item.img} describtion={item.describtion} comments={item.comments} rate={item.rate} monthpay={item.monthpay} price={item.price} oldprice={item.oldprice} />
                )) : <div>
                    <Empty img={EmptyImg} tite={'Добавьте то, что понравилось'} description={'Нажмите на ♡ в товаре. Войдите в аккаунт и всё избранное сохранится'} btnText={'Войти в аккаунт'} /></div>}

                <p className="text-2xl mb-5">Популярные товары</p>
                <div className={`grid w-full  lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 `}>
                    {products.map((item, index) => (
                        <ProductCard key={index} img={item.img} describtion={item.describtion} comments={item.comments} rate={item.rate} monthpay={item.monthpay} price={item.price} oldprice={item.oldprice} />
                    ))}
                </div>
            </div>

            {/* populary products */}


        </section>
    )
}
export default Wishes;