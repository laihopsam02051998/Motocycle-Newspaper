import { createUseStyles } from "react-jss";

const useStyleBanner = createUseStyles({
  //START CONTAINER BANNER
  containerBanner: {
    position: "relative",
    height: "40rem",
    overflow: "hidden",
  },

  modelImage: {
    "& img": {
      width: "100%",
      height: "100%",
      display: "block",
      objectFit: "contain",
      objectPosition: "0px -100px",
    },
  },
  modelContent: {
    position: "absolute",
    padding: "2rem",
    top: "0px",
    left: "0px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.671)",
    clipPath: "polygon(0 0, 74% 0, 37% 100%, 0% 100%)",
  },
  modelContentTitle: {
    width: "50%",

    "& h1": {
      fontSize: "4rem",
      margin: "1rem 0rem",
    },
    "& p": {
      lineHeight: "2rem",
    },
  },

  //END CONTAINER BANNER

  //START CONTAINER BANNERL
  containerBannerL: {
    position: "relative",
    height: "20rem",
    overflow: "hidden",
  },

  BannerImage: {
    width: "100%",
    "& img": {
      width: "100%",
      height: "100%",
      display: "block",
      objectFit: "cover",
      // objectPosition: "0px -300px",
    },
  },
  //END CONTAINER BANNERL

  //START BANNER FULL
  modelContentFullTitle: {
    width: "100%",

    "& h4": { fontSize: "2rem", margin: "1rem 0rem" },
    "& h1": {
      fontSize: "4rem",
      margin: "1rem 0rem",
    },

    "& hr": {
      height: "0.3rem",
      width: "50rem",
      backgroundColor: "white",
      border: "none",
      borderRadius: "12px",
    },
  },
  Paragraph: {
    display: "flex",
    justifyContent: "space-around",
    padding: "0rem 10rem",
    "& p": {
      position: "relative",
      cursor: "pointer",
      "&:first-child": {
        "&:before": {
          content: '""',
          position: "absolute",
          top: "50px",
          left: "0px",
          backgroundColor: "red",
          height: "0.3rem",
          width: "100%",
          zIndex: "999",
          transition: "0.2s ease",
        },
        // "&:hover:before": {
        //   height: "0.3rem",
        //   transition: "0.2s ease",
        // },
      },
      "&:nth-child(2)": {
        "&:before": {
          content: '""',
          position: "absolute",
          top: "50px",
          left: "0px",
          backgroundColor: "red",
          height: "0rem",
          width: "100%",
          zIndex: "999",
          transition: "0.2s ease",
        },
        // "&:active:before": {
        //   height: "0.3rem",
        //   transition: "0.2s ease",
        // },
      },
    },
  },
  modelContentHeader: {
    // backgroundColor: "red",
  },
  modelContentFull: {
    position: "absolute",
    padding: "0rem 2rem",
    top: "0px",
    left: "0px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.671)",
    textAlign: "center",
    "& div": {
      margin: "1rem 0rem",
    },
  },
  modelContentButton: {
    "& h4": { fontSize: "2.5rem", margin: "1rem 0rem" },
  },
});
//END BANNER FULL

export default useStyleBanner;
