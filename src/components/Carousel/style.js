import { createUseStyles } from "react-jss";

const useStyleCarousel = createUseStyles({
  // carouselThree: {
  //   textAlign: "left",
  //   padding: "2rem 0rem",
  //   width: "100%",
  //   overflow: "hidden",
  //   "& li": {
  //     listStyle: "none",
  //   },
  // },
  containerCarousel: {
    overflow: "hidden",
    position: "relative",
  },
  navigationCustomize: {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
    position: "absolute",
    top: "40%",
    left: "0px",
    zIndex: "1",
    // width: "100%",
    alignItems: "center",
    // padding: "0px 0rem",
  },
  navigationNextCustomize: {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
    position: "absolute",
    top: "40%",
    right: "0px",
    zIndex: "1",
  },
  swiperSlide: {
    backgroundColor: "red",
  },
});
export default useStyleCarousel;
