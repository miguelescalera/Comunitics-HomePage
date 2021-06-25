import React from 'react'
import SwiperCore, { EffectCoverflow, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import Img1 from '../assets/P1-analisis-y-consultoria-480x1000.jpg'
import Img2 from '../assets/P2-marketing-online-480x1000.jpg'
import Img3 from '../assets/P3-soluciones-de-software-480x1000.jpg'
import Img4 from '../assets/P4-ecommerce-2-480x1000.jpg'
import Img5 from '../assets/P5-desarrollo-web-480x1000.jpg'
import Img6 from '../assets/P6-disenyo-grafico-480x1000.jpg'
import Img7 from '../assets/P7-formacion-480x1000.jpg'

SwiperCore.use([ EffectCoverflow, Autoplay ]);

export default function Carousel() {

    return (
        <div class="h-full w-screen overflow-hidden sm:pt-16">
        <Swiper 
            slidesPerView= {1}
            grabCursor= {true}
            centeredSlides= {true}
            breakpoints= {{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 2,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 3,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 4,
                }
            }}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false
            }}
            coverflowEffect={{
                slideShadows: false,
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 1
            }}
            loop={true}
        >
            <SwiperSlide><img src={Img1} alt="Análisis y consultoria"/><span class="w-full flex absolute text-white mt-14 font-bold text-3xl md:text-2xl lg:text-3xl top-0 p-10 text-left justify-center">Analisis y consultoria</span></SwiperSlide>
            <SwiperSlide><img src={Img2} alt="Marketing Online"/><span class="w-full flex absolute text-white mt-14 font-bold text-3xl md:text-2xl lg:text-3xl top-0 p-10 text-left justify-center">Marketing Online</span></SwiperSlide>
            <SwiperSlide><img src={Img3} alt="Soluciones de software"/><span class="w-full flex absolute text-white mt-14 font-bold text-3xl md:text-2xl lg:text-3xl top-0 p-10 text-left justify-center">Soluciones de software</span></SwiperSlide>
            <SwiperSlide><img src={Img4} alt="Ecommerce"/><span class="w-full flex absolute text-white mt-14 font-bold text-3xl md:text-2xl lg:text-3xl top-0 p-10 text-left justify-center">Ecommerce</span></SwiperSlide>
            <SwiperSlide><img src={Img5} alt="Desarrollo web"/><span class="w-full flex absolute text-white mt-14 font-bold text-3xl md:text-2xl lg:text-3xl top-0 p-10 text-left justify-center">Desarrollo web</span></SwiperSlide>
            <SwiperSlide><img src={Img6} alt="Diseño grafico"/><span class="w-full flex absolute text-white mt-14 font-bold text-3xl md:text-2xl lg:text-3xl top-0 p-10 text-left justify-center">Comunicación gráfica</span></SwiperSlide>
            <SwiperSlide><img src={Img7} alt="Formacion"/><span class="w-full flex absolute text-white mt-14 font-bold text-3xl md:text-2xl lg:text-3xl top-0 p-10 text-left justify-center">Formacion</span></SwiperSlide>
        </Swiper>
        </div>
    )
}