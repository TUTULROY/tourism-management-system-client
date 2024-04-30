import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import slide4 from '../../assets/slide4.jpg'
import slide2 from '../../assets/slide2.jpg'
import slide3 from '../../assets/slide3.jpg'
import slide5 from '../../assets/slide5.jpg'






// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
    return (
            // <div className='max-w-6xl'>
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
            <img  src={slide4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img  src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img  src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img  src={slide5} alt="" />
        </SwiperSlide>
       
      </Swiper>
    //   </div>
    );
};

export default Banner;