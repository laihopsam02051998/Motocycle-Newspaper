import { createUseStyles } from "react-jss";

const useHomeStyle = createUseStyles({
  // articleContainer: {
  //   display: "flex",
  //   justifyContent: "center",
  //   padding: "2rem 2.5rem",
  // },
  homeContainer: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    padding: "2rem 2.5rem",
  },
  calendar: {
    width: "19rem",
    overflow: "hidden",
    maxHeight: "35rem",
    "& table": {
      width: "100%",
    },
    "& tr": {
      height: "2rem",
      backgroundColor: "white",
      "&:first-child": {
        backgroundColor: "#389e59",
        color: "white",
        fontSize: "1.3rem",
      },
    },
    "& td, & table, & th": {
      border: "1px solid gray",
      borderCollapse: "collapse",
    },
  },
  rowTable: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    "& p": {
      fontSize: "0.9rem",
      color: "gray",
    },
  },
  ticket: {
    "& i": {
      color: "green",
      fontSize: "2rem",
    },
  },
});

export default useHomeStyle;
