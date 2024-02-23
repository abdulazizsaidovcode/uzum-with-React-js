import { useEffect, useState } from "react";
import product from "../json/product";




function Product() {
    const [products, setProducts] = useState(product)
    const [countproduct, setcountproduct] = useState(20)

    useEffect(() => {
        setProducts(product)
    })

    return (
        <section className='product grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 '>
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