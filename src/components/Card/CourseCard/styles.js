import { createUseStyles } from "react-jss";

export const CourseStyle = createUseStyles({
  container: {
    position: "relative",
    width: "24rem",
    height: "20rem",
    backgroundColor: "red",
    marginBottom: "1rem",
    cursor: "pointer",
    borderRadius: "10px 10px 10px 10px",
    overflow: "hidden",
    "&:hover img": {
      width: "120%",
      height: "105%",
    },
  },
  image: {
    "& img": {
      position: "absolute",
      top: "0px",
      left: "0px",
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "absolute",
    top: "0px",
    left: "0px",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.281)",
    color: "white",
    textAlign: "left",
    padding: "0rem 1rem",
  },
  video: {
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: "0px",
    left: "0px",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.281)",
    color: "white",
    textAlign: "left",
    padding: "0rem 1rem",
    zIndex: "999",
  },
});
