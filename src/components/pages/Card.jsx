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
           
            
        </section>

    )
}

export default Product;