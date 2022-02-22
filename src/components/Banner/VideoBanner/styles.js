import { createUseStyles } from "react-jss";
import { BlackButton } from "../../Button/Button";

export const useStyleVideoBanner = createUseStyles({
  container: {
    position: "relative",
    height: "40rem",
    overflow: "hidden",
  },
  content: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.400)",
    padding: "1rem 4rem",
    width: "100%",
    height: "100%",
    top: "0px",
    left: "0px",
    color: "white",

    cursor: "pointer",
    "& h3": {
      fontSize: "3rem",
      margin: "0rem",
    },
    "& p": {
      lineHeight: "1.5rem",
    },
  },
});
