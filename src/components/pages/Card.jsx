import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";

const product = [
    {
        id: 1,
        img: "https://images.uzum.uz/cn50orp25kub33f3cphg/main_page_banner.jpg",
        describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        comments: 10,
        monthpay: 100,
        rate: 5,
        price: 1000,
        oldprice: 1200,

    },
    {
        id: 2,
        img: "https://images.uzum.uz/cn50orp25kub33f3cphg/main_page_banner.jpg",
        describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        comments: 10,
        monthpay: 100,
        rate: 5,
        price: 1000,
        oldprice: 1200,

    },
    {
        id: 3,
        img: "https://images.uzum.uz/cn50orp25kub33f3cphg/main_page_banner.jpg",
        describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        comments: 10,
        monthpay: 100,
        rate: 5,
        price: 1000,
        oldprice: 1200,

    },
    {
        id: 4,
        img: "https://images.uzum.uz/cn50orp25kub33f3cphg/main_page_banner.jpg",
        describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        comments: 10,
        monthpay: 100,
        rate: 5,
        price: 1000,
        oldprice: 1200,

    },
    {
        id: 5,
        img: "https://images.uzum.uz/cn50orp25kub33f3cphg/main_page_banner.jpg",
        describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        comments: 10,
        monthpay: 100,
        rate: 5,
        price: 1000,
        oldprice: 1200,

    },
]

function Product() {
    const [products, setProducts] = useState(product)
    useEffect(() => {
        setProducts(product)
    })
    console.log(products);
    return (
        <section className='product'>
            <Splide className="" options={{
                type: 'loop',
                perPage: 3,
                focus: 'center',
                width: "100%",
                gap: '1rem',
                arrowPath: 'm15.5 0.932-4.3 4.38...',
            }} aria-label="My Favorite Images" aria-labelledby="autoplay-example-heading">
                {products && products.map((item, index) => (
                    <SplideSlide key={index} className="">
                        <div>
                            <div className='p '>
                                <img className='w-full h-40 rounded-3xl' src={item.img} alt="Image 1" />
                                <button>Акция</button>
                            </div>
                            <div className="product-description p-10">
                                <p>{item.describtion}</p>
                                <p>{item.rate}</p>
                                <p>{item.comments}</p>
                                <p>{item.monthpay}</p>
                                <p>{item.price}</p>
                                <p>{item.oldprice}</p>
                            </div>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </section>
    )
}

export default Product;