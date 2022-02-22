import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  HexagonButtonNext,
  HexagonButtonPrev,
} from "./../Button/HexagonButtonNext";
// import SwiperCore, { Navigation } from "swiper";
import { NomalImage } from "../Card/styled";
import useStyleCarousel from "../Carousel/style.js";
import VideoBanner from "../Banner/VideoBanner";
// SwiperCore.use([Navigation]);

function CarouselBanner({ imageList, objectVideoList }) {
  // input : image Array (props.imageArr)
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = React.useRef(null);
  const classes = useStyleCarousel();

  return (
    <Swiper
      ref={swiperRef}
      tag="section"
      wrapperTag="div"
      slidesPerView={1}
      spaceBetween={0}
      // freeMode={true}
      pagination
      navigation={{
        prevEl: prevRef.current ? prevRef.current : null,
        nextEl: nextRef.current ? nextRef.current : null,
      }}
      onInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.update();
      }}
      loop
      // pagination
      id="main"
    >
      {objectVideoList.map((video, index) => {
        return (
          <SwiperSlide tag="div" key={index}>
            {/* <NomalImage src={sp} height="35rem" />   */}
            <VideoBanner
              image={video.image}
              title={video.title}
              intro={video.description}
              key={index}
            />
          </SwiperSlide>
        );
      })}
      <div className={classes.navigationCustomize}>
        <div ref={prevRef} className="cursor-pointer">
          <HexagonButtonPrev />
        </div>
      </div>
      <div className={classes.navigationNextCustomize}>
        <div ref={nextRef} className="cursor-pointer">
          <HexagonButtonNext />
        </div>
      </div>
    </Swiper>
  );
}
export default CarouselBanner;
