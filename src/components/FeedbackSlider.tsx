import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper";
import FeedbackCard from "./FeedbackCard";

SwiperCore.use([Autoplay]);

const feedbacks = [
  {
    text: `This product is worth every penny!! I was using only LH strips to track my ovulation and 
we would “baby make” on each peak day and did not get pregnant. After receiving this device and 
trying it since it says it tests for estrogen and progesterone to CONFIRM ovulation - we got pregnant 
the first month trying! Apparently I was peaking a day before what the LH strips did not pick up and 
this device did because it saw my estrogen rise and my LH START to rise and said that was my peak.`,
    name: "Brooke",
  },
  {
    text: `
            I wish I had used this sooner. Don’t waste your money on other OPK tests. 
            This system is more accurate and monitors 4 key hormones that effect ovulation. 
            The other cheaper brands can not do this. It gives you a better insight on your 
            body’s hormone fluctuations during a cycle and where any possible problems with 
            conception could be coming from. It is worth the investment and can save you time 
            on identifying fertility issues and help you get pregnant faster.`
    ,
    name: "Sunny",
  },
  {
    text: `This product is worth every penny!! I was using only LH strips to track my ovulation and 
we would “baby make” on each peak day and did not get pregnant. After receiving this device and 
trying it since it says it tests for estrogen and progesterone to CONFIRM ovulation - we got pregnant 
the first month trying! Apparently I was peaking a day before what the LH strips did not pick up and 
this device did because it saw my estrogen rise and my LH START to rise and said that was my peak.`,
    name: "Brooke",
  },
  {
    text: `
            I wish I had used this sooner. Don’t waste your money on other OPK tests. 
            This system is more accurate and monitors 4 key hormones that effect ovulation. 
            The other cheaper brands can not do this. It gives you a better insight on your 
            body’s hormone fluctuations during a cycle and where any possible problems with 
            conception could be coming from. It is worth the investment and can save you time 
            on identifying fertility issues and help you get pregnant faster.`
    ,
    name: "Sunny",
  },
  
]

export default function FeedbackSlider() {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  return (
    <div className="lg:w-[1290px] m-auto mt-[10px] flex justify-center items-center">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        // spaceBetween={10}
        centeredSlides={screenSize.dynamicWidth < 768 ? true : false}
        // autoplay={{
        //   delay: 3500,
        //   disableOnInteraction: true,
        // }}
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Autoplay, Keyboard]}
      >
        {feedbacks.map((item: any, index: any) => {
          return (
            <SwiperSlide key={"slider" + index}>
              <FeedbackCard item={item}/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
