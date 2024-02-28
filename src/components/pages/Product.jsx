import React, { useEffect, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
// img icons
import hearticon from '../../assets/icons/heart.png';

// Rasmlarni import qilish kerak:
import mainImage from "../../assets/img/Product/croduct1.jpeg"; // Asosiy rasm
import thumbnailImage from "../../assets/img/Product/product 1.jpeg"; // Kichik rasm
import Navigation from '../tools/navegation pages';

const Product = () => {
    const mainSliderRef = useRef();
    const thumbnailsRef = useRef();

    const product = {
        name: 'Набор кухонной посуды Kukmara, АЛ линия Granit Ultra',
        price: '399 000 сум',
        originalPrice: '598 000 сум',
        inStock: 235,
        rating: 5.0,
        reviews: 50,
        orders: 'более 400 заказов',
        installment: 'от 47 880 сум/мес в рассрочку',
        soldThisWeek: '99 человек купили на этой неделе'
    };

    useEffect(() => {
        if (mainSliderRef.current && thumbnailsRef.current) {
            const mainSplide = mainSliderRef.current.splide;
            const thumbsSplide = thumbnailsRef.current.splide;

            mainSplide.sync(thumbsSplide);
        }
    }, [mainSliderRef, thumbnailsRef]);

    return (
        <main className='container'>
            {/* navegation */}
            <div className='py-5'>
                <Navigation />
            </div>
            
            {/* product description top part */}
            <div className='grid grid-cols-5'>
                <div className="splide-wrapper md:col-span-2 col-span-5">
                    <div className="thumbnails-splide ">
                        <Splide
                            ref={thumbnailsRef}
                            options={{
                                direction: 'ttb', // Vertikal yo'nalish
                                height: '600px', // Vertikal slayder uchun balandlik sozlanishi
                                fixedWidth: 80,
                                fixedHeight: 120,
                                isNavigation: true,
                                gap: 5,
                                focus: 'center',
                                pagination: false,
                                cover: true,
                                arrows: false,
                                type: 'loop', // Slayder oxiriga yetganda avtomatik qaytish
                                autoplay: true,  // Autoplay yoqish
                                interval: 3000,  // Har bir slayd uchun interval, millisekundlarda (bu yerda 3 sekund)
                                pauseOnHover: false, // Sichqoncha ustiga olib kelganda pauza qilishni o'chirish
                                pauseOnFocus: false, // Fokuslanganda pauza qilishni o'chirish
                                resetProgress: false,
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
                                arrows: true,
                                cover: true,
                                height: "600px",
                                type: 'loop', // Slayder oxiriga yetganda avtomatik qaytish
                                autoplay: true,  // Autoplay yoqish
                                interval: 3000,  // Har bir slayd uchun interval, millisekundlarda (bu yerda 3 sekund)
                                pauseOnHover: false, // Sichqoncha ustiga olib kelganda pauza qilishni o'chirish
                                pauseOnFocus: false, // Fokuslanganda pauza qilishni o'chirish
                                resetProgress: false,
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
                            <SplideSlide>
                                <img src={mainImage} alt="Asosiy rasm 1" />
                            </SplideSlide>
                            {/* Boshqa asosiy rasmlar qo'shilishi mumkin */}
                        </Splide>
                    </div>
                </div>
                <div className='md:col-span-3 col-span-5 md:pl-20'>
                    <div className=" bg-white overflow-hidden ">
                        <div className="md:flex w-full">
                            <div className='w-full flex flex-col gap-y-5'>
                                {/* Rating and reviews */}
                                <div className="flex justify-between items-center">
                                    <div className='flex text-gray-400'>
                                        <div className="text-yellow-400 text-xs flex">
                                            <p>&#9733;</p>
                                            <p className='text-gray-400 '> 5.0</p>
                                        </div>
                                        <div className="ml-2 text-gray-400 text-xs">
                                            {product.reviews} ( оценок )
                                        </div>
                                        <div className='ml-10 text-gray-400 text-xs'>
                                            Более 400 заказов
                                        </div>
                                    </div>
                                    <div className='flex text-xs items-center'>
                                        <img src={hearticon} alt="" className='w-8' />
                                        <p>В желания</p>
                                    </div>
                                </div>

                                <div className="uppercase tracking-wide text-sm  font-semibold">
                                    <p>{product.name}</p>
                                </div>

                                <div className='w-72 '>
                                    <div className='w-full grid grid-cols-2'>
                                        <p>Продавец:</p>
                                        <p>Kukmara</p>
                                    </div>
                                    <div className='w-full grid grid-cols-2'>
                                        <p>Доставка:</p>
                                        <p>1 день, бесплатно</p>
                                    </div>
                                </div>

                                <hr />

                                <div className='grid grid-cols-10 w-full gap-2'>
                                    <img src={mainImage} alt="" className='rounded border hover:border-gray-500 transition-all' />
                                    <img src={mainImage} alt="" className='rounded border hover:border-gray-500 transition-all' />
                                    <img src={mainImage} alt="" className='rounded border hover:border-gray-500 transition-all' />
                                </div>

                                <div>
                                    <p className=''>Количество:</p>
                                    <div className='flex gap-5 items-center'>
                                        <div className="h-12 w-36 border p-2 rounded-md flex justify-between items-center">
                                            <button className="text-gray-400 text-3xl">-</button>
                                            <p>0</p>
                                            <button className="text-gray-400 text-3xl">+</button>
                                        </div>
                                        <div className='flex items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5049 1.86715V0.99585L10.7526 1.43546L11.0049 1.86715C10.7526 1.43546 10.7524 1.43557 10.7522 1.43569L10.7517 1.43599L10.7504 1.43677L10.7465 1.43905L10.734 1.44655C10.7235 1.45285 10.7089 1.46176 10.6904 1.47327C10.6533 1.49628 10.6007 1.52971 10.5348 1.57349C10.4029 1.66103 10.2173 1.79021 9.99599 1.96061C9.55393 2.30092 8.9655 2.80844 8.37646 3.48037C7.32037 4.68505 6.24614 6.43815 6.03663 8.7112C5.97334 8.62082 5.91227 8.5088 5.85405 8.37345C5.76832 8.17417 5.71024 7.9695 5.67356 7.81119C5.65545 7.73302 5.64309 7.6685 5.63542 7.62465C5.63159 7.60278 5.62895 7.5862 5.62737 7.57581L5.62578 7.56504L5.62567 7.56431L5.62564 7.56404L5.62561 7.56382L5.62556 7.56351L5.62555 7.56337L5.48535 6.50496L4.76198 7.2915L5.13 7.62996C4.76198 7.2915 4.76185 7.29164 4.76171 7.29178L4.76141 7.29211L4.7607 7.29289L4.75884 7.29494L4.75336 7.301L4.73569 7.32094C4.72102 7.33767 4.70071 7.36125 4.67557 7.39148C4.62531 7.4519 4.5556 7.539 4.47299 7.65095C4.30796 7.87459 4.09025 8.19907 3.873 8.60986C3.43952 9.42955 3 10.6083 3 12.0221C3 15.8743 6.13919 19.0009 10 19.0009C13.8608 19.0009 17 15.8743 17 12.0221C17 9.18756 15.4792 7.67893 14.0971 6.36405L14.012 6.2832C12.6533 4.99143 11.5049 3.89964 11.5049 1.86715ZM9.12842 4.13958C9.65177 3.54259 10.1757 3.08691 10.5746 2.77724C10.8776 4.68829 12.1154 5.86244 13.2585 6.94682L13.4078 7.08856C14.7732 8.38755 16 9.63833 16 12.0221C16 15.3189 13.3116 18.0009 10 18.0009C6.68839 18.0009 4 15.3189 4 12.0221C4 10.8161 4.37548 9.79878 4.757 9.07735C4.81633 8.96516 4.87561 8.8605 4.93337 8.76381L4.93544 8.76861C5.14841 9.26369 5.61069 10.0121 6.5 10.0121H7V9.51209C7 7.16515 8.05294 5.36638 9.12842 4.13958ZM8.45317 11.3496C7.86179 11.9734 7.25 12.6187 7.25 13.7812C7.25 15.2812 8.48276 16.5 10 16.5C11.5172 16.5 12.75 15.2812 12.75 13.7812C12.75 12.6562 12.0625 11.9687 12.0625 11.9687C12.0625 11.9687 11.8491 12.6484 11.375 12.6484C11.375 10.3984 9.54167 9.24996 9.54167 9.24996C9.54167 10.2015 9.00635 10.7661 8.45317 11.3496Z" fill="#7000FF" /> </svg>
                                            <p className='text-purple-700'>Осталось всего 2</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p>Цена:</p>
                                    <div className="">
                                        <span className="text-black text-lg font-semibold">{product.price}</span>
                                        <span className="text-gray-500 mr-2 line-through ml-3">{product.originalPrice}</span>
                                        <button className={`ml-2 bottom-0  bg-pink-500 text-white rounded-md px-3`}>Распродажа</button>
                                    </div>
                                </div>

                                <div className="bg-slate-100 p-3 flex rounded-xl">
                                    <p className='bg-yellow-300 px-1 rounded-md'>от 47 880 сум / мес </p>
                                    <p> в рассрочку</p>
                                </div>

                                <div className=" grid grid-cols-2 items-center">
                                    <button className="text-white border-purple-600 bg-purple-600 hover:bg-purple-700 border-2 focus:ring-4 focus:ring-purple-300 font-medium rounded-xl text-sm px-4 py-5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-900">
                                        Добавить в корзину
                                    </button>
                                    <button className="text-purple-700 border-purple-700 border-2  focus:ring-4 focus:ring-green-300 font-medium rounded-xl text-sm px-4 py-5 mr-2 mb-2 ">
                                        Купить в 1 клик
                                    </button>
                                </div>

                                <div className='flex items-center bg-orange-100 py-3 rounded-lg px-5 '>
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.5C12.2402 4.5 11 5.88779 11 7.5H17C17 5.88779 15.7598 4.5 14 4.5ZM9.5 11.5V9H7.5V14.25C7.5 14.6642 7.16421 15 6.75 15C6.33578 15 6 14.6642 6 14.25V8.25V7.5H6.75H9.5C9.5 5.11221 11.3598 3 14 3C16.6402 3 18.5 5.11221 18.5 7.5H21.25H22V8.25V21.75C22 22.9926 20.9926 24 19.75 24H15.25C14.8358 24 14.5 23.6642 14.5 23.25C14.5 22.8358 14.8358 22.5 15.25 22.5H19.75C20.1642 22.5 20.5 22.1642 20.5 21.75V9H18.5V11.5H17V9H11V11.5H9.5ZM14.2738 18.0323C14.5667 17.7395 14.5667 17.2646 14.2738 16.9717C13.9809 16.6788 13.506 16.6788 13.2131 16.9717L7.99548 22.1893L5.78034 19.9742C5.48744 19.6813 5.01257 19.6813 4.71967 19.9741C4.42678 20.267 4.42677 20.7419 4.71966 21.0348L7.46513 23.7803C7.60579 23.921 7.79655 24 7.99547 24C8.19438 24 8.38515 23.921 8.5258 23.7803L14.2738 18.0323Z" fill="#141415"></path></svg>
                                    <p className='ml-2'> 99 человек купили на этой неделе </p>
                                </div>

                                <div>
                                    <p>Кратко о товаре:</p>
                                    <div className='flex items-center ml-4'>
                                        <i class="ri-circle-fill dot mr-3"></i>
                                        <p>text</p>
                                    </div>
                                    <div className='flex items-center ml-4'>
                                        <i class="ri-circle-fill dot mr-3"></i>
                                        <p>text</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* product full description  */}
            <div className='w-full'>

            </div>
        </main>
    );
};

export default Product;
