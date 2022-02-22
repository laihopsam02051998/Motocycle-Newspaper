import { createUseStyles } from "react-jss";

export const BikerCardStyle = createUseStyles({
  container: {
    position: "relative",
    background:
      "linear-gradient(270deg, rgb(23, 28, 33) 0%, rgb(255, 153, 18) 100%)",
    width: "12rem",
    height: "18rem",
    overflow: "hidden",
    margin: "0.5rem 0rem",
    cursor: "pointer",

    "&:hover $nameLayout": {
      width: "97.5%",
      transition: "0.5s ease ",
    },
    "&:hover img": {
      left: "10px",
      transition: "0.5s ease ",
    },
  },
  content: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    zIndex: "2",
    justifyContent: "flex-start",
    padding: "2rem 0.5rem 0.5rem 0.5rem",
    color: "white",
    bottom: "0px",
    left: "0px",
    width: "100%",
    height: "50%",
    background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 7%, black 50%)",
    "& h5": {
      fontSize: "1.2rem",
      margin: "0rem",
      letterSpacing: "0.1px",
    },
    "& p": {
      fontSize: "0.8rem",
      margin: "0.2rem 0rem",
      letterSpacing: "0.1px",
    },
  },
  firstName: {
    fontWeight: "normal",
  },
  nameLayout: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    textAlign: "right",
    zIndex: "0",
    color: "white",
    bottom: "0px",
    right: "0px",
    width: "0%",
    height: "100%",
    backgroundColor: "rgba(20, 22, 24, 0.300)",
    "& h5": {
      position: "absolute",
      top: "65px",
      left: "-29px",
      fontSize: "2.8rem",
      margin: "0rem",
      opacity: "0.3",
      transform: "rotate(-90deg)",
      width: "6rem",
      height: "2.5rem",
      textTransform: "uppercase",
      // backgroundColor: "black",
    },
  },
});
