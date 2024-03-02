import ProductCard from "../tools/cards"
import Empty from "../tools/empty"
import EmptyImg from "../../assets/img/empty/emptywishes.png"
import { useEffect, useState } from "react"
import axios from "axios"
import { Api } from "../../api/api"


function Wishes() {

    const [products, getProduct] = useState([])
    const [allproducts, getAllProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    function getProducts() {
        axios.get(Api + "product")
            .then((res) => {
                getProduct(res.data.filter((item) => item.wishes))
                getAllProducts(res.data.splice(0, 5))
            }).catch((err) => {
                console.error(err)
            })

        axios.get("http://localhost:3000/product")
            .then((res) => {
                console.log(res.data)
            }).catch((err) => {
                console.error(err)
            })

    }
    async function setwishes(id, wishes) {
        const data = {
            wishes: !wishes
        };
        try {
            const response = await axios.patch(`${Api}product/${id}`, data);
            getProducts()
        } catch (error) {
            console.error(error);
        }
    }

    async function addCart(id) {
        const data = {
            cart: true
        };
        try {
            const response = await axios.patch(`${Api}product/${id}`, data);
            console.log(response.data);
            // getProduct()
        } catch (error) {
            console.error(error);
        }
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
            <div className={`${products.length ? "grid" : ""} w-full  lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 `}>
                {products.length > 0 ? products.map((item,) => (
                    <ProductCard img={item.img}
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
                )) :
                    <div>
                        <Empty img={EmptyImg} tite={'Добавьте то, что понравилось'} description={'Нажмите на ♡ в товаре. Войдите в аккаунт и всё избранное сохранится'} btnText={'Войти в аккаунт'} />
                        <p className="text-2xl mb-5">Популярные товары</p>
                        <div className={`grid w-full  lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 `}>
                            {allproducts.map((item, index) => (
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
                                        addCart(item.id)
                                    }} />
                            ))}
                        </div>
                    </div>}
            </div>
        </section>
    )
}
export default Wishes;