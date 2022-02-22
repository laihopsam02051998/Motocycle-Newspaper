import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import useStyleCarousel from "./style.js";
import VideoCard from "../Card/VideoCard/index.jsx";
import {
  HexagonButtonNext,
  HexagonButtonPrev,
} from "../Button/HexagonButtonNext.jsx";

SwiperCore.use([Navigation, Pagination]);

function CarouselItem({ itemList, type }) {
  const classes = useStyleCarousel();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Swiper
      tag="section"
      wrapperTag="div"
      // speed={500} tốc độ slide di chuyển
      slidesPerView={4}
      spaceBetween={230}
      disabledClass
      id="main"
      pagination
      navigation={{
        prevEl: prevRef.current ? prevRef.current : null,
        nextEl: nextRef.current ? nextRef.current : null,
      }}
      onInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.update();
        // swiper.navigation.navigationHide();
      }}
    >
      {itemList.map((item) => {
        if (item.type === type) {
          return (
            <SwiperSlide key={item.id} tag="div">
              <VideoCard
                image={item.image}
                title={item.title}
                intro={item.description}
                date={item.date}
                link={item.youtube}
                key={item.id}
              />
            </SwiperSlide>
          );
        }
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

    // <h1>sam</h1>
  );
}
export default CarouselItem;
