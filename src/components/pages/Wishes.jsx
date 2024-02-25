import ProductCard from "../tools/cards"
import products from "../json/product"
import Empty from "../tools/empty"
import EmptyImg from "../../assets/empty/not found.png"
function Wishes() {
    return (
        <section className="container">
            <div className={`${!products ? "grid" : ""} w-full  lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 `}>
                {!products ? products.map((item) => (
                    <ProductCard img={item.img} describtion={item.describtion} comments={item.comments} rate={item.rate} monthpay={item.monthpay} price={item.price} oldprice={item.oldprice} />
                )) : <Empty img={EmptyImg} tite={'Добавьте то, что понравилось'} description={'Нажмите на ♡ в товаре. Войдите в аккаунт и всё избранное сохранится'} btnText={'Войти в аккаунт'}/>}
            </div>
        </section>
    )
}
export default Wishes