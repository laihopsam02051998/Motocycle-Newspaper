import { createUseStyles } from "react-jss";

const useStyleFooter = createUseStyles({
  footerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "1rem 4rem",
    width: " 100%",
    height: "25rem",
    color: "white",
    backgroundColor: " #000000",
    overflow: "hidden",
    boxSizing: "border-box",
    "& img": {
      width: "4rem",
      height: " 1.5rem",
      margin: "1rem 1.5rem",
    },
  },
  donors: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    "& img:first-child": {
      width: "8rem",
      height: "3rem",
    },
  },
  footerContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0rem 4rem",
    "& p": {
      fontSize: "0.9rem",
    },
  },
  socialContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    justifyContent: "space-between",
    textAlign: "center",
    height: "5rem",
    fontSize: "1.3rem",
  },
  // "@media screen and (max-width: 1200px)":({});
});
export default useStyleFooter;
