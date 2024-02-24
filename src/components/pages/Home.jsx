// import Footer from "../footer";
// import Navbar from "../navbar";
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';


// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
import Product from './Card';


function Home() {
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
                <Product />
            </div>

        </div >
    )
}
export default Home;