import React, { useEffect, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

// Rasmlarni import qilish kerak:
import mainImage from "../../assets/img/Product/croduct1.jpeg"; // Asosiy rasm
import thumbnailImage from "../../assets/img/Product/product 1.jpeg"; // Kichik rasm

const Product = () => {
    const mainSliderRef = useRef();
    const thumbnailsRef = useRef();

    useEffect(() => {
        if (mainSliderRef.current && thumbnailsRef.current) {
            const mainSplide = mainSliderRef.current.splide;
            const thumbsSplide = thumbnailsRef.current.splide;

            mainSplide.sync(thumbsSplide);
        }
    }, [mainSliderRef, thumbnailsRef]);

    return (
        <div>
            <div className="splide-wrapper ">
                <div className="thumbnails-splide ">
                    <Splide
                        ref={thumbnailsRef}
                        options={{
                            direction: 'ttb', // Vertikal yo'nalish
                            height: '600px', // Vertikal slayder uchun balandlik sozlanishi
                            fixedWidth: 104,
                            fixedHeight: 58,
                            isNavigation: true,
                            gap: 10,
                            focus: 'center',
                            pagination: false,
                            cover: true,
                            dragMinThreshold: {
                                mouse: 4,
                                touch: 10,
                            },
                            breakpoints: {
                                640: {
                                    fixedWidth: 66,
                                    fixedHeight: 38,
                                },
                            },
                        }}
                    >
                        {/* Kichik rasmlar */}
                        <SplideSlide>
                            <img src={thumbnailImage} alt="Kichik rasm 1" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={thumbnailImage} alt="Kichik rasm 1" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={thumbnailImage} alt="Kichik rasm 1" />
                        </SplideSlide>
                        {/* Boshqa kichik rasmlar qo'shilishi mumkin */}
                    </Splide>
                </div>

                <div className="main-splide flex-3">
                    <Splide
                        ref={mainSliderRef}
                        options={{
                            type: 'fade',
                            heightRatio: 0.5,
                            pagination: false,
                            arrows: false,
                            cover: true,
                            autoplay: true,
                        }}
                    >
                        {/* Asosiy rasmlar */}
                        <SplideSlide>
                            <img src={mainImage} alt="Asosiy rasm 1" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={mainImage} alt="Asosiy rasm 1" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={mainImage} alt="Asosiy rasm 1" />
                        </SplideSlide>
                        {/* Boshqa asosiy rasmlar qo'shilishi mumkin */}
                    </Splide>
                </div>
            </div>
        </div>
    );
};

export default Product;
