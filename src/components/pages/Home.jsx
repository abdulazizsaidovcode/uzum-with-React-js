import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
import ProductCard from '../tools/cards';
import { useEffect, useState } from 'react';
import { Api } from '../../api/api';
import axios from 'axios';
import Loadingslide from '../tools/loadaing/slide';
import Loadingcards from '../tools/loadaing/card';
import TextLoading from '../tools/loadaing/text';
// img
import img1 from '../../assets/img/Product/croduct1.jpeg';

function Home() {

    const [products, setProducts] = useState(null)
    const [countproduct, setcountproduct] = useState(10)
    const [morebutton, sermoreinfo] = useState("Показать ещё 20")
    const [cart, getcart] = useState(null)

    useEffect(() => {

        getProduct()
    }, [])

    function getProduct() {
        axios.get(Api + "product")
            .then((res) => {
                setProducts(res.data.splice(0, countproduct))
            }).catch((err) => {
                console.error(err)
            })
    }
    async function editWishes(id, wishes) {

        const data = {
            wishes: !wishes
        };

        try {
            const response = await axios.patch(`${Api}product/${id}`, data);
            console.log(response.data);
            getProduct()
            
        } catch (error) {
            console.error(error);
        }
    }
    async function addCart(id, cart) {

        const data = {
            cart: !cart
        };

        try {
            const response = await axios.patch(`${Api}product/${id}`, data);
            console.log(response.data);
            getProduct()
            
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <main>
            {/* splide slider */}
            {products ? <div>
                <div className="container">
                    <Splide options={{
                        type: 'loop',
                        gap: '1rem',
                        autoplay: true,
                        pauseOnHover: false,
                        resetProgress: false,
                    }} aria-label="My Favorite Images" aria-labelledby="autoplay-example-heading">
                        <SplideSlide >
                            <img className=' rounded-3xl' src="https://images.uzum.uz/cn50orp25kub33f3cphg/main_page_banner.jpg" alt="Image 1" />
                        </SplideSlide>
                        <SplideSlide>
                            <img className=' rounded-3xl' src="https://images.uzum.uz/cn50orp25kub33f3cphg/main_page_banner.jpg" alt="Image 2" />
                        </SplideSlide>
                        <SplideSlide>
                            <img className=' rounded-3xl' src="https://images.uzum.uz/cn50orp25kub33f3cphg/main_page_banner.jpg" alt="Image 2" />
                        </SplideSlide>
                        <SplideSlide>
                            <img className=' rounded-3xl' src="https://images.uzum.uz/cn50orp25kub33f3cphg/main_page_banner.jpg" alt="Image 2" />
                        </SplideSlide>
                    </Splide>

                </div>
                <div className='container py-10'>
                    <h1 className='py-3 text-3xl font-bold'>
                        Рекомендуем
                    </h1>
                    <div className='product w-full grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 '>
                        {products && products.map((item) => (
                            <ProductCard
                                img={Api + item.url}
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
                                    editWishes(item.id, item.wishes)
                                }} 
                                setcart={()=>{
                                    addCart(item.id, item.cart)
                                }}/>
                        ))}

                    </div >
                </div>
                <div className=" w-full flex justify-center py-8">
                    <button className="bg-gray-100 py-4 md:px-80 md:w-auto w-full rounded-md" >{morebutton}</button>
                </div>
            </div> :
                <div className='container'>
                    <div className='my-5'>
                        <TextLoading width={209} height={30} />
                    </div>
                    <Loadingslide />
                    <div className='my-5'>
                        <TextLoading width={209} height={30} />
                    </div>
                    <Loadingcards />
                </div>
            }
        </main >
    )
}
export default Home;