
import { useState } from "react";

import './main.css'
import ExploreCard from './main_components/explore';
import Intro from './main_components/intro';
import Package from './main_components/packages';
import Testm from './main_components/testimonials';
// import swiper from "./sliding_script/swiper";
import blogs from "../database/blogs";
import celebratewithus from "../database/celebratewithus";
// import packages from "../database/packages";
import beforeyouvisit from "../database/beforeyouvisit";
// import Packageslider from "./main_components/slidercomponents/packageslider";
// import Slider from "./main_components/slidercomponents/pakageslider";
import Packageslider from "./main_components/slidercomponents/pakageslider";
import Beforeyouvisitslider from "./main_components/slidercomponents/beforeyouvisit";
import Blogslider from "./main_components/slidercomponents/blogslider";
import Celebrateslider from "./main_components/slidercomponents/celebrateslider";

function Main() {
  const [i, seti] = useState(1);
  return ( 
  <>
    <main>
      <Intro />
      
      <div className='info wrap-c' style={{"padding":"1rem"}}>
        <div className='about-india'>
          <h2><span className='heading'>About India</span></h2>
          <p>India is a very diversified country which makes it the best spot to travel and exploer it vast diversity and culture.</p>
          <p>Come and have a tour of different tourist sites of India and Enjoy its beauty.</p>
        </div>
      </div>

      <h2><span className='heading'>PACKAGES</span></h2>
      <div className='packages'>

      <Packageslider/>

      </div>

      <h2><span className='heading'> Explore before you Visit </span></h2>
      <div className='explore slide-container'>

        <Beforeyouvisitslider/>

      </div>


      <h2><span className='heading'> Celebrate with us </span></h2>
      <div className='festivals packages'>

        <Celebrateslider/>
      {/* {
          celebratewithus.map((pack) => {
            return(
           <Package title={pack.title} price={pack.price} url={pack.url} />
            )
          })
        } */}
      </div>


      <h2><span className='heading'> Why Travel Buddy </span></h2>
      <div style={{"padding":"1rem","textAlign":"center"}}>
        <p>Travel Buddy offers a Lot of great benifits to its customers at the best prices possible.</p>
        <p>It Gaurantees the best comfort to the tourists.</p>
        <p>Easy and convinient Bookings.</p>
        <p>24 hours Customer Supports.</p>
      </div>

      <h2><span className='heading'> User's Testimonials </span></h2>
      <div className='testimonials flex'>
        <button onClick={()=>{(i>0)?seti(i-1):seti(2)}}><i class="fa-solid fa-arrow-left fa-xl"></i></button>
        <div className='flex-c' >
          <div style={Testm[i].profile}></div>
          <h2>{Testm[i].name}</h2>
          <p style={{"textAlign":"center"}}>" {Testm[i].description} "</p>
        </div>
        <button onClick={()=>{i<2?seti(i+1):seti(0)}}><i class="fa-solid fa-arrow-right fa-xl"></i></button>
      </div>
      {/* <div style={{"borderBottom":"2px solid black","width":"80%"}}></div> */}
      <br></br>


      <h2><span className='heading'> BLOGS </span></h2>
      <div className="blogs packages">

        <Blogslider/>

      </div>
    </main>
  </> 
  );
}

export default Main;