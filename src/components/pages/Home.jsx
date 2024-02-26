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
import product from '../json/product';


function Home() {

    const [products, setProducts] = useState(null)
    const [countproduct, setcountproduct] = useState(10)
    const [morebutton, sermoreinfo] = useState("Показать ещё 20")

    useEffect(() => {
        setProducts(product.splice(0, countproduct))
    }, [])

    function showMoreProduct() {
        if (countproduct == 10) {
            setProducts(product.splice(0, countproduct + 5))
            console.log(countproduct + 5);
            sermoreinfo("barcahsini korish")
        }
    }

    return (
        <div>

            {/* splide slider */}
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
            <div className='container'>
                <div className='product w-full grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 '>
                    {products && products.map((item) => (
                        <ProductCard img={item.img} describtion={item.describtion} comments={item.comments} rate={item.rate} monthpay={item.monthpay} price={item.price} oldprice={item.oldprice} discount={item.discount} sale={item.sale} />
                    ))}

                </div >
            </div>
            <div className=" w-full flex justify-center py-8">
                <button className="bg-gray-100 py-4 md:px-80 md:w-auto w-full rounded-md" onClick={showMoreProduct}>{morebutton}</button>
            </div>


        </div >
    )
}
export default Home;