import {Navigation, Pagination,Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ExploreCard from '../explore';
import beforeyouvisit from '../../../database/beforeyouvisit';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Beforeyouvisitslider() {
  return (
    <>
    <Swiper
      // install Swiper modules
      modules={[Autoplay,Navigation, Pagination]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      centeredSlides={true}
      slidesPerView={5}
      loop={true}
      spaceBetween={10}
      pagination={{ clickable: true}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      
    >

    
      {
        beforeyouvisit.map((pack) => {
                return(
                <SwiperSlide>  
                  { 
                    <ExploreCard title={pack.title}  url={pack.url} />
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