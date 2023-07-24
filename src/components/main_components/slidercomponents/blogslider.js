import {EffectCards,Navigation, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ExploreCard from '../explore';
import blogs from '../../../database/blogs';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Blogslider() {
  return (
    <>
    <Swiper
      // install Swiper modules
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper" 
    >
      {
         blogs.map((pack) => {
                return(
                <SwiperSlide>  
                  { 
                    <ExploreCard title={pack.title} date={pack.date}  url={pack.url} />
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