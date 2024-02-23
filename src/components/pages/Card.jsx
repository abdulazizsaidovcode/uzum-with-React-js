import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import productimg from "../../assets/img//Product/product3.jpeg"


const product = [
    {
        id: 1,
        img: productimg,
        describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        comments: 10,
        monthpay: 100,
        rate: 5,
        price: 1000,
        oldprice: 1200,

    },
    {
        id: 2,
        img: productimg,
        describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        comments: 10,
        monthpay: 100,
        rate: 5,
        price: 1000,
        oldprice: 1200,

    },
    {
        id: 3,
        img: productimg,
        describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        comments: 10,
        monthpay: 100,
        rate: 5,
        price: 1000,
        oldprice: 1200,

    },
    {
        id: 4,
        img: productimg,
        describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        comments: 10,
        monthpay: 100,
        rate: 5,
        price: 1000,
        oldprice: 1200,

    },
    {
        id: 5,
        img: productimg,
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
        <section className='product grid grid-cols-5 gap-5'>
            {products && products.map((item, index) => (
                <div key={index} className="pb-10">
                    <div className="w-full h-full hover:shadow-md  overflow-hidden rounded-md">
                        <div className='w-full h-max relative overflow-hidden'>
                            <img className='w-full h-84 bg-contain hover:scale-105 transition-all' src={item.img} alt="Image 1" />
                            <button className="absolute bottom-0 left-0 bg-violet-700 text-white rounded-md px-3">Акция</button>
                        </div>
                        <div className="product-description p-3">
                            <p className="text-sm">{item.describtion}</p>
                            <div className="flex ">
                                <p><i class="ri-star-fill text-yellow-400 mr-1"></i>`{item.comments}`</p>
                                <p>{item.rate}</p>
                            </div>
                            <p>{item.monthpay}</p>
                            <p>{item.price}</p>
                            <p>{item.oldprice}</p>
                        </div>
                    </div>
                </div>
            ))}
        </section >
    )
}

export default Product;