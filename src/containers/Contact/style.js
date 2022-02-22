import { createUseStyles } from "react-jss";

export const styleHiring = createUseStyles({
  raceEngineeringContainer: {
    "& h1": {
      margin: "2rem 4rem",
      fontSize: "2.5rem",
      textTransform: "uppercase",
    },
  },
  courseContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    padding: "0rem 4rem ",
  },
});
