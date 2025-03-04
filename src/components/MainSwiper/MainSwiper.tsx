import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const MainSwiper = ()=>{
    
    return(
        <>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        >
            <SwiperSlide>
                <div className="swiper_main">
                    <span className="span_main"><h1>Открой новые грани<br className='adaptive'/> своего стиля</h1></span>
                    <img src="./src/assets/imgs/main.webp" alt="" />
                    <img className='adaptive' src="./src/assets/imgs/main_adaptive.webp" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper_main">
                    <span className="span_main"><h2>Открой новые грани <br className='adaptive'/> своего стиля</h2></span>
                    <img src="./src/assets/imgs/main.webp" alt="" />
                    <img className='adaptive' src="./src/assets/imgs/main_adaptive.webp" alt="" />
                </div>
            </SwiperSlide>
        </Swiper>
        </>
    )
}