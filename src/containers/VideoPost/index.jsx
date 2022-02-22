import React from "react";
import VideoCard from "../../components/Card/VideoCard";
import CarouselItem from "../../components/Carousel";
import CarouselBanner from "../../components/Carousel/CarouselBanner";
import bannerVideo from "../../data/bannerVideo.json";
import videoFetch from "../../data/video.json";
import useVideoStyle from "./style";
function VideoPost() {
  const sliders = [
    "https://storage.oxii.vn/Cache/Sites/OXII/Storage/Images/2021/1/15/1920/9-cap-anh-em-ruot-cung-thi-dau-motogp-5.jpg",
    "https://thethaotocdo.vn/wp-content/uploads/2020/04/motogp-2020-luat-ky-thuat-moi.jpg.webp",
    "https://storage.oxii.vn/Cache/Sites/OXII/Storage/Images/2021/6/7/1920/chang-7-motogp-2021-red-bull-ktm-thong-tri-trong-khi-rat-nhieu-tay-dua-da-rot-nai-1.jpg",
  ];

  const videoBannerList = bannerVideo.videoPost.videoPostArr;
  const videoList = videoFetch.videoPost.videoPostArr;
  const classes = useVideoStyle();
  return (
    <div className={classes.container}>
      <CarouselBanner objectVideoList={videoBannerList} />
      <div className={classes.highLight}>
        <h2>HIGHLIGHT</h2>
        <CarouselItem itemList={videoList} type="highlight" />
      </div>

      <div className={classes.highLight}>
        <h2>VRRC</h2>
        <CarouselItem itemList={videoList} type="vmmc" />
      </div>

      <div className={classes.highLight}>
        <h2>VIETNAM HONDA RACING</h2>
        <CarouselItem itemList={videoList} type="honda" />
      </div>
    </div>
  );
}

export default VideoPost;
