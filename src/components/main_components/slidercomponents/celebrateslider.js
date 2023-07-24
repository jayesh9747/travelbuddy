import {Navigation, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Package from '../packages.js';
import celebratewithus from '../../../database/celebratewithus';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Celebrateslider() {
  return (
    <>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      slidesPerView={3}
      spaceBetween={20}
      loop = {false}
      pagination={{ clickable: true ,dynamicBullets: true}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      
    >

    
      {
        celebratewithus.map((pack) => {
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