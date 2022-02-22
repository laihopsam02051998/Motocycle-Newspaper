import { createUseStyles } from "react-jss";

const useVideoStyle = createUseStyles({
  container: {
    "& h2": {
      fontSize: "3rem",
      margin: "1rem 1rem",
    },
  },
  highLight: {
    display: "flex",
    flexWrap: "wrap",
    padding: "0rem 2rem",
  },
});

export default useVideoStyle;
