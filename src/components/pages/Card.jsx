import { useEffect, useState } from "react";
import product from "../json/product";




function Product(count = 10, img, describtion, comments, rate, monthpay, price, oldprice) {
    const [products, setProducts] = useState(null)
    const [countproduct, setcountproduct] = useState(10)
    const [morebutton, sermoreinfo] = useState("show More")

    useEffect(() => {
        setProducts(product.splice(0, countproduct))
    }, [])
    
    function showMoreProduct() {
        if (countproduct == count) {
            setcountproduct(20)
            setProducts(product.splice(0, countproduct))
            console.log(countproduct = 20);

            sermoreinfo("barcahsini korish") 
        }
    }

    return (
        <section>
            <div className='product w-full grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 '>
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

            </div >
            <div className=" w-full flex justify-center py-10">
                <button className="bg-gray-200 py-5 md:px-72 md:w-auto w-full rounded-md" onClick={showMoreProduct}>{morebutton}</button>
            </div>
        </section>

    )
}

export default Product;