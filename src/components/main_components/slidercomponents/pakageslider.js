import {EffectCoverflow,Navigation, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import packages from '../../../database/packages';
import Package from '../packages.js';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Packageslider() {
  return (
    <>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination,EffectCoverflow]}
      effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      // slidesPerView={3}
      spaceBetween={30}
      loop = {false}
      pagination={{ clickable: true ,dynamicBullets: true}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      
    >

    
      {
        packages.map((pack) => {
                return(
                <SwiperSlide>  
                  { 
                    <Package title={pack.title} price={pack.price} url={pack.url} />
                  }
                </SwiperSlide>
                )       
                
              }
            )
        }
    </Swiper>
    </>
  );
};