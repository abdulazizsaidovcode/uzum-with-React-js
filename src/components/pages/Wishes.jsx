import ProductCard from "../tools/cards"
import products from "../json/product"
import Empty from "../tools/empty"
function Wishes() {
    return (
        <section className="container">
            <div className="w-full grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 ">
                {!products ? products.map((item) => (
                    <ProductCard img={item.img} describtion={item.describtion} comments={item.comments} rate={item.rate} monthpay={item.monthpay} price={item.price} oldprice={item.oldprice} />
                )) : <Empty/>}
            </div>
        </section>
    )
}
export default Wishes